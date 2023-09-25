import React from "react";
import Home from "../../components/Services home/home";
import ScrolltoTop from "react-scroll-to-top";
import Info from "../../components/Services Para/info";
import OnShapeFeatures from "../../components/OnShapeFeatures/onshapefeatures";

import "./productdesign.css";

export default function Productdesign() {
  const home_content = {
    header: "Product Design",
    content:
      "At the heart of our product design philosophy lies a commitment to innovation and excellence. We understand that product design is not just about aesthetics; it's about delivering outstanding user experiences, optimising functionality, and ensuring manufacturability.",
    logo: "https://res.cloudinary.com/dbomu1erj/image/upload/v1694510397/lohkfzwzkobedaftavz1.jpg",
    classHome: "femodelling",
    back_img:
      "https://res.cloudinary.com/dbomu1erj/image/upload/v1693418633/Images_Website/exhybyrsibwge3iur3qr.jpg",
  };

  // const aboutService = {
  //   header: "What does Product Design Mean?",
  //   content:
  //     "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni illum possimus harum voluptatum, dicta nesciunt voluptates, inventore mollitia asperiores eum laborum corporis molestiae veritatis eveniet nobis aut iusto! Porro consequatur delectus quaerat, quisquam illo doloremque omnis est ratione perferendis dolor?",
  // };

  const features = [
    {
      name: "Concept Ideation",
      content:
        "Design Ideation in Mechanical Engineering serves as the creative spark, igniting idea generation during the initial stages of conceptual design. This phase thrives on innovative approaches and strategies that enhance creativity, ultimately shaping the foundation for detailed design development. Ideation methods are meticulously crafted to foster ingenuity, ensuring a seamless transition towards the creation of intricate designs.",
      reversed: true,
      img: "https://res.cloudinary.com/dbomu1erj/image/upload/v1694510278/kzxysacycruqqkjhavul.webp",
    },
    {
      name: "Detailed Design",
      content:
        "Within Mechanical Engineering, the Detailed Design phase comes to the forefront as designers meticulously craft intricate designs tailored for efficient manufacturing. This crucial stage encompasses the creation of meticulous drawings and specifications, which precisely outline the product's measurements, materials, and manufacturing methodologies. Here, designers delve into concerns of manufacturability, clearances, and operational longevity, ensuring the product's usability without encountering potential hazards.",
      reversed: false,
      img: "https://res.cloudinary.com/dbomu1erj/image/upload/v1694509966/oesitzbhyqkb9dks7spn.webp",
    },
    {
      name: "Engineering Prototype",
      content:
        "We specialize in transforming ideas into reality through expertly crafted engineering prototypes. Our team of experienced engineers excels in creating functional prototypes that not only mirror your vision but also stand as a testament to the power of innovation. From intricate mechanical designs to cutting-edge electronics, we breathe life into concepts, ensuring they're well-prepared for the journey ahead.",
      reversed: true,
      img: "https://res.cloudinary.com/dbomu1erj/image/upload/v1694510255/flzlmencejdjw2b0gjbb.webp",
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
      {/* <What {...aboutService} /> */}
      <ScrolltoTop />
      <Info features={features} />

      {/* <Points features={features_points} /> */}

      {/* <Info features={framework} id="framework_onshape" /> */}
    </div>
  );
}
