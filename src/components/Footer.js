import React, { Component } from "react";
import logo from "../assets/orange-fruit-logo-design-illustration-icon-free-vector-removebg-preview.png";

class Footer extends Component {
  render() {
    return (
      <footer>
        <section>
          <img src={logo} alt="logo" />
          <h5>NutriRec</h5>
        </section>
        <span>
          <p>This Site Was Build By all Love and Hard working ❣ </p>
          <p>All Right Reserved CRA-Geeks &copy; 2021</p>
        </span>
      </footer>
    );
  }
}

export default Footer;
