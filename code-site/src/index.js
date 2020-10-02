import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Firebase, { FirebaseContext } from "./Components/Firebase";
// import 'bootstrap-css-only/css/bootstrap.min.css';
import "./Assets/scss/mdb-free.scss";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./Assets/scss/style.scss";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from './Constants/routes';
import withSiderLayout from './Components/Home/antLayout';
import SiderDemo from './Components/Home/SiderDemo';

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <Router>
      <App />
    </Router>
  </FirebaseContext.Provider>,

  document.getElementById("root")
);

serviceWorker.unregister();
