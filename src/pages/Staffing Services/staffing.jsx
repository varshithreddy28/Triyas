import React from "react";
import Home from "../../components/Services home/home";

import "./staffing.css";
import What from "../../components/Service What/what";
import RightArrow from "../../assests/rightarrow.svg";

//
import ScrolltoTop from "react-scroll-to-top";
import Industial from "../../assests/services/staff1.svg";
import Talent from "../../assests/services/staff2.svg";
import Onsite from "../../assests/services/staff3.svg";
import Pay from "../../assests/services/staff4.svg";
import Support from "../../assests/services/staff5.svg";
import Train from "../../assests/services/staff6.svg";
import Equi from "../../assests/services/staff7.svg";
import Benifits from "../../assests/services/staff8.svg";

export default function Staffing() {
  const SaaSAdv = [
    {
      name: "Industry Expertise",
      icon: Industial,
      cnt: "With 22 years of mechanical industry expertise, we empower companies in design, simulation, and talent acquisition for cost-effective, data-driven success.",
    },
    {
      name: "Exceptional Talent",
      icon: Talent,
      cnt: "We invest in sourcing top talent, saving your time and resources. Specializing in Engineering and Simulation, we turn the impossible into reality.",
    },
    {
      name: "Onsite Management Initiative",
      icon: Onsite,
      cnt: "We take pride in comprehensive support throughout careers, from top-notch service to recognition, rewards, and immigration support when needed.",
    },
    {
      name: "Workforce Offerings",
      icon: Pay,
      cnt: "Whether it's contract or direct hire engagements, we provide an array of workforce and payroll options to perfectly match your staffing requirements.",
    },
    {
      name: "Round-the-Clock Support",
      icon: Support,
      cnt: "Our dedicated team is available 24/7 to provide tailored support and assistance, no matter the circumstances or requirements.",
    },
    {
      name: "Training",
      icon: Train,
      cnt: "With a vision to empower our customers through informed decisions, we offer specialized training solutions for Design & Simulation. Our focus is nurturing talent.",
    },
    {
      name: "Equity and Diversity",
      icon: Equi,
      cnt: "We value diversity for its unique perspectives and actively seek candidates from varied backgrounds to shape a collective vision of the future.",
    },
    {
      name: "Employee Benefits",
      icon: Benifits,
      cnt: "We provide our employees with a comprehensive total rewards package encompassing salary and time-off benefits.",
    },
  ];

  const home_content = {
    header: "Staffing Services",
    content:
      "We understand that finding the right talent for your organization is crucial to its success. We are dedicated to helping you discover the best candidates to drive your business forward. Our staffing services cover a wide range of industries and job categories, ensuring we meet your unique staffing needs. ",
    logo: "https://res.cloudinary.com/dbomu1erj/image/upload/v1694547749/Images_Website/u1pfvpttynvf2qqh3jve.jpg",
    classHome: "femodelling",
    back_img:
      "https://res.cloudinary.com/dbomu1erj/image/upload/v1694547525/Images_Website/g8qibrh8zywsyxu0ohtu.jpg",
  };

  const aboutService = {
    header: "Why Choose Us as Your Partner ?",
    content:
      "We prioritise what we know best: delivering the ideal candidate for your contract or direct hire position. We're more than just a staffing agency; we're your strategic partner in cultivating a dynamic workforce.Our ability to identify exceptional talent ensures they seamlessly integrate into your team, contributing the creativity and enthusiasm that aligns with Triyas culture.",
  };

  const features = [
    {
      name: "We are having Expertise in",
      cnt: "We specialize in engineering, simulation, and product sales, offering expertise in these key areas.",
      points: ["Engineering Design", "Product Simulation", "Product Sales"],
      reversed: true,
      img: "https://res.cloudinary.com/dbomu1erj/image/upload/v1694548166/Images_Website/izobabtni5cmucv9os9q.jpg",
    },
  ];
  //     content:
  //       "Design Ideation in Mechanical Engineering serves as the creative spark, igniting idea generation during the initial stages of conceptual design. This phase thrives on innovative approaches and strategies that enhance creativity, ultimately shaping the foundation for detailed design development. Ideation methods are meticulously crafted to foster ingenuity, ensuring a seamless transition towards the creation of intricate designs",
  //     reversed: true,
  //     img: CreoImg,
  //   },
  //   {
  //     name: "Detailed Design",
  //     content:
  //       "Within Mechanical Engineering, the Detailed Design phase comes to the forefront as designers meticulously craft intricate designs tailored for efficient manufacturing. This crucial stage encompasses the creation of meticulous drawings and specifications, which precisely outline the product's measurements, materials, and manufacturing methodologies. Here, designers delve into concerns of manufacturability, clearances, and operational longevity, ensuring the product's usability without encountering potential hazards.",
  //     reversed: false,
  //     img: CreoImg,
  //   },
  //   {
  //     name: "Concept Ideation",
  //     content:
  //       "An engineering prototype is more than just a physical embodiment of a concept. It's a tangible manifestation of imagination, expertise, and meticulous engineering. Whether it's an intricate piece of machinery or a cutting-edge electronic device, an engineering prototype transforms theoretical possibilities into concrete realities. This prototype serves as a testbed, a canvas on which engineers fine-tune their designs, evaluate functionalities, and identify any potential pitfalls.",
  //     reversed: true,
  //     img: CreoImg,
  //   },
  // ];

  return (
    <div>
      <Home {...home_content} />
      <ScrolltoTop />
      <What {...aboutService} />
      <div className="features container">
        <div className="features_header">Our Specializations</div>
        {features.map((feature) => {
          return (
            <div className={feature.reversed ? "featured_rev" : "feature"}>
              <div className="feature_cnt">
                <div className="feature_header">{feature.name}</div>
                <div className="feature_cnt_txt">{feature.cnt}</div>
                <div className="feature_pnts">
                  {feature.points.map((pnt) => {
                    return (
                      <div className="pnt">
                        <img src={RightArrow} alt="" srcset="" />
                        <span className="pnt_txt">{pnt}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="feature_img">
                <img src={feature.img} alt="" />
              </div>
            </div>
          );
        })}
      </div>

      <div className="third_cnt container">
        <div className="saas_adv ">Advantages of Partnering with Us</div>
        <div className="lines_pls staffingServ">
          <div className="lines"></div>
        </div>

        <div className="sass_exp container ">
          {SaaSAdv.map((Adv) => {
            return (
              <div className="advantage">
                <div className="ad_icon">
                  <img src={Adv.icon} alt="" />
                </div>
                <div className="ad_header">{Adv.name}</div>
                <div className="adv_cont">{Adv.cnt}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
