import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.png";
import { triggerError } from "../../components/Alert";
import { getAllPostApi } from "../../redux/actions/ThreatActions";

const formatDate = (date) => {
  let ts = new Date(date);
  return ts.toLocaleDateString();
};

function Dashboard() {
  const [threatList, setThreatList] = useState([]);

  useEffect(() => {
    getAllThreats();
  }, []);

  const getAllThreats = async () => {
    try {
      const responseData = await getAllPostApi();
      console.log(responseData.data);
      setThreatList(responseData.data);
    } catch (error) {
      triggerError(error);
    }
  };

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
                    <Link to="/">Dashboard</Link>
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
                        <Link to="/unverified-threats">View Unverified Threats</Link>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-divider" aria-hidden="true">
                    <Link to="!">|</Link>
                  </li>
                  <li>
                    <Link to="/" className="text-danger">
                      Logout
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
      <section className="page-title">
        <div className="container">
          <h4 className="text-uppercase">All Threats </h4>
        </div>
      </section>
      <section className="body-content">
        <div className="page-content">
          <div className="container">
            <div className="row">
              <div className="post-list">
                {threatList.length > 0 &&
                  threatList.map((threat) => (
                    <>
                      <div className="col-md-4">
                        <div className="post-single">
                          <div className="post-img">
                            <a href="#">
                              <img src={threat.media[0]} alt />
                            </a>
                          </div>
                          <div className="post-desk">
                            <h4 className="text-uppercase">
                              <a href="blog-single.html">{threat.post}</a>
                            </h4>
                            <div className="date">
                              <a href="#" className="author">
                                DATE CREATED
                              </a>
                              {formatDate(threat.createdAt)}
                            </div>
                            <p>{threat.description}</p>
                            {threat.media.length > 1 && (
                              <>
                                <p className="">
                                  View media files <br />
                                  {threat.media.map((item, i) => (
                                    <a href={item} target="_blank">
                                      Media {i} ||{"  "}
                                    </a>
                                  ))}
                                </p>
                              </>
                            )}
                            <div className="row">
                              <div className="col-md-6">
                                <a
                                  href="#"
                                  className="btn btn-small btn-dark-solid  btn-transparent"
                                >
                                  <i className="fa fa-check" /> Approve
                                </a>
                              </div>
                              <div className="col-md-6">
                                <a
                                  href="#"
                                  className="btn btn-small btn-dark-border"
                                >
                                  <i className="fa fa-trash-o" /> Disapprove
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
