import React from "react";
import Home from "../../components/Services home/home";
import ScrolltoTop from "react-scroll-to-top";
import Info from "../../components/Services Para/info";
import OnShapeFeatures from "../../components/OnShapeFeatures/onshapefeatures";

import "./3Dmodeling.css";
import What from "../../components/Service What/what";
import Points from "../../components/Service Points/points";

export default function Modeling3D() {
  const home_content = {
    header: "3D CAD Modeling and Drafting",
    content:
      "Welcome to Triyas, where innovation meets precision in the realm of 3D CAD modeling and drafting. We are your trusted partner in transforming concepts into detailed digital designs, breathing life into your ideas, and setting the stage for exceptional product development.",
    // logo: "https://res.cloudinary.com/dbomu1erj/image/upload/v1694510943/wqipbzaehtqzmgphqenm.jpg",
    classHome: "windchill",
    back_img:
      "https://res.cloudinary.com/dbomu1erj/image/upload/v1699869965/Images_Website/Products/qs3nb5htasbavtpdyhnx.png",
  };

  // const aboutService = {
  //   header: "What does Product Design Mean?",
  //   content:
  //     "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni illum possimus harum voluptatum, dicta nesciunt voluptates, inventore mollitia asperiores eum laborum corporis molestiae veritatis eveniet nobis aut iusto! Porro consequatur delectus quaerat, quisquam illo doloremque omnis est ratione perferendis dolor?",
  // };

  const features = [
    {
      name: "3D Modelling",
      content:
        "We are pioneers in harnessing the potential of 3D modeling in mechanical engineering. Our dedicated team of engineers and designers seamlessly translate concepts into intricate, lifelike digital models. With a keen eye for detail and a passion for innovation, we craft 3D representations that serve as the bedrock for groundbreaking products and solutions.",
      reversed: true,
      img: "https://res.cloudinary.com/dbomu1erj/image/upload/v1699870116/Images_Website/Products/ephutmyyvjizvjic6oyi.png",
    },
    {
      name: "Manufacturing Drawings",
      content:
        "We excel in transforming concepts into tangible reality through expertly crafted manufacturing drawings. Our team of skilled engineers possess an unmatched eye for detail, seamlessly translating design blueprints into precise directives for production. With meticulous care and a commitment to excellence, we ensure that your designs materialize flawlessly.",
      reversed: false,
      img: "https://res.cloudinary.com/dbomu1erj/image/upload/v1699870214/Images_Website/Products/hl98dnfbmg4xhagwaboa.png",
    },
    {
      name: "Design Calculations",
      content:
        "We specialize in transforming conceptual designs into robust realities through meticulous design calculations. Our team of skilled engineers possess a deep understanding of mechanical principles, employing advanced analytical tools to ensure that your designs meet and exceed industry standards.",
      reversed: true,
      img: "https://res.cloudinary.com/dbomu1erj/image/upload/v1699870249/Images_Website/Products/vtcvdrwnisnikfunq8xa.png",
    },
    {
      name: "Legacy Conversion",
      content:
        "We expertise in breathing new life into historical mechanical drawings through meticulous legacy conversion. Our adept team of engineers own a deep respect for tradition while embracing technological advancement. With utmost care, we convert legacy drawings into formats that not only preserve history but also lay the groundwork for future innovation.",
      reversed: false,
      img: "https://res.cloudinary.com/dbomu1erj/image/upload/v1699870291/Images_Website/Products/rah7q8sgpk5rtpgmns1u.png",
    },
    {
      name: "Preparation of Bill of Materials",
      content:
        "We specialize in crafting meticulous Bill of Materials documents that transform complex designs into structured realities. Our team of experienced engineers have an eye for detail, ensuring that every component finds its place in the grand design. With uncompromising precision, we create BOMs that guide projects from conception to fruition.",
      reversed: true,
      img: "https://res.cloudinary.com/dbomu1erj/image/upload/v1699870332/Images_Website/Products/abw30acczohbjaldknyv.png",
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
