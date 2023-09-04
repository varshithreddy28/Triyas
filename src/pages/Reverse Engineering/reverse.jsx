import React from "react";
import Home from "../../components/Services home/home";
import Logo from "../../assests/services/reverseengineering_right.avif";
import ProductsNav from "../../components/prodyctsNav/productsnav";
import Overview from "../../components/Overview/overview";
import CreoImg from "../../assests/Triyas_Web.png";
import Info from "../../components/Services Para/info";
import OnShapeFeatures from "../../components/OnShapeFeatures/onshapefeatures";

import "./reverse.css";
import What from "../../components/Service What/what";
import Points from "../../components/Service Points/points";

export default function Reverse() {
  const home_content = {
    header: "Reverse Engineering",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nisi officia in doloremque distinctio dolore culpa laudantium facere qui, dolorem voluptatibus ratione quia earum reprehenderit rerum minima enim! Dolorem, voluptate? Praesentium, adipisci ipsam.",
    logo: Logo,
    classHome: "reverse_engineering",
    back_img:
      "https://res.cloudinary.com/dbomu1erj/image/upload/v1693418633/Images_Website/exhybyrsibwge3iur3qr.jpg",
  };

  const aboutService = {
    header: "What does Product Design Mean?",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni illum possimus harum voluptatum, dicta nesciunt voluptates, inventore mollitia asperiores eum laborum corporis molestiae veritatis eveniet nobis aut iusto! Porro consequatur delectus quaerat, quisquam illo doloremque omnis est ratione perferendis dolor?",
  };

  const features = [
    {
      name: "Concept Ideation",
      content:
        "Design Ideation in Mechanical Engineering serves as the creative spark, igniting idea generation during the initial stages of conceptual design. This phase thrives on innovative approaches and strategies that enhance creativity, ultimately shaping the foundation for detailed design development. Ideation methods are meticulously crafted to foster ingenuity, ensuring a seamless transition towards the creation of intricate designs",
      reversed: true,
      img: CreoImg,
    },
    {
      name: "Detailed Design",
      content:
        "Within Mechanical Engineering, the Detailed Design phase comes to the forefront as designers meticulously craft intricate designs tailored for efficient manufacturing. This crucial stage encompasses the creation of meticulous drawings and specifications, which precisely outline the product's measurements, materials, and manufacturing methodologies. Here, designers delve into concerns of manufacturability, clearances, and operational longevity, ensuring the product's usability without encountering potential hazards.",
      reversed: false,
      img: CreoImg,
    },
    {
      name: "Concept Ideation",
      content:
        "An engineering prototype is more than just a physical embodiment of a concept. It's a tangible manifestation of imagination, expertise, and meticulous engineering. Whether it's an intricate piece of machinery or a cutting-edge electronic device, an engineering prototype transforms theoretical possibilities into concrete realities. This prototype serves as a testbed, a canvas on which engineers fine-tune their designs, evaluate functionalities, and identify any potential pitfalls.",
      reversed: true,
      img: CreoImg,
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
      <What {...aboutService} />
      <Info features={features} />

      {/* <Points features={features_points} /> */}

      {/* <Info features={framework} id="framework_onshape" /> */}
    </div>
  );
}
