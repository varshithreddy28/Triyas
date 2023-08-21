import React from "react";
import Home from "../../components/Services home/home";
import Logo from "../../assests/services/productdesign_left.jpg";
import ProductsNav from "../../components/prodyctsNav/productsnav";
import Overview from "../../components/Overview/overview";
import CreoImg from "../../assests/Triyas_Web.png";
import Info from "../../components/Services Para/info";
import OnShapeFeatures from "../../components/OnShapeFeatures/onshapefeatures";

import "./productdesign.css";
import What from "../../components/Service What/what";
import Points from "../../components/Service Points/points";

export default function Productdesign() {
  const home_content = {
    header: "Product Design",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nisi officia in doloremque distinctio dolore culpa laudantium facere qui, dolorem voluptatibus ratione quia earum reprehenderit rerum minima enim! Dolorem, voluptate? Praesentium, adipisci ipsam.",
    logo: Logo,
    classHome: "windchill",
    back_img:
      "https://res.cloudinary.com/dbomu1erj/image/upload/v1692512903/Images_Website/htddkdikpruhtqils8qt.jpg",
  };

  const overViewContent = {
    header: "Windchill product lifecycle management software",
    content:
      "Windchill revolutionizes product development with real-time information sharing, dynamic data visualization, and seamless collaboration. Its open architecture enables integration with other systems, including IoT, creating a robust digital thread for product-driven processes. With comprehensive functionality and configurable role-based apps, Windchill optimizes PLM while ensuring traceable product data access for non-experts without excessive complexity.",
    video:
      "https://res.cloudinary.com/dbomu1erj/image/upload/v1692512903/Images_Website/htddkdikpruhtqils8qt.jpg",
    id: "introduction_windchill",
  };

  const aboutService = {
    header: "What does Product Design Mean?",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni illum possimus harum voluptatum, dicta nesciunt voluptates, inventore mollitia asperiores eum laborum corporis molestiae veritatis eveniet nobis aut iusto! Porro consequatur delectus quaerat, quisquam illo doloremque omnis est ratione perferendis dolor?",
  };

  const features = [
    {
      name: "Concept design detailing",
      content:
        "Windchill brings significant benefits to the product development lifecycle, including reduced costs, faster time to market, improved product quality, and enhanced collaboration. Its streamlined processes and data management optimize resources and maximize efficiency, leading to higher customer satisfaction and cost savings through minimized prototyping and increased data re-use. ",
      reversed: true,
      img: CreoImg,
    },
  ];

  const features_points = [
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
  ];

  return (
    <div>
      <Home {...home_content} />
      <What {...aboutService} />
      <Info features={features} />

      <Points features={features_points} />

      {/* <Info features={framework} id="framework_onshape" /> */}
    </div>
  );
}
