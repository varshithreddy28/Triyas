import React from "react";
import "./home.css";
import About from "../About/about";
import Services from "../Services/services";
import Contact from "../Contact/contact";
import Landing from "../Landingpage/landing";
import ScrollToTop from "react-scroll-to-top";

const Home = () => {
  return (
    <div>
      <Landing />
      <ScrollToTop />
      <About />
      <Services />
      <Contact />
    </div>
  );
};

export default Home;
