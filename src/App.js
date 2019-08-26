import React from "react";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Login from "./components/login";
import Dashboard from './components/dashboard'
import Userform from "./components/registration/Userform";
function App() {
  return (
    <div className="App">
      <Header />
      <h1> Design Your Life </h1>
      <Login />
      <Footer />
    </div>
  );
}

export default App;
