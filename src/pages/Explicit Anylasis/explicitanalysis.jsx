import React from "react";
import Home from "../../components/Services home/home";
import Logo from "../../assests/services/productdesign_left.jpg";
import CreoImg from "../../assests/Triyas_Web.png";
import Info from "../../components/Services Para/info";

import "./explicitanalysis.css";
import What from "../../components/Service What/what";

export default function ExplicitAnylasis() {
  const home_content = {
    header: "Explicit Anylasis",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nisi officia in doloremque distinctio dolore culpa laudantium facere qui, dolorem voluptatibus ratione quia earum reprehenderit rerum minima enim! Dolorem, voluptate? Praesentium, adipisci ipsam.",
    logo: "https://res.cloudinary.com/dbomu1erj/image/upload/v1694508876/cppx679herygojsazxiq.jpg",
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
      name: "Drop Test analysis ",
      content:
        "We have expertise in deciphering the intricacies of sudden impacts through expert Drop Test Analysis. Our skilled engineers possess a profound understanding of material behavior and impact dynamics, utilizing advanced simulation tools to predict and optimize designs. With ultimate precision, we ensure designs are fortified against real-world drop tests.",
      reversed: true,
      img: "https://res.cloudinary.com/dbomu1erj/image/upload/v1694509044/nicfq9ilhwfrtggc7udu.jpg",
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
