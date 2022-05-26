import React from "react";
import "./App.css";
import Navbar from "./Components/Header/Navbar/Navbar";
import MainHeader from "./Components/Header/MainHeader/MainHeader";
import About from "./Components/Home/About/About";
import Skills from "./Components/Home/Skills/Skills";
import Services from "./Components/Home/Services/Services";
import Project from "./Components/Home/Projects/Project";

function App() {
  return (
    <div className="container-fluid bg-color">
      <Navbar></Navbar>
      <MainHeader></MainHeader>
      <About></About>
      <Skills></Skills>
      <Services></Services>
      <Project></Project>
    </div>
  );
}

export default App;
