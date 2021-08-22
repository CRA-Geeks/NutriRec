import React, { Component } from "react";
import HeaderTop from "./HeaderTop";
import { Nav, Navbar, Container } from "react-bootstrap";
import "../styles/header.css";
class Header extends Component {
  render() {
    return (
      <header>
        <Container>
          <HeaderTop />
          <Navbar
            style={{ height: "10vw" }}
            collapseOnSelect
            expand="lg"
            bg="info"
            variant="light"
          >
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#Vegan">Vegan</Nav.Link>
                <Nav.Link href="#Gluten-Free">Gluten-Free</Nav.Link>
                <Nav.Link href="#All Recipes">All Recipes</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <Navbar.Brand href="#home">
              <h2>Minimalist Baker</h2>
            </Navbar.Brand>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="justify-content-end">
                <Nav.Link href="#About">About</Nav.Link>
                <Nav.Link eventKey={2} href="#Shop">
                  Shop
                </Nav.Link>
                <Nav.Link href="#Cookbook">Cookbook</Nav.Link>
                <Nav.Link href="#Blogger Resources">Blogger Resources</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <hr style={{ height: "4px", color: "black", marginTop: "0px" }} />
        </Container>
      </header>
    );
  }
}

export default Header;
