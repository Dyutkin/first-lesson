import React from "react";
import Slider from "./Slider";
import PageWrapper from "../Common/PageWrapper";

class MainPage extends React.PureComponent {
  render() {
    return (
      <>
        <PageWrapper>
          <Slider />
        </PageWrapper>
      </>
    );
  }
}

export default MainPage;
