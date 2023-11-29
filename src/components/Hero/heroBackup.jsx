import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Right from '../../assests/home_right.svg'
import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "react-bootstrap";

import "./hero.css"

function ControlledCarousel() {
  const [index, setIndex] = useState(1);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

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
      {/* 1 */}
      <Carousel.Item>
        <div id="hero_home2">
          <div className="hero_altrCnt">
            <div className="altairProdH">
              Altair Products
            </div>
            <div className="altrProdCnt">
              Revolutionizing structural simulation by eliminating geometry preparation and meshing, saving time and reducing errors for designers, engineers, and analysts.
            </div>
          </div>

        </div>
        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      {/* 2 */}
      <Carousel.Item>
        <div id="hero_home3">
          <div className="hero_altrCnt">
            <div className="altairProdH">
              Altair Products
            </div>
            <div className="altrProdCnt">
              Altair HyperMesh, a leading product for finite element modeling, has evolved into Altair HyperWorks. It offers an enhanced user experience, legacy functionality, and compatibility with previous HyperMesh versions.            </div>
          </div>

        </div>
        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      {/* 3 */}
      <Carousel.Item>
        <div id="hero_home4">
          <div className="hero_altrCnt">
            <div className="altairProdH">
              Altair Products
            </div>
            <div className="altrProdCnt">
              Trusted by industry leaders, OptiStruct empowers engineers with robust simulation capabilities for efficient product development and performance assessment.</div>
          </div>

        </div>
        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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

        </div>
        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>



      {/* 5 */}
      <Carousel.Item>
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
        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;