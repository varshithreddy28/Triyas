import React from "react";
import Home from "../../components/Home_pdts/home";
import Logo from "../../assests/vuforia_logo.webp";
import NavLogo from "../../assests/vuforia_logo.png";
import ProductsNav from "../../components/prodyctsNav/productsnav";
import Overview from "../../components/Overview/overview";
import ScrollToTop from "react-scroll-to-top";
import Info from "../../components/Products_Information/info";
import OnShapeFeatures from "../../components/OnShapeFeatures/onshapefeatures";
//
import Cloud from "../../assests/vuforia_1.svg";
import Security from "../../assests/windchill/security.svg";
import Updates from "../../assests/vuforia_2.svg";

import "./vuforia.css";

export default function Windchills() {
  const windchillFeatures = [
    {
      name: "Reduce Training and Labour Costs",
      content:
        "Leverage existing expertise more effectively. Improve onboarding and new skills development. Eliminate the need to train using multiple IT and OT systems. Cross-train users to improve workforce agility and flexibility.",
      imageUrl: Cloud,
    },
    {
      name: "Improve Safety and Compliance",
      content:
        "Limit safety risks. Reduce the time and cost of compliance documentation. Create enforcable audit trails for management and reporting. Ensure traceability and quality reconciliation.",
      imageUrl: Security,
    },
    {
      name: "Minimize Errors and Downtime",
      content:
        "Optimize machine configurations and maintenance tasks. Reduce overall operator and assembly errors. Provide role-based unified views into previously siloed data. Improve users own comprehension of complex products and processes.",
      imageUrl: Updates,
    },
  ];

  const home_content = {
    header: "Market-Leading Enterprise AR",
    content:
      "Vuforia is a comprehensive, scalable enterprise AR platform. Our wide-ranging solution suite ensures that we can provide the right AR technology to every customer based on their business needs.",
    logo: Logo,
    back_img:
      "https://res.cloudinary.com/dbomu1erj/image/upload/v1701676273/Images_Website/yt2dmpkndnyaax4z9ipd.png",
  };

  const naveles = [
    {
      name: "Introduction",
      id: "introduction_vuforia",
    },
    {
      name: "Metrices",
      id: "metrices_vuforia",
    },
    {
      name: "Products",
      id: "products_vuforia",
    },
  ];

  const overViewContent = {
    header: "We are your trusted industrial AR partner.",
    content:
      "Our approach combines top-notch software solutions, technical support, and professional training, providing the leading industrial augmented reality solution in the market. We envision a future where businesses leverage visual technologies like AR and VR to enhance efficiency, streamline training, optimize operations, and expedite decision-making, enabling them to thrive and succeed just like individuals benefit from using visual information.",
    video: "https://www.youtube.com/embed/cavpNX6_vUM?controls=0",
    id: "introduction_vuforia",
  };

  const features = [
    {
      name: "Vuforia Expert Capture",
      content:
        "Discover the easiest way to create step- by - step AR instructions and Al - enhanced inspections that enable frontline workers to get their jobs done more quickly and accurately.",
      reversed: true,
      img: "https://res.cloudinary.com/dbomu1erj/image/upload/v1699862406/Images_Website/Products/udnfhnc1aolhbj9hv86u.png",
    },
    {
      name: "Vuforia Studio",
      content:
        "Efficiently create immersive AR experiences that leverage existing 3D and IoT data—and improve worker safety, proficiency, and agility.",
      reversed: false,
      img: "https://res.cloudinary.com/dbomu1erj/image/upload/v1699862620/Images_Website/Products/z3rfuvx6wrulhy5tolkm.png",
    },
    {
      name: "Vuforia Engine",
      content:
        "Learn why over one million developers have chosen the advanced computer vision, calibrated performance, and cross- platform reach ofVuforia Engine, making it the most popular AR software on the planet.",
      reversed: true,
      img: "https://res.cloudinary.com/dbomu1erj/image/upload/v1699862665/Images_Website/Products/uyoml9enfetxjgabl1pp.png",
    },
    {
      name: "Vuforia Chalk",
      content:
        "Vuforia Chalk brings your technicians and experts together to solve problems faster and effectively.Power your people with Chalk's augmented reality remote assistance.",
      reversed: false,
      img: "https://res.cloudinary.com/dbomu1erj/image/upload/v1694524879/zze66vcriue0nqbmcz6x.jpg",
    },
  ];

  return (
    <div>
      <Home {...home_content} />
      <ScrollToTop />
      <ProductsNav naveles={naveles} logo={NavLogo} />
      <Overview {...overViewContent} />
      <OnShapeFeatures
        className="features_vuforia"
        features={windchillFeatures}
        id="metrices_vuforia"
        title="Metrices"
      />
      <Info features={features} id="products_vuforia" />

      {/* <Info features={framework} id="framework_onshape" /> */}
    </div>
  );
}
