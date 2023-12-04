import React from "react";
import Home from "../../components/Home_pdts/home";
import Logo from "../../assests/slm_logo.jpg";
import LogoNav from "../../assests/Triyas_Web.png";
import ProductsNav from "../../components/prodyctsNav/productsnav";
import Overview from "../../components/Overview/overview";
import ScrollToTop from "react-scroll-to-top";
import Info from "../../components/Products_Information/info";
import ShowMoreText from "react-show-more-text";

import Connect from "../../assests/connect.svg";
import Setup from "../../assests/setup.svg";
import Execute from "../../assests/execute.svg";
import Speed from "../../assests/speed.svg";

//

import "./slm.css";

export default function Slm() {
  const home_content = {
    header: "SERVICE LIFECYCLE MANAGEMENT",
    content: "Shaping the Future of Asset-Centric Services",
    // logo: Logo,
    // classHome: "slm_home",
    back_img:
      "https://res.cloudinary.com/dbomu1erj/image/upload/v1699864866/Images_Website/Products/xudmhcst3avsdoxjdtcg.png",
  };

  const naveles = [
    {
      name: "Introduction",
      id: "introduction_windchill",
    },
    {
      name: "SLM Stages",
      id: "value_slm",
    },
    {
      name: "Benefits",
      id: "benifits_windchill",
    },
  ];

  const overViewContent = {
    header: "Increase Revenue and Profitability from Service",
    content:
      "For complex products, manufacturing, construction machinery and transport vehicles it is crucial to be able to deliver top quality service, as well as considering the potential profitability of spare part sales. This puts high demand on maintenance in terms of diagnosis as well as correct, complete and easily accessible product information. It also stresses the need for a process approach.",
    video: "https://www.youtube-nocookie.com/embed/zB9vn2anJrw?controls=0",
    id: "introduction_windchill",
  };

  const SaaSAdv = [
    {
      name: "Link",
      icon: Connect,
      cnt: "Establish a connection with installed assets and the customer: Monitor real-time performance and usage, anticipate future events, and build a rapport with the customer.",
    },
    {
      name: "Orchestrate",
      icon: Setup,
      cnt: "Create service procedures and data structures: Build customer involvement and operational workflows, offer essential service information and materials, and define entitlements and associated obligations.",
    },
    {
      name: "Implement",
      icon: Execute,
      cnt: "Fulfill work and customer obligations: Empower relevant parties, simplify task fulfillment and validation, and capture asset-related data.",
    },
    {
      name: "Enhance",
      icon: Speed,
      cnt: "Prepare for resource requirements: Identify personnel and parts needed, gather necessary resources and information, and ensure adequate revenue coverage.",
    },
  ];

  const features = [
    {
      name: "Transform your after-sales service Organization",
      content:
        "Challenges like missing parts, outdated documentation, and low fix rates hinder after-sales growth. Transformation is needed in managing parts, delivering current service information, and predicting/preventing product failures.",
      reversed: true,
      img: "https://res.cloudinary.com/dbomu1erj/image/upload/v1699867577/Images_Website/Products/ekrtk0pb3rmynb0g8uob.png",
    },
    {
      name: "A Strategic Approach to Aftermarket",
      content:
        "Service Lifecycle Management (SLM) aligns service parts, technical communication, field service, and product support for enhanced operations. It's a combination of processes, tools, and methods customized for each case. Key benefits include visualizing enterprise data for service efficiency and utilizing real-time product data for proactive issue resolution, minimizing downtime.",
      reversed: false,
      img: "https://res.cloudinary.com/dbomu1erj/image/upload/v1699867660/Images_Website/Products/sqg5lepej36fcelyfajz.png",
    },
  ];

  return (
    <div>
      <Home {...home_content} />
      <ScrollToTop />
      <ProductsNav naveles={naveles} logo={LogoNav} />
      <Overview {...overViewContent} />
      <div id="value_slm" style={{ backgroundColor: '#f8fafc' }}>
        <div className="scndcnt container">
          <div className="whatSaaS">What is service lifecycle management?</div>
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
              Service lifecycle management, often abbreviated as SLM, involves
              coordinating service parts management, technical communication,
              field service management, and product support activities to
              optimize customer equipment's operational time. Businesses utilize
              SLM to efficiently handle spare parts and inventory, facilitate
              communication among various teams, supervise service tasks, and
              ensure smooth product operations, all aimed at ensuring that
              customer's machinery and assets run with minimal downtime.
            </ShowMoreText>
          </div>
        </div>
        <div className="third_cnt container">
          <div className="saas_adv">
            The four steps in Service Lifecycle Management (SLM)
          </div>
          <div className="lines_pls">
            <div className="lines"></div>
          </div>
          <div className="sass_adv_ans">
            An effective SLM (Service Lifecycle Management) setup involves four
            key phases: establishing a link with the asset, coordinating the
            allocation of resources, carrying out the required tasks, and
            establishing a solid data foundation to enhance operational
            efficiency.
          </div>

          <div className="sass_newUp">

            <div className="sass_exp_new container">
              {SaaSAdv.map((Adv) => {
                return (
                  <div className="advantage_new">
                    <div className="ad_icon_new">
                      <img src={Adv.icon} alt="" />
                    </div>
                    <div className="ad_header">{Adv.name}</div>
                    <div className="adv_cont">{Adv.cnt}</div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
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
