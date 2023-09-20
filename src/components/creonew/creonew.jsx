import React, { useState, useEffect } from "react";
import "./creonew.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Modal from "../Modal/Modal";

export default function Creonew() {
  const [modelOpen, setModelOpen] = useState(false);
  const [submitted, setSubmit] = useState(false);

  const creo_features = [
    {
      name: "Creo Composites",
      content:
        "Utilize Creo for designing with composite materials to achieve products that are both robust and lightweight. Composites allow for precise customization by combining different fabrics to enhance strength, flexibility, and localized impact absorption within the design. The outcome is a highly optimized structure perfectly aligned with your engineering objectives.",
      btn: "Discover Creo Composites",
      img: "https://pdsvision.com/wp-content/uploads/2022/11/PTC-Creo-10-Composites.jpg.webp",
      inverted: true,
    },
    {
      name: "Creo Electrification",
      content:
        "Creo Electrification refers to the suite of features and capabilities within PTC's Creo software that enables engineers and product designers to create and optimize electrified products. This includes electric vehicles, electronic components, and systems that rely on electrical power. It's a critical part of the broader Creo product design and engineering platform.",
      btn: "Discover Routed Systems",
      img: "https://res.cloudinary.com/dbomu1erj/image/upload/v1694521029/mfn00bknljxgejknurbd.png",
      inverted: false,
    },
    {
      name: "Design for Ergonomics",
      content:
        "Ensuring the safety and efficiency of your product users is paramount. Explore the latest Creo enhancements designed to consider factors like range of movement, field of vision, and user uniqueness. With Visual Field features now offering reflection analysis and manikins supporting multiple reach envelopes, your design process is more user-centric than ever.",
      btn: "Explore Human factors",
      img: "https://res.cloudinary.com/dbomu1erj/image/upload/v1694521543/qvkaroxwy2tlqtotxk5e.png ",
      inverted: true,
    },
    {
      name: "Simulation Driven Design",
      content:
        "Meet Creo Ansys Simulation Advanced, the newest addition to our Creo simulation lineup, featuring support for nonlinear materials. Creo Simulation Live has been enhanced with expanded contact simulation choices and improved results options for fluid and structural analyses. We've also enriched Creo Flow Analysis and Creo Simulate with improved animations and enhanced multibody support. Furthermore, our generative design capabilities now include rotational symmetry and the ability to incorporate point mass and remote loads, providing even more design versatility .",
      btn: "Discover Creo Ansys Simulation",
      img: "https://res.cloudinary.com/dbomu1erj/image/upload/v1694522047/kkpnnkvczfcss24abip7.jpg ",
      inverted: false,
    },
    {
      name: "Additive and Subtractive Manufacturing",
      content:
        "In Creo 10, our additive manufacturing capabilities offer users the flexibility to design various beam-based lattice types, including rhombic and formula-driven lattices. On the subtractive manufacturing front, High-Speed Milling now supports barrel tools for both wall and floor 5-axis finishing, optimizing toolpath efficiency and enhancing surface finish quality.",
      btn: "Discover Additive Manufacturing",
      img: "https://res.cloudinary.com/dbomu1erj/image/upload/v1694521603/vf7jauqudbyvfjysvqsm.png ",
      inverted: true,
    },
  ];

  const setModelState = () => {
    // if details are not submitted then only we need to open this
    if (submitted === false) setModelOpen(!modelOpen);
  };

  const handleModalClose = () => {
    setModelOpen(false);
  };

  const handleModelSubmit = () => {
    setSubmit(true);
    setModelOpen(false);
  };

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("modalsubmit"));
    if (items) {
      // console.log(items)
      setSubmit(items);
    }
  }, []);

  useEffect(() => {
    if (submitted) localStorage.setItem("modalsubmit", JSON.stringify(true));
  }, [submitted]);

  return (
    <div>
      <div className="whats_new_header">
        <div className="header_new">
          PTC Creo 10 – New Features and Functionality
        </div>
        <div className="lines"></div>
      </div>
      <div className="frth_cnt container">
        <div className="wnew_cnt">
          <div className="wnewheader">Usability and Productivity</div>
          <div className="wnewtcnt">
            Introducing our finest Creo yet. Experience a wide array of
            enhancements designed to boost daily productivity. These
            improvements encompass advanced tools for CAD model management and
            manipulation, expanded capabilities for composite product design,
            and enhancements in areas like electrification, ergonomics design,
            model-based definition (MBD), simulation, and both additive and
            subtractive manufacturing.
          </div>
          <div className="creo_enhance">
            {submitted ? (
              <>
                <a
                  href="https://www.triyas.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button onClick={() => setModelState()} id="enhance_btn">
                    {" "}
                    Creo 10 - Top enhancements{" "}
                  </button>
                </a>
                <Modal
                  open={modelOpen}
                  handleModalClose={handleModalClose}
                  handleModelSubmit={handleModelSubmit}
                />
              </>
            ) : (
              <>
                <button onClick={() => setModelState()} id="enhance_btn">
                  {" "}
                  Creo 10 - Top enhancements{" "}
                </button>
                <Modal
                  open={modelOpen}
                  handleModalClose={handleModalClose}
                  handleModelSubmit={handleModelSubmit}
                />
              </>
            )}
          </div>
        </div>
        <div className="video-responsive">
          <iframe
            width="92%"
            height="100%"
            src="https://www.youtube-nocookie.com/embed/zUKBscabvj0?controls=0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      {creo_features.map((feature) => {
        return (
          <div className="container">
            {feature.inverted ? (
              <div className="compositions inverted">
                <div className="compo_img">
                  <LazyLoadImage
                    src={feature.img} // use normal <img> attributes as props
                  />
                  {/* <img loading="lazy" src={feature.img} alt="" srcset="" /> */}
                </div>
                <div className="compo_cnt">
                  <div className="new_header">{feature.name}</div>
                  <div className="new_cnt">{feature.content}</div>
                  <div className="creo_enhance">
                    {submitted ? (
                      <>
                        <a
                          href="https://www.triyas.com/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <button
                            onClick={() => setModelState()}
                            id="enhance_btn"
                          >
                            {" "}
                            {feature.btn}{" "}
                          </button>
                        </a>
                        <Modal
                          open={modelOpen}
                          handleModalClose={handleModalClose}
                          handleModelSubmit={handleModelSubmit}
                        />
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => setModelState()}
                          id="enhance_btn"
                        >
                          {" "}
                          {feature.btn}{" "}
                        </button>
                        <Modal
                          open={modelOpen}
                          handleModalClose={handleModalClose}
                          handleModelSubmit={handleModelSubmit}
                        />
                      </>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div className="compositions">
                <div className="compo_cnt">
                  <div className="new_header">{feature.name}</div>
                  <div className="new_cnt">{feature.content}</div>
                  <div className="creo_enhance">
                    {submitted ? (
                      <>
                        <a
                          href="https://www.triyas.com/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <button
                            onClick={() => setModelState()}
                            id="enhance_btn"
                          >
                            {" "}
                            {feature.btn}{" "}
                          </button>
                        </a>
                        <Modal
                          open={modelOpen}
                          handleModalClose={handleModalClose}
                          handleModelSubmit={handleModelSubmit}
                        />
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => setModelState()}
                          id="enhance_btn"
                        >
                          {" "}
                          {feature.btn}{" "}
                        </button>
                        <Modal
                          open={modelOpen}
                          handleModalClose={handleModalClose}
                          handleModelSubmit={handleModelSubmit}
                        />
                      </>
                    )}
                  </div>
                </div>
                <div className="compo_img">
                  <LazyLoadImage
                    src={feature.img} // use normal <img> attributes as props
                  />
                  {/* <img loading="lazy" src={feature.img} alt="" srcset="" /> */}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
