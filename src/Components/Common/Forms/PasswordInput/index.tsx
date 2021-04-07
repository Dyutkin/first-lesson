import React, { FC } from "react";
import style from "./PasswordInput.module.scss";

interface IProps {
  title: string;
  formValue: any;
  setFormValue: any;
  formKey: string;
}

const PasswordInput: FC<IProps> = (props: IProps) => {
  const { title, formValue, setFormValue, formKey } = props;

  return (
    <>
      <div className={style.input_wrapper}>
        <span>{title}</span>
        <input
          className={style.input}
          type="password"
          onChange={(e) =>
            setFormValue({ ...formValue, [formKey]: e.currentTarget.value })
          }
          value={formValue[formKey]}
        />
      </div>
    </>
  );
};

export default PasswordInput;
