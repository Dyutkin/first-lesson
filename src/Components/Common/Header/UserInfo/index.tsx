import React, { FC } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getIsUserMail } from "../../../../store/selectors";
import style from "./UserInfo.module.scss";

interface IProps {
  login: string;
}

const UserInfo: FC<IProps> = (props: IProps) => {
  const { login } = props;

  const userLogin = useSelector(getIsUserMail);

  return (
    <div className={style["user-info_wrapper"]}>
      <div className={style["user-info_wrapper_column"]}>
        <div className={style["user-info_wrapper_row"]}>
          <p>User login: </p>
          <p>{login}</p>
        </div>
        <div className={style["user-info_wrapper_row"]}>
          <p>User mail: </p> <p>{userLogin || "add mail"}</p>
        </div>
      </div>
      <div className={style["user-info_profile"]}>
        <Link className={style["text-decoration"]} to="/profile">
          <p>User page</p>
        </Link>
      </div>
    </div>
  );
};

export default UserInfo;
