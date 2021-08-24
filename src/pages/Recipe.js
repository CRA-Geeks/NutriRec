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
import TagsModal from "../components/TagsModal";

class Recipe extends Component {
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
      health: "0",
      place: "0",
      favArr: [],
      tags: [],
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
        })
        .then(() => {
          // this.getUser();
          let arr = this.state.favArr;
          arr.push(obj);
          this.setState({
            favArr: arr,
          });
        })
        .then(() => {
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
        });

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
  // arr- user  , arr - rec 

  handelBoth(health, place) {
    
    let newArray = []
    if (health === 'your-preferences') {
      axios
      .get(`http://localhost:8080/user/${this.props.auth0.user.email}`)
      .then((response) => {
       this.setState({
         tags:response.data.tags,
       })
      console.log(this.state.tags)
      newArray = this.state.recipes.filter((item) => this.state.tags.every((ele) => item.recipe.healthLabels.includes(ele)))
      console.log(newArray)
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


  }

  render() {
    return (
      <Container>
        <Header />
        <main className="recipeMain">
          {/* <Form className="recipeForm" onSubmit={(e) => this.recipeHandler(e)}> */}
          {/* </main> */}

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
                        {this.props.auth0.isAuthenticated && (
                          <Button
                            onClick={() => this.addtofav(item.recipe)}
                            id="myBtn"
                          >
                            Add to favlist
                          </Button>
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
