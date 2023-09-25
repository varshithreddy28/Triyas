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
      name: "3D Cad Modeling and Drafting",
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
          <div className="srv_prvd">Services we Handle:</div>
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
            Our comprehensive range of offerings covers a wide spectrum,
            assisting both individuals and businesses in the creation and
            development of various products, enhancing problem-solving
            capabilities, and cultivating technical expertise.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cloud;
