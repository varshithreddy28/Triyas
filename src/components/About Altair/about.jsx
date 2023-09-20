import React from "react";
import "./about.css";
import People from "../../assests/altair_bg2.png";

function AboutAltair() {
  return (
    <div className="home_body " id="about_altair">
      <div className="about_data altair_abt_data">
        {/* <div className="about_header">ABOUT US</div> */}
        <div className="boost">We are the Channel Partners of Altair</div>
        <div className="about_text">
          We are proud to be a dedicated channel partner for Altair, a global
          leader in engineering and product design solutions. Our partnership
          with Altair enables us to deliver cutting-edge technology and
          expertise to empower different organisations.
        </div>
        <div className="data_details">
          <div className="years_header">
            <span className="years">5+</span>
            <span className="year_text">Years of Excellence</span>
          </div>
          <div className="cients_header">
            <span className="clients">25+</span>
            <span className="clients_text">Client's Satisfaction</span>
          </div>
        </div>
      </div>
      <div className="about_img altair_abt_img">
        <img src={People} alt="" srcset="" />
      </div>
    </div>
  );
}

export default AboutAltair;
