import React, { Component } from "react";
import {
  Image,
  Row,
  Col,
  InputGroup,
  FormControl,
  Container,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/newRecipes.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import axios from "axios";
class NewRecipes extends Component {
   
   constructor(){
     super();
     this.state={
       newRecipe:[],
       firstIndex:0,
       secondIndex:0,
       thirdIndex:0,
       firstImage:'',
       secondImage:'',
       thirdImage:'',
       firstName:'',
       secondName:'',
       thirdName:'',
     }
    
     
   }
   getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
  }
  componentDidMount(){
    
    axios
    .get(`http://localhost:8080/recipe?q=new`)
    .then((res) => {
      console.log(res.data.hits[0].recipe.label);
      this.setState({
        newRecipe:res.data.hits.map(item=> item.recipe.image),
      });
      do{
        this.setState({
          firstIndex:this.getRandomNumber(0,this.state.newRecipe.length-1),
          secondIndex:this.getRandomNumber(0,this.state.newRecipe.length-1),
          thirdIndex:this.getRandomNumber(0,this.state.newRecipe.length-1),

        })
      
        
  
    }while(this.state.firstIndex === this.state.secondIndex || this.state.firstIndex === this.state.thirdIndex || this.state.secondIndex === this.state.thirdIndex)
    this.setState({
      firstImage:this.state.newRecipe[this.state.firstIndex],
      secondImage:this.state.newRecipe[this.state.secondIndex],
      thirdImage:this.state.newRecipe[this.state.thirdIndex],
      firstName:res.data.hits[this.state.firstIndex].recipe.label,
      secondName:res.data.hits[this.state.secondIndex].recipe.label,
      thirdName:res.data.hits[this.state.thirdIndex].recipe.label,
      
    })
      
    })
    .catch((e) => {
      console.log(e);
    });
    
  }

 

  render() {
    return (
      <Container>
        <Row className="mb-3">
          <Col className="firstRow">
            <div className="firstParagraph">
              <h1>CRA</h1>
              <div>
                <span>Simple Recipes That</span>
                <span> Make You Feel Good</span>
              </div>
            </div>
            <h2>NEW RECIPES</h2>
            <p className="paragraphShow">
              show me every things <FaLongArrowAltRight />{" "}
            </p>
          </Col>
        </Row>

        <Row className="secondeRow">
          <Col md={6} lg={4} sm={12}>
            <div className="imageFood">
              <Image src={this.state.firstImage} rounded />
              <div className="circleLinks">
                <a href="">GF</a>
                <a href="" className="secondLink">
                  VG
                </a>
                <a href="" className="thirdLink">
                  V
                </a>
                <a href="" className="forthLink">
                  DF
                </a>
                <a href="" className="fifthLink">
                  NS
                </a>
              </div>
              <h3>{this.state.firstName}</h3>
            </div>
          </Col>
          <Col md={6} lg={4} sm={12}>
            <div className="imageFood">
              <Image src={this.state.secondImage}  rounded />
              <div className="circleLinks">
                <a href="">GF</a>
                <a href="" className="secondLink">
                  VG
                </a>
                <a href="" className="thirdLink">
                  V
                </a>
                <a href="" className="forthLink">
                  DF
                </a>
                <a href="" className="fifthLink">
                  NS
                </a>
              </div>
              <h3>{this.state.secondName}</h3>
            </div>
          </Col>
          <Col md={6} lg={4} sm={12}>
            <div className="imageFood">
              <Image src={this.state.thirdImage}  rounded />
              <div className="circleLinks">
                <a href="">GF</a>
                <a href="" className="secondLink">
                  VG
                </a>
                <a href="" className="thirdLink">
                  V
                </a>
                <a href="" className="forthLink">
                  DF
                </a>
                <a href="" className="fifthLink">
                  NS
                </a>
              </div>
              <h3>{this.state.thirdName}</h3>
            </div>
          </Col>
        </Row>

        <Row className="thirdRow">
          <p className="arrow">
            show me every things <FaLongArrowAltRight />{" "}
          </p>
        </Row>

        <Row className="lastRow">
          <Col md={6} lg={3} sm={12}>
            <h2>*Want more deliciousness?</h2>
          </Col>
          <Col md={6} lg={6} sm={12}>
            {" "}
            <p>
              Subscribe here and we’ll send you an email as new recipes are
              published AND our fan favorites ebook!
            </p>
          </Col>
          <Col md={6} lg={3} sm={12}>
            {" "}
            <InputGroup size="lg" className="inputGroup">
              <FormControl
                aria-label="Large"
                aria-describedby="inputGroup-sizing-sm"
                placeholder="EMAIL ADDRESS ....."
              />
              <InputGroup.Text id="inputGroup-sizing-lg">
                Submit
              </InputGroup.Text>
            </InputGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default NewRecipes;
