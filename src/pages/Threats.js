import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/logo.png";

function Threats() {
  return (
    <div className="wrapper">
      <header className="l-header">
        <div id="sticky-wrapper" className="l-navbar-wrapper">
          <div className="l-navbar l-navbar_expand l-navbar_t-light js-navbar-sticky">
            <div class="container-fluid">
              <nav
                class="menuzord js-primary-navigation menuzord-responsive "
                role="navigation"
                aria-label="Primary Navigation"
              >
                <Link to="/" className="logo-brand">
                  <img class="retina" src={Logo} alt="Massive" />
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
                  <li class="nav-divider" aria-hidden="true">
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
      <section className="page-title">
        <div className="container">
          <h4 className="text-uppercase">ALL THREATS</h4>
        </div>
      </section>

      {/* main section */}
      <section className="body-content ">
        <div className="page-content">
          <div className="container">
            <div className="row">
              <div className="post-list">
                <div className="col-md-6">
                  <div className="post-single">
                    <ul className="post-cat">
                      <li>
                        <Link to="#">interface</Link>
                      </li>
                      <li>
                        <Link to="#">standard</Link>
                      </li>
                    </ul>
                    <div className="post-img">
                      <Link to="#">
                        <img src="assets/img/post/p4.jpg" alt="" />
                      </Link>
                    </div>
                    <div className="post-desk">
                      <h4 className="text-uppercase">
                        <Link to="blog-single.html">ultra modern design</Link>
                      </h4>
                      <div className="date">
                        <Link to="#" className="author">
                          martin smith
                        </Link>
                        july 29, 2015
                      </div>
                      <p>
                        Nam libero tempore, cum soluta nobis est eligendi optio
                        cumque nihil impedit quo minus id quod maxime placeat
                        facere possimus.
                      </p>
                      <Link to="blog-single.html" className="p-read-more">
                        Read More <i className="icon-arrows_slim_right" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="post-single">
                    <ul className="post-cat">
                      <li>
                        <Link to="#">interface</Link>
                      </li>
                      <li>
                        <Link to="#">standard</Link>
                      </li>
                    </ul>
                    <div className="post-img ">
                      {/*<Link to="#"><img src="assets/img/post/p5.jpg" alt=""></Link>*/}
                      <div className="full-width ">
                        <div className="post-slider post-img text-center relative">
                          <ul className="slides">
                            <li>
                              <Link to="javascript:;" title="Freshness Photo">
                                <img src="assets/img/post/p5.jpg" alt="" />
                              </Link>
                            </li>
                            <li>
                              <Link to="javascript:;" title="Awesome Lightbox">
                                <img src="assets/img/post/p4.jpg" alt="" />
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="javascript:;"
                                title="Massive UI Components"
                              >
                                <img src="assets/img/post/p6.jpg" alt="" />
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="post-desk">
                      <h4 className="text-uppercase">
                        <Link to="blog-single.html">Gallery post</Link>
                      </h4>
                      <div className="date">
                        <Link to="#" className="author">
                          martin smith
                        </Link>
                        july 29, 2015
                      </div>
                      <p>
                        Nam libero tempore, cum soluta nobis est eligendi optio
                        cumque nihil impedit quo minus id quod maxime placeat
                        facere possimus.
                      </p>
                      <Link to="blog-single.html" className="p-read-more">
                        Read More <i className="icon-arrows_slim_right" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="post-single">
                    <ul className="post-cat">
                      <li>
                        <Link to="#">interface</Link>
                      </li>
                      <li>
                        <Link to="#">standard</Link>
                      </li>
                    </ul>
                    <div className="post-img">
                      <p className="audio-fit height-310">
                        <iframe
                          title="light"
                          height={309}
                          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/115637399&auto_play=false&hide_related=true&visual=true"
                        />
                      </p>
                    </div>
                    <div className="post-desk">
                      <h4 className="text-uppercase">
                        <Link to="blog-single.html">light weight theme</Link>
                      </h4>
                      <div className="date">
                        <Link to="#" className="author">
                          martin smith
                        </Link>
                        july 29, 2015
                      </div>
                      <p>
                        Nam libero tempore, cum soluta nobis est eligendi optio
                        cumque nihil impedit quo minus id quod maxime placeat
                        facere possimus.
                      </p>
                      <Link to="blog-single.html" className="p-read-more">
                        Read More <i className="icon-arrows_slim_right" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="post-single">
                    <ul className="post-cat">
                      <li>
                        <Link to="#">interface</Link>
                      </li>
                      <li>
                        <Link to="#">standard</Link>
                      </li>
                    </ul>
                    <div className="post-img">
                      <p className="video-fit height-310">
                        <iframe
                          title="video"
                          height={361}
                          src="http://www.youtube.com/embed/lq_BVyou38s"
                          allowFullScreen
                        />
                      </p>
                    </div>
                    <div className="post-desk">
                      <h4 className="text-uppercase">
                        <Link to="blog-single.html">Video Post</Link>
                      </h4>
                      <div className="date">
                        <Link to="#" className="author">
                          martin smith
                        </Link>
                        july 29, 2015
                      </div>
                      <p>
                        Nam libero tempore, cum soluta nobis est eligendi optio
                        cumque nihil impedit quo minus id quod maxime placeat
                        facere possimus.
                      </p>
                      <Link to="blog-single.html" className="p-read-more">
                        Read More <i className="icon-arrows_slim_right" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="post-single">
                    <ul className="post-cat">
                      <li>
                        <Link to="#">interface</Link>
                      </li>
                      <li>
                        <Link to="#">standard</Link>
                      </li>
                    </ul>
                    <div className="post-img">
                      <Link to="#">
                        <img src="assets/img/post/p6.jpg" alt="" />
                      </Link>
                    </div>
                    <div className="post-desk">
                      <h4 className="text-uppercase">
                        <Link to="blog-single.html">light weight theme</Link>
                      </h4>
                      <div className="date">
                        <Link to="#" className="author">
                          martin smith
                        </Link>
                        july 29, 2015
                      </div>
                      <p>
                        Nam libero tempore, cum soluta nobis est eligendi optio
                        cumque nihil impedit quo minus id quod maxime placeat
                        facere possimus.
                      </p>
                      <Link to="blog-single.html" className="p-read-more">
                        Read More <i className="icon-arrows_slim_right" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="post-single">
                    <ul className="post-cat">
                      <li>
                        <Link to="#">interface</Link>
                      </li>
                      <li>
                        <Link to="#">standard</Link>
                      </li>
                    </ul>
                    <div className="post-img">
                      <div className="post-img title-img">
                        <img src="assets/img/post/p13.jpg" alt="" />
                        <div className="info">We work together for fun</div>
                      </div>
                    </div>
                    <div className="post-desk">
                      <h4 className="text-uppercase">
                        <Link to="blog-single.html">light weight theme</Link>
                      </h4>
                      <div className="date">
                        <Link to="#" className="author">
                          martin smith
                        </Link>
                        july 29, 2015
                      </div>
                      <p>
                        Nam libero tempore, cum soluta nobis est eligendi optio
                        cumque nihil impedit quo minus id quod maxime placeat
                        facere possimus.
                      </p>
                      <Link to="blog-single.html" className="p-read-more">
                        Read More <i className="icon-arrows_slim_right" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="post-single">
                    <ul className="post-cat">
                      <li>
                        <Link to="#">interface</Link>
                      </li>
                      <li>
                        <Link to="#">standard</Link>
                      </li>
                    </ul>
                    <div className="post-img">
                      <p className="video-fit height-361">
                        <iframe
                          title="vimeo_video"
                          src="http://player.vimeo.com/video/62184445"
                          height={281}
                          allowFullScreen
                        />
                      </p>
                    </div>
                    <div className="post-desk">
                      <h4 className="text-uppercase">
                        <Link to="blog-single.html">VIMEO Video Post</Link>
                      </h4>
                      <div className="date">
                        <Link to="#" className="author">
                          martin smith
                        </Link>
                        july 29, 2015
                      </div>
                      <p>
                        Nam libero tempore, cum soluta nobis est eligendi optio
                        cumque nihil impedit quo minus id quod maxime placeat
                        facere possimus.
                      </p>
                      <Link to="blog-single.html" className="p-read-more">
                        Read More <i className="icon-arrows_slim_right" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="post-single">
                    <ul className="post-cat">
                      <li>
                        <Link to="#">interface</Link>
                      </li>
                      <li>
                        <Link to="#">standard</Link>
                      </li>
                    </ul>
                    <div className="post-img">
                      <Link to="#">
                        <img src="assets/img/post/p4.jpg" alt="" />
                      </Link>
                    </div>
                    <div className="post-desk">
                      <h4 className="text-uppercase">
                        <Link to="blog-single.html">light weight theme</Link>
                      </h4>
                      <div className="date">
                        <Link to="#" className="author">
                          martin smith
                        </Link>
                        july 29, 2015
                      </div>
                      <p>
                        Nam libero tempore, cum soluta nobis est eligendi optio
                        cumque nihil impedit quo minus id quod maxime placeat
                        facere possimus.
                      </p>
                      <Link to="blog-single.html" className="p-read-more">
                        Read More <i className="icon-arrows_slim_right" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  {/*pagination*/}
                  <div className="text-center">
                    <ul className="pagination custom-pagination">
                      <li>
                        <Link to="#">Prev</Link>
                      </li>
                      <li className="active">
                        <Link to="#">1</Link>
                      </li>
                      <li>
                        <Link to="#">2</Link>
                      </li>
                      <li>
                        <Link to="#">3</Link>
                      </li>
                      <li>
                        <Link to="#">4</Link>
                      </li>
                      <li>
                        <Link to="#">5</Link>
                      </li>
                      <li>
                        <Link to="#">Next</Link>
                      </li>
                    </ul>
                  </div>
                  {/*pagination*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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

export default Threats;
