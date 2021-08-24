import React, { Component } from "react";
import "./AboutUs.css";
import Aboutus from "../assets/imgs/Aboutus.jpg";
export class About extends Component {
  render() {
    return (
      <>
        <div className="container text-center py-5 mb-4">
          <div style={{ borderStyle: "none" }} className="card">
            <div className="row no-gutters">
              <div className="col">
                <div className="card-block px-2">
                  <h4 style={{ fontFamily: "impact" }} className="card-title">
                    Who We Are
                  </h4>
                  <p
                    className="card-text"
                    style={{
                      fontSize: "1.6rem",
                      textAlign: "left",
                      padding: "20px",
                      textIndent: "50px",
                      initialLetter: "1",
                      fontFamily: "Anton",
                      lineHeight: "1.6",
                    }}
                  >
                    We are Create React Apps Geeks team,Our team is makeup of
                    smart and talented people that are passionate about creating
                    incredible apps. We are all very different.But we have one
                    thing that unites us all: programming. We are not just a
                    team, we are a family.
                  </p>
                </div>
              </div>
              <div className="col-auto">
                <img
                  style={{
                    width: "500px",
                    height: "350px",
                    borderRadius: "15PX",
                  }}
                  src={Aboutus}
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container text-center py-5 mb-4">
          <h1
            style={{ backgroundColor: "#EEEDE7" }}
            className="bg-secondary text-light head"
          >
            Meet the CRA-Geeks Team
          </h1>
        </div>

        {/* //   <!-- Page Content --> */}
        <div className="container mt-5">
          <div className="row">
            {/* <!-- Team Member 1 --> */}
            <div className="col-xl-3 col-md-6 mb-4">
              <div className="card border-0 shadow">
                <div className="show-image">
                  <img
                    src="https://avatars.githubusercontent.com/u/65775501?v=4"
                    className="card-img-top"
                    alt="..."
                  />
                  <nav className="aboutUsIcons">
                    <ul>
                      <li>
                        <a
                          href="https://www.facebook.com/mamoon.husen"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fa fa-facebook fa-2x"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://github.com/mamoon100"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fa fa-github fa-2x"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/in/mamoon100/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fa fa-linkedin fa-2x"></i>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title mb-0">Mamoun Hussein</h5>
                  <div className="card-text text-black-50 head">
                    Full-Stack developer
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Team Member 2 --> */}
            <div className="col-xl-3 col-md-6 mb-4">
              <div className="card border-0 shadow">
                <div className="show-image">
                  <img
                    src="https://avatars.githubusercontent.com/u/84707872?v=4"
                    className="card-img-top"
                    alt="..."
                  />
                  <nav className="aboutUsIcons">
                    <ul>
                      <li>
                        <a
                          href="https://web.facebook.com/morad.alkhteb"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fa fa-facebook fa-2x"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://github.com/MoradAlkhatib"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fa fa-github fa-2x"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/in/muradkhatib/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fa fa-linkedin fa-2x"></i>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title mb-0">Murad Al-Khatib</h5>
                  <div className="card-text text-black-50 head">
                    Full-Stack developer
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Team Member 3 --> */}
            <div className="col-xl-3 col-md-6 mb-4">
              <div className="card border-0 shadow">
                <div className="show-image">
                  <img
                    src="https://avatars.githubusercontent.com/u/84713554?v=4"
                    className="card-img-top"
                    alt="..."
                  />
                  <nav className="aboutUsIcons">
                    <ul>
                      <li>
                        <a
                          href="https://web.facebook.com/yazan.alkharsbsheh"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fa fa-facebook fa-2x"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://github.com/yazanabdulhafez"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fa fa-github fa-2x"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/in/yazan-alkharabsheh"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fa fa-linkedin fa-2x"></i>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title mb-0">Yazan Al-Kharabsheh</h5>
                  <div className="card-text text-black-50 head">
                    Full-Stack developer
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Team Member 4 --> */}
            <div className="col-xl-3 col-md-6 mb-4">
              <div className="card border-0 shadow">
                <div className="show-image">
                  <img
                    src="https://avatars.githubusercontent.com/u/75123784?v=4"
                    className="card-img-top"
                    alt="..."
                  />
                  <nav className="aboutUsIcons">
                    <ul>
                      <li>
                        <a
                          href="https://web.facebook.com/hiba.almade"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fa fa-facebook fa-2x"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://github.com/Hiba-Almade"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fa fa-github fa-2x"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/in/hiba-almade-29787b205/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fa fa-linkedin fa-2x"></i>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title mb-0">Hiba Almade</h5>
                  <div className="card-text text-black-50 head">
                    Full-Stack developer
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- /.row --> */}
        </div>
        {/* <!-- /.container --> */}
      </>
    );
  }
}

export default About;
