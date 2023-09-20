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
    logo: "https://res.cloudinary.com/dbomu1erj/image/upload/v1693301194/pkdw1ma7rjdjqz994ri0.webp",
    classHome: "femodelling",
    back_img:
      "https://res.cloudinary.com/dbomu1erj/image/upload/v1692779348/Images_Website/un51eonxrpz15eyotrmt.jpg",
  };

  const aboutService = {
    header:
      "Transforming Designs into Digital Reality: Precision FEA Modeling and Expert Meshing",
    content:
      "At Triyas, we specialize in turning designs into digital reality through expert FEA modeling and precise meshing. Our team of skilled engineers possess an unparalleled understanding of mechanical principles, employing cutting-edge software to simulate and optimize designs. With an unwavering focus on accuracy, we pave the way for innovation through virtual analysis. Expert Meshing for Diverse Mechanical Products: From Shell to Solid Elements",
  };

  // const features = [
  //   {
  //     name: "Concept Ideation",
  //     content:
  //       "Design Ideation in Mechanical Engineering serves as the creative spark, igniting idea generation during the initial stages of conceptual design. This phase thrives on innovative approaches and strategies that enhance creativity, ultimately shaping the foundation for detailed design development. Ideation methods are meticulously crafted to foster ingenuity, ensuring a seamless transition towards the creation of intricate designs",
  //     reversed: true,
  //     img: CreoImg,
  //   },
  //   {
  //     name: "Detailed Design",
  //     content:
  //       "Within Mechanical Engineering, the Detailed Design phase comes to the forefront as designers meticulously craft intricate designs tailored for efficient manufacturing. This crucial stage encompasses the creation of meticulous drawings and specifications, which precisely outline the product's measurements, materials, and manufacturing methodologies. Here, designers delve into concerns of manufacturability, clearances, and operational longevity, ensuring the product's usability without encountering potential hazards.",
  //     reversed: false,
  //     img: CreoImg,
  //   },
  //   {
  //     name: "Concept Ideation",
  //     content:
  //       "An engineering prototype is more than just a physical embodiment of a concept. It's a tangible manifestation of imagination, expertise, and meticulous engineering. Whether it's an intricate piece of machinery or a cutting-edge electronic device, an engineering prototype transforms theoretical possibilities into concrete realities. This prototype serves as a testbed, a canvas on which engineers fine-tune their designs, evaluate functionalities, and identify any potential pitfalls.",
  //     reversed: true,
  //     img: CreoImg,
  //   },
  // ];

  return (
    <div>
      <Home {...home_content} />
      <What {...aboutService} />
      {/* <Info features={features} /> */}

      {/* <Points features={features_points} /> */}

      {/* <Info features={framework} id="framework_onshape" /> */}
    </div>
  );
}
