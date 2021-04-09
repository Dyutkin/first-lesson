import React, { FC, useState, useEffect } from "react";
import PasswordInput from "../../Common/Forms/PasswordInput";
import TextInput from "../../Common/Forms/TextInput";
import Button from "../../Common/Forms/Button";
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
  const isFormFull =
    !!formValue.login &&
    !!formValue.email &&
    !!formValue.password &&
    !!formValue.repeatPassword;

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
      setFormValue({
        login: "",
        email: "",
        password: "",
        repeatPassword: "",
      });
      setPage(1);
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
              />
              <TextInput
                formKey="email"
                title="Email"
                formValue={formValue}
                setFormValue={setFormValue}
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
                />
                <PasswordInput
                  formKey="repeatPassword"
                  title="Repeat password"
                  formValue={formValue}
                  setFormValue={setFormValue}
                />
              </>
            ))}

          {isWrongPass && !!formValue.password && !!formValue.repeatPassword && (
            <div>
              <p>Not match Password and Repeat password </p>
            </div>
          )}
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
              disabled={page === 2 && (!isFormFull || isWrongPass)}
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
