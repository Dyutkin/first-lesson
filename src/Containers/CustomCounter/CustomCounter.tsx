import React from "react";
import style from "./CustomCounter.module.scss";
import WindowComponent from "../WindowComponent/WindowComponent";

interface IState {
  clickCount: number;
}

const items = [
  {
    name: "first",
  },
  {
    name: "second",
  },
  {
    name: "third",
  },
];

class CustomCounter extends React.Component<any, IState> {

  UNSAFE_componentWillMount() {
    console.log("UNSAFE_componentWillMount CustomCounter");
  }

  componentDidMount() {
    console.log("componentDidMount CustomCounter");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate CustomCounter");
  }

  render() {
    console.log("render CustomCounter");

    return (
      <div className={style.wrapper}>
        {items.map((item) => {
          return <WindowComponent name={item.name} />;
        })}
      </div>
    );
  }
}

export default CustomCounter;
