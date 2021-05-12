import React, { FC, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  setUserLoginAction,
  userLogInAction,
} from "../../../store/AuthPage/actions";
import PasswordInput from "../../Common/Forms/PasswordInput";
import TextInput from "../../Common/Forms/TextInput";
import Button from "../../Common/Forms/Button";
import style from "./AuthForm.module.scss";
import {
  getIsPasswordCorrect,
  getIsUserCorrect,
  getRegisterUserMail,
} from "../../../store/AuthPage/selectors";

interface IAuthFormState {
  login: string;
  password: string;
}

const AuthForm: FC = () => {
  const [authFormValue, setAuthFormValue] = useState<IAuthFormState>({
    login: "",
    password: "",
  });

  const dispatch = useDispatch();
  const history = useHistory();
  const isPasswordCorrect = useSelector(getIsPasswordCorrect);
  const isUserCorrect = useSelector(getIsUserCorrect);
  const userMail = useSelector(getRegisterUserMail);
  const [isShowWarning, setShowWarning] = useState<boolean>(false);

  useEffect(() => {
    if (isPasswordCorrect && isUserCorrect && isShowWarning) {
      setShowWarning(false);
    }
  }, [isPasswordCorrect, isShowWarning, isUserCorrect]);

  useEffect(() => {
    if (isPasswordCorrect && isUserCorrect) {
      dispatch(userLogInAction({ ...authFormValue, email: userMail }));
      dispatch(setUserLoginAction(true));
    }
  }, [authFormValue, dispatch, isPasswordCorrect, isUserCorrect, userMail]);

  const onSubmit = () => {
    if (!isPasswordCorrect && !isUserCorrect) {
      setShowWarning(true);
    }
    dispatch(userLogInAction({ ...authFormValue, email: userMail }));
  };

  const handleRedirect = () => {
    history.push("/registration");
  };
  const handleTextInputClick = () => {
    if (isShowWarning) {
      setShowWarning(false);
    }
  };
  return (
    <>
      <div className={style["auth-form_wrapper"]}>
        <form className={style.form}>
          <h1>Авторизация</h1>

          <TextInput
            formValue={authFormValue}
            setFormValue={setAuthFormValue}
            onClick={handleTextInputClick}
            formKey="login"
            title="Login"
          />
          <PasswordInput
            formValue={authFormValue}
            setFormValue={setAuthFormValue}
            onClick={handleTextInputClick}
            formKey="password"
            title="Password"
          />
          {isShowWarning && <p>Incorrect login or password</p>}
          <div className={style["btn-group"]}>
            <Button type="button" onClick={onSubmit}>
              LOGIN
            </Button>
            <Button type="button" onClick={handleRedirect}>
              REGISTRATION
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AuthForm;
