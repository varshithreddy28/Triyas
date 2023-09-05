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
import "./cad.css";
import Projects from "./data.json";

const Cad = () => {
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
      name: "On Shape",
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
      {/* <div className="cad_scnd">
        <div className="cad_data container">
          Unlocking Design Potential through <span id="highlight">Triyas</span>{" "}
          Professional CAD Services
        </div>
      </div> */}
      <div className="cad_four container">
        <div className="cad_fr_header">Services we Provide : </div>
        <Row
          xs={1}
          sm={2}
          md={3}
          lg={3}
          xl={3}
          className="capabilities-container"
        >
          {capabilities.map((capability, index) => (
            <Col key={index} className="capability">
              <div className="captitle">{capability.title}</div>
              <ListGroup>
                {
                  capability.description.map((item) => {
                    return (
                      <ListGroup.Item action variant="dark" className="capitms">
                        {item}
                      </ListGroup.Item>
                    );
                  })
                  // console.log(capability.description[0])
                }
              </ListGroup>
            </Col>
          ))}
        </Row>
      </div>
      <div className="cad_thrd">
        <div className="project_heder">Projects</div>
        <div className="proj_card ">
          <Container>
            <Row xs={1} sm={2} md={2} lg={3} className="">
              {Projects.map((project) => {
                return (
                  <Col>
                    <Card>
                      <Card.Img variant="top" src={project.imageUrls[0]} />
                      <Card.Body>
                        <Card.Title>{project.name}</Card.Title>
                        <Card.Text>{project.description}</Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Cad;
