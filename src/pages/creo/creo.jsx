import React from "react";
import "./creo.css";
import CreoLogo from "../../assests/cero_logo2.webp";
import { HashLink } from "react-router-hash-link";
import Performance from "../../assests/performance.svg";
import Cash from "../../assests/cash.svg";
import Time from "../../assests/time.svg";
import CreoPkg from "../../assests/creo_packages.webp";
import TableCreo from "../../components/creoTable/tablecreo";
import Creonew from "../../components/creonew/creonew";
import CreoLogoNav from "../../assests/creo_logo.png";
import ProductsNav from "../../components/prodyctsNav/productsnav";
import ScrolltoTop from "react-scroll-to-top";

export default function Creo() {
  const benifits_info = `PTC Creo Parametric is a comprehensive 3D CAD solution that provides engineers with a seamless journey from concept to product validation. With a rich set of powerful features, engineers can precisely simulate and optimize their designs, taking into account factors such as weight, performance, cost, and sustainability. The software accommodates a wide range of materials and manufacturing processes. Furthermore, it goes beyond traditional engineering practices by replacing 2D drawings with fully-annotated 3D models, simplifying the manufacturing, inspection, and servicing of parts and assemblies.`;

  const creobenifits = [
    {
      name: "Lower cost",
      img: Cash,
      disc: "Our CAD tools provide several benefits for cost savings, including reducing material, labor, and overhead expenses. Take advantage of our part optimization tools to minimize material costs and streamline assembly processes.",
    },
    {
      name: "Performance",
      img: Performance,
      disc: "Set your products apart with outstanding performance. Optimize your designs for weight, reliability, and sustainability, while harnessing the full potential of cutting-edge additive and composite manufacturing processes.",
    },
    {
      name: "Time to Market",
      img: Time,
      disc: "PTC Creo accelerates product development. Ensure design quality from the start to prevent costly redesigns and rework. Streamline downstream processes with annotated 3D models.",
    },
  ];

  const naveles = [
    {
      name: "Benefits of Creo",
      id: "creo_benifits",
    },
    {
      name: "What's New",
      id: "whats_new_creo",
    },
    {
      name: "Packages",
      id: "packages",
    },
    {
      name: "Pricing",
      id: "pricing",
    },
  ];

  return (
    <div className="creo_page">
      <div className="first_cnt">
        <div className="glassefct">
          <div className="creo_info container">
            <div className="creo_header">
              <div className="creo_img_block">
                <img
                  src={CreoLogo}
                  className="creo_scndimg"
                  alt="Creo Logo"
                  srcset=""
                />
              </div>
              <div className="head_creo">Creo Parametric</div>
            </div>
            <div className="creo_gen_info">
              With PTC Creo Parametric, supercharge your innovation with
              advanced features and cutting-edge technologies. Simplify design
              iterations, reduce costs, enhance quality, and capture a larger
              market share.
            </div>
            <div className="contactus">
              <button>
                <HashLink to={`/#contact`} smooth>
                  Get an Estimated Quote
                </HashLink>
              </button>
            </div>
          </div>
          <div className="creo_img">
            <img src={CreoLogo} loading="lazy" alt="Creo Logo" srcset="" />
          </div>
        </div>
      </div>
      <ScrolltoTop />
      <div className="thrd_cnt">
        <ProductsNav naveles={naveles} logo={CreoLogoNav} />
      </div>
      <div id="creo_benifits">
        <div className="scnd_cnt container">
          <div className="benifits">The benefits of PTC Creo?</div>
          <div className="creo_cnt">{benifits_info}</div>
          <div className="ben_crio">
            {creobenifits.map((element) => {
              return (
                <div className="performance">
                  <div className="ben_img">
                    <img src={element.img} className="creo_img_abt" alt="" />
                    <div className="ben_header">{element.name}</div>
                  </div>
                  <div className="ben_info">{element.disc}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div id="whats_new_creo">
        <Creonew />
      </div>
      <div id="packages">
        <div className="fth_cnt container">
          <div className="fth_txt_cnt">
            <div className="fth_header">
              PTC Creo 3D CAD packages – Design the products for the future
            </div>
            <div className="fth_info">
              The PTC Creo 3D CAD/CAM/CAE product design solution equips you
              with precisely the tools you need to create top-tier designs
              efficiently. Benefit from the industry's most scalable array of 3D
              CAD product development solutions. Exclusively accessible through
              certified PTC resellers, our affordable and adaptable Creo Design
              packages cater to a diverse range of design disciplines and
              evolving business requirements, making them an ideal choice for
              growing companies.
            </div>
          </div>
          <div className="fth_img">
            <img src={CreoPkg} alt="" srcset="" />
          </div>
        </div>
      </div>
      <div id="pricing">
        <TableCreo />
      </div>
    </div>
  );
}
