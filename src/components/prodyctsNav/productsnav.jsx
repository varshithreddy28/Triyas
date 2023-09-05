import React from "react";
import { HashLink } from "react-router-hash-link";
// import CreoLogo from "../../assests/creo_logo.png";

import "./productsnav.css";

function ProductsNav({ logo, naveles }) {
  return (
    <div className="thrd_cnt">
      {/* <HashLink to={`#creo_benifits`} smooth>
        Benifits of Creo
  </HashLink> */}

      <div className="creo_nav container">
        <div className="creo_logo">
          <img src={logo} alt="" />
        </div>
        <div className="nav_elements">
          {naveles.map((ele) => {
            return (
              // <div className="nav_ele">
              <HashLink to={`#${ele.id}`} smooth className="nav_ele">
                {ele.name}
              </HashLink>
              // </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProductsNav;
