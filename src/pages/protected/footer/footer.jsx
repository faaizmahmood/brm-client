/* eslint-disable no-unused-vars */
import React from "react";
import styles from "./Footer.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    // <footer className={`${styles.footer}`}>
    //   <div className="container">
    //     <div className="row">
    //       {/* Column 1 */}
    //       <div className="col-sm-3">
    //         <h5>Company</h5>
    //         <ul className="list-unstyled">
    //           <li><a href="#">About Us</a></li>
    //           <li><a href="#">Careers</a></li>
    //           <li><a href="#">Blog</a></li>
    //         </ul>
    //       </div>

    //       {/* Column 2 */}
    //       <div className="col-sm-3">
    //         <h5>Services</h5>
    //         <ul className="list-unstyled">
    //           <li><a href="#">BRM</a></li>
    //           <li><a href="#">Analytics</a></li>
    //         </ul>
    //       </div>

    //       {/* Column 3 */}
    //       <div className="col-sm-3">
    //         <h5>Support</h5>
    //         <ul className="list-unstyled">
    //           <li><a href="#">Help Center</a></li>
    //           <li><a href="#">Privacy Policy</a></li>
    //           <li><a href="#">Terms of Use</a></li>
    //         </ul>
    //       </div>

    //       {/* Column 4 */}
    //       <div className="col-sm-3">
    //         <h5>Contact</h5>
    //         <ul className="list-unstyled">
    //           <li><a href="#">Email</a></li>
    //           <li><a href="#">Social Media</a></li>
    //           <li><a href="#">Support</a></li>
    //         </ul>
    //       </div>
    //     </div>

    //     <hr />
    //     <p className="mb-2 text-center">
    //       &copy; {new Date().getFullYear()} BRM. All rights reserved.
    //     </p>
    //   </div>
    // </footer>

    <>
      <footer className={`${styles.footer}`}>

        <div className="container">

          <div className={`${styles.footerHeading}`}>
            <h1 className="text-center">Drop us a line or two, we are open for creative minds and collaborations!</h1>

            <button className="mt-3">Get Started</button>
          </div>


          <div className="row mt-5 align-items-center">

            <div className="col-md-3 text-md-start text-center">

              <NavLink to="/"><img src='../../../../public/images/big-tools-logo.png' /></NavLink>
            </div>

            <div className="col-md-6 px-3 my-md-0 my-4">
              <nav>
                <ul className="mt-3">
                  <li><a href="#about">About</a></li>
                  <li><a href="#features">Features</a></li>
                  <li><a href="#works">Works</a></li>
                  <li><a href="#pricinga">Pricing</a></li>
                </ul>
              </nav>
            </div>

            <div className="col-md-3">
              <div className={`${styles.socialIcons}`}>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-facebook-f"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-youtube"></i>
              </div>
            </div>

          </div>


          <hr className="mt-4" />

          <div className="d-flex justify-content-between align-items-center mt-3">
            <p>© Copyright 2021, All Rights Reserved</p>
            <p>Privacy Policy</p>
          </div>

        </div>

      </footer>
    </>
  );
};

export default Footer;
