import React from "react";
// import Home from "../../assests/cad_home";
// import cad_1 from "../../assests/cad_1.jpg";
// import cad_2 from "../../assests/cad_2.jpeg";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import "./marketing.css";
import { Helmet } from "react-helmet";
import { AiOutlineRight } from "react-icons/ai";

// import Projects from "./data.json";

const Ptc = ({ title }) => {
  const services = [
    {
      name: "Creo",
      url: "/cad/creo",
    },
    {
      name: "Creo Plus",
      url: "/cad/creoplus",
    },
    {
      name: "OnShape",
      url: "/cad/onshape",
    },

    // {
    //   name: "Service 1",
    //   url: "#",
    // },
    // {
    //   name: "Service 1",
    //   url: "#",
    // },
    // {
    //   name: "Service 1",
    //   url: "#",
    // },
  ];

  const capabilities = [
    {
      title: "3D CAD Modelling and Drafting",
      description: [
        "3D Modelling",
        "Manufacturing drawings",
        "Design calculations",
        "Legacy Conversion",
        "Preparation of bill of materials",
      ],
    },
    {
      title: "Linear Dynamics",
      description: [
        "Frequency Analysis",
        "Shock Analysis",
        "Random Vibration analysis",
        "Sine sweep analysis",
      ],
    },
    {
      title: "Reverse Engineering",
      description: [
        "Design optimization through existing product design",
        "Designing of new part to replace legacy parts",
        "Reverse engineering through tear down",
      ],
    },
    {
      title: "CAE Services",
      description: [
        "FE Modeling & Meshing",
        "Linear static analysis",
        "Non linear static analysis",
      ],
    },
    { title: "Thermal Analysis", description: ["Steady state", "Transient"] },
    {
      title: "Product Design",
      description: [
        "Concept Ideation",
        "Concept design detailing",
        "Engineering prototype",
      ],
    },
    { title: "Explicit Analysis", description: ["Drop Test analysis"] },
    { title: "Multi Body Dynamics", description: ["Rigid", "Flexible"] },
    { title: "CFD", description: ["Thermal Flow", "Internal/External"] },
  ];

  return (
    <div className="cad_page">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{`Triyas | ${title}`}</title>
      </Helmet>
      <div className="cad_firstA container">
        <div className="services " data-aos="fade-left">
          <div className="srv_prvd">Services we Handle : </div>
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
        <div className="atT" data-aos="fade-right">
          <div className="atTriyas">
            PTC is a globally recognized company known for its expertise in
            delivering solutions in the fields of Product Lifecycle Management
            (PLM), Computer-Aided Design (CAD), Internet of Things (IoT), and
            Augmented Reality (AR).
          </div>
          {/* <div className="abtstaff"> */}
          {/* <div className="abtppl">
              <div className="ppl_txt">We are Team of : </div>
              <div className="ppl_team">50+ Professionals</div>
            </div>
            <div className="abtclients">
              <div className="clnts_txt">Satisfied Clients : </div>
              <div className="clnts_num">20+</div>
            </div> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Ptc;
