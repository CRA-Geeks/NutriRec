import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import "../styles/RoundUb.css";
import { BsArrowRight } from "react-icons/bs";

export default class RoundUb extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col className="textCol">
            <h2>RECIPE ROUND-UPS</h2>
            <p>
              show me everything <BsArrowRight />
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={3}>
            <section>
              <img src="https://via.placeholder.com/280x420" alt="food" />
              <span>
                <a href="#">HL</a>
                <a href="#">HL</a>
                <a href="#">HL</a>
              </span>
            </section>
          </Col>
          <Col lg={3}>
            <section>
              <img src="https://via.placeholder.com/280x420" alt="food" />
              <span>
                <a href="#">HL</a>
                <a href="#">HL</a>
                <a href="#">HL</a>
              </span>
            </section>
          </Col>
          <Col lg={3}>
            <section>
              <img src="https://via.placeholder.com/280x420" alt="food" />
              <span>
                <a href="#">HL</a>
                <a href="#">HL</a>
                <a href="#">HL</a>
              </span>
            </section>
          </Col>
          <Col lg={3}>
            <section>
              <img src="https://via.placeholder.com/280x420" alt="food" />
              <span>
                <a href="#">HL</a>
                <a href="#">HL</a>
                <a href="#">HL</a>
              </span>
            </section>
          </Col>
        </Row>
      </Container>
    );
  }
}
