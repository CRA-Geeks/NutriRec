import React, { Component } from "react";
// import HeaderTop from "./HeaderTop";
import { Nav, Navbar, Container, Button } from "react-bootstrap";
import { withAuth0 } from "@auth0/auth0-react";
import "../styles/header.css";
import axios from "axios";
import { Link } from "react-router-dom";
import TagsModal from "./TagsModal";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tagsModalOpen: false,
    };
  }
  componentDidUpdate() {
    if (this.props.auth0.isAuthenticated) {
      const config = {
        method: "post",
        baseURL: "http://localhost:8080/",
        url: "/user/createUser",
        data: {
          email: this.props.auth0.user.email,
          userName: this.props.auth0.user.name,
        },
      };
      // @ts-ignore
      axios(config)
        .then(() => {
          console.log("success");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  handleShowModal = () => {
    let checkboxes = document.getElementsByTagName("input");
    axios
      .get(`http://localhost:8080/user/${this.props.auth0.user.email}`)
      .then((response) => {
        for (let i = 0; i < checkboxes.length; i++) {
          if (response.data.tags.includes(checkboxes[i].value)) {
            checkboxes[i].checked = true;
          }
        }
      });
    this.setState({ tagsModalOpen: true });
  };

  handleClose = () => {
    this.setState({ tagsModalOpen: false });
  };
  render() {
    return (
      <header>
        <Container>
          <TagsModal
            show={this.state.tagsModalOpen}
            handleClose={this.handleClose}
          />
          <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />

            <Navbar.Brand as={Link} to="/">
              <h2>NutriRec</h2>
            </Navbar.Brand>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="justify-content-end">
                {this.props.auth0.isAuthenticated && (
                  <Nav.Link onClick={this.handleShowModal}>
                    Key Preferences
                  </Nav.Link>
                )}
                <Nav.Link as={Link} to="/about-us">
                  About
                </Nav.Link>

                {this.props.auth0.isAuthenticated ? (
                  <Button
                    variant="light"
                    onClick={() => this.props.auth0.logout()}
                  >
                    Log Out
                  </Button>
                ) : (
                  <Button
                    variant="light"
                    onClick={() => {
                      this.props.auth0.loginWithRedirect();
                    }}
                  >
                    Log In
                  </Button>
                )}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <hr style={{ height: "4px", color: "black", marginTop: "0px" }} />
        </Container>
      </header>
    );
  }
}

export default withAuth0(Header);
