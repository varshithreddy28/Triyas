import React from "react";
import "./hero.css";
import Typewriter from "typewriter-effect";
import { HashLink } from "react-router-hash-link";

import Right from "../../assests/home_right.svg";

export default function Hero() {
  return (
    <div id="hero_home">
      <div className="hero">
        <div
          className="hero_cnt"
          data-aos="fade-up-right"
          data-aos-duration="800"
        >
          <div className="hero_tag">Transforming Your Ideas into Reality</div>
          <div className="hero_line_header">
            <div className="hero_line"></div>
          </div>
          <div className="hero_1">
            Helping with <span id="expertise">Expertise</span> in{" "}
          </div>
          <div className="services_hero">
            <Typewriter
              options={{
                strings: [
                  "Design Services",
                  "CAE Services ",
                  "Altair Products",
                  "PTC Products",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <div className="knowmore">
            <HashLink className={`knowmore`} to={`/#services`} smooth>
              Our Services
            </HashLink>
          </div>
        </div>
        <div
          className="hero_img"
          data-aos="fade-up-left"
          data-aos-duration="800"
        >
          <img src={Right} alt="" />
        </div>
      </div>
    </div>
  );
}
