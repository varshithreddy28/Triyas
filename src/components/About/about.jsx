import React from "react";
import "./about.css";
import People from "../../assests/groupPeople.jpg";

function About() {
  return (
    <div className="home_body" id="about">
      <div className="about_data">
        <div className="about_header">ABOUT US</div>
        <div className="boost">Boost Your Business With Triyas</div>
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
      <div className="about_img">
        <img src={People} alt="" srcset="" />
      </div>
    </div>
  );
}

export default About;
