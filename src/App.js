import React from "react";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Login from "./components/login";
import Menu from "./components/menu";
import Dashboard from "./components/dashboard";
import Userform from "./components/registration/Userform";
import { Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Menu />
      <Route exact path="/login" component={Login} />
      <Footer />
    </div>
  );
}

export default App;
