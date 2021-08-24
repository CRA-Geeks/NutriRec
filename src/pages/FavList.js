import React, { Component } from "react";
import axios from "axios";
import { Card, Row, Col, Button, Container } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { withAuth0 } from "@auth0/auth0-react";

export class FavList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favArr: [],
    };
  }
  componentDidMount = () => {
    console.log("hello");
    if (this.props.auth0.isAuthenticated) {
      let url = `http://localhost:8080/user/${this.props.auth0.user.email}`;
      axios
        .get(url)
        .then((res) => {
          this.setState({
            favArr: res.data.favorite,
          });
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };
  // componentDidUpdate = () => {
  //   console.log("hello");
  //   if (this.props.auth0.isAuthenticated) {
  //     let url = `http://localhost:8080/user/${this.props.auth0.user.email}`;
  //     axios
  //       .get(url)
  //       .then((res) => {
  //         this.setState({
  //           favArr: res.data.favorite,
  //         });
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //       });
  //   }
  // };
  removeFav(obj, e) {
    let newArr = this.state.favArr;
    for (let i = 0; i < newArr.length; i++) {
      if (obj.uri === newArr[i].uri) {
        newArr.splice(i, 1);
        const config = {
          method: "put",
          baseURL: `http://localhost:8080/addFiv/${this.props.auth0.user.email}`,
          data: {
            favorite: newArr,
          },
        };
        // @ts-ignore
        axios(config).then((res) => {
          console.log(res);
        });
        this.setState({
          favArr: newArr,
        });
      }
    }
  }

  render() {
    return (
      <>
        <Header />
        <main>
          <Container>
            <h1>Fav List</h1>

            <Row>
              {this.state.favArr.length > 0 ? (
                this.state.favArr.map((item) => {
                  return (
                    <Col lg={3} md={6} sm={12}>
                      <Card style={{ width: "18rem", height: "33rem" }}>
                        <Card.Img variant="top" src={item.image} alt=".." />
                        <Card.Body>
                          <Card.Title>{item.label}</Card.Title>
                          <a href={item.url} target="_blank" rel="noreferrer">
                            <Button variant="primary">
                              Know More About Recipe
                            </Button>
                          </a>
                          <Button
                            variant="danger"
                            onClick={(e) => this.removeFav(item, e)}
                          >
                            Delete
                          </Button>
                        </Card.Body>
                      </Card>
                    </Col>
                  );
                })
              ) : (
                <p>Please Add Recipe To Your List</p>
              )}
            </Row>
          </Container>
        </main>
        <Footer />
      </>
    );
  }
}

export default withAuth0(FavList);
