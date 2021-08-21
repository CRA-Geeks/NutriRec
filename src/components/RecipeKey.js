import React, { Component } from "react";
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

export default class RecipeKey extends Component {
  render() {
    return (
      <Container>
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
            <img src="https://via.placeholder.com/130" alt="" />
            <h4>01</h4>
            <h4>Vegan Strwebery Cake</h4>
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
            <img src="https://via.placeholder.com/130" alt="" />
            <h4>01</h4>
            <h4>Vegan Strwebery Cake</h4>
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
            <img src="https://via.placeholder.com/130" alt="" />
            <h4>01</h4>
            <h4>Vegan Strwebery Cake</h4>
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
            <img src="https://via.placeholder.com/130" alt="" />
            <h4>01</h4>
            <h4>Vegan Strwebery Cake</h4>
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
        </Row>
        <hr />
      </Container>
    );
  }
}
