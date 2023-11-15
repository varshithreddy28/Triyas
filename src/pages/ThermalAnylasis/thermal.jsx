import React from "react";
import Home from "../../components/Services home/home";
import ScrolltoTop from "react-scroll-to-top";

import Info from "../../components/Services Para/info";

import "./thermal.css";
import What from "../../components/Service What/what";

export default function ThermalAnylasis() {
  const home_content = {
    header: "Thermal Analysis",
    content:
      "In engineering and product design, we excel in thermal analysis, comprehending heat transfer via conduction, convection, and radiation to optimise product thermal performance.",
    // logo: "https://res.cloudinary.com/dbomu1erj/image/upload/v1693295716/Images_Website/Altair/qawspft4ed6o6furrqcz.jpg",
    // classHome: "thermal",
    back_img:
      "https://res.cloudinary.com/dbomu1erj/image/upload/v1699871026/Images_Website/Products/y9gpwftevednlpqeugvl.png",
  };

  const aboutService = {
    header:
      "Heat Transfer Modes and Product Performance: What You Need to Know",
    content:
      "There are three primary modes of heat transfer: conduction, convection, and radiation. When evaluating how a product responds to these heat transfer mechanisms, thermal analysis is employed to compute temperatures. This analysis aids in assessing the thermal performance of the product under varying conditions.",
  };

  const features = [
    {
      name: "Steady State",
      content:
        "At Triyas, we specialize in unravelling the mysteries of temperature equilibrium through expert Steady State Thermal Analysis. Our team of skilled engineers possess an intricate understanding of heat transfer principles, employing advanced simulation tools to predict thermal behaviour. With unwavering precision, we guide designs toward thermal excellence.",
      reversed: true,
      img: "https://res.cloudinary.com/dbomu1erj/image/upload/v1699871274/Images_Website/Products/aiczsegvxcw4h5p0mrva.jpg",
    },
    {
      name: "Transient ",
      content:
        "We excel in solving the complexities of dynamic temperature changes through expert Transient State Thermal Analysis. Our team of skilled engineers hold an in-depth understanding of heat dynamics, utilizing advanced simulation tools to predict transient thermal behaviour. With unwavering precision, we guide designs toward thermal excellence in fluctuating conditions.",
      reversed: false,
      img: "https://res.cloudinary.com/dbomu1erj/image/upload/v1699871312/Images_Website/Products/bvfrhoaxuezbcvm032eq.jpg",
    },
  ];

  /*   const features_points = [
    {
      name: "Concept Ideation",
      cnt: "Creo+ enables you to collaborate with multiple contributors in real time, both inside and outside the organization.",
      points: [
        "Improve collaboration and communication",
        "Ensures that everyone is working on the latest design",
      ],
      video: "https://www.youtube.com/embed/MGKj9C-3v3I",
      reversed: false,
      img: CreoImg,
    },
    {
      name: "Engineering prototype",
      cnt: "Streamline the management and deployment of Creo across the organization utilizing PTC Control Center.",
      points: [
        "Centrally manage and deploy of all entitlements",
        "Deploy Creo+ updates automatically",
        "Reduce the time spent on installation and upgrading the software.",
      ],
      video: "https://www.youtube.com/embed/ShKhpi-cgaU",
      reversed: true,
      img: CreoImg,
    },
  ]; */

  return (
    <div>
      <Home {...home_content} />
      <ScrolltoTop />
      <What {...aboutService} />
      <Info features={features} />

      {/* <Points features={features_points} /> */}

      {/* <Info features={framework} id="framework_onshape" /> */}
    </div>
  );
}
