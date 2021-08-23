import React, { Component } from "react";
import { Container, Row, Col, Image, ProgressBar } from "react-bootstrap";
// import "../styles/Footer.css";
import cake from "../assets/imgs/cake.jpg";
import scalary from "../assets/imgs/scalary.jpg";
import meatballes from "../assets/imgs/meatballes.jpg";
import salad from "../assets/imgs/salad.jpg";
import logo from "../assets/orange-fruit-logo-design-illustration-icon-free-vector-removebg-preview.png";

class Footer extends Component {
  render() {
    return (
      <footer>
        {/* <Container> */}
        <section>
          <img src={logo} alt="logo" />
          <h5>NutriRec</h5>
        </section>
        <span>
          <p>This Site was Build And Designed by All Love The by the</p>
          <p>All Right Reserved CRA-Geeks &copy; 2021</p>
        </span>
        {/* <Row>
            <Col sm className="mx-auto h-100">
              <Row className="mt-5">
                <Col style={{ fontFamily: "Viga" }} sm className="cardHeader">
                  find us elsewhere
                </Col>
                <Col sm>
                  <h6 className="cardHeader">
                    <b style={{ fontFamily: "Viga" }}>@NUTRIREC</b>
                  </h6>
                </Col>
                <Col sm></Col>
              </Row>

              <Row className="mt-5">
                <Col sm>
                  <span className="span d-flex justify-content-between">
                    {" "}
                    <p style={{ fontFamily: "Viga" }}>Insta</p> <p>3M</p>
                  </span>
                  <ProgressBar variant="secondary" now={100} />
                </Col>
                <Col sm>
                  {" "}
                  <span className="span d-flex justify-content-between">
                    {" "}
                    <p style={{ fontFamily: "Viga" }}>pin</p> <p>3M</p>
                  </span>
                  <ProgressBar variant="info" now={100} />
                </Col>
                <Col sm>
                  {" "}
                  <span className="span d-flex justify-content-between">
                    {" "}
                    <p style={{ fontFamily: "Viga" }}>Face</p> <p>3M</p>
                  </span>
                  <ProgressBar variant="secondary" now={100} />
                </Col>
              </Row>
              <Row className="mt-5">
                <Col className=" d-flex justify-content-center ">
                  <Image
                    className="img-fluid mb-4"
                    src={scalary}
                    alt="Image"
                    width="150"
                    height="150"
                  />
                </Col>
                <Col className=" d-flex justify-content-center ">
                  <Image
                    className="img-fluid mb-4"
                    src={meatballes}
                    alt="Image"
                    width="150"
                    height="150"
                  />
                </Col>
                <Col className=" d-flex justify-content-center ">
                  <Image
                    className="img-fluid mb-4"
                    src={salad}
                    alt="Image"
                    width="150"
                    height="150"
                  />
                </Col>
              </Row>
            </Col>
          </Row>

          <Row className="mt-5 d-flex justify-content-around"></Row>

          <Row className="mt-2">
            <hr />
          </Row>

          <Row className="mt-5 d-flex justify-content-center">
            <h4 style={{ fontFamily: "Ultra" }} className="footer">
              All copy right : CRA-Geeks Team
            </h4>
          </Row> */}
        {/* </Container> */}
      </footer>
    );
  }
}

export default Footer;
