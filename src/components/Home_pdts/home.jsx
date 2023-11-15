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
      <div style={home_compo_style} className="home_compo">
        <div className="home_glassefct">
          <div
            className="home_info container"
            data-aos="fade-up-right"
            data-aos-duration="800"
          >
            <div className="home_header">
              <div className={`home_img_block ${classHome}`}>
                {
                  logo &&
                  <img
                    src={logo}
                    className="home_scndimg"
                    alt="Home Logo"
                    srcset=""
                  />
                }
              </div>
              <div className={`head_home ${classHome}`}>{header}</div>
            </div>
            <div className={`home_gen_info ${classHome}`}>{content}</div>
            <div className="contactus">
              <button>
                <HashLink to={`/#contact`} smooth>
                  Get an Estimated Quote
                </HashLink>
              </button>
            </div>
          </div>
          <div
            className={`home_compo_img ${classHome}`}
          >
            <div className=""
            // data-aos="fade-up-left"
            // data-aos-duration="800"
            >
              {
                logo &&
                <img src={logo} loading="lazy" alt="Creo Logo" srcset="" />
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
