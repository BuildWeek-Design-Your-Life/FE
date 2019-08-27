import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
<<<<<<< HEAD
import { BrowserRouter as Router } from 'react-router-dom';

=======
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
>>>>>>> a32d9067c4f6f6f580278697cec03d21ba615cd9

// styles

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

const rootElement = document.getElementById("root");
<<<<<<< HEAD
ReactDOM.render(<Router><App /></Router>, rootElement);
=======
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  rootElement
);
>>>>>>> a32d9067c4f6f6f580278697cec03d21ba615cd9
