import React from "react";
import Home from "../../components/Services home/home";
import Logo from "../../assests/services/productdesign_left.jpg";
import CreoImg from "../../assests/Triyas_Web.png";
import Info from "../../components/Services Para/info";

import "./cadcust.css";
import What from "../../components/Service What/what";

export default function DesignAutomation() {
  const home_content = {
    header: "Design Automation",
    content:
      "Tired of spending hours on quotations and drawings? Frustrated by client design updates? Our Design Automation services effortlessly generate 3D models, 2D drawings, and essential documents for quotes and production, saving time and ensuring error-free, consistent designs",
    logo: Logo,
    classHome: "femodelling",
    back_img:
      "https://res.cloudinary.com/dbomu1erj/image/upload/v1693418893/Images_Website/djiees1haycnrewehfdt.jpg",
  };

  const features = [
    {
      name: "Streamlined Product Design Process:",
      content:
        "Finalize design logics to establish CAD model parameters, both for individual parts and assemblies. Create a comprehensive CAD library and integrate design rules and logic via CAD APIs. Develop a user-friendly interface for effortless parameter control.",
      reversed: true,
      img: CreoImg,
    },
    {
      name: "Mastering 3D Models and Configurations",
      content:
        "Harness the power of master 3D models and configuration logic to effortlessly produce a wide array of product variants. Achieve remarkable flexibility in your design process, allowing rapid adaptation to evolving requirements and market demands. With this versatile approach, you can efficiently cater to diverse customer needs while maintaining design consistency and precision.",
      reversed: false,
      img: CreoImg,
    },
    {
      name: "Rapid 3D CAD and 2D Drawing Generation:",
      content:
        "Experience the remarkable speed of generating intricate 3D CAD models and precise 2D fabrication drawings within minutes. Turbocharge your design workflow by leveraging the power of efficient automation tools. Significantly slash production lead times, enabling your organization.",
      reversed: true,
      img: CreoImg,
    },
    {
      name: "Incorporating Design Rules and Logic:",
      content:
        "Empower your software with tailored design rules and logic, reducing your dependence on human designers. Achieve unparalleled consistency and precision in each design, regardless of complexity, while liberating valuable human resources.",
      reversed: false,
      img: CreoImg,
    },
    {
      name: "Liberating Designers from Repetition:",
      content:
        "Free your designers from the burden of monotonous, time-consuming tasks that hinder their creative potential. Enable your design team to channel their expertise and creativity towards high-value, innovative aspects of projects.",
      reversed: true,
      img: CreoImg,
    },
    {
      name: "Effortless Quote Generation with Drawings:",
      content:
        "Transform your quoting process by swiftly generating precise quotes along with detailed drawings in minutes. Enhance your sales and proposal workflow by responding promptly to customer requests, showcasing professionalism, and improving client satisfaction.",
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
