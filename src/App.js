import React, { Component } from "react";
import AboutUs from "./pages/AboutUs";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MoreInfo from "./pages/moreInfo";
import Main from "./pages/Main";
import Recipe from "./pages/Recipe";

import { withAuth0 } from "@auth0/auth0-react";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Auth0Provider
          domain="dev-0sowatcr.eu.auth0.com"
          clientId="G8q6d9Ixd0caG4pzUW5Qmi2eMKrMSIxO"
          redirectUri={window.location.origin}
        >
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route exact path="/recipe">
              <Recipe />
            </Route>
            <Route path="/info" exact>
              <MoreInfo />
            </Route>
            <Route path="/about-us" exact>
              <AboutUs />
            </Route>
          </Switch>
        </Auth0Provider>
        {/* <AboutUs /> */}
      </BrowserRouter>
    );
  }
}

export default withAuth0(App);
