import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/logo.png";
import { scrollToTop } from "../util/scrollToTop";
import { useParams } from "react-router-dom";

const OneThreat = () => {
  const { id } = useParams();

  return (
    <div className="wrapper">
      <header className="l-header">
        <div id="sticky-wrapper" className="l-navbar-wrapper">
          <div className="l-navbar l-navbar_expand l-navbar_t-light js-navbar-sticky">
            <div className="container-fluid">
              <nav
                className="menuzord js-primary-navigation menuzord-responsive "
                role="navigation"
                aria-label="Primary Navigation"
              >
                <Link to="/" className="logo-brand">
                  <img className="retina" src={Logo} alt="Massive" />
                </Link>
                <ul
                  className="menuzord-menu menuzord-right c-nav_s-bg menuzord-indented scrollable"
                  style={{ maxHeight: "400px" }}
                >
                  <li className="active">
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/signin">Login</Link>
                  </li>
                  <li className="nav-divider" aria-hidden="true">
                    <Link to="javascript:void(0)">|</Link>
                  </li>
                  <li>
                    <Link to="/submit-threat">Submit Threat</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>

     
    </div>
  );
};

export default OneThreat;
