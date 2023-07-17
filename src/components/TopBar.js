import React from "react";
import "./Layout.css";

const TopBar = () => {
  return (
    <>
      <div className="container">
        <div className="row pt-4">
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="left-side d-flex mt-1">
              <i
                className="fa fa-envelope me-2 light-yellow-color"
                aria-hidden="true"
              ></i>
              <p className="top-bar-email">info@fathomsmaritime.com</p>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-end">
            <div className="right-side text-center">
              <i
                className="fa fa-twitter me-5 dark-green-color"
                aria-hidden="true"
              ></i>
              <i
                className="fa fa-facebook me-5 dark-green-color"
                aria-hidden="true"
              ></i>
              <i
                className="fa fa-pinterest me-5 dark-green-color"
                aria-hidden="true"
              ></i>
              <i
                className="fa fa-instagram dark-green-color"
                aria-hidden="true"
              ></i>
            </div>
          </div>
        </div>
      </div>

      <hr />
    </>
  );
};

export default TopBar;
