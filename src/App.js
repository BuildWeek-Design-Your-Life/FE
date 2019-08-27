import React from "react";
import "./App.css";

import Header from "./components/header";
import Footer from "./components/footer";
import Login from "./components/login";
import Menu from "./components/menu";
import ActivitiesList from "./components/activities/ActivitiesList";
import ActivityCard from "./components/activities/ActivityCard";
import Registration from "./components/registration/Registration";
import Dashboard from "./components/dashboard";
import Userform from "./components/registration/Userform";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import ActivitiesPost from "./components/activities/ActivitiesPost";

function App() {
  return (
    <div className="App">
      <Menu />
      <Route exact path="/login" component={Login} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/activity" component={ActivitiesList} />
      <Route exact path="/register" component={Registration} />
      <PrivateRoute exact path="/activity/create" component={ActivitiesPost} />
      <Footer />
    </div>
  );
}

export default App;
