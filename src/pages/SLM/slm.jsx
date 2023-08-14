import React from "react";
import Home from "../../components/Home_pdts/home";
import Logo from "../../assests/slm_logo.jpg";
import LogoNav from "../../assests/Triyas_Web.png";
import ProductsNav from "../../components/prodyctsNav/productsnav";
import Overview from "../../components/Overview/overview";
import CreoImg from "../../assests/Triyas_Web.png";
import Info from "../../components/Products_Information/info";
import OnShapeFeatures from "../../components/OnShapeFeatures/onshapefeatures";
//
import Cloud from "../../assests/windchill/cloud.svg";
import Security from "../../assests/windchill/security.svg";
import Updates from "../../assests/windchill/update.svg";
import Admin from "../../assests/windchill/support.svg";
import Delivery from "../../assests/windchill/delivery.svg";

import "./slm.css";
import Value from "../../components/values_windchill/value";

export default function Slm() {
  const windchillFeatures = [
    {
      name: "Modern architecture",
      content:
        "Manage data at scale with web architecture built for multi-system orchestration.",
      imageUrl: Cloud,
    },
    {
      name: "Secure collaboration",
      content:
        "Work securely inside and outside the enterprise with IP- and platform-based protections.",
      imageUrl: Security,
    },
    {
      name: "Streamlined Upgrades",
      content:
        "Reduce user disruption by upgrading data in place with time-saving automation.",
      imageUrl: Updates,
    },
    {
      name: "Admin and Support",
      content:
        "Leverage IoT-based “always on” system monitoring and PTC's expert-driven learning programs.",
      imageUrl: Admin,
    },
    {
      name: "Flexible Delivery",
      content:
        "Flexible delivery: Deliver on-premises or in the cloud for greater uptime and security compliance.",
      imageUrl: Delivery,
    },
  ];

  const home_content = {
    header: "SERVICE LIFECYCLE MANAGEMENT",
    content: "A Strategic Approach to After Market Services",
    logo: Logo,
    classHome: "slm_home",
    back_img:
      "https://res.cloudinary.com/dbomu1erj/image/upload/v1691933945/Images_Website/dakg6uzfnfx502yzmuxg.png",
  };

  const naveles = [
    {
      name: "Introduction",
      id: "introduction_windchill",
    },
    {
      name: "Value",
      id: "value_windchill",
    },
    {
      name: "Benifits",
      id: "benifits_windchill",
    },
  ];

  const overViewContent = {
    header: "Increase revenue and profitability from service",
    content:
      "For complex products, manufacturing, construction machinery and transport vehicles it is crucial to be able to deliver top quality service, as well as considering the potential profitability of spare part sales. This puts high demand on maintenance in terms of diagnosis as well as correct, complete and easily accessible product information. It also stresses the need for a process approach.",
    video: "https://www.youtube-nocookie.com/embed/zB9vn2anJrw?controls=0",
    id: "introduction_windchill",
  };

  const values = [
    {
      number: "30%",
      title: "of businesses run an e-commerce initiative",
    },
    {
      number: "30X",
      title:
        "Profit margin contribution from aftermarket compared with new sales",
    },
    {
      number: "40%",
      title: "Average savings on translation cost with a CCMS strategy",
    },
    {
      number: "25%",
      title:
        "The OEM ability to capture business from their customers aftermarket",
    },
    {
      number: "1/3",
      title: "of all service calls fails to deliver “first time fix”",
    },
    {
      number: "$1M",
      title: "Lower Translation Costs",
    },
  ];

  const features = [
    {
      name: "Transform your after-sales service organization",
      content:
        "Challenges like missing parts, outdated documentation, and low fix rates hinder after-sales growth. Transformation is needed in managing parts, delivering current service information, and predicting/preventing product failures.",
      reversed: true,
      img: CreoImg,
    },
    {
      name: "A strategic approach to Aftermarket",
      content:
        "Service Lifecycle Management (SLM) aligns service parts, technical communication, field service, and product support for enhanced operations. It's a combination of processes, tools, and methods customized for each case. Key benefits include visualizing enterprise data for service efficiency and utilizing real-time product data for proactive issue resolution, minimizing downtime.",
      reversed: false,
      img: CreoImg,
    },
  ];

  return (
    <div>
      <Home {...home_content} />
      <ProductsNav naveles={naveles} logo={LogoNav} />
      <Overview {...overViewContent} />
      <Value
        title={
          "Windchill elevates product development for all stakeholders, delivering rapid value."
        }
        values={values}
        id={"value_windchill"}
      />
      <Info features={features} id="benifits_windchill" />
      {/* <OnShapeFeatures
        title="Framework & Deployment"
        className="features_windchill"
        features={windchillFeatures}
        id="framework_windchill"
      /> */}
      {/* <Info features={framework} id="framework_onshape" /> */}
    </div>
  );
}
