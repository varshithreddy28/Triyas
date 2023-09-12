import React from "react";
import Home from "../../components/Services home/home";
import Logo from "../../assests/services/productdesign_left.jpg";
import CreoImg from "../../assests/Triyas_Web.png";
import Info from "../../components/Services Para/info";

import "./MultiBody.css";
import What from "../../components/Service What/what";

export default function MultiBody() {
  const home_content = {
    header: "MultiBody Dynamics",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nisi officia in doloremque distinctio dolore culpa laudantium facere qui, dolorem voluptatibus ratione quia earum reprehenderit rerum minima enim! Dolorem, voluptate? Praesentium, adipisci ipsam.",
    logo: "https://res.cloudinary.com/dbomu1erj/image/upload/v1694509090/yuw00ind125oopksb5al.jpg",
    classHome: "femodelling",
    back_img:
      "https://res.cloudinary.com/dbomu1erj/image/upload/v1692784531/Images_Website/x2bmpydjb9xzaltbwt8i.jpg",
  };

  const features = [
    {
      name: "Rigid",
      content:
        "Rigid Multi-Body Dynamics involves studying the motion of interconnected rigid bodies within mechanical systems. It is an exploration of how components interact, collide, and influence each other's movement under the influence of forces and constraints. We excel in dealing with advanced simulations and mathematical models, and go insights into the dynamic behavior of systems comprising rigid bodies.",
      reversed: true,
      img: "https://res.cloudinary.com/dbomu1erj/image/upload/v1694509134/ggg3h87m4ihmqwcccpa4.jpg",
    },
    {
      name: "Flexible",
      content:
        "Flexible Multi-Body Dynamics delves into the intricate world where motion and flexibility coalesce to define mechanical behavior. Unlike traditional rigid body dynamics that focus solely on rigid components, flexible multi-body dynamics considers the interaction between rigid and deformable elements within complex mechanical systems. Our approach bridges the gap between real-world complexities and simulations, offering a more accurate representation of how materials and components respond to forces, deformations, and vibrations.",
      reversed: false,
      img: "https://res.cloudinary.com/dbomu1erj/image/upload/v1694509162/hsbgzrze50o5fjbxezl9.jpg",
    },
  ];

  return (
    <div>
      <Home {...home_content} />
      <Info features={features} />

      {/* <Points features={features_points} /> */}

      {/* <Info features={framework} id="framework_onshape" /> */}
    </div>
  );
}
