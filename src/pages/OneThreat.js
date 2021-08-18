import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/logo.png";
import { scrollToTop } from "../util/scrollToTop";
import { useParams } from "react-router-dom";
import { getThreatById } from "../redux/actions/ThreatActions";
import { triggerError, triggerLoadingAlert } from "../components/Alert";

import "bootstrap/dist/js/bootstrap.min.js";
import "../assets/css/shortcodes.css";
import "../assets/css/animate.css";
import "../assets/css/default-theme.css";
import "../assets/css/style.css";

const OneThreat = () => {
  const { id } = useParams();
  const [threatDetails, setThreatDetails] = useState({});
  const [formData, setFormData] = useState({
    comment: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    getPostDetails(id);
  }, []);

  const getPostDetails = async (id) => {
    triggerLoadingAlert(true, "Fetching Threat details", "Please Wait!");

    try {
      const responseData = await getThreatById(id);
      console.log(responseData.data);
      setThreatDetails(responseData.data);
      triggerLoadingAlert(false);
    } catch (error) {
      triggerError(error);
    }
  };

  const formatDate = (date) => {
    let ts = new Date(date);
    return ts.toLocaleDateString();
  };

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {};

  return (
    <div className="wrapper">
      <header className="l-header mb-5">
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
      </header>
      <section className="body-content my-5">
        <div className="page-content">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="blog-classic">
                  <div className="blog-post">
                    {Object.keys(threatDetails).length !== 0 && (
                      <>
                        <div className="full-width">
                          <img src={threatDetails.media[0]} alt="..." />
                        </div>
                        <h4 className="text-uppercase">
                          <a href="blog-single.html">{threatDetails.post}</a>
                        </h4>
                        <p className="post-meta">
                          Date Created: {formatDate(threatDetails.createdAt)}
                          <br />
                          Likes: {threatDetails.likes}
                        </p>
                        <p className="post-meta"></p>
                        <p>{threatDetails.description}</p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OneThreat;
