import React, { Component } from "react";
import axios from "axios";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import {
  InputGroup,
  Button,
  FormControl,
  Row,
  Col,
  Container,
} from "react-bootstrap";
import { BiSearch } from "react-icons/bi";
import "../styles/RecipeKey.css";
// import "../styles/search.css";

export default class RecipeKey extends Component {
  constructor() {
    super();
    this.state = {
      foodInfo: {},
      newRecipe: [],
      firstIndex: 0,
      secondIndex: 0,
      thirdIndex: 0,
      lastIndex: 0,
      firstImage: "",
      secondImage: "",
      thirdImage: "",
      lastImage: "",
      firstName: "",
      secondName: "",
      thirdName: "",
      lastName: "",
    };
  }
  getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  componentDidMount() {
    axios
      .get(`http://localhost:8080/recipe?q=all`)
      .then((res) => {
        console.log(res.status);
        this.setState({
          newRecipe: res.data.hits.map((item) => item.recipe.image),
        });
        do {
          this.setState({
            firstIndex: this.getRandomNumber(
              0,
              this.state.newRecipe.length - 1
            ),
            secondIndex: this.getRandomNumber(
              0,
              this.state.newRecipe.length - 1
            ),
            thirdIndex: this.getRandomNumber(
              0,
              this.state.newRecipe.length - 1
            ),
            lastIndex: this.getRandomNumber(0, this.state.newRecipe.length - 1),
          });
        } while (
          this.state.firstIndex === this.state.secondIndex ||
          this.state.firstIndex === this.state.thirdIndex ||
          this.state.secondIndex === this.state.thirdIndex ||
          this.state.firstIndex === this.state.lastIndex ||
          this.state.secondIndex === this.state.lastIndex ||
          this.state.thirdIndex === this.state.lastIndex
        );
        this.setState({
          firstImage: this.state.newRecipe[this.state.firstIndex],
          secondImage: this.state.newRecipe[this.state.secondIndex],
          thirdImage: this.state.newRecipe[this.state.thirdIndex],
          lastImage: this.state.newRecipe[this.state.lastIndex],
          firstName: res.data.hits[this.state.firstIndex].recipe.label,
          secondName: res.data.hits[this.state.secondIndex].recipe.label,
          thirdName: res.data.hits[this.state.thirdIndex].recipe.label,
          lastName: res.data.hits[this.state.lastIndex].recipe.label,
        });
      })
      .catch((e) => {
        console.log("error");
      });
  }
  handleFoodInfo = (e) => {
    e.preventDefault();
    let food = e.target.food.value;
    let url = `http://localhost:8080/nuteri?food=${food}`;
    try {
      axios.get(url).then((res) => {
        let data = res.data;
        this.setState({
          foodInfo: data,
        });
      });
    } catch {}
  };
  render() {
    return (
      <Container>
        {/* <Row>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <Button variant="outline-secondary" id="button-addon2">
              <BiSearch />
            </Button>
          </InputGroup>
        </Row> */}
        {/* <Row className="text-center justify-content-around mb-5">
          <h3>RECIPE KEY</h3>
          <Col lg={2} md={4} sm={6} xs={12}>
            <a href="#">AL</a>
            Alcohol-free
          </Col>
          <Col lg={2} md={4} sm={6} xs={12}>
            <a href="#">V</a>
            Vegan
          </Col>
          <Col lg={2} md={4} sm={6} xs={12}>
            <a href="#">VE</a>
            Vegetarian
          </Col>
          <Col lg={2} md={4} sm={6} xs={12}>
            <a href="#">PF</a>
            Pork-free
          </Col>
          <Col lg={2} md={4} sm={6} xs={12}>
            <a href="#">NS</a>
            No-sugar
          </Col>
          <Col lg={2} md={4} sm={6} xs={12}>
            <a href="#">HL</a>
            Halal
          </Col>
        </Row> */}
        {/* <hr /> */}
        <Row>
          {/* <h2>MOST POPULAR RECIPES</h2>
          <Col lg={8} className="recipeItem m-2">
            <img src={this.state.firstImage} alt="" />
            <h4>01</h4>
            <h4>{this.state.firstName}</h4>
            <span>
              <a href="#">HL</a>
              <a href="#">HL</a>
              <a href="#">HL</a>
              <a href="#">HL</a>
              <a href="#">HL</a>
              <a href="#">HL</a>
              <a href="#">HL</a>
            </span>
          </Col>
          <Col lg={8} className="recipeItem m-2 jus">
            <img src={this.state.secondImage} alt="" />
            <h4>01</h4>
            <h4>{this.state.secondName}</h4>
            <span>
              <a href="#">HL</a>
              <a href="#">HL</a>
              <a href="#">HL</a>
              <a href="#">HL</a>
              <a href="#">HL</a>
              <a href="#">HL</a>
              <a href="#">HL</a>
            </span>
          </Col>
          <Col lg={8} className="recipeItem m-2">
            <img src={this.state.thirdImage} alt="" />
            <h4>01</h4>
            <h4>{this.state.thirdName}</h4>
            <span>
              <a href="#">HL</a>
              <a href="#">HL</a>
              <a href="#">HL</a>
              <a href="#">HL</a>
              <a href="#">HL</a>
              <a href="#">HL</a>
              <a href="#">HL</a>
            </span>
          </Col>
          <Col lg={8} className="recipeItem m-2 ">
            <img src={this.state.lastImage} alt="" />
            <h4>01</h4>
            <h4>{this.state.lastName}</h4>
            <span>
              <a href="#">HL</a>
              <a href="#">HL</a>
              <a href="#">HL</a>
              <a href="#">HL</a>
              <a href="#">HL</a>
              <a href="#">HL</a>
              <a href="#">HL</a>
            </span>
          </Col> */}
          <Col xs={8}>
            <Row>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <Button variant="outline-secondary" id="button-addon2">
                  <BiSearch />
                </Button>
              </InputGroup>
            </Row>
            <Row className="text-center justify-content-around mb-5">
              <h3>RECIPE KEY</h3>
              <Col lg={2} md={4} sm={6} xs={12}>
                <a href="#">AL</a>
                Alcohol-free
              </Col>
              <Col lg={2} md={4} sm={6} xs={12}>
                <a href="#">V</a>
                Vegan
              </Col>
              <Col lg={2} md={4} sm={6} xs={12}>
                <a href="#">VE</a>
                Vegetarian
              </Col>
              <Col lg={2} md={4} sm={6} xs={12}>
                <a href="#">PF</a>
                Pork-free
              </Col>
              <Col lg={2} md={4} sm={6} xs={12}>
                <a href="#">NS</a>
                No-sugar
              </Col>
              <Col lg={2} md={4} sm={6} xs={12}>
                <a href="#">HL</a>
                Halal
              </Col>
            </Row>
            <hr />
            <Row>
              <h2>MOST POPULAR RECIPES</h2>
              <Col lg={8} className="recipeItem m-2">
                <img src={this.state.firstImage} alt={this.state.firstName} />
                <h4>01</h4>
                <h4>{this.state.firstName}</h4>
                <span>
                  <a href="#">HL</a>
                  <a href="#">HL</a>
                  <a href="#">HL</a>
                </span>
              </Col>
              <Col lg={8} className="recipeItem m-2 jus">
                <img src={this.state.secondImage} alt={this.state.secondName} />
                <h4>02</h4>
                <h4>{this.state.secondName}</h4>
                <span>
                  <a href="#">HL</a>
                  <a href="#">HL</a>
                  <a href="#">HL</a>
                </span>
              </Col>
              <Col lg={8} className="recipeItem m-2">
                <img src={this.state.thirdImage} alt={this.state.thirdName} />
                <h4>03</h4>
                <h4>{this.state.thirdName}</h4>
                <span>
                  <a href="#">HL</a>
                  <a href="#">HL</a>
                  <a href="#">HL</a>
                </span>
              </Col>
            </Row>
          </Col>

          {/* ///////////////////////////////////////////////// */}

          <Col className="mt-6">
            {/* <div class="wrapper">
              <div class="typing-demo">
                This is a typing demo.
              </div>
            </div> */}

            <div className="container">
              <h4 className="neonText">
                If you are looking for the characteristics of a specific
                ingredient such as tomato or cheese,
              </h4>
              <h5 className="neonText">just search for it:</h5>
            </div>
            <form onSubmit={(e) => this.handleFoodInfo(e)}>
              <InputGroup className="mb-3">
                <FormControl
                  name="food"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <Button
                  variant="outline-secondary"
                  type="submit"
                  id="button-addon2"
                >
                  Button
                </Button>
              </InputGroup>
            </form>
            {this.state.foodInfo.calories == 0 && (
              <div className="alert alert-danger" role="alert">
                there is no data matching your search
              </div>
            )}
            <ListGroup>
              <ListGroupItem>
                <span>Calories : {this.state.foodInfo.calories}</span>
              </ListGroupItem>
              <ListGroupItem>
                <span>Weight : {this.state.foodInfo.weight}</span>
              </ListGroupItem>
              <ListGroupItem>
                <span>Glucose sugar :{this.state.foodInfo.suger}</span>
              </ListGroupItem>
              <ListGroupItem>
                <span>Vegetarian : {this.state.foodInfo.vegetarian}</span>
              </ListGroupItem>
              <ListGroupItem>
                <span>Peanut : {this.state.foodInfo.peanut}</span>
              </ListGroupItem>
              <ListGroupItem>
                <span>Pork : {this.state.foodInfo.pork}</span>
              </ListGroupItem>
              <ListGroupItem>
                <span>Al-cohol : {this.state.foodInfo.alcohol}</span>
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
        <hr />
      </Container>
    );
  }
}
