import React from "react";
import Home from "../../components/Home_pdts/home";
import Logo from "../../assests/codebemer_logo.png";
import Img1 from "../../assests/codebeamer/img1.webp";

import CreoImg from "../../assests/Triyas_Web.png";
import Info from "../../components/Products_Information/info";

import "./codebeamer.css";

export default function Codebeamer() {
  const home_content = {
    header: " Codebeamer / ALM Solution",
    content:
      "Codebeamer is an Application Lifecycle Management (ALM) platform for modern product and software development. See how Codebeamer can help your organization to simplify complex product and software engineering at scale.",
    logo: Logo,
    classHome: "windchill",
    back_img:
      "https://res.cloudinary.com/dbomu1erj/image/upload/v1691930672/Images_Website/g8m8nqqgsfw6avhgbsqm.jpg",
  };

  const features = [
    {
      name: "Explore the benefits of Codebeamer",
      content:
        "Codebeamer is trusted by the world's top product developers for its scalability across organizations, robust performance and reliability, and customizable workflows. Discover why your team will embrace it!",
      reversed: true,
      img: Img1,
    },
    {
      name: "Requirements Management.",
      content:
        "Transform Market Insights into High-Quality Products at Unprecedented Speed. Achieve Clarity and Alignment Across All Stakeholders to Minimize Costs and Accelerate Delivery. Monitor Objects and Actions Throughout the Entire Delivery Process.",
      reversed: false,
      img: CreoImg,
    },
    {
      name: "Quality Assurance & Testing.",
      content:
        "Incorporate Quality Management into Your Development Processes, Building Trust in Your Products. Effectively Monitor and Manage QA Activities Across the Entire Lifecycle, Accelerating Product Verification.",
      reversed: true,
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
