import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-5 col-sm-12 mt-2 mb-2">
              <img src="/images/logo.png" alt="" style={{height : "150px", borderRadius : "50%"}} />
              <h3 className="footer-main-heading mt-4">
                Marine, Aviation and Energy sector
              </h3>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 mt-2 mb-2">
              <h3 className="footer-main-heading">Links</h3>
              <div className="d-flex flex-column">
                <Link className="footer-links" to="/">
                  Home
                </Link>
                <Link className="footer-links" to="/about">
                  About
                </Link>
                <Link className="footer-links" to="/services">
                  Services
                </Link>
                <Link className="footer-links" to="/contact">
                  Contact
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 mt-2 mb-2">
              <h3 className="footer-main-heading">Contact</h3>
              <div className="d-flex first">
                <i
                  class="fa fa-phone me-2 light-yellow-color mt-3"
                  aria-hidden="true"
                ></i>
                <p className="footer-contact-links">+923333232196</p>
              </div>
              <div className="d-flex second flex-column">
              <div className="first-mail d-flex ">
                <i
                  className="fa fa-envelope me-2 light-yellow-color mt-3"
                  aria-hidden="true"
                ></i>
                <p className="footer-contact-links">
                info@fathomsmaritime.com
                </p>
                </div>
                </div>
              <div className="d-flex third">
                <i
                  class="fa fa-map-marker me-2 light-yellow-color mt-3"
                  aria-hidden="true"
                ></i>
                <p className="footer-contact">Islamabad, Pakistan</p>
              </div>
            </div>
          </div>

          <hr className="footer-line" />

          <div className="row pt-4">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="left-side d-flex mt-1">
                <p className="copy-right">©2023 Designed by Azzy</p>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-end">
              <div className="right-side">
                <i
                  className="fa fa-twitter me-5 footer-icons p-3"
                  aria-hidden="true"
                ></i>
                <i
                  className="fa fa-facebook me-5 footer-icons p-3"
                  aria-hidden="true"
                ></i>
                <i
                  className="fa fa-pinterest me-5 footer-icons p-3"
                  aria-hidden="true"
                ></i>
                <i
                  className="fa fa-instagram footer-icons p-3"
                  aria-hidden="true"
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

