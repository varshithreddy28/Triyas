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
    logo: Logo,
    classHome: "femodelling",
    back_img:
      "https://img.freepik.com/free-photo/watercolor-background-papaya-whip_53876-101916.jpg?w=996&t=st=1692784259~exp=1692784859~hmac=a27b1bd56c2620100bd57e145263d7ee5da080827b7057df3c719906204459d1",
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
      img: CreoImg,
    },
    {
      name: "Non-linear static analysis",
      content:
        "Nonlinear analysis involves the examination of scenarios in which a nonlinear connection exists between applied forces and displacements. Nonlinear effects can arise from factors such as geometric nonlinearity, material nonlinearity, and contact nonlinearity. These effects contribute to a stiffness matrix that undergoes variation during the application of loads, deviating from a constant value.",
      reversed: false,
      img: CreoImg,
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
