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

const Cloud = () => {
  const services = [
    {
      name: "Product Design",
      url: "/design/productdesign",
    },
    {
      name: "3D Cad Modelling and Drafting",
      url: "/design/3dmodelling",
    },
    {
      name: "Reverse Engineering",
      url: "/design/reverseengineering",
    },
  ];
  return (
    <div className="cad_page">
      <div className="cad_first container">
        <div className="services " data-aos="fade-left">
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
          </ListGroup>
        </div>
        <div className="atT" data-aos="fade-right">
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

export default Cloud;
