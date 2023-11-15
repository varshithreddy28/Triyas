import React from "react";
import Home from "../../components/Services home/home";
import ScrolltoTop from "react-scroll-to-top";

import Info from "../../components/Services Para/info";
import OnShapeFeatures from "../../components/OnShapeFeatures/onshapefeatures";

import "./staticanylasis.css";

export default function Static_Anylasis() {
  const home_content = {
    header: "Static Analysis",
    content:
      "We offer cutting-edge engineering solutions that include static analysis using Finite Element Analysis (FEA). Static analysis is a crucial tool for understanding how structures and mechanical components perform under constant loads and boundary conditions.",
    // logo: "https://res.cloudinary.com/dbomu1erj/image/upload/v1693286313/Images_Website/Altair/vqpspz2x1x9unpdpn9p3.jpg",
    // classHome: "femodelling",
    back_img:
      "https://res.cloudinary.com/dbomu1erj/image/upload/v1699870851/Images_Website/Products/rjxpjrskgjv6wukkjyj7.png",
  };

  // const aboutService = {
  //   header: "What does Product Design Mean?",
  //   content:
  //     "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni illum possimus harum voluptatum, dicta nesciunt voluptates, inventore mollitia asperiores eum laborum corporis molestiae veritatis eveniet nobis aut iusto! Porro consequatur delectus quaerat, quisquam illo doloremque omnis est ratione perferendis dolor?",
  // };

  const features = [
    {
      name: "Linear Static Analysis",
      content:
        "We excel in solving linear static analysis, a method applied when there is a linear relationship between applied forces and displacements. This is particularly valuable in addressing structural challenges where stresses fall within the linear elastic range of the chosen material.",
      reversed: true,
      img: "https://res.cloudinary.com/dbomu1erj/image/upload/v1699870926/Images_Website/Products/io4suq1uxbknfwhvq7qu.png",
    },
    {
      name: "Non-linear Static Analysis",
      content:
        "Nonlinear analysis involves the examination of scenarios in which a nonlinear connection exists between applied forces and displacements. Nonlinear effects can arise from factors such as geometric nonlinearity, material nonlinearity, and contact nonlinearity. These effects contribute to a stiffness matrix that undergoes variation during the application of loads, deviating from a constant value.",
      reversed: false,
      img: "https://res.cloudinary.com/dbomu1erj/image/upload/v1699870968/Images_Website/Products/n1ngmcix6ncbtpm5j9cw.png",
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
