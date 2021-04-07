import React, { FC } from "react";
import RegistrationForm from "./RegistrationForm";
import PageWrapper from "../Common/PageWrapper";

const RegistrationPage: FC = () => {
  return (
    <>
      <PageWrapper>
        <RegistrationForm />
      </PageWrapper>
    </>
  );
};

export default RegistrationPage;
