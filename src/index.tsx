import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "../src/App/App";

import "../src/db/firebase/config";
import "bulma/css/bulma.min.css";

import store from "../src/store/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
