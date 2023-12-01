import React from "react";
import "./services.css";
import Info from "../../components/HomeCompP2/homeComp";
import Top from '../../assests/Home/Top.svg'
import SecRight from '../../assests/Home/LeftOne.svg'
import ThirdRight from '../../assests/Home/RightOne.svg'
import BtmOne from '../../assests/Home/BottomOne.svg'
import homeBg from '../../assests/homebg_scnd.svg'

import { Link } from "react-router-dom";

function Services() {
  const features = [
    {
      name: "Design Services",
      content:
        "We encompass a broad spectrum of offerings, aiding individuals and businesses in crafting and developing diverse products, problem-solving skills, and technical expertise. Our mission is to empower innovation, improving products, and drive success across a multitude of industries.",
      reversed: true,
      img: "https://res.cloudinary.com/dbomu1erj/image/upload/v1698493370/Images_Website/efn1b1k2cahq2rjrhei2.svg",
      designImg: SecRight,
      gotoUrl: 'ptc'
    }, {
      name: "CAE Services",
      content:
        "We encompass a broad spectrum of offerings, aiding individuals and businesses in crafting and developing diverse products, problem-solving skills, and technical expertise. Our mission is to empower innovation, improving products, and drive success across a multitude of industries.",
      reversed: false,
      img: "https://res.cloudinary.com/dbomu1erj/image/upload/v1698493370/Images_Website/efn1b1k2cahq2rjrhei2.svg",
      designImg: ThirdRight,
      gotoUrl: 'caeservices'
    },
    {
      name: "PLM Services",
      content:
        "PLM (Product Lifecycle Management) services streamline product development, enhance collaboration, ensure data accuracy, and boost quality, covering the entire product journey from concept to retirement, crucial for modern businesses' success.",
      reversed: true,
      img: "https://res.cloudinary.com/dbomu1erj/image/upload/v1698494099/Images_Website/ygsk10rkolpk9ju753wo.svg",
      designImg: BtmOne,
      gotoUrl: 'http://localhost:3000/'

    },
    {
      name: "Software Services",
      content:
        "We specialize in creating captivating and interactive experiences that bridge the gap between the physical and digital worlds. Our cutting-edge solutions harness the power of emerging technologies, redefining engagement, education, and customer interaction to inspire lasting connections.",
      reversed: false,
      img: "https://res.cloudinary.com/dbomu1erj/image/upload/v1698494173/Images_Website/babwuvbewqvxtp9ucyra.svg",
      gotoUrl: ''

    }
  ];

  return (
    <div id="services" style={{ backgroundImage: homeBg }}>
      <div className="home_body">
        <div
          className="dfgss"
          data-aos="fade-down"
          data-aos-duration="800"
        >
          <img className="hmimg1" src={Top} alt="" srcset="" />
          <div className="services_heading">

            {/* We offer the following Services and Products */}
          </div>
          <div id="serpdtstxt">
            <span id="gghh">
              Uncover a diverse array of services and products that cater to your needs. Our extensive offerings ensure you find the solutions you're looking for.            </span>
          </div>
        </div>
        <Info features={features} id="" />
      </div>
    </div>
  );
}

export default Services;
