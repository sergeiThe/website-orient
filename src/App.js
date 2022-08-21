import React from "react";
import { Route, Switch } from "react-router-dom";
import AboutUsPage from "./pages/AboutUsPage";
import HomePage from "./pages/HomePage";


function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/om-oss" exact>
        <AboutUsPage />
      </Route>
    </Switch>
  );
}

export default App;
