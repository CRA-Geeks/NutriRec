import React, { Component } from "react";
import {
  Image,
  Row,
  Col,
  InputGroup,
  FormControl,
  Container,
} from "react-bootstrap";

// import "../styles/newRecipes.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import axios from "axios";
class NewRecipes extends Component {
  constructor() {
    super();
    this.state = {
      newRecipe: [],
      firstIndex: 0,
      secondIndex: 0,
      thirdIndex: 0,
      firstImage: "",
      secondImage: "",
      thirdImage: "",
      firstName: "",
      secondName: "",
      thirdName: "",
      mixImgAndText: [],
      links: [],
    };
  }
  getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  componentDidMount() {
    axios
      .get(`http://localhost:8080/recipe?q=new`)
      .then((res) => {
        // console.log(res.data.hits[0].recipe.url);
        this.setState({
          newRecipe: res.data.hits.map((item) => item.recipe.image),
          links: res.data.hits.map((item) => item.recipe.url),
        });
        console.log(this.state.links);
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
          });
        } while (
          this.state.firstIndex === this.state.secondIndex ||
          this.state.firstIndex === this.state.thirdIndex ||
          this.state.secondIndex === this.state.thirdIndex
        );
        // console.log(this.state.newRecipe);
        this.setState({
          // firstImage: this.state.newRecipe[this.state.firstIndex],
          // secondImage: this.state.newRecipe[this.state.secondIndex],
          // thirdImage: this.state.newRecipe[this.state.thirdIndex],
          // firstName: res.data.hits[this.state.firstIndex].recipe.label,
          // secondName: res.data.hits[this.state.secondIndex].recipe.label,
          // thirdName: res.data.hits[this.state.thirdIndex].recipe.label,
          mixImgAndText: [
            {
              image: this.state.newRecipe[this.state.firstIndex],
              text: res.data.hits[this.state.firstIndex].recipe.label,
              link: res.data.hits[this.state.firstIndex].recipe.url,
            },
            {
              image: this.state.newRecipe[this.state.secondIndex],
              text: res.data.hits[this.state.secondIndex].recipe.label,
              link: res.data.hits[this.state.secondIndex].recipe.url,
            },
            {
              image: this.state.newRecipe[this.state.thirdIndex],
              text: res.data.hits[this.state.thirdIndex].recipe.label,
              link: res.data.hits[this.state.thirdIndex].recipe.url,
            },
          ],
        });
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
              {/* <h1>CRA</h1> */}
              <div>
                <span>Simple Recipes That</span>
                <span> Make You Feel Good</span>
              </div>
            </div>
            <h2>NEW RECIPES</h2>
            {/* <p className="paragraphShow">
              show me every things <FaLongArrowAltRight />{" "}
            </p> */}
          </Col>
        </Row>

        <Row>
          {this.state.mixImgAndText.map((item, index) => (
            <Col key={index} className="imgAndText" lg={4} md={12}>
              <div className="imgAndText">
                <Image
                  src={item.image}
                  className="img-responsive"
                  alt={item.text}
                  onClick={() => window.open(item.link, "_blank")}
                />
                <div className="imgAndText-text">
                  <h4>{item.text}</h4>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        <hr />
      </Container>
    );
  }
}

export default NewRecipes;
