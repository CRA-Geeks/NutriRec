import React, { Component } from "react";
import Header from "./components/Header";
import NewRecipes from "./components/NewRecipes";
import RecipeKey from "./components/RecipeKey";
import RoundUb from "./components/RoundUb";
import Footer from "./components/Footer";
import { AboutUs } from "./components/AboutUs";
import { Container } from "react-bootstrap";
export default class App extends Component {
  render() {
    return (
      <Container>
        <Header />
        <main>
          <NewRecipes />
          <RecipeKey />
          <RoundUb />
        </main>
        <Footer />
      </Container>
      // <AboutUs />
    );
  }
}
