import React from "react";
import "./home.css";
import Hero from "../Hero/hero";
import Services from "../Services/services";
import Contact from "../Contact/contact";
import Landing from "../Landingpage/landing";
import ScrollToTop from "react-scroll-to-top";

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Contact />
    </div>
  );
};

export default Home;

/**
 * <Landing />
      <ScrollToTop />
      <About />
      <Services />
      <Contact />
 */
