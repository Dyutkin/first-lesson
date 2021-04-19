import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import MainPage from "../../Components/MainPage";
import first_slide from "../../assets/image/first_slide.jpg";
import second_slide from "../../assets/image/second_slide.jpg";
import third_slide from "../../assets/image/third_slide.jpg";
import { getSliderDataStore } from "../../store/MainPage/actions";

const imageArr = [
  { id: 1, link: first_slide, description: "Красивая картинка с горами №1" },
  { id: 2, link: second_slide, description: "Красивая картинка с горами №2" },
  { id: 3, link: third_slide, description: "Красивая картинка с горами №23" },
];

const MainPageContainer = () => {
  const dispatch = useDispatch();

  const getData = () => {
    setTimeout(() => {
      dispatch(getSliderDataStore(imageArr));
    }, 1000);
  };

  useEffect(getData, [dispatch]);

  return (
    <>
      <MainPage />
    </>
  );
};

export default MainPageContainer;
