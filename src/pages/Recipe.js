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
import "../styles/recipe.css";
export default class Recipe extends Component {
  constructor() {
    super();
    this.state = {
      recipeName: "",
      showResult: false,
      nextURL: "",
      prevURL: "",
      currentURL: "",
      colorHalal: "",
      recipes: [],
      heathRecipes: [],
      placeRecipes: [],
      health:'0',
      place:'0',
    };
  }

  changeHandler(e) {
    this.setState({
      recipeName: e.target.value,
      showResult: false,
      dataRecipe: [],
    });
  }

  recipeHandler(e) {
    e.preventDefault();
    axios
      .get(`http://localhost:8080/recipe?q=${this.state.recipeName}`)
      .then((res) => {
        console.log(res.data);
        this.setState({
          showResult: true,
          dataRecipe: res.data.hits,
          recipes: res.data.hits,
          nextURL: res.data._links.next.href,
          prevURL: "",
          currentURL: `http://localhost:8080/recipe?q=${this.state.recipeName}`,
        });
      })
      .catch((e) => {
        console.log(e);
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
          recipes: res.data.hits,
          nextURL: res.data._links.next.href,
          prevURL: this.state.currentURL,
          currentURL: link,
        });
      })
      .catch((e) => {
        console.log("error");
      });
  }

  handelBoth (health, place) {
    let newArray = this.state.recipes.filter((item) =>
      (
        item.recipe.healthLabels.includes(health) || health==='0'
        
      )&&(item.recipe.cuisineType.includes(place)||place==='0')

    )
    this.setState({
      dataRecipe:newArray,
      health:health,
      place:place,
    })
  };

  // changeHealth(e) {
  //   if (this.state.placeRecipes.length > 0) {
  //     let placeArray = this.state.placeRecipes.filter((item) =>
  //       item.recipe.healthLabels.includes(e.target.value)
  //     );

  //     this.setState({
  //       dataRecipe: placeArray,
  //       heathRecipes: placeArray,
  //     });
  //   } else {
  //     let newArray = this.state.recipes.filter(
  //       (item) =>
  //         item.recipe.healthLabels.includes(e.target.value) ||
  //         e.target.value === "0"
  //     );

  //     console.log(newArray);
  //     this.setState({
  //       dataRecipe: newArray,
  //       heathRecipes: newArray,
  //     });
  //   }
  // }
  // changeCuisineType(e) {
  //   if (this.state.heathRecipes.length > 0) {
  //     let filterArray = this.state.heathRecipes.filter((item) =>
  //       item.recipe.cuisineType.includes(e.target.value)
  //     );

  //     this.setState({
  //       dataRecipe: filterArray,
  //       placeRecipes: filterArray,
  //     });
  //   } else {
  //     let newArray = this.state.recipes.filter(
  //       (item) =>
  //         item.recipe.cuisineType.includes(e.target.value) ||
  //         e.target.value === "0"
  //     );

  //     console.log(newArray);
  //     this.setState({
  //       dataRecipe: newArray,
  //       placeRecipes: newArray,
  //     });
  //   }
  // }

  render() {
    return (
      <Container>
        <Header />
        <main className="recipeMain">
          <Form className="recipeForm" onSubmit={(e) => this.recipeHandler(e)}>
            <Row>
              <Col lg={3}>
                {this.state.showResult && (
                  <Form.Select
                    aria-label="Default select example"
                    size="lg"
                    onChange={(e) => this.handelBoth(e.target.value,this.state.place)}
                  >
                    <option value="0">All Recipes</option>
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
                    onChange={(e) => this.handelBoth(this.state.health,e.target.value)}
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
              this.state.dataRecipe.map((item) => {
                return (
                  <Col lg={3} md={6} sm={12} className="recipeColCard">
                    <Card className="recipeCard">
                      <Card.Img variant="top" src={item.recipe.image} />
                      <Card.Body>
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
                          </div>

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
                            <p className="halal">Halal</p>
                          ) : (
                            <p className="notHalal">Not Halal</p>
                          )}
                        </Card.Text>
                        <a href={item.recipe.url}>
                          <Button className="buttonCard" variant="info">
                            Know More About Recipe
                          </Button>
                        </a>
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
