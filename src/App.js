import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Login from "./components/login";
import ActivityCard from "./components/activities/ActivityCard";
function App() {
  return (
    <div className="App">
      <Header />
      <Login />
      <ActivityCard />
      <Footer />
    </div>
  );
}

export default App;
