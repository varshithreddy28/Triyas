import React from "react";
import Home from "../../components/Services home/home";
import ScrolltoTop from "react-scroll-to-top";
import Info from "../../components/Services Para/info";

import "./linear.css";
import What from "../../components/Service What/what";

export default function Linear() {
  const home_content = {
    header: "Linear Dynamics",
    content:
      "In mechanical engineering, Linear Dynamics unravels the laws governing how objects respond to forces, enabling precise analysis of dynamic behavior in linear systems.",
    logo: "https://res.cloudinary.com/dbomu1erj/image/upload/v1694508727/atfmtebo6wi1y3ff7ytd.png",
    classHome: "windchill",
    back_img:
      "https://res.cloudinary.com/dbomu1erj/image/upload/v1692715789/Images_Website/lx6k0prglqxwhoto5izd.jpg",
  };

  const aboutService = {
    header:
      "Have You Explored the Fascinating World of Linear Dynamics in Mechanical Engineering?",
    content:
      "Step into a world where forces and motion intertwine, and equilibrium is the cornerstone of analysis. Linear Dynamics in mechanical engineering isn't just about movement; it's a journey through the laws that govern how objects respond to forces, translating complex interactions into mathematical precision. In the realm of mechanical design, Linear Dynamics stands as the key to understanding dynamic behaviour in linear systems.",
  };

  const features = [
    {
      name: "Frequency Analysis",
      content:
        "At Triyas, we expertise in unveiling the symphony of frequencies within mechanical systems through expert frequency analysis in linear & non-linear dynamics. Our skilled engineers possess a profound understanding of vibrational behaviour, utilizing advanced simulation tools to predict resonance patterns. With unwavering precision, we guide designs toward harmonic harmony and optimal performance.",
      reversed: true,
      img: "https://res.cloudinary.com/dbomu1erj/image/upload/v1693293916/Images_Website/Altair/kxh2crglcyuwkmbuucph.jpg",
    },
    {
      name: "Shock Analysis",
      content:
        "We specialize in deciphering the intricacies of sudden impact through expert shock analysis. Our team of skilled engineers possess a profound understanding of material behaviour and impact dynamics, utilizing advanced simulation tools to predict and optimize designs. With unwavering precision, we ensure designs are fortified against unforeseen events.",
      reversed: false,
      img: "https://res.cloudinary.com/dbomu1erj/image/upload/v1694508763/ljwxroedpfjavxra8ni8.png",
    },
    {
      name: "Random Vibration Analysis",
      content:
        "Random Vibration Analysis delves into the study of how structures respond to complex, unpredictable vibration inputs. It's an exploration of how materials, components, and systems react to dynamic loads that mimic real-world conditions. Through advanced simulations and statistical methods, we gain insights into the behavior of designs in scenarios where forces are inherently random.",
      reversed: true,
      img: "https://res.cloudinary.com/dbomu1erj/image/upload/v1693294163/Images_Website/Altair/vsh6iqse5n80m7q4c2a8.jpg",
    },
    {
      name: "Sine Sweep Analysis",
      content:
        "Sine Sweep Analysis involves subjecting mechanical systems to varying frequency vibrations in a controlled manner. It's an exploration of how structures resonate and react to harmonic loads. By gradually through a range of frequencies, we gain insights into how designs respond, revealing potential resonances and weaknesses that might lead to vibrations and failure.",
      reversed: false,
      img: "https://res.cloudinary.com/dbomu1erj/image/upload/v1695202152/Images_Website/sc0c1dgyjuj1z8ygtal7.webp",
    },
  ];

  return (
    <div>
      <Home {...home_content} />
      <ScrolltoTop />
      <What {...aboutService} />
      <Info features={features} />

      {/* <Points features={features_points} /> */}

      {/* <Info features={framework} id="framework_onshape" /> */}
    </div>
  );
}
