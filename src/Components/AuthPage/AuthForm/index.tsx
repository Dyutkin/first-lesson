import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { userLoginAction } from "../../../store/actions";
import PasswordInput from "../../Common/Forms/PasswordInput";
import TextInput from "../../Common/Forms/TextInput";
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

  const onSubmit = () => {
    dispatch(userLoginAction(authFormValue.login));
    setAuthFormValue({ login: "", password: "" });
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

          <button type="button" className={style.btn} onClick={onSubmit}>
            LOGIN
          </button>
        </form>
      </div>
    </>
  );
};

export default AuthForm;
