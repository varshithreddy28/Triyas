import React from "react";
import Home from "../../components/Services home/home";
import ScrolltoTop from "react-scroll-to-top";

import Info from "../../components/Services Para/info";

import "./MultiBody.css";
import What from "../../components/Service What/what";

export default function MultiBody() {
  const home_content = {
    header: "MultiBody Dynamics",
    content:
      "We possess the capability to conduct multi-body dynamics simulations, a crucial tool for assessing the complex interactions between interconnected mechanical components. This enables us to optimize designs for superior performance, durability, and safety across various industries, from automotive to robotics.",
    // logo: "https://res.cloudinary.com/dbomu1erj/image/upload/v1694509090/yuw00ind125oopksb5al.jpg",
    // classHome: "femodelling",
    back_img:
      "https://res.cloudinary.com/dbomu1erj/image/upload/v1699871716/Images_Website/Products/sf7xajzg1pd26mzv2nol.png",
  };

  const features = [
    {
      name: "Rigid",
      content:
        "Rigid Multi-Body Dynamics involves studying the motion of interconnected rigid bodies within mechanical systems. It is an exploration of how components interact, collide, and influence each other's movement under the influence of forces and constraints. We excel in dealing with advanced simulations and mathematical models, and go insights into the dynamic behavior of systems comprising rigid bodies.",
      reversed: true,
      img: "https://res.cloudinary.com/dbomu1erj/image/upload/v1699871770/Images_Website/Products/i66ro7alrxyl31yvl1k6.png",
    },
    {
      name: "Flexible",
      content:
        "Flexible Multi-Body Dynamics delves into the intricate world where motion and flexibility coalesce to define mechanical behavior. Unlike traditional rigid body dynamics that focus solely on rigid components, flexible multi-body dynamics considers the interaction between rigid and deformable elements within complex mechanical systems. Our approach bridges the gap between real-world complexities and simulations, offering a more accurate representation of how materials and components respond to forces, deformations, and vibrations.",
      reversed: false,
      img: "https://res.cloudinary.com/dbomu1erj/image/upload/v1699871801/Images_Website/Products/jda5hufjaha4agb9kh2m.png",
    },
  ];

  return (
    <div>
      <Home {...home_content} />
      <ScrolltoTop />
      <Info features={features} />

      {/* <Points features={features_points} /> */}

      {/* <Info features={framework} id="framework_onshape" /> */}
    </div>
  );
}
