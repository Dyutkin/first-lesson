import React, { FC, useEffect, useState } from "react";
import style from "./PasswordInput.module.scss";
import firstEye from "../../../../assets/image/passeye/visible_1.png";
import secondEye from "../../../../assets/image/passeye/visible_2.png";
import {
  validatePassword,
  getPasswordValidationErrorMesage,
} from "../../../../helpers";

interface IProps {
  title: string;
  formValue: any;
  setFormValue: any;
  onClick?: () => void;
  formKey: string;
  isNeedValidation?: boolean;
}
const data: any = {
  password: [validatePassword, getPasswordValidationErrorMesage],
  repeatPassword: [validatePassword, getPasswordValidationErrorMesage],
};

const PasswordInput: FC<IProps> = ({
  title,
  formValue,
  setFormValue,
  formKey,
  isNeedValidation,
  onClick
}: IProps) => {
  const [isPasswordHidden, setPasswordHidden] = useState<boolean>(true);
  const [imgSrc, setImgSrc] = useState<string>(secondEye);
  useEffect(() => {
    if (!!isPasswordHidden && imgSrc === firstEye) {
      setImgSrc(secondEye);
    }
    if (!isPasswordHidden && imgSrc === secondEye) {
      setImgSrc(firstEye);
    }
  }, [imgSrc, isPasswordHidden]);

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
          type={isPasswordHidden ? "password" : "text"}
          onChange={(e) =>
            setFormValue({ ...formValue, [formKey]: e.currentTarget.value })
          }
          onClick={onClick}
          value={formValue[formKey]}
        />
        <div
          role="button"
          className={style.eye}
          onClick={() => {
            setPasswordHidden(!isPasswordHidden);
          }}
          onKeyDown={() => {}}
          tabIndex={0}>
          <img src={imgSrc} alt="" />
        </div>
      </div>
      <span>{isValide ? "" : messageError}</span>
    </>
  );
};

PasswordInput.defaultProps = {
  isNeedValidation: false,
  onClick: () => {},
};

export default PasswordInput;
