import React, { Component } from "react";
import axios from 'axios';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
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
import "../styles/search.css";


export default class RecipeKey extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foodInfo: '',
    }
  }




  handleFoodInfo = (e) => {
    e.preventDefault();
    let food = e.target.food.value;
    let url = `http://localhost:8000/nuteri?food=${food}`
    try {
      axios.get(url).then(res => {
        let data = res.data
        this.setState({
          foodInfo: data
        })
        console.log(this.state.foodInfo);
      })
    }
    catch {

    }
  }



  render() {
    return (
      <Container>

        <Row>
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
          </Col>

          {/* ///////////////////////////////////////////////// */}


          <Col className="mt-6">

            {/* <div class="wrapper">
              <div class="typing-demo">
                This is a typing demo.
              </div>
            </div> */}


            <div class="container">
              <h4 class="neonText">
                If you are looking for the characteristics of a specific ingredient such as tomato or cheese,
              </h4>
              <h5 class="neonText">just search for it:</h5>

            </div>
            <form onSubmit={(e) => this.handleFoodInfo(e)}>
              <InputGroup className="mb-3">
                <FormControl
                  name='food'
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <Button variant="outline-secondary" type='submit' id="button-addon2">
                  Button
                </Button>

              </InputGroup>
            </form>
            {this.state.foodInfo.calories == 0 && <div class="alert alert-danger" role="alert">
             there is no data matching your search
            </div>
            }
            <ListGroup>
              <ListGroupItem><span>Calories : {this.state.foodInfo.calories}</span></ListGroupItem>
              <ListGroupItem><span>Weight : {this.state.foodInfo.weight}</span></ListGroupItem>
              <ListGroupItem><span>Glucose sugar :{this.state.foodInfo.suger}</span></ListGroupItem>
              <ListGroupItem><span>Vegetarian : {this.state.foodInfo.vegetarian}</span></ListGroupItem>
              <ListGroupItem><span>Peanut : {this.state.foodInfo.peanut}</span></ListGroupItem>
              <ListGroupItem><span>Pork : {this.state.foodInfo.pork}</span></ListGroupItem>
              <ListGroupItem><span>Al-cohol : {this.state.foodInfo.alcohol}</span></ListGroupItem>
            </ListGroup>

          </Col>


        </Row>

        <hr />
      </Container>
    );
  }
}
