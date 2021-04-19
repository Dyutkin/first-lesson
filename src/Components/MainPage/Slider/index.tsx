import React, { useState } from "react";
import { useSelector } from "react-redux";
import style from "./Slider.module.scss";
import SliderItem from "./SliderItem";
import SliderButton from "./SliderButton";
import { getSliderData } from "../../../store/MainPage/selectors";

const Slider = () => {
  const [sliderData, setSliderData] = useState({ currentImage: 0 });
  const imageArr = useSelector(getSliderData);

  const prevImage = () => {
    const { currentImage } = sliderData;
    if (currentImage === 0) {
      setSliderData({ currentImage: imageArr.length - 1 });
    } else {
      setSliderData({ currentImage: currentImage - 1 });
    }
  };

  const nextImage = () => {
    const { currentImage } = sliderData;
    if (currentImage === imageArr.length - 1) {
      setSliderData({ currentImage: 0 });
    } else {
      setSliderData({ currentImage: currentImage + 1 });
    }
  };

  const { currentImage } = sliderData;
  return (
    <>
      <div className={style.slider_wrapper}>
        <SliderButton handler={prevImage} description="prev" />
        <SliderItem
          link={imageArr[currentImage]?.link}
          description={imageArr[currentImage]?.description}
        />
        <SliderButton handler={nextImage} description="next" />
      </div>
    </>
  );
};

export default Slider;
