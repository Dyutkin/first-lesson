import React from "react";
import style from "./Button.module.scss";

interface IProps {
  title: string;
  buttonType: "submit" | "button" | "reset";
  handler(limit: number): void;
  limit: number;
}

class Button extends React.PureComponent<IProps> {
  UNSAFE_componentWillMount() {
    console.log("UNSAFE_componentWillMount Button");
  }

  componentDidMount() {
    console.log("componentDidMount Button");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate Button");
  }

  render() {
    console.log("render Button");

    const { title, handler, limit, buttonType } = this.props;

    const mystyles = {
      disabled: "true",
    } as React.CSSProperties;

    return (
      <div className={style.wrapper}>
        <button
          type="button"
          style={mystyles}
          disabled={buttonType !== "button"}
          onClick={() => handler(limit)}>
          {title}
        </button>
      </div>
    );
  }
}

export default Button;
