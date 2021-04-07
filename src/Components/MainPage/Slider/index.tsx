import React from "react";
import style from "./Slider.module.scss";
import first_slide from "../../../assets/image/first_slide.jpg";
import second_slide from "../../../assets/image/second_slide.jpg";
import third_slide from "../../../assets/image/third_slide.jpg";
import SliderItem from "./SliderItem";
import SliderButton from "./SliderButton";

interface IState {
  currentImage: number;
}
const imageArr = [
  { id: 1, link: first_slide, description: "Красивая картинка с горами №1" },
  { id: 2, link: second_slide, description: "Красивая картинка с горами №2" },
  { id: 3, link: third_slide, description: "Красивая картинка с горами №23" },
];
class Slider extends React.Component<any, IState> {
  constructor(props: any) {
    super(props);
    this.state = { currentImage: 0 };
  }

  prevImage = () => {
    const { currentImage } = this.state;
    if (currentImage === 0) {
      this.setState({ currentImage: imageArr.length - 1 });
    } else {
      this.setState({ currentImage: currentImage - 1 });
    }
  };

  nextImage = () => {
    const { currentImage } = this.state;
    if (currentImage === imageArr.length - 1) {
      this.setState({ currentImage: 0 });
    } else {
      this.setState({ currentImage: currentImage + 1 });
    }
  };

  render() {
    const { currentImage } = this.state;
    return (
      <>
        <div className={style.slider_wrapper}>
          <SliderButton handler={this.prevImage} description="prev" />
          <SliderItem
            link={imageArr[currentImage].link}
            description={imageArr[currentImage].description}
          />
          <SliderButton handler={this.nextImage} description="next" />
        </div>
      </>
    );
  }
}

export default Slider;
