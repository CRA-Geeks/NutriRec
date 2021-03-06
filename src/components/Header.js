import React, { Component } from "react";
import { Nav, Navbar, Container, Button } from "react-bootstrap";
import { withAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { Link } from "react-router-dom";
import TagsModal from "./TagsModal";
import ItemSearch from "./ItemSearch";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tagsModalOpen: false,
      searchModalOpen: false,
    };
  }
  componentDidUpdate() {
    if (this.props.auth0.isAuthenticated) {
      const config = {
        method: "post",
        baseURL: "https://nutrirec-cra.herokuapp.com/",
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
      .get(
        `https://nutrirec-cra.herokuapp.com/user/${this.props.auth0.user.email}`
      )
      .then((response) => {
        for (let i = 0; i < checkboxes.length; i++) {
          if (response.data.tags.includes(checkboxes[i].value)) {
            checkboxes[i].checked = true;
          }
        }
      })
      .catch((err) => {
        console.log("err");
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
          <ItemSearch
            show={this.state.searchModalOpen}
            handleClose={() => this.setState({ searchModalOpen: false })}
          />
          <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />

            <Navbar.Brand as={Link} to="/">
              <h2>NutriRec</h2>
            </Navbar.Brand>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="justify-content-end">
                {this.props.auth0.isAuthenticated && (
                  <>
                    {" "}
                    <Nav.Link onClick={this.handleShowModal}>
                      Key Preferences
                    </Nav.Link>
                    <Nav.Link as={Link} to="/favlist">
                      Favorite
                    </Nav.Link>
                  </>
                )}
                <Nav.Link
                  onClick={() => {
                    this.setState({ searchModalOpen: true });
                  }}
                >
                  Calcualte
                </Nav.Link>
                <Nav.Link as={Link} to="/about-us">
                  About
                </Nav.Link>

                <Nav.Link as={Link} to="/recipe">
                  Recipe
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
