import React, { FC } from "react";
import AuthForm from "./AuthForm";
import PageWrapper from "../Common/PageWrapper";

const AuthPage: FC = () => {
  return (
    <>
      <PageWrapper>
        <AuthForm />
      </PageWrapper>
    </>
  );
};

export default AuthPage;
