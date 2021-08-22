import React, { Component } from "react";
import Main from "./pages/Main";
import Recipe from "./pages/Recipe"
import { BrowserRouter , Switch , Route } from "react-router-dom";
// import { AboutUs } from "./components/AboutUs";
// import { Container } from "react-bootstrap";
export default class App extends Component {
  render() {
    return (
   
      <BrowserRouter>
      <Switch>
          <Route exact path='/'>
            <Main />
          </Route>
          <Route exact path='/recipe'>
            <Recipe/>
          </Route>
          <Route exact path='/'>
            <Main />
          </Route>
       </Switch>
      </BrowserRouter>
     
      
      // <AboutUs />
    );
  }
}
