import React from "react";
import Home from "../../components/Services home/home";
import ScrolltoTop from "react-scroll-to-top";
import Info from "../../components/Services Para/info";

import "./explicitanalysis.css";
import What from "../../components/Service What/what";

export default function ExplicitAnylasis() {
  const home_content = {
    header: "Explicit Analysis",
    content:
      "Our expertise includes explicit finite element analysis, a method for simulating highly dynamic and transient events with precision and reliability.",
    logo: "https://res.cloudinary.com/dbomu1erj/image/upload/v1695201959/Images_Website/wvmerikl2d7hzijo55zc.jpg",
    classHome: "explicit",
    back_img:
      "https://res.cloudinary.com/dbomu1erj/image/upload/v1693419051/Images_Website/dyv0kees8qsjhjqkkqmw.jpg",
  };

  // const aboutService = {
  //   header: "What does Product Design Mean?",
  //   content:
  //     "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni illum possimus harum voluptatum, dicta nesciunt voluptates, inventore mollitia asperiores eum laborum corporis molestiae veritatis eveniet nobis aut iusto! Porro consequatur delectus quaerat, quisquam illo doloremque omnis est ratione perferendis dolor?",
  // };

  const features = [
    {
      name: "Drop Test Analysis ",
      content:
        "We have expertise in deciphering the intricacies of sudden impacts through expert Drop Test Analysis. Our skilled engineers possess a profound understanding of material behavior and impact dynamics, utilizing advanced simulation tools to predict and optimize designs. With ultimate precision, we ensure designs are fortified against real-world drop tests.",
      reversed: true,
      img: "https://res.cloudinary.com/dbomu1erj/image/upload/v1694509044/nicfq9ilhwfrtggc7udu.jpg",
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
