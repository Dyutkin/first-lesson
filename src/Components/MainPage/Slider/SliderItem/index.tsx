import React, { FC } from "react";
import style from "./SliderItem.module.scss";

interface IProps {
  link: string;
  description: string;
}
const SliderItem: FC<IProps> = (props: IProps) => {
  const { link, description } = props;
  return (
    <>
      <div className={style["slider-item_wrapper"]}>
        <img src={link} alt={description} />
      </div>
    </>
  );
};

export default SliderItem;
