import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Drone from "../../assests/Drone.svg";
import "./landing.css";
import { Carousel, Button } from "react-bootstrap";
import Data from "./data.json";

function Landing() {
  useEffect(() => {
    console.log(Data);
  }, []);
  return (
    <div id="home">
      <Carousel>
        {Data.map((info) => {
          return (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={info.imgSrc}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>{info.name}</h3>
                <Button href={info.url} target="_blank" size="sm">
                  View
                </Button>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}

export default Landing;
