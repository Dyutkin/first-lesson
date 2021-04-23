import React, { FC, useState, useEffect } from "react";
import style from "./TextInput.module.scss";
import {
  validateEmail,
  validateLogin,
  getLoginValidationErrorMesage,
  getEmailValidationErrorMesage,
} from "../../../../helpers";

interface IAuthFormState {
  login: string;
  email: string;
  password: string;
  repeatPassword?: string;
}

interface IProps {
  title: string;
  formValue: any;
  setFormValue(arg: IAuthFormState): void;
  onClick?: () => void;
  formKey: string;
  isNeedValidation?: boolean;
}

const data: any = {
  email: [validateEmail, getEmailValidationErrorMesage],
  login: [validateLogin, getLoginValidationErrorMesage],
};

const TextInput: FC<IProps> = (props: IProps) => {
  const {
    title,
    formValue,
    setFormValue,
    formKey,
    isNeedValidation,
    onClick,
  } = props;

  const [isValide, changeIsValide] = useState(true);
  const [messageError, setMessageError] = useState("");

  useEffect(() => {
    if (!isNeedValidation) {
      return;
    }
    if (!formValue[formKey]) {
      changeIsValide(true);
      return;
    }
    changeIsValide(data[formKey][0](formValue[formKey]));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formValue[formKey]]);

  useEffect(() => {
    if (!isNeedValidation) {
      return;
    }
    if (isValide) {
      setMessageError("");
      return;
    }
    setMessageError(data[formKey][1](formValue[formKey]));
  }, [formKey, formValue, isNeedValidation, isValide]);

  return (
    <>
      <div className={style.input_wrapper}>
        <span>{title}</span>
        <input
          className={style.input}
          type="text"
          onClick={onClick}
          onChange={(e) =>
            setFormValue({ ...formValue, [formKey]: e.currentTarget.value })
          }
          value={formValue[formKey]}
        />
        <span>{isValide ? "" : messageError}</span>
      </div>
    </>
  );
};

TextInput.defaultProps = {
  isNeedValidation: false,
  onClick: () => {},
};

export default TextInput;
