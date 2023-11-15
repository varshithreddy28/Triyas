import React from "react";
// import Home from "../../assests/cad_home";
// import cad_1 from "../../assests/cad_1.jpg";
// import cad_2 from "../../assests/cad_2.jpeg";
import { Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";

import {
  ListGroup,
  ListGroupItem,
  Button,
  Card,
  Row,
  Col,
  Container,
} from "react-bootstrap";
import "./cae.css";
// import Projects from "./data.json";

const Cae = () => {
  const services = [
    {
      name: "Fe Modeling & Meshing",
      url: "/cae/femodelling",
    },
    {
      name: "Static Analysis",
      url: "/cae/staticanalysis",
    },
    {
      name: "Thermal Analysis",
      url: "/cae/thermalanalysis",
    },
    {
      name: "Linear Dynamics",
      url: "/cae/lineardynamics",
    },
    {
      name: "Explicit Analysis",
      url: "/cae/explicitanalysis",
    },
    {
      name: "MultiBody Dynamics",
      url: "/cae/multibodydynamics",
    },
  ];

  const capabilities = [
    { title: "CFD", description: ["Thermal Flow", "Internal/External"] },
    {
      title: "Static Anylasis",
      description: ["Linear static analysis", "Non linear static analysis"],
    },
    { title: "Thermal Analysis", description: ["Steady state", "Transient"] },
    { title: "Multi Body Dynamics", description: ["Rigid", "Flexible"] },
    {
      title: "Linear Dynamics",
      description: [
        "Frequency Analysis",
        "Shock Analysis",
        "Random Vibration analysis",
        "Sine sweep analysis",
      ],
    },
    { title: "Explicit Analysis", description: ["Drop Test analysis"] },
  ];
  return (
    <div className="cad_page">
      <div className="cad_first container">
        <div className="services ">
          <div className="srv_prvd">Services we Handle </div>
          <ListGroup>
            {services.map((service) => {
              return (
                <ListGroupItem className="serviT">
                  <Link to={service.url} className="aiOutLineAlign">
                    {service.name}
                    <span className="hand"> <AiOutlineRight /></span>
                  </Link>
                </ListGroupItem>
              );
            })}
            {/* <ListGroupItem>...</ListGroupItem> */}
          </ListGroup>
        </div>
        <div className="atT">
          <div className="atTriyas">
            Our specialization lies in harnessing advanced software and
            simulations to thoroughly analyze, enhance, and validate engineering
            designs. We provide an extensive array of services that cater to
            these needs.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cae;
