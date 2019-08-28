import React, {Component} from 'react'
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
import UpdateForm from './components/activities/UpdateForm'
import PrivateRoute from "./components/PrivateRoute";
import ActivitiesPost from "./components/activities/ActivitiesPost";
import ReflectionsList from "./components/relfections/ReflectionsList";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <Route exact path="/login" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/activity" component={ActivitiesList} />
        <Route exact path="/reflection" component={ReflectionsList} />
        <Route exact path="/register" component={Registration} />
         <Route path="/update-activity/:id" component={UpdateForm}/>

        <PrivateRoute
          exact
          path="/activity/create"
          component={ActivitiesPost}
        />
        <Footer />
      </div>
    );
  }
}
