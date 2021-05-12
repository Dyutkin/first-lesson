import React, { FC, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import PasswordInput from "../../Common/Forms/PasswordInput";
import TextInput from "../../Common/Forms/TextInput";
import Button from "../../Common/Forms/Button";
import {
  userRegistrationAction,
  userLogInAction,
  setUserLoginAction,
} from "../../../store/AuthPage/actions";
import {
  validateEmail,
  validateLogin,
  validatePassword,
} from "../../../helpers";
import { getRegisterUserLogin } from "../../../store/AuthPage/selectors";
import style from "./RegistrationForm.module.scss";

interface IAuthFormState {
  login: string;
  email: string;
  password: string;
  repeatPassword?: string;
}

const RegistrationForm: FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [formValue, setFormValue] = useState<IAuthFormState>({
    login: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const isFormFull: boolean =
    !!formValue.login &&
    !!formValue.email &&
    !!formValue.password &&
    !!formValue.repeatPassword;

  const isFormValidate: boolean =
    validateLogin(formValue.login) &&
    validateEmail(formValue.email) &&
    validatePassword(formValue.password) &&
    validatePassword(formValue.repeatPassword);

  const registeredUserLogin = useSelector(getRegisterUserLogin);
  const [isLoginFree, changeisLoginFree] = useState<boolean>(true);
  useEffect(() => {
    dispatch(userLogInAction(formValue));
    if (registeredUserLogin) {
      changeisLoginFree(false);
      return;
    }
    changeisLoginFree(true);
  }, [dispatch, formValue, registeredUserLogin]);

  const [isWrongPass, setIsWrongPass] = useState<boolean>(true);
  useEffect(() => {
    const { password, repeatPassword } = formValue;
    if (!!password && !!repeatPassword && password === repeatPassword) {
      setIsWrongPass(false);
      return;
    }
    if (!isWrongPass) {
      setIsWrongPass(true);
    }
  }, [isWrongPass, formValue]);

  const [page, setPage] = useState(1);

  const handleClick = () => {
    if (page === 1) {
      return () => {
        setPage(2);
      };
    }
    return () => {
      dispatch(
        userRegistrationAction({
          login: formValue.login,
          email: formValue.email,
          password: formValue.password,
        })
      );
      dispatch(setUserLoginAction(true));
      history.push("/");
    };
  };
  const getButtonText = () => {
    if (page === 1) {
      return "NEXT PAGE";
    }
    if (page === 2) {
      return isFormFull ? "SIGN UP" : "SHOULD FILL FORM";
    }
    return "ERROR";
  };

  return (
    <>
      <div className={style["registration-form_wrapper"]}>
        <form className={style.form}>
          <h1>Регистрация</h1>
          {(page === 1 && (
            <>
              <TextInput
                formKey="login"
                title="Login"
                formValue={formValue}
                setFormValue={setFormValue}
                isNeedValidation={!!true}
              />
              <TextInput
                formKey="email"
                title="Email"
                formValue={formValue}
                setFormValue={setFormValue}
                isNeedValidation={!!true}
              />
            </>
          )) ||
            (page === 2 && (
              <>
                <PasswordInput
                  formKey="password"
                  title="Password"
                  formValue={formValue}
                  setFormValue={setFormValue}
                  isNeedValidation={!!true}
                />
                <PasswordInput
                  formKey="repeatPassword"
                  title="Repeat password"
                  formValue={formValue}
                  setFormValue={setFormValue}
                  isNeedValidation={!!true}
                />
              </>
            ))}
          <div className={style.error_area}>
            {!isFormValidate && isFormFull && <p>Not all data is valid</p>}
            {(isWrongPass &&
              !!formValue.password &&
              !!formValue.repeatPassword && <p>Password mismatch</p>) ||
              (!isLoginFree && <p>Login already in use</p>)}
          </div>
          <div className={style["btn-group"]}>
            {page === 2 && (
              <Button
                type="button"
                onClick={() => {
                  setPage(1);
                }}>
                BACK
              </Button>
            )}
            <Button
              type="button"
              disabled={
                page === 2 &&
                (!isFormFull || isWrongPass || !isFormValidate || !isLoginFree)
              }
              onClick={handleClick()}>
              {getButtonText()}
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default RegistrationForm;
