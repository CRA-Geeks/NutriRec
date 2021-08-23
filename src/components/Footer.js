import React, { Component } from "react";
import { Container, Row, Col, Image, ProgressBar } from "react-bootstrap";
import "../styles/Footer.css";
import cake from "../assets/imgs/cake.jpg";
import scalary from "../assets/imgs/scalary.jpg";
import meatballes from "../assets/imgs/meatballes.jpg";
import salad from "../assets/imgs/salad.jpg";

class Footer extends Component {
  render() {
    return (
      <>
        <hr style={{ height: "4px" }} />
        <footer style={{ backgroundColor: "#C9CCD5" }}>
          <Container>
            <Row>
              {/* <Col sm className="partOne d-flex justify-content-center mt-5 ">
                <Row>
                  <Col sm className=" d-flex justify-content-center">
                    <Image
                      className=" block-example border border-white img-fluid mx-4 my-4"
                      src={cake}
                      alt="Image"
                      thumbnail
                    />
                  </Col>
                </Row>
              </Col> */}

              {/* // part 1-2 number + Images */}
              <Col sm className="mx-auto h-100">
                {/* // find ..... */}
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
                {/* // numbers */}
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
                {/* // Images */}
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

            {/* ///////////////////////////////////////////////// */}

            {/* // part 2  */}
            <Row className="mt-5 d-flex justify-content-around">
              {/* // icon */}
              {/* <Col sm className="mt-5 d-flex justify-content-around">
                <p className="cardHeader para" style={{ fontFamily: "Viga" }}>
                  Find US
                </p>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-award"
                  viewBox="0 0 16 16"
                >
                  <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z" />
                  <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-award"
                  viewBox="0 0 16 16"
                >
                  <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z" />
                  <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-award"
                  viewBox="0 0 16 16"
                >
                  <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z" />
                  <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-award"
                  viewBox="0 0 16 16"
                >
                  <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z" />
                  <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-award"
                  viewBox="0 0 16 16"
                >
                  <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z" />
                  <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-award"
                  viewBox="0 0 16 16"
                >
                  <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z" />
                  <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
                </svg>
              </Col> */}
              {/* // logo */}
              {/* <Col sm className=" d-flex justify-content-center">
                  <Image
                    className="img-fluid mb-4 Image-circle"
                    src="https://www.creativefabrica.com/wp-content/uploads/2020/02/12/Food-Logo-Graphics-1-99-580x386.jpg"
                    alt="Cinque Terre"
                    width="120"
                    height="120"
                  />
                </Col> */}
              {/* // 2 line text */}
              {/* <Col sm md={{ offset: 1 }}>
                <Row className=" d-flex justify-content-center">
                  <h6 style={{ fontFamily: "Viga" }} className="footer">
                    Simple Recipes That
                  </h6>
                </Row>
                <Row className=" d-flex justify-content-center">
                  <h6 style={{ fontFamily: "Viga" }} className="footer">
                    Make You Feel Good
                  </h6>
                </Row>
              </Col> */}
            </Row>

            {/* ///////////////////////////////////////////////////// */}

            {/* //part 3 */}

            <Row className="mt-2">
              {/* // line */}
              {/* <ProgressBar variant="black" now={100} /> */}
              <hr />
            </Row>
            {/* ///////////////////////////////////////////////////////// */}
            {/* // part 4  */}

            {/* <Row
              style={{ fontFamily: "Yeseva One" }}
              className=" d-flex justify-content-center mt-5"
            >
              <Col sm className=" d-flex justify-content-center">
                <a href="#" style={{ textDecoration: "none" }}>
                  {" "}
                  Recipes
                </a>
              </Col>
              <Col sm className=" d-flex justify-content-center">
                <a href="#" style={{ textDecoration: "none" }}>
                  Blogger Resources
                </a>
              </Col>
              <Col sm className=" d-flex justify-content-center">
                <a href="#" style={{ textDecoration: "none" }}>
                  Cookbook
                </a>
              </Col>
              <Col sm className=" d-flex justify-content-center">
                <a href="#" style={{ textDecoration: "none" }}>
                  Shop
                </a>
              </Col>
              <Col sm className=" d-flex justify-content-center">
                <a href="#" style={{ textDecoration: "none" }}>
                  Jobs
                </a>
              </Col>
              <Col sm className=" d-flex justify-content-center">
                <a href="#" style={{ textDecoration: "none" }}>
                  About
                </a>
              </Col>
            </Row> */}

            <Row className="mt-5 d-flex justify-content-center">
              <h4 style={{ fontFamily: "Ultra" }} className="footer">
                All copy right : CRA-Geeks Team
              </h4>
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default Footer;
