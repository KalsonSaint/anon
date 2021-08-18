import React from "react";
import ReactDOM from "react-dom";
import AllRoutes from "./routes";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";
import ErrorBoundary from "./components/ErrorBoundary";


// import "./assets/css/style3860.css";
// import "./assets/css/stylec4ca.css";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ErrorBoundary>
        <React.StrictMode>
          <AllRoutes />
        </React.StrictMode>
      </ErrorBoundary>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
