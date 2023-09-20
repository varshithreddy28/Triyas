import React, { useState } from "react";
import "./altair.css";
import Home from "../../components/AltairHome/home";
import Nav from "../../components/AltairNav/nav";
import Pdts from "../../components/Altairpdts/pdts";
import AboutAltair from "../../components/About Altair/about";
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

  return (
    <div>
      <Home />
      <ScrollToTop />
      <AboutAltair />
      <Nav handleSerachText={handleSearchText} search={search} />
      <Pdts search={search} isSearched={isSearched} />
    </div>
  );
}
