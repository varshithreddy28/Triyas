import React from "react";
import Home from "../../components/Services home/home";
import Logo from "../../assests/services/productdesign_left.jpg";
import CreoImg from "../../assests/Triyas_Web.png";
import Info from "../../components/Services Para/info";

import "./cadcust.css";
import What from "../../components/Service What/what";

export default function CADCustomisation() {
  const home_content = {
    header: "CAD Customisation",
    content:
      "Tired of repetitive tasks in your design and manufacturing process? We offer easy CAD, CAM, or CAE customization and automation. Enhance your CAD software with our add-on features.",
    logo: Logo,
    classHome: "femodelling",
    back_img:
      "https://res.cloudinary.com/dbomu1erj/image/upload/v1692784531/Images_Website/x2bmpydjb9xzaltbwt8i.jpg",
  };

  const features = [
    {
      name: "Customization and Automation:",
      content:
        "Enhance your CAD software's functionality by adding custom forms, toolbars, and menus. Boost efficiency by automating repetitive design tasks, freeing up valuable time. Tailor your software to meet your specific needs, improving your workflow and productivity.",
      reversed: true,
      img: CreoImg,
    },
    {
      name: "Intelligent CAD Software:",
      content:
        "Elevate your CAD software's capabilities by infusing it with your unique design rules and logic. Minimize the risk of human errors, ensuring that your designs are consistently accurate and reliable. Achieve a higher level of precision and efficiency in your CAD work, thanks to intelligent automation.",
      reversed: false,
      img: CreoImg,
    },
    {
      name: "Streamlined Processes:",
      content:
        "Effortlessly automate the generation of Bill of Materials (BOM) and drawings, significantly reducing manual effort and saving valuable time. Seamlessly export drawing data to Microsoft Excel and create drawings directly from Excel data, simplifying complex tasks.",
      reversed: true,
      img: CreoImg,
    },
    {
      name: "Efficiency and Quality:",
      content:
        "Drastically reduce workloads by automating and removing the burden of repetitive and tedious tasks, freeing up valuable time and resources. Ensure your designs are consistently accurate and compliant with industry standards, resulting in high-quality outcomes.",
      reversed: false,
      img: CreoImg,
    },
    {
      name: "Integration and Adaptability:",
      content:
        "Foster seamless collaboration by integrating your software with other applications, harnessing the power of cutting-edge technologies for enhanced functionality. Tailor inspection checklists to your exact requirements, ensuring a flexible and adaptable quality control process that meets your unique needs.",
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
