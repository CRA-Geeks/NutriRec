import React, { Component } from "react";
import Header from "../components/Header";
import NewRecipes from "../components/NewRecipes";
import RecipeKey from "../components/RecipeKey";
import RoundUb from "../components/RoundUb";
import Footer from "../components/Footer";
export default class Main extends Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <NewRecipes />
          <RecipeKey />
          <RoundUb />
        </main>
        <Footer />
      </>
    );
  }
}
