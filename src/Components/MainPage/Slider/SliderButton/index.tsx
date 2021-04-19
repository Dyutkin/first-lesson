import React, { FC } from "react";
import style from "./SliderButton.module.scss";

interface IProps {
  handler(): void;
  description: string;
}
const SliderButton: FC<IProps> = (props: IProps) => {
  const { handler, description } = props;
  return (
    <>
      <button
        className={style["slider-button"]}
        type="button"
        onClick={handler}>
        {description}
      </button>
    </>
  );
};

export default SliderButton;
