import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import { AiOutlineClose } from "react-icons/ai";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import nav_logo from "../../assests/altair_logo_nav.png";

export default function Nav({ handleSerachText, search, handleClearFilter }) {
  const [navOpen, setNavOpen] = useState(false);

  const handleNav = () => {
    setNavOpen(true);
  };

  const handleNavClose = (filter) => {
    handleSerachText(filter);
    setNavOpen(false);
  };

  const filters = [
    "Data Analytics & AI",
    "Electronic System Design",
    "Fluids & Thermal",
    "Structural Analysis",
    "Multiphysics",
    "Manufacturing",
  ];

  return (
    <div className="altair_nav">
      <div className=" container nav_sticky_top">
        <div className="company_altr">
          {/* <img src={nav_logo} alt="Altair Logo" /> */}
          <Link to="/">/Home/Simulation/Altair</Link>
        </div>
        {/* <div className="searchbar">
                    <input onChange={handleSerachText} type="search" value={search} name='altairSearch' placeholder="Search..." />
                    <button type="submit" id="search">Search</button>
                </div> */}
        <div className={navOpen ? "nav_cnt nav_open" : "nav_cnt"}>
          <button id="altair_close" onClick={handleNavClose}>
            <AiOutlineClose />
          </button>
          <div className="types_altair">
            <div className="all_filters">
              {filters.map((filter) => {
                return (
                  <div className="">
                    <div
                      className="filter_pdt"
                      onClick={() => handleNavClose(filter)}
                    >
                      {filter}
                    </div>
                    <span id="filter_line"></span>
                  </div>
                );
              })}
            </div>
            <div onClick={() => handleNavClose("")} className="clear_filter">
              Clear Filter
            </div>
          </div>
        </div>
        <div onClick={handleNav} className="filter">
          <TbAdjustmentsHorizontal />
        </div>
      </div>
    </div>
  );
}
