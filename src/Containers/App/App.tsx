import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import RegistrationPageContainer from "../RegistrationPageContainer";
import AuthPageContainer from "../AuthPageContainer";
import MainPageContainer from "../MainPageContainer";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/auth" component={AuthPageContainer} />
        <Route
          exact
          path="/registration"
          component={RegistrationPageContainer}
        />
        <Route exact path="/" component={MainPageContainer} />
        <Redirect to="/404" />
      </Switch>
    </>
  );
}

export default App;
