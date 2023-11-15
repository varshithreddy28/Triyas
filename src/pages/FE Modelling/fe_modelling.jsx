import React from "react";
import Home from "../../components/Services home/home";
import Logo from "../../assests/services/FE Model_right.jpg";
import CreoImg from "../../assests/Triyas_Web.png";
import Info from "../../components/Services Para/info";
import OnShapeFeatures from "../../components/OnShapeFeatures/onshapefeatures";

import "./fe_modelling.css";
import What from "../../components/Service What/what";
import Points from "../../components/Service Points/points";

export default function FeModelling() {
  const home_content = {
    header: "Fe Modeling & Meshing",
    content:
      "At Triyas, we excel in turning designs into precise digital simulations through advanced FEA modeling and meshing. Our skilled engineers use cutting-edge software for accurate virtual analysis, fostering innovation across various mechanical products.",
    // logo: "https://res.cloudinary.com/dbomu1erj/image/upload/v1693301194/pkdw1ma7rjdjqz994ri0.webp",
    // classHome: "femodelling",
    back_img:
      "https://res.cloudinary.com/dbomu1erj/image/upload/v1699870626/Images_Website/Products/r4rfjony6wp1tjfozkjf.png",
  };

  const aboutService = {
    header:
      "Transforming Designs into Digital Reality: Precision FEA Modeling and Expert Meshing",
    content:
      "At Triyas, we specialize in turning designs into digital reality through expert FEA modeling and precise meshing. Our team of skilled engineers possess an unparalleled understanding of mechanical principles, employing cutting-edge software to simulate and optimize designs. With an unwavering focus on accuracy, we pave the way for innovation through virtual analysis. Expert Meshing for Diverse Mechanical Products: From Shell to Solid Elements",
  };

  const features = [
    {
      name: "Precision FEA Modeling and Expert Meshing",
      content:
        "At Triyas, we specialize in turning designs into digital reality through expert FEA modeling and precise meshing. Our team of skilled engineers possess an unparalleled understanding of mechanical principles, employing cutting-edge software to simulate and optimize designs. With an unwavering focus on accuracy, we pave the way for innovation through virtual analysis. Expert Meshing for Diverse Mechanical Products: From Shell to Solid Elements",
      reversed: true,
      img: "https://res.cloudinary.com/dbomu1erj/image/upload/v1699870786/Images_Website/Products/aqxrxfdkygdiadtb2mqb.png",
    },
  ];
  return (
    <div>
      <Home {...home_content} />
      {/* <What {...aboutService} /> */}
      <Info features={features} />

      {/* <Points features={features_points} /> */}

      {/* <Info features={framework} id="framework_onshape" /> */}
    </div>
  );
}
