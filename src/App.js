import React from "react";
import "./App.css";


import Header from "./components/header";
import Footer from "./components/footer";
import Login from "./components/login";
import Userform from "./components/registration/Userform";
function App() {
  return (
    <div className="App">
      <Header />
      <Login />
      <Userform />
      <Footer />
    </div>
  );
}

export default App;
