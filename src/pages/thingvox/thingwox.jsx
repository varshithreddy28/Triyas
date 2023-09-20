import React from "react";
import Home from "../../components/Home_pdts/home";
import Logo from "../../assests/thingworx.png";
import ScrollToTop from "react-scroll-to-top";
import Overview from "../../components/Overview/overview";
import OnShapeFeatures from "../../components/OnShapeFeatures/onshapefeatures";
//
import Cloud from "../../assests/windchill/cloud.svg";
import Security from "../../assests/windchill/security.svg";
import Updates from "../../assests/windchill/update.svg";
import Admin from "../../assests/windchill/support.svg";
import Delivery from "../../assests/windchill/delivery.svg";

import "./thingwox.css";

export default function Thingwox() {
  const windchillFeatures = [
    {
      name: "MAXIMIZE REVENUE",
      content:
        "Scale to new markets, improve throughput, and unlock new business models such as products as a service.",
      imageUrl: Cloud,
    },
    {
      name: "REVOLUTIONIZE",
      content:
        "Get to market faster using a rich set of industrial IoT capabilities. Wrap and extend existing assets within your connected solution.",
      imageUrl: Security,
    },
    {
      name: "REDUCE COSTS",
      content:
        "Leverage data from connected products and systems to increase productivity, lower cost, and increase efficiency.",
      imageUrl: Updates,
    },
    {
      name: "IMPROVE QUALITY",
      content:
        "Make product, service, and factory operations more secure and scalable. Improve service quality, reliability, and satisfaction.",
      imageUrl: Admin,
    },
    {
      name: "MAXIMIZE FLEXIBILITY",
      content:
        "Take control of your deployment options with on-premise, cloud, or a hybrid approach. Flexibly support any industrial use case.",
      imageUrl: Delivery,
    },
  ];

  const home_content = {
    header: "ThingWorx: Accelerate success.",
    content:
      "Embrace digital transformation effortlessly with ThingWorx, the purpose-built IIoT platform designed to tackle your business obstacles.",
    logo: Logo,
    classHome: "windchill",
    back_img:
      "https://res.cloudinary.com/dbomu1erj/image/upload/v1691084381/Images_Website/s2kg55j1a7neexrrk6sg.png",
  };

  const overViewContent = {
    header: "Enhance your IIoT solution with ThingWorx.",
    content:
      "ThingWorx IIoT platform is a result of years of innovation, addressing challenges in manufacturing, service, and engineering. It offers solutions for workforce efficiency, asset optimization, and more, reducing barriers to building Industrial IoT solutions and enabling smooth scalability from pilots to enterprise-level applications.",
    video: "https://www.youtube.com/embed/lR5lXGaCi70?controls=0",
    id: "introduction_thingworx",
  };

  return (
    <div>
      <Home {...home_content} />
      <ScrollToTop />
      {/* <ProductsNav naveles={naveles} logo={Logo} /> */}
      <Overview {...overViewContent} />
      {/* <Info features={features} id="benifits_windchill" /> */}
      <OnShapeFeatures
        title="Unlock the full potential of your IIoT capabilities"
        className=""
        features={windchillFeatures}
        id="framework_windchill"
      />
      {/* <Info features={framework} id="framework_onshape" /> */}
    </div>
  );
}
