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

class NewRecipes extends Component {
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
              <Image src="https://via.placeholder.com/360x540" rounded />
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
              <h3>name of picture</h3>
            </div>
          </Col>
          <Col md={6} lg={4} sm={12}>
            <div className="imageFood">
              <Image src="https://via.placeholder.com/360x540" rounded />
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
              <h3>name of picture</h3>
            </div>
          </Col>
          <Col md={6} lg={4} sm={12}>
            <div className="imageFood">
              <Image src="https://via.placeholder.com/360x540" rounded />
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
              <h3>name of picture</h3>
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
