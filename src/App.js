import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';

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
import PrivateRoute from './components/PrivateRoute';
import UpdateForm from './components/activities/UpdateForm'
import { axiosWithAuth } from "./Utils/axiosWithAuth";


const App = ()=>  {
  const [activity, setActivity] = useState([])

  const updateActivity = updatedActivity => {
    setActivity(activity.map(activity => (
      activity.id === updatedActivity.id ? updatedActivity : activity
    )));
  };
  
  const getActivities = () => {
    axiosWithAuth()
      .get("https://design-bw.herokuapp.com/api/activity")
      .then(res => {
        setActivity(res.data);
      })
      .catch(err => {
        console.log("This is bad", err.response);
      });
  };


  return (
    <div className="App">
      <Menu />
      <Route exact path="/login" component={Login} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/activity" component={ActivitiesList} />
      <Route exact path="/register" component={Registration} />
      <Route path="/update-activity/:id" component={UpdateForm}/>
      <Footer />
    </div>
  );
}

export default App;