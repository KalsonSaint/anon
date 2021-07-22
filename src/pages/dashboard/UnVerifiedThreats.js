import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.png";
import { triggerError } from "../../components/Alert";
import { getNonVerifiedPostsApi } from "../../redux/actions/ThreatActions";

const formatDate = (date) => {
  let ts = new Date(date);
  return ts.toLocaleDateString();
};

function UnVerifiedThreats() {
  const [unverifiedThreats, setUnverifiedThreats] = useState([]);

  useEffect(() => {
    getUnverifiedThreats();
  }, []);

  const getUnverifiedThreats = async () => {
    try {
      const responseData = await getNonVerifiedPostsApi();
      console.log(responseData.data);
      setUnverifiedThreats(responseData.data);
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
          <h4 className="text-uppercase">All Unverified Threats</h4>
        </div>
      </section>

      <section className="body-content ">
        <div className="page-content">
          <div className="container">
            <div className="row mx-5">
              <div className="col-md-12">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Description</th>
                      <th>Media Files</th>
                      <th>Date Created</th>
                      <th>Date Created</th>
                      <th>Date Created</th>
                    </tr>
                  </thead>
                  {unverifiedThreats.length > 0 &&
                    unverifiedThreats.map((threat, i) => (
                      <tbody>
                        <th>{threat.post}</th>
                        <th>{threat.description}</th>
                        {threat.media && (
                          <th>
                            {threat.media.length === 0 || threat.media === ""
                              ? "Nil"
                              : threat.media.map(
                                  (item, i) =>
                                    (
                                      <a href={item} key={i} target="_blank">
                                        Media {i}
                                        <br />
                                      </a>
                                    ) || "Nil"
                                )}
                          </th>
                        )}
                        <th>{formatDate(threat.createdAt)}</th>
                        <th>
                          <a
                            href="#"
                            className="btn btn-small btn-dark-solid  btn-transparent"
                          >
                            <i className="fa fa-check" /> Approve
                          </a>
                        </th>
                        <th>
                          <a href="#" className="btn btn-small btn-dark-border">
                            <i className="fa fa-trash-o" /> Disapprove
                          </a>
                        </th>
                      </tbody>
                    ))}
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default UnVerifiedThreats;
