import React from "react";
// import Home from "../../assests/cad_home";
// import cad_1 from "../../assests/cad_1.jpg";
// import cad_2 from "../../assests/cad_2.jpeg";
import { Link } from "react-router-dom";
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
      name: "Fe Modelling & Meshing",
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
      name: "Explicit Anylasis",
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
          <div className="srv_prvd">Softwares we Handle : </div>
          <ListGroup>
            {services.map((service) => {
              return (
                <ListGroupItem className="serviT">
                  <Link to={service.url}>
                    <span className="hand"> 👉🏻</span> {service.name}
                  </Link>
                </ListGroupItem>
              );
            })}
            {/* <ListGroupItem>...</ListGroupItem> */}
          </ListGroup>
        </div>
        <div className="atT">
          <div className="atTriyas">
            At Triyas we Provide high-quality CAD services tailored to meet the
            needs of mechanical, automotive, architecture, and structural
            engineering companies.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cae;
