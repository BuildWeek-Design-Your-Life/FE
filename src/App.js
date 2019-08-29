import React, { useState, useEffect, Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import axiosWithAuth from "./Utils/axiosWithAuth";

// Context
import { ActivityContext } from "./context/ActivityContext";
import { ReflectionContext } from "./context/ReflectionContext";
import PrivateRoute from "./components/PrivateRoute";

// Components
import Footer from "./components/footer";
import Login from "./components/login";
import Menu from "./components/menu";
import ActivitiesList from "./components/activities/ActivitiesList";
import ReflectionsList from "./components/relfections/ReflectionsList";
import ReflectionUpdateForm from "./components/relfections/ReflectionUpdateForm";
import Registration from "./components/registration/Registration";
import Dashboard from "./components/dashboard";
import AddActivity from "./components/activities/AddActivity";
import UpdateForm from "./components/activities/UpdateForm";
import AddReflection from "./components/relfections/PostForm";
import Home from "./components/Home";
function App() {
  const [activitiesArray, setActivities] = useState([]);
  const id = localStorage.getItem("id");
  console.log(activitiesArray);
  const getActivities = () => {
    return axiosWithAuth()
      .get(`https://design-bw.herokuapp.com/api/activity/${id}`)
      .then(res => {
        console.log("act req", res.data);
        setActivities(res.data);
      })
      .catch(err => {
        console.log("This is bad", err.response);
      });
  };

  useEffect(() => {
    getActivities();
  }, []);

  const [reflectionsArray, setRelfections] = useState([]);

  console.log(reflectionsArray);
  const getReflections = () => {
    return axiosWithAuth()
      .get(`https://design-bw.herokuapp.com/api/reflect/${id}`)
      .then(res => {
        console.log("list req", res.data);
        setRelfections(res.data);
      })
      .catch(err => {
        console.log("This is bad", err.response);
      });
  };

  useEffect(() => {
    getReflections();
  }, []);

  return (
    <ReflectionContext.Provider value={{ reflectionsArray }}>
      <ActivityContext.Provider value={{ activitiesArray }}>
        <div className="App">
          <Menu />
          <Switch>
            <Route exact path="/login" component={Login} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute exact path="/activity" component={ActivitiesList} />
            <PrivateRoute
              exact
              path="/reflection"
              component={ReflectionsList}
            />
            <Route exact path="/register" component={Registration} />
            <Route path="/update-activity/:id" component={UpdateForm} />
            <Route
              path="/update-reflection/:id"
              component={ReflectionUpdateForm}
            />
            <PrivateRoute
              exact
              path="/add-reflection"
              component={AddReflection}
            />
            <PrivateRoute exact path="/add-activity" component={AddActivity} />
          </Switch>
          <Footer />
        </div>
      </ActivityContext.Provider>
    </ReflectionContext.Provider>
  );
}
export default App;
