import React from "react";
import Home from "../../components/Home_pdts/home";
import Logo from "../../assests/Windchill_logo.png";
import onshapeBg from "../../assests/onshape_bg.jpg";
import ProductsNav from "../../components/prodyctsNav/productsnav";
import Overview from "../../components/Overview/overview";
import ScrollToTop from "react-scroll-to-top";
import Info from "../../components/Products_Information/info";
import OnShapeFeatures from "../../components/OnShapeFeatures_SecondV/onshapefeatures";
//
import Cloud from "../../assests/windchill/cloud.svg";
import Security from "../../assests/windchill/security.svg";
import Updates from "../../assests/windchill/update.svg";
import Admin from "../../assests/windchill/support.svg";
import Delivery from "../../assests/windchill/delivery.svg";
import Growth from '../../assests/Growth.svg'
import Increase from '../../assests/increse.svg'
import Business from '../../assests/Business.svg'
import WorldWide from '../../assests/WorldWide.svg'
import Share from '../../assests/Share.svg'
import Time from '../../assests/Time_windchill.svg'


import "./windchill.css";
import Value from "../../components/values_windchill/value";

export default function Windchills() {
  const windchillFeatures = [
    {
      name: "Modern architecture",
      content:
        "Effortlessly manage extensive data volumes through a web architecture designed for seamless orchestration across multiple systems. This robust foundation ensures data scalability, accessibility, and integrity, driving efficient operations.",
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
    header: "Windchill PLM Software",
    content:
      "Realize value quickly with standardized, out-of-the-box functionality across a comprehensive portfolio of core PDM and advanced PLM applications.",
    logo: Logo,
    classHome: "",
    back_img:
      "https://res.cloudinary.com/dbomu1erj/image/upload/v1699790597/Images_Website/omnos9sdtcf5if3i0xwg.png",
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
      name: "Benefits",
      id: "benifits_windchill",
    },
    {
      name: "Framework",
      id: "framework_windchillV2",
    },
  ];

  const overViewContent = {
    header: "Windchill product lifecycle management software",
    content:
      "Windchill revolutionizes product development with real-time information sharing, dynamic data visualization, and seamless collaboration. Its open architecture enables integration with other systems, including IoT, creating a robust digital thread for product-driven processes. With comprehensive functionality and configurable role-based apps, Windchill optimizes PLM while ensuring traceable product data access for non-experts without excessive complexity.",
    video: "https://www.youtube.com/embed/7AIYwWE20p4?controls=0",
    id: "introduction_windchill",
  };

  const values = [
    {
      number: "15%",
      title: "PTC PLM market growth",
      img: Growth
    },
    {
      number: "50%",
      title: "Increase operational efficiency",
      img: Increase
    },
    {
      number: "59%",
      title: "of businesses consider PLM business critical or significant",
      img: Business
    },
    {
      number: "10K+",
      title: "PTC Windchill worldwide customers",
      img: WorldWide
    },
    {
      number: "30%",
      title: "PLM market size 2020",
      img: Share
    },
    {
      number: "50%",
      title: "Faster Leads Time",
      img: Time
    },
  ];

  const features = [
    {
      name: "Benefits of Implementing PLM System",
      content:
        "Windchill brings significant benefits to the product development lifecycle, including reduced costs, faster time to market, improved product quality, and enhanced collaboration. Its streamlined processes and data management optimize resources and maximize efficiency, leading to higher customer satisfaction and cost savings through minimized prototyping and increased data re-use. ",
      reversed: true,
      img: "https://res.cloudinary.com/dbomu1erj/image/upload/v1699859446/Images_Website/Products/au5amqnh87yeidcu5b3t.png",
    },
  ];

  return (
    <div>
      <Home {...home_content} />
      <ScrollToTop />
      <ProductsNav naveles={naveles} logo={Logo} />
      <Overview {...overViewContent} />
      <Value
        // title={
        //   "Windchill elevates product development for all stakeholders, delivering rapid value."
        // }
        values={values}
        id={"value_windchill"}
      />
      <Info features={features} id="benifits_windchill" />
      <OnShapeFeatures
        title="Framework & Deployment"
        className="features_windchill"
        features={windchillFeatures}
        id="framework_windchillV2"
      />
      {/* <Info features={framework} id="framework_onshape" /> */}
    </div>
  );
}
