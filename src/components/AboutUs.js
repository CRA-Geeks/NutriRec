import React, { Component } from "react";
// import "./AboutUs.css";
export class About extends Component {
  render() {
    return (
      <>
        <div className="p-5 text-center bg-image imgesss mt-5">
          <div className="mask">
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="text-black">
                <h4 className="bg-light mb-3 mt-5">
                  We are all very different. We were born in different cities,
                  at different times, we love different music, food and movies.
                  But we have one thing that unites us all: programming. We are
                  not just a team, we are a family.
                </h4>
                <a
                  className="btn btn-outline-dark btn-lg"
                  href="#!"
                  role="button"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container text-center py-5 mb-4">
          <h1 className="bg-secondary text-light head">
            Meet the CRA-Geeks Team
          </h1>
        </div>

        {/* //   <!-- Page Content --> */}
        <div className="container mt-5">
          <div className="row">
            {/* <!-- Team Member 1 --> */}
            <div className="col-xl-3 col-md-6 mb-4">
              <div className="card border-0 shadow">
                <img
                  src="https://avatars.githubusercontent.com/u/65775501?v=4"
                  className="card-img-top"
                  alt="..."
                />
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
                <img
                  src="https://avatars.githubusercontent.com/u/84707872?v=4"
                  className="card-img-top"
                  alt="..."
                />
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
                <img
                  src="https://avatars.githubusercontent.com/u/84713554?v=4"
                  className="card-img-top"
                  alt="..."
                />
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
                <img
                  src="https://avatars.githubusercontent.com/u/75123784?v=4"
                  className="card-img-top"
                  alt="..."
                />
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
