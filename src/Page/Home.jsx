import React from "react";
import Header from "../Components/Header/Header";
import SectionOne from "../Components/SectionOne/SectionOne";
import Portfolio from "../Components/Portfolio/Portfolio";
import About from "../Components/About/About";
import Contact from "../Components/Contact/Contact";
import Footer from "../Components/Footer/Footer";
import "react-bootstrap";

const Home = () => {
  return (
    <>
      <Header />
      <SectionOne />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
