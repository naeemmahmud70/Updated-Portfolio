import React from "react";
import "./App.css";
import Navbar from "./Components/Header/Navbar/Navbar";
import MainHeader from "./Components/Header/MainHeader/MainHeader";
import About from "./Components/Home/About/About";
import Skills from "./Components/Home/Skills/Skills";
import Services from "./Components/Home/Services/Services";
import Project from "./Components/Home/Projects/Project";
import Review from "./Components/Home/Review/Review";
import Contact from "./Components/Home/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="container-fluid bg-color">
      <Navbar></Navbar>
      <MainHeader></MainHeader>
      <About></About>
      <Skills></Skills>
      <Services></Services>
      <Project></Project>
      <Review></Review>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
