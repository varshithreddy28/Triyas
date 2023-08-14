import React from "react";
import "./services.css";
import Adobe from "../../assests/adobe.svg";
import Marketing from "../../assests/marketing.svg";
import Cloud from "../../assests/cloud.svg";
import { Link } from "react-router-dom";

function Services() {
  const services = [
    {
      name: "CAD Models",
      discreption:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, esse nobis! Esse sapiente ex rem soluta explicabo. In, velit repellendus?",
      url: "/cad",
      icon: Adobe,
    },
    {
      name: "Marketing",
      discreption:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate iusto eos tempore blanditiis quo molestiae laborum voluptates fuga odit reprehenderit.",
      url: "/marketing",
      icon: Marketing,
    },
    {
      name: "Cloud Solutions",
      discreption:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate iusto eos tempore blanditiis quo molestiae laborum voluptates fuga odit reprehenderit.",
      url: "/cloud",
      icon: Cloud,
    },
  ];

  return (
    <div id="services">
      <div className="home_body">
        <div className="services_heading">Services We Provide</div>
        <div className="services_all">
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
