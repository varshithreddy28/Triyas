import { useState, useEffect } from "react";
import React from "react";
import "./pdts.css";
import DemoImg from "../../assests/altair_pdt_demo.avif";
import { HashLink } from "react-router-hash-link";
import Modal from "../Modal/Modal";
import { LazyLoadImage } from "react-lazy-load-image-component";
// import ScrollToTop from "react-scroll-to-top";
import { BsArrowRight } from "react-icons/bs";

export default function Pdts({ search, isSearched }) {
  const [modelOpen, setModelOpen] = useState(false);
  const [submitted, setSubmit] = useState(false);
  const [searchedPdts, setsearchedPdts] = useState([]);

  const products = [
    {
      name: "Altair RapidMiner",
      img: DemoImg,
      keywords: ["Altair RapidMiner", "Data Analytics & AI"],
      discreption:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Nihil iste accusamus debitis aliquam perspiciatis maxime excepturi quia id molestias? Dolore!",
      link: "https://altair.com/data-analytics",
    },
    {
      name: "Mornach",
      img: DemoImg,
      keywords: ["Mornach", "Data Analytics & AI"],
      discreption:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Nihil iste accusamus debitis aliquam perspiciatis maxime excepturi quia id molestias? Dolore!",
      link: "https://altair.com/data-analytics",
    },
    {
      name: "Panopticon",
      img: DemoImg,
      keywords: ["Panopticon", "Data Analytics & AI"],
      discreption:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Nihil iste accusamus debitis aliquam perspiciatis maxime excepturi quia id molestias? Dolore!",
      link: "https://altair.com/data-analytics",
    },
    {
      name: "HyperWorks",
      img: DemoImg,
      keywords: ["HyperWorks", "Structural Analysis"],
      discreption:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Nihil iste accusamus debitis aliquam perspiciatis maxime excepturi quia id molestias? Dolore!",
      link: "https://altair.com/structures-applications",
    },
    {
      name: "OptiStruct",
      img: DemoImg,
      keywords: ["OptiStruct", "Structural Analysis"],
      discreption:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Nihil iste accusamus debitis aliquam perspiciatis maxime excepturi quia id molestias? Dolore!",
      link: "https://altair.com/structures-applications",
    },
    {
      name: "HyperMesh",
      img: DemoImg,
      keywords: ["HyperMesh", "Structural Analysis"],
      discreption:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Nihil iste accusamus debitis aliquam perspiciatis maxime excepturi quia id molestias? Dolore!",
      link: "https://altair.com/structures-applications",
    },
    {
      name: "SimLab",
      img: DemoImg,
      keywords: ["SimLab", "Structural Analysis"],
      discreption:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Nihil iste accusamus debitis aliquam perspiciatis maxime excepturi quia id molestias? Dolore!",
      link: "https://altair.com/structures-applications",
    },
    {
      name: "SimSolid",
      img: DemoImg,
      keywords: ["SimSolid", "Structural Analysis"],
      discreption:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Nihil iste accusamus debitis aliquam perspiciatis maxime excepturi quia id molestias? Dolore!",
      link: "https://altair.com/structures-applications",
    },
    {
      name: "HyperLife",
      img: DemoImg,
      keywords: ["HyperLife", "Structural Analysis"],
      discreption:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Nihil iste accusamus debitis aliquam perspiciatis maxime excepturi quia id molestias? Dolore!",
      link: "https://altair.com/structures-applications",
    },
    {
      name: "Inspire",
      img: DemoImg,
      keywords: ["Inspire", "Structural Analysis"],
      discreption:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Nihil iste accusamus debitis aliquam perspiciatis maxime excepturi quia id molestias? Dolore!",
      link: "https://altair.com/structures-applications",
    },
    {
      name: "MotionSolve",
      img: DemoImg,
      keywords: ["MotionSolve", "Structural Analysis"],
      discreption:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Nihil iste accusamus debitis aliquam perspiciatis maxime excepturi quia id molestias? Dolore!",
      link: "https://altair.com/structures-applications",
    },
    {
      name: "Radioss",
      img: DemoImg,
      keywords: ["Radioss", "Structural Analysis"],
      discreption:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Nihil iste accusamus debitis aliquam perspiciatis maxime excepturi quia id molestias? Dolore!",
      link: "https://altair.com/structures-applications",
    },
    {
      name: "HyperView",
      img: DemoImg,
      keywords: ["HyperView", "Structural Analysis"],
      discreption:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Nihil iste accusamus debitis aliquam perspiciatis maxime excepturi quia id molestias? Dolore!",
      link: "https://altair.com/structures-applications",
    },
    {
      name: "Feko",
      img: DemoImg,
      keywords: ["Feko", "Electromagnetics"],
      discreption:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Nihil iste accusamus debitis aliquam perspiciatis maxime excepturi quia id molestias? Dolore!",
      link: "https://altair.com/electronic-system-design",
    },
    {
      name: "Flux",
      img: DemoImg,
      keywords: ["Flux", "Electromagnetics"],
      discreption:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Nihil iste accusamus debitis aliquam perspiciatis maxime excepturi quia id molestias? Dolore!",
      link: "https://altair.com/electronic-system-design",
    },
    {
      name: "EDEM",
      img: DemoImg,
      keywords: ["EDEM", "Fluids & Thermal"],
      discreption:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Nihil iste accusamus debitis aliquam perspiciatis maxime excepturi quia id molestias? Dolore!",
      link: "https://altair.com/fluids-thermal-applications",
    },
    {
      name: "Altair CFD",
      img: DemoImg,
      keywords: ["Altair CFD", "Fluids & Thermal"],
      discreption:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Nihil iste accusamus debitis aliquam perspiciatis maxime excepturi quia id molestias? Dolore!",
      link: "https://altair.com/fluids-thermal-applications",
    },
    {
      name: "Flow Simulator",
      img: DemoImg,
      keywords: ["Flow Simulator", "Fluids & Thermal"],
      discreption:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Nihil iste accusamus debitis aliquam perspiciatis maxime excepturi quia id molestias? Dolore!",
      link: "https://altair.com/fluids-thermal-applications",
    },
    {
      name: "Inspire Cast",
      img: DemoImg,
      keywords: ["Inspire Cast", "Manufacturability"],
      discreption:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Nihil iste accusamus debitis aliquam perspiciatis maxime excepturi quia id molestias? Dolore!",
      link: "https://altair.com/manufacturing-applications",
    },
    {
      name: "Inspire Form",
      img: DemoImg,
      keywords: ["Inspire Form", "Manufacturability"],
      discreption:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Nihil iste accusamus debitis aliquam perspiciatis maxime excepturi quia id molestias? Dolore!",
      link: "https://altair.com/manufacturing-applications",
    },
    {
      name: "Inspire Extrude Metal",
      img: DemoImg,
      keywords: ["Inspire Extrude Metal", "Manufacturability"],
      discreption:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Nihil iste accusamus debitis aliquam perspiciatis maxime excepturi quia id molestias? Dolore!",
      link: "https://altair.com/manufacturing-applications",
    },
    {
      name: "Inspire Extrude Polymer",
      img: DemoImg,
      keywords: ["Inspire Extrude Polymer", "Manufacturability"],
      discreption:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Nihil iste accusamus debitis aliquam perspiciatis maxime excepturi quia id molestias? Dolore!",
      link: "https://altair.com/manufacturing-applications",
    },
    {
      name: "Inspire Print 3D",
      img: DemoImg,
      keywords: ["Inspire Print 3D", "Manufacturability"],
      discreption:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Nihil iste accusamus debitis aliquam perspiciatis maxime excepturi quia id molestias? Dolore!",
      link: "https://altair.com/manufacturing-applications",
    },
    // {
    //     name: "",
    //     img: DemoImg,
    //     keywords: ["", ""],
    //     discreption: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Nihil iste accusamus debitis aliquam perspiciatis maxime excepturi quia id molestias? Dolore!",
    //     link: ""
    // },
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
    setsearchedPdts([...products]);
    const items = JSON.parse(localStorage.getItem("modalsubmit"));
    if (items) {
      // console.log(items)
      setSubmit(items);
    }
  }, []);

  useEffect(() => {
    if (submitted) localStorage.setItem("modalsubmit", JSON.stringify(true));
  }, [submitted]);

  useEffect(() => {
    console.log(search);
    if (isSearched) {
      let tempArr = [];
      for (let i = 0; i < products.length; i++) {
        const element = products[i];
        if (element.keywords.includes(search)) tempArr.push(element);
      }
      console.log(tempArr);
      setsearchedPdts(tempArr);
    } else {
      setsearchedPdts([...products]);
    }
  }, [search]);

  return (
    <div className="container">
      <div className="pdts_header">Altair Product's : </div>
      {/* <ScrollToTop /> */}
      <div className="altair_pdts container">
        {searchedPdts.map((product) => {
          return (
            <div className="altair_product">
              <div className="pdt_img">
                <LazyLoadImage src={product.img} />
                {/* <img src={product.img} alt="Product Image" /> */}
              </div>
              <div className="pdt_header">{product.name}</div>
              <div className="pdt_disc">{product.discreption}</div>
              <div className="pdt_altair_btns">
                {submitted ? (
                  <>
                    <a
                      id="alr_pdt_link"
                      href={product.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <a onClick={() => setModelState()} id="btn_alrlink_view">
                        {/* {`Altair ${product.name} in Detail `} */}
                        More Details
                        <BsArrowRight />
                      </a>
                    </a>
                    <Modal
                      open={modelOpen}
                      handleModalClose={handleModalClose}
                      handleModelSubmit={handleModelSubmit}
                    />
                  </>
                ) : (
                  <>
                    <a onClick={() => setModelState()} id="btn_alrlink_view">
                      {/* {`Altair ${product.name} in Detail `} */}
                      More Details
                      <BsArrowRight />
                    </a>
                    <Modal
                      open={modelOpen}
                      handleModalClose={handleModalClose}
                      handleModelSubmit={handleModelSubmit}
                    />
                  </>
                )}
                {/* <HashLink className="cnt_altair_pdt" to={`/#contact`} smooth>
                  <button id="contact_altair_pdt">Contact us</button>
                </HashLink> */}

                {/* <a id="altair_pdt_link" target="_blank" href={product.link} rel="noreferrer">
                                        <button id="btn_altairlink">View</button>
                                    </a>

                                    <HashLink className='cnt_altair_pdt' to={`/#contact`} smooth>
                                        <button id="contact_altair_pdt">
                                            Contact us
                                        </button>
                                    </HashLink> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
