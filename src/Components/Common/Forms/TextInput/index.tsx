import React, { FC, useEffect } from "react";
import style from "./TextInput.module.scss";

interface IAuthFormState {
  login: string;
  email?: string;
  password: string;
  repeatPassword?: string;
}

interface IProps {
  title: string;
  formValue: any;
  setFormValue(arg: IAuthFormState): void;
  formKey: string;
}

const TextInput: FC<IProps> = (props: IProps) => {
  const { title, formValue, setFormValue, formKey } = props;

  return (
    <>
      <div className={style.input_wrapper}>
        <span>{title}</span>
        <input
          className={style.input}
          type="text"
          onChange={(e) =>
            setFormValue({ ...formValue, [formKey]: e.currentTarget.value })
          }
          value={formValue[formKey]}
        />
      </div>
    </>
  );
};

export default TextInput;
