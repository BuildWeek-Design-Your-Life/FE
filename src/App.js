import React from "react";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Login from "./components/login";
<<<<<<< HEAD
import ActivityCard from "./components/activities/ActivityCard";
function App() {
  return (
    <div className="App">
      <Header />
      <Login />
      <ActivityCard />
=======
import Menu from "./components/menu";
import Dashboard from "./components/dashboard";
import Userform from "./components/registration/Userform";
import { Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Menu />
      <Route exact path="/login" component={Login} />
>>>>>>> a32d9067c4f6f6f580278697cec03d21ba615cd9
      <Footer />
    </div>
  );
}

export default App;
