import React from "react";
import Home from "../../components/Services home/home";
import ScrolltoTop from "react-scroll-to-top";
import Info from "../../components/Services Para/info";

import "./cfd.css";
import What from "../../components/Service What/what";

export default function CFD() {
  const home_content = {
    header: "Computational Fluid Dynamics",
    content:
      "We simplify the intricacies of computational fluid dynamics, enabling swift and effortless simulation of fluid flow, heat transfer, and fluid forces that hold paramount importance for your design considerations.",
    // logo: "https://res.cloudinary.com/dbomu1erj/image/upload/v1694509211/erg4qldr08zts1qwt5bm.png",
    // classHome: "femodelling",
    back_img:
      "https://res.cloudinary.com/dbomu1erj/image/upload/v1699871854/Images_Website/Products/itn7ft0tbrztermcitbc.png",
  };

  const features = [
    {
      name: "Thermal Flow",
      content:
        "We step into a world where temperature orchestrates movement, and the subtle of energy shapes designs. We deal as thermal Flow in mechanical engineering is not just about heat; we study the complexity through the intricate pathways that heat energy follows within systems. ",
      reversed: true,
      img: "https://res.cloudinary.com/dbomu1erj/image/upload/v1699871910/Images_Website/Products/rfylvfcdjjyvffrotbnp.png",
    },
    {
      name: "Internal",
      content:
        "We possess the expertise to delve into the intricate movements of fluids within confined spaces, offering a window into their behavior that empowers our client's designs. Our Internal Flow Analysis capabilities extend to a range of applications, including pipes, ducts, and channels, where fluid dynamics shape the efficiency and performance of your systems. With advanced numerical simulations and sophisticated calculations, our skilled engineers navigate the complexities of fluid behavior. We explore how velocities, pressures, and temperatures evolve as fluids traverse intricate geometries, providing insights that drive optimization for efficiency, safety, and overall performance.",
      reversed: false,
      img: "https://res.cloudinary.com/dbomu1erj/image/upload/v1699871949/Images_Website/Products/f7ioilnpvxgiurucvbwe.png",
    },
    {
      name: "External",
      content:
        "We bear the expertise to decipher the intricate moment of air or liquid interacting with surfaces, structures, or objects within an open 	environment. Our External Flow Analysis capabilities extend to understanding how 	velocities, pressures, and temperatures evolve as fluids gracefully flow over external 	contours.",
      reversed: true,
      img: "https://res.cloudinary.com/dbomu1erj/image/upload/v1699871985/Images_Website/Products/okqkmiqpic7prelzssb0.png",
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
