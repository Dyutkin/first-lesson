import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setUserLoginAction, userLogInAction } from "../../../store/actions";
import PasswordInput from "../../Common/Forms/PasswordInput";
import TextInput from "../../Common/Forms/TextInput";
import Button from "../../Common/Forms/Button";
import style from "./AuthForm.module.scss";

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

  const onSubmit = () => {
    dispatch(setUserLoginAction(true));
    dispatch(userLogInAction({ ...authFormValue }));
  };

  const handleRedirect = () => {
    history.push("/registration");
  };

  return (
    <>
      <div className={style["auth-form_wrapper"]}>
        <form className={style.form}>
          <h1>Авторизация</h1>

          <TextInput
            formValue={authFormValue}
            setFormValue={setAuthFormValue}
            formKey="login"
            title="Login"
          />
          <PasswordInput
            formValue={authFormValue}
            setFormValue={setAuthFormValue}
            formKey="password"
            title="Password"
          />
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
