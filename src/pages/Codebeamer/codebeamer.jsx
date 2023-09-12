import React from "react";
import Home from "../../components/Home_pdts/home";
import Logo from "../../assests/codebemer_logo.png";
import Img1 from "../../assests/codebeamer/img1.webp";

import CreoImg from "../../assests/Triyas_Web.png";
import Info from "../../components/Products_Information/info";
import ShowMoreText from "react-show-more-text";

import "./codebeamer.css";

export default function Codebeamer() {
  const home_content = {
    header: " Codebeamer / ALM Solution",
    content:
      "Codebeamer is an Application Lifecycle Management (ALM) platform for modern product and software development. See how Codebeamer can help your organization to simplify complex product and software engineering at scale.",
    logo: Logo,
    classHome: "windchill",
    back_img:
      "https://res.cloudinary.com/dbomu1erj/image/upload/v1694196061/Images_Website/hl9u9vdz6l7n2mkpzmgv.jpg",
  };

  const explore = [
    {
      name: "Explore the benefits of Codebeamer",
      content:
        "Codebeamer is an innovative digital workflow solution that enhances collaboration in development, improves product line efficiency, and ensures regulatory compliance. It extends beyond traditional Application Lifecycle Management (ALM) with configurable product line capabilities and adaptability for complex processes. By connecting development tools seamlessly, it offers a unified platform and automates process control for regulatory standards. Trusted by leading product developers, Codebeamer is scalable, reliable, and customizable, making it an excellent choice for development teams.",
      reversed: true,
      img: Img1,
    },
  ];

  const features = [
    {
      name: "Requirements Management.",
      content:
        "Transform Market Insights into High-Quality Products at Unprecedented Speed. Achieve Clarity and Alignment Across All Stakeholders to Minimize Costs and Accelerate Delivery. Monitor Objects and Actions Throughout the Entire Delivery Process.",
      reversed: false,
      img: "https://res.cloudinary.com/dbomu1erj/image/upload/v1694525205/jgwuutoq1zyai6atik6c.jpg",
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
      <Info title="About Codebeamer" features={explore} id="codebeamer_about" />
      <div className="scndcnt container">
        <div className="whatSaaS">Codebeamer features</div>
        <div className="lines_pls">
          <div className="lines"></div>
        </div>
        <div className="whatSaaS_ans">
          <ShowMoreText
            /* Default options */
            lines={3}
            more="Expand"
            less="Show less"
            className="content-css"
            anchorClass="show-more-less-clickable"
            expanded={false}
            // width={2000}
            truncatedEndingComponent={"..... "}
          >
            Codebeamer is a complete lifecycle management solution that excels
            in requirements, risk, and test management. It helps teams capture
            and track requirements, manage risks, and plan and execute tests
            efficiently, ensuring a smooth development process.
          </ShowMoreText>
        </div>
      </div>
      <Info
        // title="About Codebeamer"
        features={features}
        id="codebeamer_about"
      />
      {/* <OnShapeFeatures features={onshapeFeatures} id="features" /> */}
      {/* <Info features={framework} id="framework_onshape" /> */}
    </div>
  );
}
