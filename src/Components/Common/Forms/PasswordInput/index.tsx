import React, { FC, useEffect, useState } from "react";
import style from "./PasswordInput.module.scss";
import firstEye from "../../../../assets/image/passeye/visible_1.png";
import secondEye from "../../../../assets/image/passeye/visible_2.png";

interface IProps {
  title: string;
  formValue: any;
  setFormValue: any;
  formKey: string;
}

const PasswordInput: FC<IProps> = ({
  title,
  formValue,
  setFormValue,
  formKey,
}: IProps) => {
  const [isPasswordHidden, setPasswordHidden] = useState<boolean>(true);

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
          <img src={isPasswordHidden ? secondEye : firstEye} alt="" />
        </div>
      </div>
    </>
  );
};

export default PasswordInput;
