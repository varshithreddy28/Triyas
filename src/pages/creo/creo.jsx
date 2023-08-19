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

export default function Creo() {
  const benifits_info = `PTC Creo Parametric is an all-encompassing 3D CAD solution, offering
          engineers a seamless path from concept to validation for their
          products. With a wide array of powerful features, engineers can
          simulate and optimize their designs with precision, considering
          factors like weight, performance, cost, and sustainability. The
          software also supports various materials and manufacturing processes.
          Additionally, it goes beyond engineering by replacing 2D drawings with
          fully-annotated 3D models, streamlining manufacturing, inspection, and
          servicing of parts and assemblies.`;

  const creobenifits = [
    {
      name: "Lower cost",
      img: Cash,
      disc: "Our CAD tools offer numerous advantages to help you save on material, labor, and overhead costs. Utilize part optimization tools to minimize material expenses and streamline assembly processes.",
    },
    {
      name: "Performance",
      img: Performance,
      disc: "Differentiate your products with exceptional performance. Optimize your designs for weight, reliability, and sustainability. Maximize performance using the latest additive and composite manufacturing processes.",
    },
    {
      name: "Time to Market",
      img: Time,
      disc: "PTC Creo helps you build better products faster. Validate design quality early in the design cycle to avoid redesign and rework. Annotated 3D models can streamline downstream activities.",
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
              With PTC Creo Parametric, turbocharge innovation by leveraging
              advanced functionality and groundbreaking technologies. Streamline
              iterations, lower expenses, augment quality, and seize market
              share.
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
              The PTC Creo 3D CAD / CAM / CAE product design solution provides
              the right tools to produce the highest quality designs in the
              shortest possible time. Take advantage of the most scalable
              portfolio of 3D CAD product development solutions. The PTC Creo
              Design packages are only available through certified PTC
              resellers. These affordable and easily expandable packages meet
              the unique needs of a wide variety of design disciplines and
              business needs of a growing company.
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
