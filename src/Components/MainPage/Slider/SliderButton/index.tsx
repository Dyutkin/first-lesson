import React from "react";
import style from "./SliderButton.module.scss";

interface IProps {
  handler(): void;
  description: string;
}
class SliderButton extends React.PureComponent<IProps> {
  render() {
    const { handler, description } = this.props;
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
  }
}

export default SliderButton;
