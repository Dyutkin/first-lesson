import React from "react";
import { Route, Switch } from "react-router-dom";
import RegistrationPageContainer from "../RegistrationPageContainer";
import AuthPageContainer from "../AuthPageContainer";
import MainPageContainer from "../MainPageContainer";

function App() {
  return (
    <>
      <Switch>
        <Route path="/auth" component={AuthPageContainer} />
        <Route path="/registration" component={RegistrationPageContainer} />
        <Route exact path="/" component={MainPageContainer} />
      </Switch>
    </>
  );
}

export default App;
