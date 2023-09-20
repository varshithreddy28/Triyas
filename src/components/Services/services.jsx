import React from "react";
import "./services.css";
import Adobe from "../../assests/altairpdts.svg";
import Marketing from "../../assests/ptcpdts.svg";
import Cloud from "../../assests/designpdts.svg";
import CAE from "../../assests/caepdts.svg";
import AR from "../../assests/arpdts.svg";
import Iot from "../../assests/electronicpdts.svg";

import { Link } from "react-router-dom";

function Services() {
  const services = [
    {
      name: "Altair Products",
      discreption:
        "Altair's software suite offers an expansive and versatile open-architecture solution that spans simulation, data analytics, and high-performance computing.",
      url: "/simulation/altair",
      icon: Adobe,
    },
    {
      name: "PTC Products",
      discreption:
        "PTC is a renowned worldwide company that specializes in providing solutions in PLM, CAD, IoT, and AR.",
      url: "/ptc",
      icon: Marketing,
    },
    {
      name: "Design Services",
      discreption:
        "We encompass a broad spectrum of offerings aiding individuals and businesses in crafting and developing diverse products, problem solving skills, and technical Expertise",
      url: "/designservices",
      icon: Cloud,
    },
    {
      name: "CAE Services",
      discreption:
        "We specialize in using advanced software and simulations to analyze, improve, and validate engineering designs, offering a wide range of services.",
      url: "/caeservices",
      icon: CAE,
    },
    {
      name: "AR & VR",
      discreption:
        "We specialize in creating captivating and interactive experiences that bridge the gap between the physical and digital worlds. ",
      url: "/arvr/vuforia",
      icon: AR,
    },
    {
      name: "Industrial IoT",
      discreption:
        "We're at the forefront of the Industrial Internet of Things (IIoT) revolution, helping businesses unlock the potential of connected devices and data-driven insights.",
      url: "/iot/thingworx",
      icon: Iot,
    },
  ];

  return (
    <div id="services">
      <div className="home_body">
        <div
          className="services_heading"
          data-aos="fade-down"
          data-aos-duration="800"
        >
          We offer the Following Services and Products :
        </div>
        <div
          className="services_all"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          {services.map((service) => {
            return (
              <div className="service_card">
                <div className="service_icon">
                  <img src={service.icon} alt="Service Icon" srcset="" />
                </div>
                <div className="service_name">{service.name}</div>
                <div className="service_disc">{service.discreption}</div>
                <div className="service url">
                  <Link to={service.url}>
                    <button className="service_btn">View</button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Services;
