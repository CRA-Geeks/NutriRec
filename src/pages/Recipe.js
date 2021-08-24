import React, { Component } from "react";
import {
  Container,
  Form,
  Card,
  Button,
  Row,
  Col,
  InputGroup,
} from "react-bootstrap";
import Footer from "../components/Footer";
import Header from "../components/Header";
import axios from "axios";
import { withAuth0 } from "@auth0/auth0-react";


class Recipe extends Component {
  constructor() {
    super();
    this.state = {
      recipeName: "",
      showResult: false,
      nextURL: "",
      prevURL: "",
      currentURL: "",
      favArr: [],
    };
  }

  changeHandler(e) {
    this.setState({
      recipeName: e.target.value,
      showResult: false,
      dataRecipe: [],
    });
  }


  /////////////////////////////////part for fav list /////////////////////////////////////


  addtofav(obj) {
    //console.log(obj)

    if (this.props.auth0.isAuthenticated) {
      axios
        .get(`http://localhost:8080/user/${this.props.auth0.user.email}`)
        .then((response) => {
          this.setState({ favArr: response.data.favorite });
        }).then(() => {
          // this.getUser();
          let arr = this.state.favArr;
          arr.push(obj)
          this.setState({
            favArr: arr
          })
        }).then(() => {
          const config = {
            method: "put",
            baseURL: `http://localhost:8080/addFiv/${this.props.auth0.user.email}`,
            data: {
              favorite: this.state.favArr,
            },
          };

          axios(config)
            .then((res) => {
              console.log(res.status);
            })
            .catch((err) => {
              console.log(err);
            });
          document.getElementById("myBtn").disabled = true;


        })

      console.log(this.state.favArr.length);


    }


  }

  //////////////////////////////////////////////////////////////////////////////////////////



  //////////////////////////////////////part for get recipe by searching ///////////////////////////////
  recipeHandler(e) {
    e.preventDefault();
    axios
      .get(`http://localhost:8080/recipe?q=${this.state.recipeName}`)
      .then((res) => {
        console.log(res.status);
        this.setState({
          showResult: true,
          dataRecipe: res.data.hits,
          nextURL: res.data._links.next.href,
          prevURL: "",
          currentURL: `http://localhost:8080/recipe?q=${this.state.recipeName}`,
        });
      })
      .catch((e) => {
        console.log("error");
      });
  }

  pageHandel(link) {
    axios
      .get(link)
      .then((res) => {
        console.log(res.status);
        this.setState({
          showResult: true,
          dataRecipe: res.data.hits,
          nextURL: res.data._links.next.href,
          prevURL: this.state.currentURL,
          currentURL: link,
        });
      })
      .catch((e) => {
        console.log("error");
      });
  }

  render() {
    return (
      <Container>
        <Header />
        <main>
        
          <Form
            onSubmit={(e) => this.recipeHandler(e)}
            style={{ margin: "2rem 0" }}
          >
            <Row>
              <Col lg={3}></Col>

              <Col>
                <InputGroup style={{ border: "3px inset #CCCCCC" }}>
                  <Form.Control
                    type="text"
                    placeholder="Search About Recipe"
                    onChange={(e) => this.changeHandler(e)}
                    style={{ height: "3.1rem" }}
                  />

                  <Button
                    variant="info"
                    type="submit"
                    size="lg"
                    style={{ border: "3px outset #CCCCCC" }}
                  >
                    Recipes Search
                  </Button>
                </InputGroup>
              </Col>
              <Col lg={3}></Col>
            </Row>
          </Form>

          <Row>
            {this.state.showResult &&
              this.state.dataRecipe.map((item) => {
                return (
                  <Col lg={3} md={6} sm={12}>
                    <Card style={{ width: "18rem", height: "33rem" }}>
                      <Card.Img variant="top" src={item.recipe.image} />
                      <Card.Body>
                        <Card.Title>{item.recipe.label}</Card.Title>
                        <Card.Text>
                          cuisineType: {item.recipe.cuisineType}
                          <br />
                          calories: {Math.floor(item.recipe.calories)}
                          <br />
                          {item.recipe.healthLabels
                            .map((elem) => {
                              let a = 0;
                              if (elem === "Pork-Free") {
                                a++;
                              }
                              if (elem === "Alcohol-Free") {
                                a++;
                              }
                              return a === 1 && 1;
                            })
                            .reduce(function (a, b) {
                              return a + b;
                            }, 0) === 2 ? (
                            <p>Halal</p>
                          ) : (
                            <p>Not Halal</p>
                          )}
                        </Card.Text>
                        <a href={item.recipe.url}>
                          <Button variant="primary">
                            Know More About Recipe
                          </Button>{" "}
                        </a>
                        {this.props.auth0.isAuthenticated && (
                          <Button onClick={() => this.addtofav(item.recipe)} id="myBtn" >Add to favlist</Button>
                        )}
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}{" "}
          </Row>
          <Row>
            <div
              style={{
                display: "flex",
                width: "50%",
                justifyContent: "space-between",
                margin: "3rem auto",
              }}
            >
              {this.state.prevURL && (
                <Button
                  variant="secondary"
                  style={{
                    borderTopLeftRadius: "50%",
                    borderBottomLeftRadius: "50%",
                    border: "3px outset #0DCAF0",
                  }}
                  onClick={() => this.pageHandel(this.state.prevURL)}
                >
                  Prev Page
                </Button>
              )}
              {this.state.nextURL && (
                <Button
                  variant="secondary"
                  style={{
                    borderTopRightRadius: "50%",
                    borderBottomRightRadius: "50%",
                    border: "3px outset #0DCAF0",
                  }}
                  onClick={() => this.pageHandel(this.state.nextURL)}
                >
                  Next Page
                </Button>
              )}
            </div>
          </Row>
        </main>
        <Footer />
      </Container>
    );
  }
}

export default withAuth0(Recipe);