import React, { FC, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import style from "./UserInformationPasswordInput.module.scss";
import {
  validatePassword,
  getPasswordValidationErrorMesage,
} from "../../../../../helpers";
import { getIsPasswordCorrect } from "../../../../../store/AuthPage/selectors";

interface IStatusState {
  current: boolean;
  new: boolean;
  confirm: boolean;
}

interface IProps {
  info: string;
  id: string;
  onChange(event: any): void;
  changeValidationStatus(validationStatus: IStatusState): void;
  validationStatus: any;
  passwordData: any;
}

const UserInformationPasswordInput: FC<IProps> = ({
  info,
  id,
  onChange,
  changeValidationStatus,
  validationStatus,
  passwordData,
}: IProps) => {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const value = passwordData[id];
  const isPasswordCorrect = useSelector(getIsPasswordCorrect);

  useEffect(() => {
    if (value && !validationStatus[id]) {
      if (id === "current") {
        setErrorMessage("Password mismatch");
        return;
      }

      setErrorMessage(getPasswordValidationErrorMesage(value));
    }
    if (
      passwordData.new &&
      passwordData.confirm &&
      passwordData.new !== passwordData.confirm &&
      id !== "current"
    ) {
      setErrorMessage("Passwords must match");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, passwordData.confirm, passwordData.new, validationStatus]);

  const handleBlur = () => {
    if (id === "current") {
      changeValidationStatus({ ...validationStatus, [id]: isPasswordCorrect });
    }
    changeValidationStatus({
      ...validationStatus,
      [id]: validatePassword(value),
    });
  };

  const handleClick = () => {
    setErrorMessage("");
  };

  return (
    <>
      <div className={style.input}>
        {(!!errorMessage && <p>{errorMessage}</p>) || <p>{info}</p>}
        <input
          type={id === "current" ? "password" : "text"}
          name=""
          id={id}
          onChange={onChange}
          onClick={handleClick}
          onBlur={handleBlur}
        />
      </div>
    </>
  );
};

export default UserInformationPasswordInput;
