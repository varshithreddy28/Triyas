import React, { useState } from "react";
import "./altair.css";
import Home from "../../components/AltairHome/home";
import Nav from "../../components/AltairNav/nav";
import Pdts from "../../components/Altairpdts/pdts";
import AboutAltair from "../../components/About Altair/about";
import ProductsNav from "../../components/prodyctsNav/productsnav";
import ScrollToTop from "react-scroll-to-top";

export default function Altair() {
  const [search, setSearch] = useState("");
  const [isSearched, setisSearched] = useState(false);

  const handleSearchText = (text) => {
    // setSearch(e.target.value)
    console.log(typeof text);
    if (typeof text === "string") {
      if (text === "") {
        console.log("Cleared Filters");
        setSearch("");
        setisSearched(false);
      } else {
        setSearch(text);
        setisSearched(true);
      }
    }
  };

  const naveles = [
    {
      name: "Introduction",
      id: "introduction_onshape",
    },
    {
      name: "Platform",
      id: "platform_onshape",
    },
    {
      name: "Features & Functionality",
      id: "features",
    },
    {
      name: "Framework",
      id: "framework_onshape",
    },
  ];

  return (
    <div>
      <Home />
      {/* <ProductsNav naveles={naveles} logo={Logo} /> */}
      <ScrollToTop />
      <AboutAltair />
      <Nav handleSerachText={handleSearchText} search={search} />
      <Pdts search={search} isSearched={isSearched} />
    </div>
  );
}
