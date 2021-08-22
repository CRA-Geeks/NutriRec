import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "../components/AboutUs";

export default class AboutUs extends Component {
  render() {
    return (
      <>
        <Header />
        <About />
        <Footer />
      </>
    );
  }
}
