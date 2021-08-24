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
      dataRecipe: [],
      showResult: false,
      nextURL: "",
      prevURL: "",
      currentURL: "",
      colorHalal: "",
      recipes: [],
      heathRecipes: [],
      placeRecipes: [],
      health: "0",
      place: "0",
      favArr: [],
      tags: [],
      test: false,
    };
  }

  changeHandler(e) {
    this.setState({
      recipeName: e.target.value,
      showResult: false,
      dataRecipe: [],
    });
  }

  addToFav(obj, e) {
    console.log(e);
    let newArr = this.state.favArr;
    newArr.push(obj);
    const config = {
      method: "put",
      baseURL: `https://nutrirec-cra.herokuapp.com/addFiv/${this.props.auth0.user.email}`,
      data: {
        favorite: newArr,
      },
    };
    // @ts-ignore
    axios(config).then((res) => {
      console.log(res);
    });
    let newWay = this.state.dataRecipe;
    newWay[e].fav = true;
    this.setState({
      favArr: newArr,
      dataRecipe: newWay,
    });
  }

  removeFav(obj, e) {
    let newWay = this.state.dataRecipe;

    newWay[e].fav = false;
    this.setState({
      ataRecipe: newWay,
    });
    let newArr = [];

    for (let i = 0; i < newWay.length; i++) {
      if (newWay[i].fav === true) {
        newArr.push(newWay[i]);
      }
    }
    // newArr.splice(e, 1);
    this.setState({
      favArr: newArr,
    });
    const config = {
      method: "put",
      baseURL: `https://nutrirec-cra.herokuapp.com/addFiv/${this.props.auth0.user.email}`,
      data: {
        favorite: newArr,
      },
    };
    // @ts-ignore
    axios(config).then((res) => {
      console.log(res);
    });
  }

  recipeHandler(e) {
    e.preventDefault();

    axios
      .get(
        `https://nutrirec-cra.herokuapp.com/recipe?q=${this.state.recipeName}`
      )
      .then((res) => {
        for (let i = 0; i < res.data.hits.length; i++) {
          if (
            this.state.favArr.some(
              (item) => item.uri === res.data.hits[i].recipe.uri
            )
          ) {
            res.data.hits[i].fav = true;
          } else {
            res.data.hits[i].fav = false;
          }
        }
        this.setState({
          showResult: true,
          dataRecipe: res.data.hits,
          recipes: res.data.hits,
          nextURL: res.data._links.next.href,
          prevURL: "",
          currentURL: `https://nutrirec-cra.herokuapp.com/recipe?q=${this.state.recipeName}`,
        });
      })
      .catch((e) => {
        console.log(e);
      });
    if (this.props.auth0.isAuthenticated) {
      axios
        .get(
          `https://nutrirec-cra.herokuapp.com/user/${this.props.auth0.user.email}`
        )
        .then((response) => {
          this.setState({ favArr: response.data.favorite });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  pageHandel(link) {
    axios
      .get(link)
      .then((res) => {
        this.setState({
          showResult: true,
          dataRecipe: res.data.hits,
          recipes: res.data.hits,
          nextURL: res.data._links.next.href,
          prevURL: this.state.currentURL,
          currentURL: link,
        });
      })
      // @ts-ignore
      // @ts-ignore
      .catch((e) => {
        console.log("error");
      });
    if (this.props.auth0.isAuthenticated) {
      axios
        .get(
          `https://nutrirec-cra.herokuapp.com/user/${this.props.auth0.user.email}`
        )
        .then((response) => {
          this.setState({ favArr: response.data.favorite });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
  // arr- user  , arr - rec

  handelBoth(health, place) {
    let newArray = [];
    if (health === "your-preferences") {
      axios
        .get(
          `https://nutrirec-cra.herokuapp.com/user/${this.props.auth0.user.email}`
        )
        .then((response) => {
          this.setState({
            tags: response.data.tags,
          });

          newArray = this.state.recipes.filter((item) =>
            this.state.tags.every((ele) =>
              item.recipe.healthLabels.includes(ele)
            )
          );

          this.setState({
            dataRecipe: newArray,
            health: health,
            place: place,
          });
        });
    } else {
      newArray = this.state.recipes.filter(
        (item) =>
          (item.recipe.healthLabels.includes(health) || health === "0") &&
          (item.recipe.cuisineType.includes(place) || place === "0")
      );
    }
    this.setState({
      dataRecipe: newArray,
      health: health,
      place: place,
    });
    if (this.props.auth0.isAuthenticated) {
      axios
        .get(
          `https://nutrirec-cra.herokuapp.com/user/${this.props.auth0.user.email}`
        )
        .then((response) => {
          this.setState({ favArr: response.data.favorite });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  render() {
    return (
      <>
        <Header />
        <main className="recipeMain">
          <Container>
            <Form
              onSubmit={(e) => this.recipeHandler(e)}
              style={{ margin: "2rem 0" }}
            >
              <Row>
                <Col lg={3}>
                  {this.state.showResult && (
                    <Form.Select
                      aria-label="Default select example"
                      size="lg"
                      onChange={(e) =>
                        // @ts-ignore
                        this.handelBoth(e.target.value, this.state.place)
                      }
                    >
                      <option value="0">All Recipes</option>
                      <option value="your-preferences">Your Preferences</option>
                      <option value="Pork-Free">Pork Free</option>
                      <option value="Alcohol-Free">Alcohol Free</option>
                      <option value="Sugar-Free">Sugar Free</option>
                      <option value="Vegan">Vegan</option>
                      <option value="Vegetarian">Vegetarian</option>
                      <option value="Gluten-Free">Gluten Free</option>
                    </Form.Select>
                  )}
                </Col>

                <Col>
                  <InputGroup className="recipeInputText">
                    <Form.Control
                      type="text"
                      placeholder="Search About Recipe"
                      onChange={(e) => this.changeHandler(e)}
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
                <Col lg={3}>
                  {this.state.showResult && (
                    <Form.Select
                      aria-label="Default select example"
                      size="lg"
                      onChange={(e) =>
                        // @ts-ignore
                        this.handelBoth(this.state.health, e.target.value)
                      }
                    >
                      <option value="0">All Recipes</option>
                      <option value="american">american</option>
                      <option value="british">british</option>
                      <option value="italian">italian</option>
                      <option value="french">french</option>
                      <option value="mediterranean">mediterranean</option>
                      <option value="europe">europe</option>
                      <option value="asian">asian</option>
                      <option value="mexican">mexican</option>
                    </Form.Select>
                  )}
                </Col>
              </Row>
            </Form>

            <Row className="cardRow">
              {this.state.showResult &&
                this.state.dataRecipe.map((item, index) => {
                  return (
                    <Col lg={3} md={6} sm={12} className="recipeColCard">
                      <Card
                        className="recipeCard"
                        style={{ marginTop: "20px" }}
                      >
                        <Card.Img variant="top" src={item.recipe.image} />
                        <Card.Body
                          style={{ overflow: "auto", height: "240px" }}
                        >
                          <Card.Title className="titleText">
                            <pre>{item.recipe.label}</pre>
                          </Card.Title>
                          <Card.Text>
                            <div className="firstText">
                              <p className="mainP">
                                <span className="textItem">cuisineType:</span>{" "}
                                <span className="textValue">
                                  {item.recipe.cuisineType}
                                </span>
                              </p>

                              <p className="mainP">
                                <span className="textItem">calories:</span>{" "}
                                <span className="textValue">
                                  {Math.floor(item.recipe.calories)}
                                </span>
                              </p>
                              {item.recipe.totalTime === 0 ? (
                                <p className="mainP">
                                  <span className="textItem">totalTime:</span>{" "}
                                  <span className="textValue">
                                    Not available
                                  </span>
                                </p>
                              ) : (
                                <p className="mainP">
                                  <span className="textItem">totalTime:</span>{" "}
                                  <span className="textValue">
                                    {Math.floor(item.recipe.totalTime)} Min
                                  </span>
                                </p>
                              )}
                            </div>
                          </Card.Text>
                        </Card.Body>
                        <Card.Footer style={{ display: "flex", gap: "5px" }}>
                          <Button
                            href={item.recipe.url}
                            target="_blank"
                            className="buttonCard"
                            variant="success"
                          >
                            Know More About Recipe
                          </Button>{" "}
                          {this.props.auth0.isAuthenticated &&
                            (item.fav === true ? (
                              <Button
                                // @ts-ignore
                                id={index}
                                variant="danger"
                                // @ts-ignore
                                onClick={(e) =>
                                  this.removeFav(item.recipe, index)
                                }
                              >
                                Remove from favlist
                              </Button>
                            ) : (
                              <Button
                                // @ts-ignore
                                id={index}
                                // @ts-ignore
                                onClick={(e) =>
                                  this.addToFav(item.recipe, index)
                                }
                              >
                                Add to favlist
                              </Button>
                            ))}
                        </Card.Footer>
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
          </Container>
        </main>
        <Footer />
      </>
    );
  }
}

export default withAuth0(Recipe);
