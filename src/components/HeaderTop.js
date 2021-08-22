import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, FormControl, Container, Button, Navbar } from "react-bootstrap";
import "../styles/HeaderTopStyle.css";
import facebook from "../assets/icons/facebook.png";
import instagram from "../assets/icons/instagram.png";
import pinterest from "../assets/icons/pinterest.png";
import youtube from "../assets/icons/youtube.png";

class HeaderTop extends Component {
  render() {
    return (
      <>
        <Navbar className="topNav" bg="light" variant="light">
          <Container>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>

            <nav className="navBarIcons">
              <a href="https://www.facebook.com">
                <img src={facebook} alt="fb" />{" "}
              </a>

              <a href="https://www.instagram.com">
                <img src={instagram} alt="instagram" />{" "}
              </a>

              <a href="https://www.pinterest.com">
                <img src={pinterest} alt="pinterest" />{" "}
              </a>

              <a href="https://www.youtube.com">
                <img src={youtube} alt="youtube" />
              </a>
            </nav>
          </Container>
        </Navbar>
      </>
    );
  }
}
export default HeaderTop;
