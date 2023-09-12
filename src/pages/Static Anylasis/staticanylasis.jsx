import React from "react";
import Home from "../../components/Services home/home";
import Logo from "../../assests/services/productdesign_left.jpg";
import ProductsNav from "../../components/prodyctsNav/productsnav";
import Overview from "../../components/Overview/overview";
import CreoImg from "../../assests/Triyas_Web.png";
import Info from "../../components/Services Para/info";
import OnShapeFeatures from "../../components/OnShapeFeatures/onshapefeatures";

import "./staticanylasis.css";
import What from "../../components/Service What/what";
import Points from "../../components/Service Points/points";

export default function Static_Anylasis() {
  const home_content = {
    header: "Static Anylasis",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nisi officia in doloremque distinctio dolore culpa laudantium facere qui, dolorem voluptatibus ratione quia earum reprehenderit rerum minima enim! Dolorem, voluptate? Praesentium, adipisci ipsam.",
    logo: "https://res.cloudinary.com/dbomu1erj/image/upload/v1693286313/Images_Website/Altair/vqpspz2x1x9unpdpn9p3.jpg",
    classHome: "femodelling",
    back_img:
      "https://res.cloudinary.com/dbomu1erj/image/upload/v1694196061/Images_Website/hl9u9vdz6l7n2mkpzmgv.jpg",
  };

  // const aboutService = {
  //   header: "What does Product Design Mean?",
  //   content:
  //     "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni illum possimus harum voluptatum, dicta nesciunt voluptates, inventore mollitia asperiores eum laborum corporis molestiae veritatis eveniet nobis aut iusto! Porro consequatur delectus quaerat, quisquam illo doloremque omnis est ratione perferendis dolor?",
  // };

  const features = [
    {
      name: "Linear static analysis",
      content:
        "We excel in solving linear static analysis, a method applied when there is a linear relationship between applied forces and displacements. This is particularly valuable in addressing structural challenges where stresses fall within the linear elastic range of the chosen material.",
      reversed: true,
      img: "https://res.cloudinary.com/dbomu1erj/image/upload/v1693293916/Images_Website/Altair/kxh2crglcyuwkmbuucph.jpg",
    },
    {
      name: "Non-linear static analysis",
      content:
        "Nonlinear analysis involves the examination of scenarios in which a nonlinear connection exists between applied forces and displacements. Nonlinear effects can arise from factors such as geometric nonlinearity, material nonlinearity, and contact nonlinearity. These effects contribute to a stiffness matrix that undergoes variation during the application of loads, deviating from a constant value.",
      reversed: false,
      img: "https://res.cloudinary.com/dbomu1erj/image/upload/v1692802949/Images_Website/Altair/kttlrwbc6szspg6cgyvo.jpg",
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
