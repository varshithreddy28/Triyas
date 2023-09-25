import React from "react";
import "./home.css";
import Hero from "../Hero/hero";
import Services from "../Services/services";
import Contact from "../Contact/contact";
import Landing from "../Landingpage/landing";
import ScrollToTop from "react-scroll-to-top";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Hero />
      <ScrollToTop />
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
