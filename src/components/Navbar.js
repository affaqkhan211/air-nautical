import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Layout.css";
import TopBar from "./TopBar";

const Navbar = () => {
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const visibleHeight = window.innerHeight;
      if (scrollY >= visibleHeight) {
        setIsNavbarFixed(true);
      } else {
        setIsNavbarFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="top-bar-web" style={{ backgroundColor: "#f8f7f1" }}>
        <TopBar/>
        <nav
          className={`navbar navbar-expand-lg ${
            isNavbarFixed ? "fixed-navbar" : ""
          }`}
        >
          <div className="container">
            <Link className="navbar-brand" to="/">
              <img
                src="/images/logo2.png"
                className="logo"
                alt=""
                style={{ height: "70px", borderRadius : "50%" }}
              />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item me-5">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item me-5">
                  <Link className="nav-link" to="/courses">
                    About
                  </Link>
                </li>
                <li className="nav-item me-5">
                  <Link className="nav-link" to="/courses">
                    Services
                  </Link>
                </li>
                <li className="nav-item me-5">
                  <Link className="nav-link" to="/courses">
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/courses">
                    Languages
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <div class="home-screen">
        <div class="background-image"></div>
        <div class="overlay"></div>
        <div class="container">
          <div class="row">
            <div class="col-md-8 mt-5 pt-5">
              <div className="animate-from-top">
                <h3 className="top-heading">
                  Marine, Aviation and Energy sector
                </h3>
                <h1 className="main-heading">
                FATHOMS MARITIME <br />(SMC-PVT.) LIMITED <br />ISLAMABAD, PAKISTAN
                </h1>
              </div>
              <button class="home-btn animate-from-bottom">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;


// <div class="col-md-5 animate-from-right">
//               <img
//                 src="/images/banner-11.png"
//                 alt=""
//                 class="img-fluid walking-image"
//               />
//             </div>
