import React, { Component } from "react";
import axios from "axios";

import { Row, Col, Container, Badge } from "react-bootstrap";

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
      roundArr: [],
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
          roundArr: [
            {
              img: this.state.newRecipe[this.state.firstIndex],
              text: res.data.hits[this.state.firstIndex].recipe.label,
              link: res.data.hits[this.state.firstIndex].recipe.url,
              label: res.data.hits[this.state.firstIndex].recipe.healthLabels,
            },
            {
              img: this.state.newRecipe[this.state.secondIndex],
              text: res.data.hits[this.state.secondIndex].recipe.label,
              link: res.data.hits[this.state.secondIndex].recipe.url,
              label: res.data.hits[this.state.secondIndex].recipe.healthLabels,
            },
            {
              img: this.state.newRecipe[this.state.thirdIndex],
              text: res.data.hits[this.state.thirdIndex].recipe.label,
              link: res.data.hits[this.state.thirdIndex].recipe.url,
              label: res.data.hits[this.state.thirdIndex].recipe.healthLabels,
            },
          ],
        });
      })
      .catch((e) => {
        console.log("error");
      });
  }

  render() {
    return (
      <Container>
        {/* <Row> */}
        <Row className="text-center justify-content-around mb-5">
          <h3>RECIPE KEY</h3>
          <Col lg={2} md={4} sm={6} xs={12}>
            <h4>
              Alcohol Free <Badge bg="primary">Al</Badge>
            </h4>
          </Col>
          <Col lg={2} md={4} sm={6} xs={12}>
            <h4>
              Vegan <Badge bg="success">V</Badge>
            </h4>
          </Col>
          <Col lg={2} md={4} sm={6} xs={12}>
            <h4>
              Vegetarian <Badge bg="warning">Ve</Badge>
            </h4>
          </Col>
          <Col lg={2} md={4} sm={6} xs={12}>
            <h4>
              Pork-free <Badge bg="danger">PF</Badge>
            </h4>
          </Col>
          <Col lg={2} md={4} sm={6} xs={12}>
            <h4>
              No-sugar <Badge bg="info">NS</Badge>
            </h4>
          </Col>
          <Col lg={2} md={4} sm={6} xs={12}>
            <h4>
              Halal <Badge bg="success">H</Badge>
            </h4>
          </Col>
        </Row>
        <hr />
        <Row className="roundUp">
          <h2>MOST POPULAR RECIPES</h2>
          {this.state.roundArr.map((item, index) => {
            return (
              <Col
                lg={8}
                key={index}
                className="recipeItem m-2"
                onClick={() => window.open(item.link, "_blank")}
              >
                <img src={item.img} alt={item.text} />

                <h4> {index + 1} </h4>

                <h4 style={{ width: "35rem" }}> {item.text} </h4>
                <div>
                  {item.label.includes("Pork-Free") &&
                    item.label.includes("Alcohol-Free") && (
                      <p>
                        <Badge bg="success">Halal</Badge>
                      </p>
                    )}

                  {item.label.includes("Pork-Free") && (
                    <p>
                      <Badge bg="danger">PF</Badge>
                    </p>
                  )}
                  {item.label.includes("Alcohol-Free") && (
                    <p>
                      <Badge bg="primary">Al</Badge>
                    </p>
                  )}
                  {item.label.includes("Sugar-Free") && (
                    <p>
                      <Badge bg="info">NS</Badge>
                    </p>
                  )}
                  {item.label.includes("Vegan") && (
                    <p>
                      <Badge bg="success">V</Badge>
                    </p>
                  )}
                  {item.label.includes("Vegetarian") && (
                    <p>
                      <Badge bg="warning">Ve</Badge>
                    </p>
                  )}
                </div>
                <span>
                  {/* {item.healthLabels.map((label) => {
                    return (
                      <Badge
                        key={label}
                        bg={label}
                        text={label}
                        className="badge-pill badge-pill-secondary"
                      >
                        {label}
                      </Badge>
                    );
                  })} */}

                  {/* <h4>
                    <Badge bg="success">H</Badge>
                  </h4>
                  <h4>
                    <Badge bg="success">H</Badge>
                  </h4>
                  <h4>
                    <Badge bg="success">H</Badge>
                  </h4> */}
                </span>
              </Col>
            );
          })}
        </Row>
        <hr />
      </Container>
    );
  }
}
