import React from "react";
import "./home.css";
import { HashLink } from "react-router-hash-link";

import AltairBg from "../../assests/altair_bg.jpg";
import AltairLogo from "../../assests/altair_logo.png";
import AltairSide from "../../assests/altair_side.jpg";

export default function Home() {
  return (
    <div>
      <div className="altair_home container">
        <div className="alt_left">
          <div className="alt_left_img">
            <img src={AltairLogo} alt="" />
          </div>
          <div className="alt_left_txt">
            As an Altair Channel Partner, we deliver leading-edge solutions
            designed to propel your organisation towards unprecedented
            innovation, performance excellence, and enduring success. Our
            collaboration with Altair opens the gateway to a comprehensive suite
            of top-tier products and invaluable expertise, poised to redefine
            your industry's competitive landscape.
          </div>
          <div className="alt_left_btns">
            <a
              className="visit_altair"
              href="https://altair.com/"
              target="_blank"
              rel="noreferrer"
            >
              <button id="altair_link">Visit Altair</button>
            </a>

            <HashLink className="cnt_altair" to={`/#contact`} smooth>
              <button id="contact_altair">Get in Touch</button>
            </HashLink>
          </div>
        </div>
        <div className="alt_right">
          <img src={AltairSide} alt="" />
        </div>
      </div>
    </div>
  );
}
