import React, { useEffect } from "react";
import { useHistory, withRouter } from "react-router-dom";

import store from "store";
import { triggerSuccess } from "../components/Alert";

const Logout = () => {
  const history = useHistory();

  useEffect(() => {
    triggerSuccess("Logout Successful");
    store.clearAll();
    history.push("/");
  });
  return <div></div>;
};

export default withRouter(Logout);
