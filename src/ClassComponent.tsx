import React from "react";
import style from "./ClassComponent.module.scss";

interface InterProps {
  data?: string;
  count?: number;
}

interface InterState {
  click: number;
}

class ClassComponent extends React.Component<InterProps, InterState> {
  constructor(props: InterProps) {
    super(props);
    this.state = { click: 0 };
  }

  handleClick = (num: number): any => () => {
    // //const { click } = this.state;

    this.setState((prevState) => {
      return { click: prevState.click + 1 };
    });
    console.log(num);
  };

  render() {
    const { data } = this.props;
    const { click } = this.state;
    const text = `vot eto prikol ${data}`;

    return (
      <>
        <h1>Реклама 1</h1>
        <input type="button" onClick={this.handleClick(666)} />
        <button type="button" className={style.wrapper}>
          button
        </button>
        {text}
        {click}
      </>
    );
  }
}

export default ClassComponent;
