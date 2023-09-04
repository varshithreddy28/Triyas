import React from "react";
import "./about.css";
import People from "../../assests/altair_bg2.png";

function AboutAltair() {
  return (
    <div className="home_body " id="about_altair">
      <div className="about_data altair_abt_data">
        {/* <div className="about_header">ABOUT US</div> */}
        <div className="boost">We are the Channel Parterns of Altair</div>
        <div className="about_text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
          delectus. Consequuntur dolor quod facere id hic vero voluptate
          voluptates dolore!
        </div>
        <div className="data_details">
          <div className="years_header">
            <span className="years">3+</span>
            <span className="year_text">Years of Excellence</span>
          </div>
          <div className="cients_header">
            <span className="clients">100</span>
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
