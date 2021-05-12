import React, { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./UserInformationEmailContent.module.scss";
import UserInformationPasswordInput from "./UserInformationEmailInput";
import { getUserInfo } from "../../../../store/AuthPage/selectors";
import {
  userLogInAction,
  userSetNewEmailAction,
} from "../../../../store/AuthPage/actions";

const UserInformationEmailContent: FC = () => {
  const dispatch = useDispatch();
  const [isEdit, changeEditStatus] = useState<boolean>(false);
  const userMail = useSelector(getUserInfo).email;
  const userInfo = useSelector(getUserInfo);

  const [newMailValue, changeNewMailValue] = useState<string>("");
  const [mailValidationStatus, changeMailValidationStatus] = useState<boolean>(
    true
  );

  const handleOnchangeMailConfirm = () => {
    if (mailValidationStatus) {
      dispatch(userLogInAction({ ...userInfo, email: newMailValue }));
      dispatch(
        userSetNewEmailAction({
          login: userInfo.login,
          email: newMailValue,
        })
      );
      changeEditStatus(false);
    }
  };

  return (
    <>
      <div className={style.wrapper}>
        <div className={style.field_one}>
          <b>Email</b>
        </div>
        <div className={style.field_two}>
          {isEdit ? (
            <>
              <UserInformationPasswordInput
                value={newMailValue}
                changeNewMailValue={changeNewMailValue}
                mailValidationStatus={mailValidationStatus}
                changeMailValidationStatus={changeMailValidationStatus}
              />
              <div className={style.confirm_button}>
                <button onClick={handleOnchangeMailConfirm} type="button">
                  change
                </button>
                <button onClick={() => changeEditStatus(false)} type="button">
                  back
                </button>
              </div>
            </>
          ) : (
            <>
              <div className={style.mail_info}>
                <p>{userMail}</p>
              </div>
              <button onClick={() => changeEditStatus(true)} type="button">
                Change Email
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default UserInformationEmailContent;
