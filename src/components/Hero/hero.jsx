import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Right from '../../assests/home_right.svg'
import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "react-bootstrap";

import "./hero.css"

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const services = [

    {
      name: "Data Anylatics & AI",
      url: "#",
    }, {
      name: "Electronic System Design",
      url: "#",
    }, {
      name: "Fluid & Thermal",
      url: "#",
    }, {
      name: "Structural Anylasis",
      url: "#",
    }, {
      name: "Multiphysics",
      url: "#",
    }, {
      name: "Manufacturing",
      url: "#",
    },

    // {
    //   name: "Sim Solid",
    //   url: "/simulation/altair/simsolid",
    // },
    // {
    //   name: "Hyper Mesh",
    //   url: "/simulation/altair/hypermesh",
    // },
    // {
    //   name: "Opti Struct",
    //   url: "/simulation/altair/optistruct",
    // },

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

  const services2 = [
    {
      name: "Creo",
      url: "/cad/creo",
    },
    {
      name: "OnShape",
      url: "/cad/onshape",
    },
    {
      name: "Windchill",
      url: "/plm/windchill",
    },
    {
      name: "Vuforia",
      url: "/arvr/vuforia",
    },
    {
      name: "ThingWorx",
      url: "/iot/thingworx",
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
  const services3 = [
    {
      name: "Product Development",
      url: "#",
    },
    {
      name: "Web and Mobile Development",
      url: "#",
    },
    {
      name: "UI/UX Design",
      url: "#",
    },
    {
      name: "Machine Learning & AI",
      url: "#",
    },
    {
      name: "IoT Development",
      url: "#",
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

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval={5000} fade>
      <Carousel.Item >
        <div id="hero_home">
          <div className="hero">
            <div
              className="hero_cnt"
              data-aos="fade-up-right"
              data-aos-duration="800"
            >
              <div className="hero_tag">Transforming Your Ideas into Reality</div>
              {/* <div className="hero_line_header">
            <div className="hero_line"></div>
          </div> */}
              <div className="hero_1">
                Helping with Expertise in <span id="expertise">Design Services</span>
              </div>

            </div>
            <div
              className="hero_img"
              data-aos="fade-up-left"
              data-aos-duration="800"
            >
              <img src={Right} alt="" />
            </div>
          </div>
        </div>
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>

      {/* 4 */}
      <Carousel.Item>
        <div id="hero_home5">
          <div className="hero_altrCnt">
            <div className="altairProdH">
              Altair Products
            </div>
            <div className="altrProdCnt">
              Trusted by industry leaders, OptiStruct empowers engineers with robust simulation capabilities for efficient product development and performance assessment.</div>
          </div>
          <div className="services_altr " data-aos="fade-left">
            {/* <div className="srv_prvd">Top Altair Products we Handle </div> */}
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
        </div>
        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>

      {/* 4 */}
      <Carousel.Item>
        <div id="hero_home4">
          <div className="hero_altrCnt">
            <div className="altairProdH">
              PTC Products
            </div>
            <div className="altrProdCnt">
              PTC is a globally recognized company known for its expertise in delivering solutions in the fields of Product Lifecycle Management (PLM), Computer-Aided Design (CAD), Internet of Things (IoT), and Augmented Reality (AR).
            </div>
          </div>
          <div className="services_altr " data-aos="fade-left">
            {/* <div className="srv_prvd">Top PTC Products we Handle</div> */}
            <ListGroup>
              {services2.map((service) => {
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
        </div>
        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <div id="hero_home3">
          <div className="hero_altrCnt">
            <div className="altairProdH">
              Software Services
            </div>
            <div className="altrProdCnt">
              We quickly transform your business ideas into more modern, automated, and enjoyable digital solutions like web portals and mobile apps, we provide you with the NextGen IT solutions to meet your business objectives and prevail in the face of intense competition.
            </div>
          </div>
          <div className="services_altr " data-aos="fade-left">
            {/* <div className="srv_prvd">Software Services we Handle</div> */}
            <ListGroup>
              {services3.map((service) => {
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
        </div>
        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;