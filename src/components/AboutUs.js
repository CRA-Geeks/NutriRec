import React, { Component } from "react";

// import "./AboutUs.css";

import "./AboutUs.css";
import facebook from "../assets/icons/facebook.png";
import instagram from "../assets/icons/instagram.png";
import linkedin from "../assets/icons/linkedin.png";
import Aboutus from "../assets/imgs/Aboutus.jpg"
export class About extends Component {
  render() {
    return (
      <>
       
        <div className="container text-center py-5 mb-4">
        <div style={{borderStyle:'none'}} class="card">
          <div class="row no-gutters">
              
              <div class="col">
                <div class="card-block px-2">
                  <h4 style={{fontFamily:'impact'}} class="card-title">Who We Are</h4>
                  <p class="card-text"  style={{fontSize:'1.6rem',
                                               textAlign:'left',
                                                padding:'20px',
                                                textIndent:'50px',
                                                initialLetter:'1',
                                                fontFamily:'Anton',
                                                lineHeight:'1.6'
                                                }}>
                        We are Create React Apps Geeks team,Our team is madeup of smart and talented people that are passionate
                        about creating incridable apps.
                        We are all very different.But we have one thing that unites us all: programming. We are
                        not just a team, we are a family.</p>
              
                </div>
              </div>
              <div class="col-auto">
               <img style={{width:'500px',height:'350px',borderRadius:'15PX'}} src={Aboutus} class="img-fluid" alt=""/>
              </div>

            </div>
           
        </div>
        </div>

          <div className="container text-center py-5 mb-4">
            <h1 style={{ backgroundColor: '#EEEDE7' }} className="bg-secondary text-light head">
              Meet the CRA-Geeks Team
            </h1>
          </div>

          {/* //   <!-- Page Content --> */}
          <div className="container mt-5">
            <div className="row">
              {/* <!-- Team Member 1 --> */}
              <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-0 shadow">
                  <div class="show-image">
                    <img
                      src="https://avatars.githubusercontent.com/u/65775501?v=4"
                      className="card-img-top"
                      alt="..."
                    />
                    <nav className="aboutUsIcons">
                      <a href="https://www.facebook.com">
                        <img style={{ width: '40px', height: '40px' }} src={facebook} alt="fb" />{" "}
                      </a>

                      <a href="https://www.instagram.com">
                        <img style={{ width: '40px', height: '40px' }} src={instagram} alt="instagram" />{" "}
                      </a>

                      <a href="https://www.linkedin.com">
                        <img style={{ width: '40px', height: '40px' }} src={linkedin} alt="linkedin" />{" "}
                      </a>
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
                  <div class="show-image">
                    <img
                      src="https://avatars.githubusercontent.com/u/84707872?v=4"
                      className="card-img-top"
                      alt="..."
                    />
                    <nav className="aboutUsIcons">
                      <a href="https://www.facebook.com">
                        <img style={{ width: '40px', height: '40px' }} src={facebook} alt="fb" />{" "}
                      </a>

                      <a href="https://www.instagram.com">
                        <img style={{ width: '40px', height: '40px' }} src={instagram} alt="instagram" />{" "}
                      </a>

                      <a href="https://www.linkedin.com">
                        <img style={{ width: '40px', height: '40px' }} src={linkedin} alt="linkedin" />{" "}
                      </a>
                    </nav>
                  </div>
                  <div className="card-body text-center">
                    <h5 className="card-title mb-0">Murad Alkhatib</h5>
                    <div className="card-text text-black-50 head">
                      Full-Stack developer
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Team Member 3 --> */}
              <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-0 shadow">
                  <div class="show-image">
                    <img
                      src="https://avatars.githubusercontent.com/u/84713554?v=4"
                      className="card-img-top"
                      alt="..."
                    />
                    <nav className="aboutUsIcons">
                      <a href="https://web.facebook.com/yazan.alkharsbsheh">
                        <img style={{ width: '40px', height: '40px' }} src={facebook} alt="fb" />{" "}
                      </a>

                      <a href="https://www.instagram.com/alkharabshehyazan/">
                        <img style={{ width: '40px', height: '40px' }} src={instagram} alt="instagram" />{" "}
                      </a>

                      <a href="https://www.linkedin.com/in/yazan-alkharabsheh">
                        <img style={{ width: '40px', height: '40px' }} src={linkedin} alt="linkedin" />{" "}
                      </a>
                    </nav>
                  </div>
                  <div className="card-body text-center">
                    <h5 className="card-title mb-0">Yazan Alkharabsheh</h5>
                    <div className="card-text text-black-50 head">
                      Full-Stack developer
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Team Member 4 --> */}
              <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-0 shadow">
                  <div class="show-image">
                    <img
                      src="https://avatars.githubusercontent.com/u/75123784?v=4"
                      className="card-img-top"
                      alt="..."
                    />
                    <nav className="aboutUsIcons">
                      <a href="https://www.facebook.com">
                        <img style={{ width: '40px', height: '40px' }} src={facebook} alt="fb" />{" "}
                      </a>

                      <a href="https://www.instagram.com">
                        <img style={{ width: '40px', height: '40px' }} src={instagram} alt="instagram" />{" "}
                      </a>

                      <a href="https://www.linkedin.com">
                        <img style={{ width: '40px', height: '40px' }} src={linkedin} alt="linkedin" />{" "}
                      </a>
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
