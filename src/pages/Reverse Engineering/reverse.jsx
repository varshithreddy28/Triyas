import React from "react";
import Home from "../../components/Services home/home";
import ScrolltoTop from "react-scroll-to-top";
import Info from "../../components/Services Para/info";
import OnShapeFeatures from "../../components/OnShapeFeatures/onshapefeatures";

import "./reverse.css";
import What from "../../components/Service What/what";
import Points from "../../components/Service Points/points";

export default function Reverse() {
  const home_content = {
    header: "Reverse Engineering",
    content:
      "Reverse Engineering is a process that involves analyzing a product, device, or system to understand its design, structure, and functionality. This is typically done by taking an existing object, deconstructing it, and then creating detailed documentation or a digital model that reflects its original design and functionality.",
    // logo: "https://res.cloudinary.com/dbomu1erj/image/upload/v1695201630/Images_Website/wsug6itay9pdd4hupcvj.jpg",
    // classHome: "reverse_engineering",
    back_img:
      "https://res.cloudinary.com/dbomu1erj/image/upload/v1699870391/Images_Website/Products/asbg7szmqrv49drwmsnz.png",
  };

  const features = [
    {
      name: "Legacy System Upgrades ",
      content:
        "In situations where older technology or components are in use, our reverse engineering expertise empowers us to seamlessly replace or integrate newer parts while preserving compatibility with existing systems.",
      reversed: true,
      img: "https://res.cloudinary.com/dbomu1erj/image/upload/v1699870452/Images_Website/Products/ssi74khumwhsloedfng0.png",
    },
    {
      name: "Design Optimization",
      content:
        "We excel in design optimization, a pivotal process in engineering and product development. Our expertise lies in systematically refining and enhancing the design of products, components, or systems to achieve precise objectives. These objectives encompass heightened efficiency, superior performance, cost reduction, and enhanced sustainability.",
      reversed: false,
      img: "https://res.cloudinary.com/dbomu1erj/image/upload/v1699870499/Images_Website/Products/sr1s5dvxfojlpo5i91wm.png",
    },
    {
      name: "Tear-Down Approach",
      content:
        "Our 'Tear-Down Approach' in reverse engineering showcases our expertise in the systematic and meticulous disassembly and analysis of products, devices, or systems. This specialised approach allows us to gain a profound understanding of their design, constituent elements, materials, and functionality. ",
      reversed: true,
      img: "https://res.cloudinary.com/dbomu1erj/image/upload/v1699870535/Images_Website/Products/rnzk817hyo2rqmgye0mh.png",
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
      {/* <What {...aboutService} /> */}
      <ScrolltoTop />
      <Info features={features} />

      {/* <Points features={features_points} /> */}

      {/* <Info features={framework} id="framework_onshape" /> */}
    </div>
  );
}
