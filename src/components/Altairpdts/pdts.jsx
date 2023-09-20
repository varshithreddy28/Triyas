import { useState, useEffect } from "react";
import React from "react";
import "./pdts.css";
import DemoImg from "../../assests/altair_pdt_demo.avif";
import { HashLink } from "react-router-hash-link";
import Modal from "../Modal/Modal";
import { LazyLoadImage } from "react-lazy-load-image-component";
// import ScrollToTop from "react-scroll-to-top";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Pdts({ search, isSearched }) {
  const [modelOpen, setModelOpen] = useState(false);
  const [submitted, setSubmit] = useState(false);
  const [searchedPdts, setsearchedPdts] = useState([]);

  const products = [
    {
      name: "SimSolid",
      img: "https://res.cloudinary.com/dbomu1erj/image/upload/v1692802761/Images_Website/Altair/isrqaphc5xmen1rkxz0b.jpg",
      keywords: ["HyperWorks", "Structural Analysis"],
      discreption:
        "Revolutionizing structural simulation by eliminating geometry preparation and meshing, saving time and reducing errors for designers, engineers, and analysts.",
      link: "https://altair.com/simsolid",
    },
    {
      name: "SimLab",
      img: "https://res.cloudinary.com/dbomu1erj/image/upload/v1692802486/Images_Website/Altair/pabrqnjiqk2dy8b6xocj.jpg",
      keywords: ["Fluids & Thermal", "Structural Analysis", "Multiphysics"],
      discreption:
        "A versatile, process-driven simulation environment that streamlines complex assembly analysis, simplifying the setup of multiple physics simulations and reducing finite element model creation time.",
      link: "https://altair.com/simlab",
    },
    {
      name: "OptiStruct",
      img: "https://res.cloudinary.com/dbomu1erj/image/upload/v1692802949/Images_Website/Altair/kttlrwbc6szspg6cgyvo.jpg",
      keywords: ["SimLab", "Structural Analysis"],
      discreption:
        "Trusted by industry leaders, OptiStruct empowers engineers with robust simulation capabilities for efficient product development and performance assessment.",
      link: "https://altair.com/optistruct",
    },
    {
      name: "InspireForm",
      img: "https://res.cloudinary.com/dbomu1erj/image/upload/v1692803094/Images_Website/Altair/avhie1w4xhxkfzlmha4r.webp",
      keywords: ["Manufacturing"],
      discreption:
        "Inspire Form streamlines the stamping simulation process, aiding product designers and engineers in enhancing designs, ensuring robust manufacturing, and achieving cost-efficiency.",
      link: "https://altair.com/inspire-form",
    },
    {
      name: "Inspire Cast",
      img: "https://res.cloudinary.com/dbomu1erj/image/upload/v1695014796/Images_Website/Altair/kivyufg8qniikrojgouh.png",
      keywords: ["Manufacturing"],
      discreption:
        "Inspire Cast is a user-friendly casting simulation software for quality components. It helps visualize and rectify casting defects early, saving downstream costs.",
      link: "https://altair.com/structures-applications",
    },
    {
      name: " Inspire Extrude",
      img: "https://res.cloudinary.com/dbomu1erj/image/upload/v1695014863/Images_Website/Altair/qtiply69vzzzc7udbdt5.png",
      keywords: ["Manufacturing"],
      discreption:
        "Inspire Extrude Metal is an accessible simulation tool for all. It enhances understanding of profile features and process variables, reduces costs, and improves quality and yield.",
      link: "https://altair.com/structures-applications",
    },
    {
      name: "Inspire Mold",
      img: "https://res.cloudinary.com/dbomu1erj/image/upload/v1692945275/Images_Website/Altair/ytytp3seqbudlctqxjc6.jpg",
      keywords: ["Manufacturing"],
      discreption:
        "Inspire Mold offers a streamlined approach to injection molding design. It democratizes simulation, enabling early exploration, improved products, and reduced costs.",
      link: "https://altair.com/inspire-mold",
    },
    {
      name: "Inspire Print3D",
      img: "https://res.cloudinary.com/dbomu1erj/image/upload/v1695014928/Images_Website/Altair/q7si6mmeoionym9wnnps.jpg",
      keywords: ["Manufacturing"],
      discreption:
        "Inspire Print3D expedites the design and simulation of efficient 3D-printed parts. It aids engineers in understanding design changes, reducing costs, and improving manufacturability.",
      link: "https://altair.com/structures-applications",
    },
    {
      name: "HyperMesh",
      img: "https://res.cloudinary.com/dbomu1erj/image/upload/v1695014998/Images_Website/Altair/rva8nz5frfhyht6wejg1.webp",
      keywords: ["OptiStruct", "Structural Analysis"],
      discreption:
        "Altair HyperMesh, a leading product for finite element modeling, has evolved into Altair HyperWorks. It offers an enhanced user experience, legacy functionality, and compatibility with previous HyperMesh versions.",
      link: "https://altair.com/structures-applications",
    },
    {
      name: "Radioss",
      img: "https://res.cloudinary.com/dbomu1erj/image/upload/v1692803272/Images_Website/Altair/a8tndprvjfrxng8srswf.jpg",
      keywords: ["HyperMesh", "Structural Analysis"],
      discreption:
        "Radioss is a top solution for optimizing product performance under dynamic loadings. It's an industry standard for crash and safety analysis, improving design safety and manufacturability.",
      link: "https://altair.com/radioss",
    },
    {
      name: "MotionSolve",
      img: "https://res.cloudinary.com/dbomu1erj/image/upload/v1695015069/Images_Website/Altair/dz2r1uxdfjtdqjj1nklg.jpg",
      keywords: ["Structural Analysis"],
      discreption:
        "MotionSolve is a powerful tool for simulating and optimizing multi-body systems and mechanical assemblies. It aids in product design and performance evaluation.",
      link: "https://altair.com/structures-applications",
    },
    {
      name: "CFD",
      img: DemoImg,
      keywords: ["Fluids & Thermal"],
      discreption:
        "Altair offers comprehensive tools for computational fluid dynamics (CFD) modeling. AcuSolve enables robust, scalable, and accurate analysis of flow, heat transfer, and turbulence, expediting results analysis and physics exploration.",
      link: "https://altair.com/resource/introduction-to-acusolve",
    },
    {
      name: "HyperLife",
      img: "https://res.cloudinary.com/dbomu1erj/image/upload/v1695015144/Images_Website/Altair/zhr45q4kmyzahhqozkli.jpg",
      keywords: ["Structural Analysis"],
      discreption:
        "HyperLife is a durability analysis tool that predicts product life under various loading conditions. It helps optimize product design for longevity and reliability.",
      link: "https://altair.com/structures-applications",
    },
    {
      name: "HyperCrash",
      img: DemoImg,
      keywords: ["Structural Analysis"],
      discreption:
        "HyperCrash is a robust pre-processing environment specifically designed to automate the creation of finite element models for crash analysis and safety evaluation.",
      link: "https://altair.com/resource/introduction-to-hypercrash",
    },
    {
      name: "HyperForm",
      img: DemoImg,
      keywords: ["Manufacturing"],
      discreption:
        "Sheet metal forming simulation with fast solver, die design analysis, and browser-based results visualization for enhanced manufacturing. Integrated with advanced analysis tools.",
      link: "https://2021.help.altair.com/2021/hwdesktop/mfs/mfs.htm?hyperform.htm",
    },
    {
      name: "EDEM",
      img: "https://res.cloudinary.com/dbomu1erj/image/upload/v1695015242/Images_Website/Altair/f6egrh66mztmxruc9hfc.jpg",
      keywords: ["Manufacturing"],
      discreption:
        "EDEM is a discrete element method software application for bulk material simulation. It's used for optimizing equipment design and analyzing the behavior of granular materials.",
      link: "https://altair.com/structures-applications",
    },
    {
      name: "FEKO",
      img: "https://res.cloudinary.com/dbomu1erj/image/upload/v1692945134/Images_Website/Altair/fgoxv48n38t1ikx364qo.webp",
      keywords: ["Fluids & Thermal", "Acusolve"],
      discreption:
        "Feko is a leader in high-frequency electromagnetic simulation, serving industries like aerospace and automotive to enhance product design and reduce time-to-market.",
      link: "https://altair.com/resource/introduction-to-acusolve",
    },
    {
      name: "WinProp",
      img: DemoImg,
      keywords: ["Electronic System Design"],
      discreption:
        "WinProp provides fast, accurate wave propagation models and radio network planning for various standards. It's ideal for coverage planning, network optimization, and IoT deployments.",
      link: "https://web.altair.com/winprop-telecom",
    },
    {
      name: "FLUX",
      img: "https://res.cloudinary.com/dbomu1erj/image/upload/v1692803408/Images_Website/Altair/oymtfezr7dkjmxuc14dp.jpg",
      keywords: ["Electronic System Design"],
      discreption:
        "Flux, a reference in electromechanical equipment simulation, optimizes performance and efficiency. It simulates various conditions, aiding designers in creating optimized, high-performance products efficiently.",
      link: "https://altair.com/flux",
    },
    {
      name: "POLLEX",
      img: DemoImg,
      keywords: ["Electronic System Design"],
      discreption:
        "PollEx applies Altair's simulation-driven design philosophy to electronics, enabling physics-based analysis and cross-discipline collaboration. It ensures innovation, performance, reliability, and compliance.",
      link: "https://altair.com/electronic-system-design",
    },
    {
      name: "RapidMiner",
      img: "https://res.cloudinary.com/dbomu1erj/image/upload/v1692945408/Images_Website/Altair/xaprxpv213gbjhrtsynw.png",
      keywords: ["Data Analytics & AI"],
      discreption:
        "RapidMiner's integration includes seamless collaboration with Altair Knowledge Studio, Altair SmartWorks, and Altair SLC for enhanced data analytics and insights.",
      link: "https://web.altair.com/altair-acquires-rapidminer",
    },
    {
      name: "Monarch",
      img: "https://res.cloudinary.com/dbomu1erj/image/upload/v1692803661/Images_Website/Altair/pkryffyyqz1g2oplthny.jpg",
      keywords: ["Data Analytics & AI"],
      discreption:
        "Monarch stands as a premier desktop-based self-service data preparation solution, empowering efficient and user-friendly data management for diverse tasks.",
      link: "https://altair.com/monarch",
    },
    {
      name: "Panopticon",
      img: "https://res.cloudinary.com/dbomu1erj/image/upload/v1692803751/Images_Website/Altair/jcxw918xfqzmkm3l0jvm.jpg",
      keywords: ["Data Analytics & AI"],
      discreption:
        "Panopticon empowers business users, analysts, and engineers, providing real-time insights to those deeply involved in operations and decision-making processes.",
      link: "https://altair.com/panopticon",
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

  const sepUrl = ["RapidMiner", "WinProp", "HyperForm", "HyperCrash"];

  products.forEach((product) => {
    product.browserurl = product.name.toLowerCase().replace(/\s+/g, "");
    product.viewPg = false;
    const urlIndx = sepUrl.findIndex((ele) => ele == product.name);
    if (urlIndx !== -1) {
      product.viewPg = true;
    }
  });

  // for (const obj in products) {
  //   console.log(obj);
  // }

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
                    <Link
                      onClick={() => setModelState()}
                      id="btn_alrlink_view"
                      to={
                        product.viewPg
                          ? `${product.link}`
                          : `/simulation/altair/${product.browserurl}`
                      }
                    >
                      More Details
                      <BsArrowRight />
                    </Link>
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
