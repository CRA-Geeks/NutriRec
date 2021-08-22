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
import axios from "axios";
export default class RecipeKey extends Component {
  constructor(){
    super();
    this.state={
      newRecipe:[],
      firstIndex:0,
      secondIndex:0,
      thirdIndex:0,
      lastIndex :0,
      firstImage:'',
      secondImage:'',
      thirdImage:'',
      lastImage:'',
      firstName:'',
      secondName:'',
      thirdName:'',
      lastName:'',
    }
   
    
  }
  getRandomNumber(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1) + min); 
 }
 componentDidMount(){
   
   axios
   .get(`http://localhost:8080/recipe?q=all`)
   .then((res) => {
     console.log(res);
     this.setState({
       newRecipe:res.data.hits.map(item=> item.recipe.image),
     });
     do{
       this.setState({
         firstIndex:this.getRandomNumber(0,this.state.newRecipe.length-1),
         secondIndex:this.getRandomNumber(0,this.state.newRecipe.length-1),
         thirdIndex:this.getRandomNumber(0,this.state.newRecipe.length-1),
         lastIndex:this.getRandomNumber(0,this.state.newRecipe.length-1),

       })
     
       
 
   }while(this.state.firstIndex === this.state.secondIndex ||
     this.state.firstIndex === this.state.thirdIndex || 
     this.state.secondIndex === this.state.thirdIndex
     || 
     this.state.firstIndex === this.state.lastIndex|| 
     this.state.secondIndex === this.state.lastIndex|| 
     this.state.thirdIndex === this.state.lastIndex
     
     )
   this.setState({
    firstImage:this.state.newRecipe[this.state.firstIndex],
    secondImage:this.state.newRecipe[this.state.secondIndex],
    thirdImage:this.state.newRecipe[this.state.thirdIndex],
    lastImage:this.state.newRecipe[this.state.lastIndex],
    firstName:res.data.hits[this.state.firstIndex].recipe.label,
    secondName:res.data.hits[this.state.secondIndex].recipe.label,
    thirdName:res.data.hits[this.state.thirdIndex].recipe.label,
    lastName:res.data.hits[this.state.lastIndex].recipe.label,
   })
     
   })
   .catch((e) => {
     console.log("error");
   });
   
 }

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
          </Col>
        </Row>
        <hr />
      </Container>
    );
  }
}
