import React from "react";
import { HashLink } from "react-router-hash-link";
// import Logo from '../../assests/creo_logo.png'
import "./home.css";

export default function Home({ header, content, logo, back_img, classHome }) {
  const backgroundImageUrl = `url(${back_img})`;

  const home_compo_style = {
    backgroundImage: backgroundImageUrl,
    color: "red",
  };

  return (
    <div>
      <div style={home_compo_style} className="service_home_compo">
        <div className="service_home_glassefct">
          <div className="service_home_info container">
            <div className="service_home_header">
              <div className={`service_home_img_block ${classHome}`}>
                <img
                  src={logo}
                  className="service_home_scndimg"
                  alt="service_Home Logo"
                  srcset=""
                />
              </div>
              <div className={`service_head_home ${classHome}`}>{header}</div>
            </div>
            <div className={`service_home_gen_info ${classHome}`}>
              {content}
            </div>
            <div className="service_contactus">
              <button>
                <HashLink to={`/#contact`} smooth>
                  Get an Estimated Quote
                </HashLink>
              </button>
            </div>
          </div>
          <div className={`service_home_compo_img ${classHome}`}>
            <img src={logo} loading="lazy" alt="Creo Logo" srcset="" />
          </div>
        </div>
      </div>
    </div>
  );
}
