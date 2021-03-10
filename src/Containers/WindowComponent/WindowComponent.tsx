import React from "react";
import style from "./WindowComponent.module.scss";
import Card from "../../Components/Card";

interface IState {
  clickCount: number;
}
interface IProps {
  name: string;
}

class WindowComponent extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);

    this.state = {
      clickCount: 0,
    };
  }

  handleAddClick = (limit: number) => {
    const { clickCount } = this.state;
    if (clickCount < limit) {
      this.setState({ clickCount: clickCount + 1 });
    }
  };

  handleSubtractClick = (limit: number) => {
    const { clickCount } = this.state;
    if (limit < clickCount) this.setState({ clickCount: clickCount - 1 });
  };

  render() {
    const { clickCount } = this.state;
    const { name } = this.props;
    return (
      <Card
        countNumber={clickCount}
        handleAddClick={this.handleAddClick}
        handleSubtractClick={this.handleSubtractClick}
        info={name}
      />
    );
  }
}

export default WindowComponent;
