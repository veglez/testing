import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HuddleLandingPageWithCurvedSectionsMaster from './pages/frontendmentor/HuddleLandingPageWithCurvedSectionsMaster'
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
        <Route exact path='/' component={HuddleLandingPageWithCurvedSectionsMaster} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
