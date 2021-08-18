import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.png";
import {
  triggerError,
  triggerLoadingAlert,
  triggerSuccess,
} from "../../components/Alert";
import {
  getAllPostApi,
  deletePostApi,
} from "../../redux/actions/ThreatActions";

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

  const deleteThreat = async (id) => {
    triggerLoadingAlert(
      true,
      "Disapproving",
      "Please wait! threat is being disapproved."
    );
    try {
      const responseData = await deletePostApi(id);
      triggerLoadingAlert(false);
      triggerSuccess(responseData.message);
      window.location.reload();
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
                  <li className="active">
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
          <div className="row">
            <div className="col-md-12">
              <h4 className="text-uppercase">All Threats </h4>
            </div>
          </div>
        </div>
      </section>

      <section className="body-content ">
        <div className="page-content">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Description</th>
                      <th>Media Files</th>
                      <th>Date Created</th>
                      <th>Status</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {threatList.length > 0 &&
                      threatList.map((threat, i) => (
                        <tr key={i}>
                          <th>
                            <a href={`/admin/threat/${threat.id}`}>
                              {threat.post}
                            </a>
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
                          <th>{threat.verified === true ? `Verified` : ""}</th>
                          <th>
                            <button
                              className="btn btn-small btn-dark-border"
                              onClick={() => deleteThreat(threat.id)}
                            >
                              <i className="fa fa-trash-o" /> Delete
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

export default Dashboard;

{
  /* <section className="body-content">
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
                      <div>
                        <img src={threat.media[0]} alt />
                      </div>
                    </div>
                    <div className="post-desk">
                      <h4 className="text-uppercase">
                        <a href="blog-single.html">{threat.post}</a>
                      </h4>
                      <div className="date">
                        <p href="#" className="author">
                          DATE CREATED
                        </p>
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
                    </div>
                  </div>
                </div>
              </>
            ))}
        </div>
      </div>
    </div>
  </div>
</section>; */
}
