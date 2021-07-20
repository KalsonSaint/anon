import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.png";
import { triggerError, triggerLoadingAlert } from "../../components/Alert";
import { addPostApi } from "../../redux/actions/ThreatActions";
import { scrollToTop } from "../../util/scrollToTop";

function SubmitThreat() {
  const [formData, setFormData] = useState({
    post: "",
    description: "",
    media: {},
  });
  const [error, setError] = useState("");
  const [selectedFiles, setSelectedFiles] = useState({});
  const [images, setImages] = useState("");

  const handleFileChange = (name, e) => {
    if (e.target.files.length > 1) {
      setSelectedFiles({
        ...selectedFiles,
        file: e.target.files,
      });
    } else {
      setSelectedFiles({
        ...selectedFiles,
        file: e.target.files[0],
      });
    }
    // if (e.target.files && e.target.files[0]) {
    //   var reader = new FileReader();
    //   reader.onload = (e) => {
    //     setImages({ [name]: e.target.result });
    //   };
    //   reader.readAsDataURL(e.target.files[0]);
    //   handleInputChange(name, e.target.files[0]);
    // } else {
    //   alert("Error");
    // }
  };

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { post, description } = formData;
    const { file } = selectedFiles;
    const payload = {
      post,
      description,
      media: file,
    };
    // console.log(payload);
    triggerLoadingAlert(
      true,
      "Validating Credentials",
      "Hold on while your account is authorized"
    );
    try {
      const responseData = await addPostApi(payload);
      console.log(responseData);
      triggerLoadingAlert(false);
    } catch (error) {
      triggerLoadingAlert(false);
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
      <section className="body-content threat">
        <div className="page-content">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h4 className="text-uppercase">have you a question?</h4>
                <p>
                  Nam libero tempore, cum soluta nobis est eligendi optio cumque
                  nihil impedit quo minus id quod maxime placeat facere
                  possimus. Nam libero tempore
                </p>
                {/* contact-comments m-top-50 js-Mailer */}
                <form
                  className="js-mailer contact-comments"
                  onSubmit={handleSubmit}
                >
                  <div className="row">
                    <div className="col-md-12 form-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Threat Title *"
                        maxLength={100}
                        onChange={(e) =>
                          handleInputChange("post", e.target.value)
                        }
                        value={formData.post}
                        required
                        data-error={error.post}
                      />
                      <div className="help-block with-errors" />
                    </div>
                    {/* Comment */}
                    <div className="form-group col-md-12">
                      <textarea
                        name="description"
                        className="cmnt-text form-control"
                        rows={6}
                        placeholder="Threat Description"
                        maxLength={400}
                        onChange={(e) =>
                          handleInputChange("description", e.target.value)
                        }
                        value={formData.description}
                      />
                    </div>
                    <div className="form-group col-md-12">
                      <label>Threat Evidence(s)</label>
                      <input
                        type="file"
                        class="form-control-file"
                        name="file"
                        onChange={(e) => handleFileChange("media", e)}
                        multiple
                      />
                    </div>
                    {/* Send Button */}
                    <div className="form-group col-md-12">
                      <button
                        type="submit"
                        className="btn btn-small btn-dark-solid submit-btn"
                      >
                        Submit Threat
                      </button>
                    </div>
                  </div>
                  <input type="hidden" name="id" defaultValue="FORM_ALT" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SubmitThreat;
