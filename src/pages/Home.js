import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/logo.png";
import { scrollToTop } from "../util/scrollToTop";
import { getAllPostApi } from "../redux/actions/ThreatActions";
import { triggerError } from "../components/Alert";

const formatDate = (date) => {
  let ts = new Date(date);
  return ts.toLocaleDateString();
};

function Home() {
  const [threatList, setThreatList] = useState([]);

  useEffect(() => {
    scrollToTop();
    getAllThreats();
  }, []);

  const getAllThreats = async () => {
    try {
      const responseData = await getAllPostApi();
      setThreatList(responseData.data);
      console.log(responseData.data);
    } catch (error) {
      triggerError(error);
    }
  };

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
                  {/* <img className="retina" src={Logo} alt="Massive" /> */}
                  <h3 className="retina">AnonMe</h3>
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

      <section className="body-content ">
        <div className="page-content">
          <div className="container">
            <div className="row">
              <div className="post-list">
                {threatList.length > 0 &&
                  threatList.map((item, i) => (
                    <div className="col-md-4 my-5">
                      <div className="post-single">
                        {item.media.length === 0 ||
                        typeof item.media === "string" ? (
                          <div className="post-img">
                            <div>
                              <img
                                src="assets/img/post/p4.jpg"
                                alt="threat_img"
                              />
                            </div>
                          </div>
                        ) : (
                          <div className="post-img">
                            <div>
                              <img src={item.media[0]} alt />
                            </div>
                          </div>
                        )}

                        <div className="post-desk">
                          <h4 className="text-uppercase">
                            <p>
                              <a href={`/threat/${item.id}`}>{item.post}</a>
                            </p>
                          </h4>
                          <div className="date">
                            <a href="#" className="author">
                              Date created
                            </a>
                            {formatDate(item.createdAt)}
                          </div>
                          <p>
                            Nam libero tempore, cum soluta nobis est eligendi
                            optio cumque nihil impedit quo minus id quod maxime
                            placeat facere possimus.
                          </p>
                          <a href="blog-single.html" className="p-read-more">
                            Read More <i className="icon-arrows_slim_right" />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
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
