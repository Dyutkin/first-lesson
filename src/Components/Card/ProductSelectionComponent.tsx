import React from "react";
import style from "./ProductSelectionComponent.module.scss";
import Button from "../Common/Button/Button";
import img from "../../assets/style/image/tabby-cat-07.jpg";

interface Iprops {
  countNumber: number;
  info: string;
  handleAddClick(limit: number): void;
  handleSubtractClick(limit: number): void;
}

class ProductSelectionComponent extends React.Component<Iprops> {
  render() {
    const {
      countNumber,
      handleAddClick,
      handleSubtractClick,
      info,
    } = this.props;
    return (
      <div className={style.wrapper}>
        <img src={img} className={style.img} alt="" />
        <p className={style.p}> information: {info} </p>
        <p> count: {countNumber}</p>
        <div style={{ display: "flex", justifyContent: "space-around " }}>
          <div className={style.button}>
            <Button
              limit={15}
              buttonType="button"
              handler={handleAddClick}
              title="up"
            />
          </div>
          <div className={style.button}>
            <Button
              limit={0}
              buttonType="button"
              handler={handleSubtractClick}
              title="down"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ProductSelectionComponent;
