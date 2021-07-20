import { validateAll } from "indicative/validator";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Logo from "../assets/img/logo.png";
import store from "store";
import {
  triggerError,
  triggerLoadingAlert,
  triggerSuccess,
} from "../components/Alert";
import { signInApi } from "../redux/actions/AuthActions";

function Login() {
  const history = useHistory();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const rules = {
      email: "required",
      password: "required",
    };

    const messages = {
      "email.required": "Email is required",
      "password.required": "Password is required",
    };

    validateAll(formData, rules, messages)
      .then(() => {
        loginProcess();
      })
      .catch((errors) => {
        const formattedErrors = {};
        errors.forEach(
          (error) => (formattedErrors[error.field] = error.message)
        );
        setError(formattedErrors);
      });
  };

  const loginProcess = async () => {
    store.clearAll();
    triggerLoadingAlert(
      true,
      "Validating Credentials",
      "Hold on while your account is authorized"
    );

    try {
      const { email, password } = formData;
      const payload = {
        email,
        password,
      };
      const responseData = await signInApi(payload);
      console.log(responseData);
      triggerLoadingAlert(false);
      triggerSuccess(responseData.message);
      store.set("token", responseData.data);
      history.replaceState("/dashboard");
    } catch (err) {
      triggerLoadingAlert(false);
      triggerError(err);
    }
  };

  return (
    <div className="login login-bg">
      <div className="container">
        <div className="login-logo text-center">
          <Link to="/">
            <img className="retina" src={Logo} alt="logo" />
          </Link>
        </div>
        <div className="login-box btn-rounded login-bg-input border-less-input">
          <form id="login-form" name="login-form" onSubmit={handleSubmit}>
            <div className="text-center">
              <h3>LOGIN</h3>
            </div>
            <div className="form-group">
              <input
                type="text"
                id="login-form-username"
                name="login-form-username"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="form-control"
                placeholder="Login ID"
                required
              />
              {error.email && (
                <div>
                  <div
                    data-field="password"
                    data-validator="notEmpty"
                    className="pt-2 text-danger"
                  >
                    {error.email}
                  </div>
                </div>
              )}
            </div>
            <div className="form-group">
              <input
                type="password"
                id="login-form-password"
                name="login-form-password"
                value={formData.password}
                onChange={(e) => handleInputChange("password", e.target.value)}
                className="form-control "
                placeholder="Password"
                required
              />
              {error.password && (
                <div>
                  <div
                    data-field="password"
                    data-validator="notEmpty"
                    className="pt-2 text-danger"
                  >
                    {error.password}
                  </div>
                </div>
              )}
            </div>
            <div className="form-group">
              <button
                className="btn btn-small btn-dark-solid full-width btn-rounded"
                id="login-form-submit"
                name="login-form-submit"
                value="login"
              >
                Login
              </button>
            </div>
            {/* <div className="form-group">
              <Link
              to='#'
                className="pull-right"
                data-toggle="modal"
              >
                Forgot Password?
              </Link>
            </div> */}
          </form>
        </div>
        <div className="copyright-row text-center dark-txt">
          Copyrights © All Rights Reserved by
          <Link to="/" className="theme-color">
            ANONIMOUS-ME
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
