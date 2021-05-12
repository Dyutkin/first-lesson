import React, { FC } from "react";
import UserInformationPasswordContent from "./UserInformationPasswordContent";
import UserInformationEmailContent from "./UserInformationEmailContent";
import style from "./UserInformationPage.module.scss";

const UserInformationPage: FC = () => {
  return (
    <>
      <div className={style.wrapper}>
        <UserInformationPasswordContent />
        <UserInformationEmailContent />
      </div>
    </>
  );
};

export default UserInformationPage;
