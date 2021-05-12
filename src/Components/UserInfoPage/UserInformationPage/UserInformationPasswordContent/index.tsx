import React, { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./UserInformationPasswordContent.module.scss";
import UserInformationPasswordInput from "./UserInformationPasswordInput";
import { getUserInfo } from "../../../../store/AuthPage/selectors";
import {
  userLogInAction,
  userSetNewPasswordAction,
} from "../../../../store/AuthPage/actions";

interface IState {
  current: string;
  new: string;
  confirm: string;
}
interface IStatusState {
  current: boolean;
  new: boolean;
  confirm: boolean;
}

const UserInformationPasswordContent: FC = () => {
  const dispatch = useDispatch();
  const [isEdit, changeEditStatus] = useState<boolean>(false);
  const userInfo = useSelector(getUserInfo);

  const [passwordData, changePasswordData] = useState<IState>({
    current: "",
    new: "",
    confirm: "",
  });
  const [validationStatus, changeValidationStatus] = useState<IStatusState>({
    current: false,
    new: false,
    confirm: false,
  });
  const [isDisabledButton, changeDisableButton] = useState<boolean>(false);

  const handleInputChange = (event: any) => {
    changeDisableButton(false);
    changePasswordData({
      ...passwordData,
      [event.target.id]: event.target.value,
    });
  };

  const handleConfirmChangePassword = () => {
    if (
      !!passwordData.current &&
      !!passwordData.new &&
      !!passwordData.confirm &&
      (!validationStatus.current ||
        !validationStatus.new ||
        !validationStatus.confirm ||
        passwordData.new !== passwordData.confirm)
    ) {
      changeDisableButton(true);
      return;
    }

    if (
      !!passwordData.current &&
      !!passwordData.new &&
      !!passwordData.confirm &&
      validationStatus.current &&
      validationStatus.new &&
      validationStatus.confirm &&
      passwordData.new === passwordData.confirm
    ) {
      dispatch(userLogInAction({ ...userInfo, password: passwordData.new }));
      dispatch(
        userSetNewPasswordAction({
          login: userInfo.login,
          password: passwordData.new,
        })
      );
    }

    changeEditStatus(false);
  };

  const handleClickOnChange = () => {
    changeEditStatus(true);
  };
  const handleClickOnBack = () => {
    changeEditStatus(false);
  };

  return (
    <>
      <div className={style.wrapper}>
        <div className={style.field_one}>
          <b>Password</b>
        </div>
        <div className={style.field_two}>
          {isEdit ? (
            <>
              <UserInformationPasswordInput
                passwordData={passwordData}
                info="current password"
                id="current"
                onChange={handleInputChange}
                validationStatus={validationStatus}
                changeValidationStatus={changeValidationStatus}
              />
              <UserInformationPasswordInput
                passwordData={passwordData}
                info="new password"
                id="new"
                onChange={handleInputChange}
                validationStatus={validationStatus}
                changeValidationStatus={changeValidationStatus}
              />
              <UserInformationPasswordInput
                passwordData={passwordData}
                info="confirm new password"
                id="confirm"
                onChange={handleInputChange}
                validationStatus={validationStatus}
                changeValidationStatus={changeValidationStatus}
              />
              <div className={style.confirm_button}>
                <button
                  disabled={isDisabledButton || !passwordData.current}
                  onClick={handleConfirmChangePassword}
                  type="button">
                  change
                </button>
                <button onClick={handleClickOnBack} type="button">
                  back
                </button>
              </div>
            </>
          ) : (
            <button onClick={handleClickOnChange} type="button">
              Change Password
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default UserInformationPasswordContent;
