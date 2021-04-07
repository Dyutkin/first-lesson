import React, { FC, useState } from "react";
import PasswordInput from "../../Common/Forms/PasswordInput";
import TextInput from "../../Common/Forms/TextInput";
import style from "./RegistrationForm.module.scss";

interface IAuthFormState {
  login: string;
  email?: string;
  password: string;
  repeatPassword?: string;
}

const RegistrationForm: FC = () => {
  const [formValue, setFormValue] = useState<IAuthFormState>({
    login: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  return (
    <>
      <div className={style["registration-form_wrapper"]}>
        <form className={style.form}>
          <h1>Регистрация</h1>
          <TextInput
            formKey="login"
            title="Login"
            formValue={formValue}
            setFormValue={setFormValue}
          />
          <TextInput
            formKey="email"
            title="Email"
            formValue={formValue}
            setFormValue={setFormValue}
          />
          <PasswordInput
            formKey="password"
            title="Password"
            formValue={formValue}
            setFormValue={setFormValue}
          />
          <PasswordInput
            formKey="repeatPassword"
            title="Repeat password"
            formValue={formValue}
            setFormValue={setFormValue}
          />

          <button
            type="button"
            className={style.btn}
            onClick={() => {
              setFormValue({
                login: "",
                email: "",
                password: "",
                repeatPassword: "",
              });
            }}>
            SIGN UP
          </button>
        </form>
      </div>
    </>
  );
};

export default RegistrationForm;
