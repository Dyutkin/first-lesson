import React from "react";
import PageWrapper from "../Common/PageWrapper";

class ErrorPage extends React.PureComponent {
  render() {
    return (
      <>
        <PageWrapper>
          <div>
            <p>Error page 404</p>
          </div>
        </PageWrapper>
      </>
    );
  }
}

export default ErrorPage;
