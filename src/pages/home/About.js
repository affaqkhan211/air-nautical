import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="container">
        <div className="row" style={{ marginTop: "80px" }}>
          <div class="col-lg-6 col-md-6 col-sm-12 animate-from-left mt-4">
            <img
              src="/images/about.jpg"
              className="w-100"
              alt=""
              style={{ borderTopLeftRadius: "130px" }}
            />
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 text-start mt-4">
            <p className="about-heading">ABOUT</p>
            <h2 className="about-main-heading">About Us</h2>
            <p className="about-text">
            Fathoms Maritime ( SMC-PVT.) Limited is a company based in Islamabad,
              PAKISTAN. We showcase a combined experience of more than 10 years in
              the aviation, marine and energy sector. <br /> We provide turn-key
              solutions to our customers in the commercial and defense industry.
            </p>

            <div className="cards">
              <div className="card-1 mb-3 p-3">
                <div className="row">
                  <div className="col-3">
                    <img src="/images/logo2.png" alt="" style={{height : "80px", borderRadius : "50%"}}/>
                  </div>
                  <div className="col-9">
                    <h3 className="card-heading">Mission</h3>
                    <p className="about-text ">
                      To maintain Safety and Stability – In the air and water.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card-2 p-3">
                <div className="row">
                  <div className="col-3">
                  <img src="/images/logo2.png" alt="" style={{height : "80px", borderRadius : "50%"}}/>
                  </div>
                  <div className="col-9">
                    <h3 className="card-heading">Vision</h3>
                    <p className="about-text ">
                      To be one of the best solution provider in the aviation,
                      marine and energy industry.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="button mt-4">
              <button className="about-btn">Discover More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
