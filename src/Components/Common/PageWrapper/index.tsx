import React, { FC } from "react";
import Footer from "../Footer";
import Header from "../Header";
import style from "./PageWrapper.module.scss";

interface IProps {
  children: React.ReactNode;
}
const PageWrapper: FC<IProps> = ({ children }: IProps) => {
  return (
    <>
      <div className={style.page_wrapper}>
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default PageWrapper;
