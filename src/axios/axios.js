import axios from "axios";
import store from "store";
import { triggerError } from "../components/Alert";
import { history } from "../util/history";

const instance = axios.create({
  baseURL: "https://youngot.herokuapp.com/api/v1/",
});

instance.interceptors.request.use(
  (config) => {
    const token = store.get("token");

    if (typeof token !== "undefined" && token !== "undefined") {
      config.headers["Access-Token"] = `${token}`;
      config.headers["Authorization"] = `Bearer ${token}`;
      config.headers["Content-Type"] = "application/json";
    } else {
      config.headers["Content-Type"] = "application/json";
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const successHandler = (response) => {
  return response;
};

const errorHandler = (error) => {
  const status = error.response["status"];
  if (status === 401) {
    store.clearAll();
    history.push("/signin");
    triggerError("Your session has expired! Kindly Login again");
  }
  return Promise.reject(error);
};

instance.interceptors.response.use(
  (response) => successHandler(response),
  (error) => {
    return errorHandler(error);
  }
);

export default instance;
