import React, { FC } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getIsUserMail } from "../../../../store/AuthPage/selectors";
import { setUserLogOutAction } from "../../../../store/AuthPage/actions";
import style from "./UserInfo.module.scss";

interface IProps {
  login: string;
}

const UserInfo: FC<IProps> = (props: IProps) => {
  const { login } = props;

  const userLogin = useSelector(getIsUserMail);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setUserLogOutAction());
  };

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
        <div
          role="button"
          onKeyDown={() => {}}
          tabIndex={0}
          onClick={handleClick}>
          <p>Log out</p>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
