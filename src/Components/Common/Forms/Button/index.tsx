import React, { FC } from "react";
import style from "./Button.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  type: "submit" | "reset" | "button";
  disabled?: boolean;
  onClick(): void;
}

const Button: FC<ButtonProps> = ({ children, type, ...rest }: ButtonProps) => {
  return (
    <>
      <button
        className={style.btn}
        type={type === "button" ? "button" : "submit"}
        {...rest}>
        {children}
      </button>
    </>
  );
};

Button.defaultProps = {
  disabled: false,
};

export default Button;
