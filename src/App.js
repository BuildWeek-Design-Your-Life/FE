import React from "react";
import "./App.css";


import Header from "./components/header";
import Footer from "./components/footer";
import Login from "./components/login";
import Menu from "./components/menu";
import ActivitiesList from "./components/activities/ActivitiesList";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';
import ActivityCard from './components/activities/ActivityCard'




function App() {
  return (
    <div className="App">
      <Menu />
      <Route exact path="/login" component={Login} />
      <PrivateRoute exact path="/activities" component={ActivitiesList} />
      {/* <ActivitiesList /> */}
      <Footer />
    </div>
  );
}

export default App;