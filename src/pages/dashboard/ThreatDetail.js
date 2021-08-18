import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Logo from "../../assets/img/logo.png";
import { triggerError, triggerLoadingAlert } from "../../components/Alert";
import { getThreatById } from "../../redux/actions/ThreatActions";

function ThreatDetail() {
  const { id } = useParams();

  useEffect(() => {
    getThreatDetails();
  }, []);

  const getThreatDetails = async () => {
    triggerLoadingAlert(
      true,
      "Fetching threat details",
      "Please wait while we get the details of the threat"
    );
    try {
      const responseData = await getThreatById(id);
      console.log(responseData.data);
      triggerLoadingAlert(false);
      //  setThreatList(responseData.data);
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
                  <img className="retina" src={Logo} alt="Massive" />
                </Link>
                <ul
                  className="menuzord-menu menuzord-right c-nav_s-bg menuzord-indented scrollable"
                  style={{ maxHeight: "400px" }}
                >
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <Link to="">Manage Threats</Link>
                    <ul className="dropdown">
                      <li>
                        <Link to="">View All Threats</Link>
                      </li>
                      <li>
                        <Link to="">View All Comments</Link>
                      </li>
                      <li>
                        <Link to="/unverified-threats">
                          View Unverified Threats
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-divider" aria-hidden="true">
                    <Link to="!">|</Link>
                  </li>
                  <li>
                    <Link to="/logout" className="text-danger">
                      Logout
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <section className="body-content">
        <div className="page-content">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="blog-classic">
                  <div className="blog-post">
                    <div className="full-width">
                      <img src="assets/img/post/p12.jpg" alt="threatImg" />
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur{" "}
                      <a href="#">adipisicing elit</a>. Ab adipisci architecto
                      consequatur debitis eos eum hic illum ipsam itaque laborum
                      magni minima molestias nostrum numquam odit officia
                      pariatur perspiciatis placeat porro quae rem, sequi sit
                      soluta temporibus ullam voluptas voluptates.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ThreatDetail;
