import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/logo.png";
import { scrollToTop } from "../util/scrollToTop";

import Mas1 from "../assets/img/portfolio/masonry/1.jpg";
import Mas2 from "../assets/img/portfolio/masonry/2.jpg";
import Mas41 from "../assets/img/portfolio/masonry/4-1.jpg";
import Mas3 from "../assets/img/portfolio/masonry/3.jpg";
import Mas5 from "../assets/img/portfolio/masonry/5.jpg";
import Mas7 from "../assets/img/portfolio/masonry/7.jpg";
import Mas61 from "../assets/img/portfolio/masonry/6-1.jpg";
import Mas8 from "../assets/img/portfolio/masonry/8.jpg";
import Mas9 from "../assets/img/portfolio/masonry/9.jpg";
import Mas10 from "../assets/img/portfolio/masonry/10.jpg";
import Mas11 from "../assets/img/portfolio/masonry/11.jpg";
import Mas12 from "../assets/img/portfolio/masonry/12.jpg";

function Home() {
  useEffect(() => {
    scrollToTop();
  }, []);
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
                    <Link to="/threats">Threats</Link>
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
      <div className="banner-state  vertical-align banner-01 height-600">
        <div className="container-mid">
          <div className="container">
            <div className="row">
              <div className="col-md-8 ">
                <div className="banner-title">
                  <h1 className="text-uppercase"> Saves Lives Today </h1>
                  <h3 className="text-uppercase">100% Safety Guaranteed</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="body-content">
        <div className="container">
          <div className="row ">
            <div className="portfolio portfolio-with-title portfolio-masonry blog-m col-3 gutter ">
              <div className="portfolio-item ">
                <div className="thumb">
                  <img src={Mas1} alt="mas" />
                  <div className="portfolio-hover">
                    <div className="action-btn">
                      <Link to="blog-single.html">
                        <i className="icon-basic_link" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="portfolio-title">
                  <h4>
                    <Link to="portfolio-single.html">
                      Massive UI Elemements
                    </Link>
                  </h4>
                  <div className="date">
                    <Link to="#">JOHN DOE</Link> , 12 July 2015
                  </div>
                  <p>
                    Saborum volutpat, diam enim sagittis quam, id porta quam.
                    Sed id dolor consectetur fermentum nibh volutpat, accumsan
                    purus.
                  </p>
                  <div className="m-top-20 m-bot-20">
                    <Link
                      to="blog-single.html"
                      className="btn btn-extra-small btn-dark-border btn-transparent   "
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="portfolio-item ">
                <div className="thumb">
                  <img src={Mas2} alt="mas" />
                  <div className="portfolio-hover">
                    <div className="action-btn">
                      <Link to="blog-single.html">
                        <i className="icon-basic_link" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="portfolio-title">
                  <h4>
                    <Link to="portfolio-single.html">Full Responsive</Link>
                  </h4>
                  <div className="date">
                    <Link to="#">JOHN DOE</Link> , 12 July 2015
                  </div>
                  <p>
                    Laborum volutpat, diam enim sagittis quam, id porta quam.
                    Sed id dolor consectetur fermentum nibh volutpat, accumsan
                    purus.
                  </p>
                  <div className="m-top-20 m-bot-20">
                    <Link
                      to="blog-single.html"
                      className="btn btn-extra-small btn-dark-border btn-transparent   "
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="portfolio-item ">
                <div className="thumb">
                  <img src={Mas41} alt="mas" />
                  <div className="portfolio-hover">
                    <div className="action-btn">
                      <Link to="blog-single.html">
                        <i className="icon-basic_link" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="portfolio-title">
                  <h4>
                    <Link to="portfolio-single.html">Easy to Customize</Link>
                  </h4>
                  <div className="date">
                    <Link to="#">JOHN DOE</Link> , 12 July 2015
                  </div>
                  <p>
                    Maborum volutpat, diam enim sagittis quam, id porta quam.
                    Sed id dolor consectetur fermentum nibh volutpat, accumsan
                    purus.
                  </p>
                  <div className="m-top-20 m-bot-20">
                    <Link
                      to="blog-single.html"
                      className="btn btn-extra-small btn-dark-border btn-transparent   "
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="portfolio-item ">
                <div className="thumb">
                  <img src={Mas3} alt="mas" />
                  <div className="portfolio-hover">
                    <div className="action-btn">
                      <Link to="blog-single.html">
                        <i className="icon-basic_link" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="portfolio-title">
                  <h4>
                    <Link to="portfolio-single.html">Tons of Shortcodes</Link>
                  </h4>
                  <div className="date">
                    <Link to="#">JOHN DOE</Link> , 12 July 2015
                  </div>
                  <p>
                    Laborum volutpat, diam enim sagittis quam, id porta quam.
                    Sed id dolor consectetur fermentum nibh volutpat, accumsan
                    purus.
                  </p>
                  <div className="m-top-20 m-bot-20">
                    <Link
                      to="blog-single.html"
                      className="btn btn-extra-small btn-dark-border btn-transparent   "
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="portfolio-item ">
                <div className="thumb">
                  <img src={Mas5} alt="mas" />
                  <div className="portfolio-hover">
                    <div className="action-btn">
                      <Link to="blog-single.html">
                        <i className="icon-basic_link" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="portfolio-title">
                  <h4>
                    <Link to="portfolio-single.html">
                      24/7 Customer Support
                    </Link>
                  </h4>
                  <div className="date">
                    <Link to="#">JOHN DOE</Link> , 12 July 2015
                  </div>
                  <p>
                    Laborum volutpat, diam enim sagittis quam, id porta quam.
                    Sed id dolor consectetur fermentum nibh volutpat, accumsan
                    purus.
                  </p>
                  <div className="m-top-20 m-bot-20">
                    <Link
                      to="blog-single.html"
                      className="btn btn-extra-small btn-dark-border btn-transparent   "
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="portfolio-item ">
                <div className="thumb">
                  <img src={Mas7} alt="mas" />
                  <div className="portfolio-hover">
                    <div className="action-btn">
                      <Link to="blog-single.html">
                        <i className="icon-basic_link" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="portfolio-title">
                  <h4>
                    <Link to="portfolio-single.html">Dashing Design</Link>
                  </h4>
                  <div className="date">
                    <Link to="#">JOHN DOE</Link> , 12 July 2015
                  </div>
                  <p>
                    Laborum volutpat, diam enim sagittis quam, id porta quam.
                    Sed id dolor consectetur fermentum nibh volutpat, accumsan
                    purus.
                  </p>
                  <div className="m-top-20 m-bot-20">
                    <Link
                      to="blog-single.html"
                      className="btn btn-extra-small btn-dark-border btn-transparent   "
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="portfolio-item ">
                <div className="thumb">
                  <img src={Mas61} alt="mas" />
                  <div className="portfolio-hover">
                    <div className="action-btn">
                      <Link to="blog-single.html">
                        <i className="icon-basic_link" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="portfolio-title">
                  <h4>
                    <Link to="portfolio-single.html">Clean Code</Link>
                  </h4>
                  <div className="date">
                    <Link to="#">JOHN DOE</Link> , 12 July 2015
                  </div>
                  <p>
                    Laborum volutpat, diam enim sagittis quam, id porta quam.
                    Sed id dolor consectetur fermentum nibh volutpat, accumsan
                    purus.
                  </p>
                  <div className="m-top-20 m-bot-20">
                    <Link
                      to="blog-single.html"
                      className="btn btn-extra-small btn-dark-border btn-transparent   "
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="portfolio-item ">
                <div className="thumb">
                  <img src={Mas8} alt="" />
                  <div className="portfolio-hover">
                    <div className="action-btn">
                      <Link to="blog-single.html">
                        <i className="icon-basic_link" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="portfolio-title">
                  <h4>
                    <Link to="portfolio-single.html">Sky is the Limit</Link>
                  </h4>
                  <div className="date">
                    <Link to="#">JOHN DOE</Link> , 12 July 2015
                  </div>
                  <p>
                    Laborum volutpat, diam enim sagittis quam, id porta quam.
                    Sed id dolor consectetur fermentum nibh volutpat, accumsan
                    purus.
                  </p>
                  <div className="m-top-20 m-bot-20">
                    <Link
                      to="blog-single.html"
                      className="btn btn-extra-small btn-dark-border btn-transparent   "
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="portfolio-item ">
                <div className="thumb">
                  <img src={Mas9} alt="mas" />
                  <div className="portfolio-hover">
                    <div className="action-btn">
                      <Link to="blog-single.html">
                        <i className="icon-basic_link" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="portfolio-title">
                  <h4>
                    <Link to="portfolio-single.html">
                      Stop Dreaming, Start Explore
                    </Link>
                  </h4>
                  <div className="date">
                    <Link to="#">JOHN DOE</Link> , 12 July 2015
                  </div>
                  <p>
                    Laborum volutpat, diam enim sagittis quam, id porta quam.
                    Sed id dolor consectetur fermentum nibh volutpat, accumsan
                    purus.
                  </p>
                  <div className="m-top-20 m-bot-20">
                    <Link
                      to="blog-single.html"
                      className="btn btn-extra-small btn-dark-border btn-transparent   "
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="portfolio-item ">
                <div className="thumb">
                  <img src={Mas10} alt="mas" />
                  <div className="portfolio-hover">
                    <div className="action-btn">
                      <Link to="blog-single.html">
                        <i className="icon-basic_link" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="portfolio-title">
                  <h4>
                    <Link to="portfolio-single.html">Full Responsive</Link>
                  </h4>
                  <div className="date">
                    <Link to="#">JOHN DOE</Link> , 12 July 2015
                  </div>
                  <p>
                    Laborum volutpat, diam enim sagittis quam, id porta quam.
                    Sed id dolor consectetur fermentum nibh volutpat, accumsan
                    purus.
                  </p>
                  <div className="m-top-20 m-bot-20">
                    <Link
                      to="blog-single.html"
                      className="btn btn-extra-small btn-dark-border btn-transparent   "
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="portfolio-item ">
                <div className="thumb">
                  <img src={Mas11} alt="mas" />
                  <div className="portfolio-hover">
                    <div className="action-btn">
                      <Link to="blog-single.html">
                        <i className="icon-basic_link" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="portfolio-title">
                  <h4>
                    <Link to="portfolio-single.html">Huge Demos</Link>
                  </h4>
                  <div className="date">
                    <Link to="#">JOHN DOE</Link> , 12 July 2015
                  </div>
                  <p>
                    Laborum volutpat, diam enim sagittis quam, id porta quam.
                    Sed id dolor consectetur fermentum nibh volutpat, accumsan
                    purus.
                  </p>
                  <div className="m-top-20 m-bot-20">
                    <Link
                      to="blog-single.html"
                      className="btn btn-extra-small btn-dark-border btn-transparent   "
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="portfolio-item ">
                <div className="thumb">
                  <img src={Mas12} alt="mas" />
                  <div className="portfolio-hover">
                    <div className="action-btn">
                      <Link to="blog-single.html">
                        <i className="icon-basic_link" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="portfolio-title">
                  <h4>
                    <Link to="portfolio-single.html">Buid with BS3 + </Link>
                  </h4>
                  <div className="date">
                    <Link to="#">JOHN DOE</Link> , 12 July 2015
                  </div>
                  <p>
                    Laborum volutpat, diam enim sagittis quam, id porta quam.
                    Sed id dolor consectetur fermentum nibh volutpat, accumsan
                    purus.
                  </p>
                  <div className="m-top-20 m-bot-20">
                    <Link
                      to="blog-single.html"
                      className="btn btn-extra-small btn-dark-border btn-transparent   "
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer id="footer" className="dark">
        <div className="primary-footer">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <Link to="#" className="m-bot-20 footer-logo">
                  <img
                    className="retina"
                    src="assets/img/logo-dark.png"
                    alt="mas"
                  />
                </Link>
                <p>
                  Massive is fully responsible, performance oriented and SEO
                  optimized, retina ready WordPress theme.
                </p>
              </div>
              <div className="col-md-4">
                <h5 className="text-uppercase">recent posts</h5>
                <ul className="f-list">
                  <li>
                    <Link to="#">Standard Blog post</Link>
                  </li>
                  <li>
                    <Link to="#">Quotation post</Link>
                  </li>
                  <li>
                    <Link to="#">Audio Post</Link>
                  </li>
                  <li>
                    <Link to="#">Massive Video Demo</Link>
                  </li>
                  <li>
                    <Link to="#">Blog Image Post</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <h5 className="text-uppercase">quick link</h5>
                <ul className="f-list">
                  <li>
                    <Link to="#">About Massive</Link>
                  </li>
                  <li>
                    <Link to="#">Career</Link>
                  </li>
                  <li>
                    <Link to="#">Terms &amp; Condition</Link>
                  </li>
                  <li>
                    <Link to="#">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="#">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="secondary-footer">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <span className="m-top-10">
                  Copyright 2012 - Massive | All Rights Reserved
                </span>
              </div>
              <div className="col-md-6">
                <div className="social-link circle pull-right">
                  <Link to="#">
                    <i className="fa fa-facebook" />
                  </Link>
                  <Link to="#">
                    <i className="fa fa-twitter" />
                  </Link>
                  <Link to="#">
                    <i className="fa fa-dribbble" />
                  </Link>
                  <Link to="#">
                    <i className="fa fa-google-plus" />
                  </Link>
                  <Link to="#">
                    <i className="fa fa-behance" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
