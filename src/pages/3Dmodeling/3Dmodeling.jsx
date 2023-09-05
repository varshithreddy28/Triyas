import React from "react";
import Home from "../../components/Services home/home";
import Logo from "../../assests/services/3d modelling_left.jpg";
import ProductsNav from "../../components/prodyctsNav/productsnav";
import Overview from "../../components/Overview/overview";
import CreoImg from "../../assests/Triyas_Web.png";
import Info from "../../components/Services Para/info";
import OnShapeFeatures from "../../components/OnShapeFeatures/onshapefeatures";

import "./3Dmodeling.css";
import What from "../../components/Service What/what";
import Points from "../../components/Service Points/points";

export default function Modeling3D() {
  const home_content = {
    header: "3D CAD modelling and Drafting",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nisi officia in doloremque distinctio dolore culpa laudantium facere qui, dolorem voluptatibus ratione quia earum reprehenderit rerum minima enim! Dolorem, voluptate? Praesentium, adipisci ipsam.",
    logo: Logo,
    classHome: "windchill",
    back_img:
      "https://res.cloudinary.com/dbomu1erj/image/upload/v1692686586/Images_Website/x8v0xlt6bf2qqr7a8gso.jpg",
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
      img: CreoImg,
    },
    {
      name: "Manufacturing drawings",
      content:
        "We excel in transforming concepts into tangible reality through expertly crafted manufacturing drawings. Our team of skilled engineers possesses an unmatched eye for detail, seamlessly translating design blueprints into precise directives for production. With meticulous care and a commitment to excellence, we ensure that your designs materialize flawlessly.",
      reversed: false,
      img: CreoImg,
    },
    {
      name: "Design calculations",
      content:
        "We specialize in transforming conceptual designs into robust realities through meticulous design calculations. Our team of skilled engineers possesses a deep understanding of mechanical principles, employing advanced analytical tools to ensure that your designs meet and exceed industry standards.",
      reversed: true,
      img: CreoImg,
    },
    {
      name: "Legacy Conversion",
      content:
        "Our expertise in breathing new life into historical mechanical drawings through meticulous legacy conversion. Our adept team of engineers possesses a deep respect for tradition while embracing technological advancement. With utmost care, we convert legacy drawings into formats that not only preserve history but also lay the groundwork for future innovation.",
      reversed: false,
      img: CreoImg,
    },
    {
      name: "Preparation of bill of materials",
      content:
        "We specialize in crafting meticulous Bill of Materials documents that transform complex designs into structured realities. Our team of experienced engineers possesses an eye for detail, ensuring that every component finds its place in the grand design. With uncompromising precision, we create BOMs that guide projects from conception to fruition.",
      reversed: true,
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
