import React from "react";
import "./Common.css";
import Contact from "./Components/Contact/Contact";
import "react-bootstrap";
import Header from "./Components/Header/Header";
import SectionOne from "./Components/SectionOne/SectionOne";
import Portfolio from "./Components/Portfolio/Portfolio";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";

const HomePage = () => {
  return (
    <div>
      <Header />
      <SectionOne />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
