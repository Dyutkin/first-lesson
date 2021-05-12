import React, { FC, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import style from "./UserInformationEmailInput.module.scss";
import {
  validateEmail,
  getEmailValidationErrorMesage,
} from "../../../../../helpers";

interface IProps {
  value: string;
  mailValidationStatus: boolean;
  changeMailValidationStatus: any;
  changeNewMailValue: any;
}

const UserInformationEmailInput: FC<IProps> = ({
  changeNewMailValue,
  value,
  mailValidationStatus,
  changeMailValidationStatus,
}: IProps) => {
  const [errorMessaage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    if (mailValidationStatus || !value) {
      setErrorMessage("");
      return;
    }
    setErrorMessage(getEmailValidationErrorMesage(value));
  }, [mailValidationStatus, value]);

  useEffect(() => {
    changeMailValidationStatus(validateEmail(value));
  }, [changeMailValidationStatus, value]);

  const handleChange = (event: any) => {
    changeNewMailValue(event.target.value);
  };

  const handleClick = () => {
    setErrorMessage("");
  };
  return (
    <>
      <div className={style.input}>
        {errorMessaage ? <p>{errorMessaage}</p> : <p>insert mail</p>}
        <input name="" onChange={handleChange} onClick={handleClick} />
      </div>
    </>
  );
};

export default UserInformationEmailInput;
