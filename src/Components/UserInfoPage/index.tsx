import React, { FC } from "react";
import UserInformationPage from "./UserInformationPage";
import PageWrapper from "../Common/PageWrapper";

const UserInfoPage: FC = () => {
  return (
    <>
      <PageWrapper>
        <UserInformationPage />
      </PageWrapper>
    </>
  );
};

export default UserInfoPage;
