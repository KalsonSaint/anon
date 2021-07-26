import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.png";
import {
  triggerError,
  triggerLoadingAlert,
  triggerSuccess,
} from "../../components/Alert";
import {
  getNonVerifiedPostsApi,
  verifyPostApi,
} from "../../redux/actions/ThreatActions";

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
    triggerLoadingAlert(true, "Fetching Unverified Threats", "Please Wait!");
    try {
      const responseData = await getNonVerifiedPostsApi();
      setUnverifiedThreats(responseData.data);
      triggerLoadingAlert(false);
    } catch (error) {
      triggerError(error);
    }
  };

  const verifyThreat = async (id) => {
    triggerLoadingAlert(
      true,
      "Approving",
      "Please wait! threat is being approved."
    );
    try {
      const responseData = await verifyPostApi(id);
      triggerLoadingAlert(false);
      triggerSuccess(responseData.message);
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
                      <th>Approve Threat</th>
                      <th>Disapprove Threat</th>
                    </tr>
                  </thead>
                  <tbody>
                    {unverifiedThreats.length > 0 &&
                      unverifiedThreats.map((threat, i) => (
                        <tr key={i}>
                          <th>
                            <a href={`/post/${threat.id}`}>{threat.post}</a>
                          </th>
                          <th>{threat.description}</th>
                          {threat.media && (
                            <th>
                              {threat.media.length === 0 ? (
                                <p className="text-center">Nil</p>
                              ) : (
                                threat.media.map((item, i) => (
                                  <a href={item} key={i} target="_blank">
                                    Media {i}
                                    <br />
                                  </a>
                                ))
                              )}
                            </th>
                          )}
                          <th>{formatDate(threat.createdAt)}</th>
                          <th>
                            <button
                              className="btn btn-small btn-dark-solid  btn-transparent"
                              onClick={() => verifyThreat(threat.id)}
                            >
                              <i className="fa fa-check" /> Approve
                            </button>
                          </th>
                          <th>
                            <button className="btn btn-small btn-dark-border">
                              <i className="fa fa-trash-o" /> Disapprove
                            </button>
                          </th>
                        </tr>
                      ))}
                  </tbody>
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
