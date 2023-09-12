import React from "react";
import Home from "../../components/Services home/home";
import Logo from "../../assests/services/productdesign_left.jpg";
import CreoImg from "../../assests/Triyas_Web.png";
import Info from "../../components/Services Para/info";

import "./cfd.css";
import What from "../../components/Service What/what";

export default function CFD() {
  const home_content = {
    header: "Computational Fluid Dynamics",
    content:
      "We simplify the intricacies of computational fluid dynamics, enabling swift and effortless simulation of fluid flow, heat transfer, and fluid forces that hold paramount importance for your design considerations.",
    logo: "https://res.cloudinary.com/dbomu1erj/image/upload/v1694509211/erg4qldr08zts1qwt5bm.png",
    classHome: "femodelling",
    back_img:
      "https://res.cloudinary.com/dbomu1erj/image/upload/v1692779348/Images_Website/un51eonxrpz15eyotrmt.jpg",
  };

  const features = [
    {
      name: "Thermal Flow",
      content:
        "We step into a world where temperature orchestrates movement, and the subtle of energy shapes designs. We deal as thermal Flow in mechanical engineering is not just about heat; we study the complexity through the intricate pathways that heat energy follows within systems. ",
      reversed: true,
      img: "https://res.cloudinary.com/dbomu1erj/image/upload/v1694509616/bsz7keq3zu2plz9pp2ht.jpg",
    },
    {
      name: "Internal",
      content:
        "We possess the expertise to delve into the intricate movements of fluids within confined spaces, offering a window into their behavior that empowers our clients' designs. Our Internal Flow Analysis capabilities extend to a range of applications, including pipes, ducts, and channels, where fluid dynamics shape the efficiency and performance of your systems. With advanced numerical simulations and sophisticated calculations, our skilled engineers navigate the complexities of fluid behavior. We explore how velocities, pressures, and temperatures evolve as fluids traverse intricate geometries, providing insights that drive optimization for efficiency, safety, and overall performance.",
      reversed: false,
      img: "https://res.cloudinary.com/dbomu1erj/image/upload/v1694509308/k3jai5qgfjq2myga4yka.jpg",
    },
    {
      name: "External",
      content:
        "We bear the expertise to decipher the intricate moment of fluids—air or 	liquids—interacting with surfaces, structures, or objects within an open 	environment. Our External Flow Analysis capabilities extend to understanding how 	velocities, pressures, and temperatures evolve as fluids gracefully flow over external 	contours.",
      reversed: true,
      img: "https://res.cloudinary.com/dbomu1erj/image/upload/v1694509367/jsdwe1ekdqqvjoraghp1.jpg",
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
