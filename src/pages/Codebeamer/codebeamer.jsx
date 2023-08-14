import React from "react";
import Home from "../../components/Home_pdts/home";
import Logo from "../../assests/codebemer_logo.png";
import Img1 from "../../assests/codebeamer/img1.webp";

import CreoImg from "../../assests/Triyas_Web.png";
import Info from "../../components/Products_Information/info";

import "./codebeamer.css";

export default function Codebeamer() {
  const home_content = {
    header: "Simplify Large-Scale Product and Software Engineering",
    content:
      "Codebeamer: Enhanced ALM Platform for Advanced Product and Software Development with Unique Configuration Capabilities.",
    logo: Logo,
    classHome: "windchill",
    back_img:
      "https://res.cloudinary.com/dbomu1erj/image/upload/v1691930672/Images_Website/g8m8nqqgsfw6avhgbsqm.jpg",
  };

  const features = [
    {
      name: "Explore the benefits of Codebeamer",
      content:
        "PTC Codebeamer empowers industrial manufacturing and automotive engineering teams, optimizing complex technology delivery. This all-in-one solution streamlines lifecycle management, offering collaborative development, regulatory compliance, and centralized development hub. It's favored for scalability, performance, and adaptable workflows by global engineering leaders. Discover the reasons your team will embrace Codebeamer.",
      reversed: true,
      img: Img1,
    },
    {
      name: "Requirements Management.",
      content:
        "Transform data-driven insights into high value products at unprecedented speeds. Clarify objectives and align stakeholders to optimize budgets and quickly manage operations. Effortlessly track items and actions along their journey from production through delivery.",
      reversed: false,
      img: CreoImg,
    },
    {
      name: "Quality Assurance & Testing.",
      content:
        "Ensure outstanding quality in every product with comprehensive QA management. Trace and monitor development processes to build customer confidence, maintain stability throughout the lifecycle, and boost verification speed for faster production results.",
      reversed: true,
      img: CreoImg,
    },
    {
      name: "Software Development.",
      content:
        "Maximize quality while minimizing complexity through incorporating mature processes into your software products. Facilitate unified collaboration between experts in hardware, software and service innovation with Waterfall, (scaled) Agile or Hybrid methods tailored to suit specific needs.",
      reversed: false,
      img: CreoImg,
    },
  ];

  return (
    <div>
      <Home {...home_content} />
      {/* <ProductsNav naveles={naveles} logo={Logo} /> */}
      {/* <Overview {...overViewContent} /> */}
      <Info
        title="About Codebeamer"
        features={features}
        id="codebeamer_about"
      />
      {/* <OnShapeFeatures features={onshapeFeatures} id="features" /> */}
      {/* <Info features={framework} id="framework_onshape" /> */}
    </div>
  );
}
