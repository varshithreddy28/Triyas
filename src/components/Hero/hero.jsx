import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Right from '../../assests/home_right.svg'

import "./hero.css"

function ControlledCarousel() {
  const [index, setIndex] = useState(1);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval={3000} fade>
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
    </Carousel>
  );
}

export default ControlledCarousel;