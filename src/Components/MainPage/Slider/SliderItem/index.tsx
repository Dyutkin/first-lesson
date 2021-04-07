import React from "react";
import style from "./SliderItem.module.scss";

interface IProps {
  link: string;
  description: string;
}
class SliderItem extends React.PureComponent<IProps> {
  render() {
    const { link, description } = this.props;
    return (
      <>
        <div className={style["slider-item_wrapper"]}>
          <img src={link} alt={description} />
        </div>
      </>
    );
  }
}

export default SliderItem;
