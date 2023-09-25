import React from "react";
import { HashLink } from "react-router-hash-link";
import "./creoplus.css";
import CreoLogo from "../../assests/creoplus_logo.webp";
import ShowMoreText from "react-show-more-text";
import Productivity from "../../assests/productivity.svg";
import Users from "../../assests/users.svg";
import RightArrow from "../../assests/rightarrow.svg";
import CreoImg from "../../assests/creoplus_img.jpg";
import ScrollToTop from "react-scroll-to-top";
import TableCreoPlus from "../../components/creoplsTable/table";

function Creoplus() {
  const SaaSAdv = [
    {
      name: "Increased Productivity & Innovation",
      icon: Productivity,
      cnt: "SaaS customers can anticipate boosted productivity and innovation through swift access to the latest CAD features, utilization of cloud-computing technologies, and seamless real-time design collaboration.",
    },
    {
      name: "Better User Experience",
      icon: Users,
      cnt: "With CAD software under a SaaS model, automatic updates ensure a consistently improved user experience for all. Additionally, CAD SaaS offers enhanced accessibility and availability.",
    },
  ];

  const features = [
    {
      name: "Real-Time Collaboration",
      cnt: "Creo+ facilitates real-time collaboration with multiple contributors, both within and beyond your organization.",
      points: [
        "Enhance Collaboration and Communication.",
        "It ensures that everyone is working on the most up-to-date design.",
      ],
      video: "https://www.youtube.com/embed/MGKj9C-3v3I",
      reversed: true,
      img: CreoImg,
    },
    {
      name: "Simplified CAD Administration",
      cnt: "Simplify the administration and rollout of Creo throughout your organisation using PTC Control Center.",
      points: [
        "Centralised Management and Deployment.",
        "Minimize software installation and upgrades time.",
      ],
      video: "https://www.youtube.com/embed/ShKhpi-cgaU",
      reversed: false,
      img: "https://res.cloudinary.com/dbomu1erj/image/upload/v1695132439/Images_Website/p1nx18s7eqrq8mqrg4wa.jpg",
    },
  ];

  return (
    <div className="creoplus">
      <div className="first_cnt_plus">
        <div className="glassefct">
          <div
            className="creo_info container"
            data-aos="fade-up-right"
            data-aos-duration="800"
          >
            <div className="creo_header">
              <div className="creo_img_block">
                <img
                  src={CreoLogo}
                  className="creo_scndimg"
                  alt="Creo Logo"
                  srcset=""
                />
              </div>
              <div className="head_creo">Creo+ SaaS CAD</div>
            </div>
            <div className="creo_gen_info">
              Creo+ merges the strength and established features of Creo,
              delivered through SaaS (Software as a Service), with innovative
              cloud-based tools for improved collaboration and streamlined CAD
              administration.
            </div>
            <div className="contactus">
              <button>
                <HashLink to={`/#contact`} smooth>
                  Get an Estimated Quote
                </HashLink>
              </button>
            </div>
          </div>
          <div
            className="creo_img"
            data-aos="fade-up-left"
            data-aos-duration="800"
          >
            <img src={CreoLogo} loading="lazy" alt="Creo Logo" srcset="" />
          </div>
        </div>
      </div>
      <ScrollToTop />
      <div
        className="scndcnt container"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <div className="whatSaaS">What does SaaS mean for CAD?</div>
        <div className="lines_pls">
          <div className="lines"></div>
        </div>
        <div className="whatSaaS_ans">
          <ShowMoreText
            /* Default options */
            lines={3}
            more="Expand"
            less="Show less"
            className="content-css"
            anchorClass="show-more-less-clickable"
            expanded={false}
            // width={2000}
            truncatedEndingComponent={"..... "}
          >
            CAD Software as a Service (SaaS) represents a licensing and delivery
            model for engineering CAD software, offering benefits such as
            improved accessibility, scalability, collaboration, and security.
            While in-office communication software like Customer Relationship
            Management (CRM) and Human Resource Management (HRM) have already
            embraced SaaS.
            <br />
            The CAD SaaS sector is approaching a pivotal moment, with widespread
            adoption anticipated in the near future. PTC is uniquely positioned
            to assist customers in their transition to SaaS with cloud-based CAD
            and PLM solutions.
          </ShowMoreText>
        </div>
      </div>
      <div
        className="third_cnt container"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <div className="saas_adv">What are the CAD advantages of SaaS?</div>
        <div className="lines_pls">
          <div className="lines"></div>
        </div>
        <div className="sass_adv_ans">
          Software as a Service (SaaS) presents abundant opportunities for
          businesses, particularly in the realm of CAD solutions. Ultimately,
          adopting CAD as a SaaS product can significantly enhance the power and
          efficiency of your CAD system.
        </div>

        <div className="sass_exp container">
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
      <div
        className="intro_creo_plus container"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <div className="into_cnt">
          <div className="into_header">Introducing Creo+</div>
          <div className="intro_cnt">
            Creo+ integrates the robust features of Creo, delivered through
            SaaS, with innovative cloud-based tools designed to foster
            collaboration, elevate accessibility, and streamline license
            management. Beyond the capabilities of Creo 10, Creo+ incorporates
            collaborative tools enabling real-time part design review,
            exploration, and editing by multiple team members.
          </div>
        </div>
        <div className="video_intro">
          <iframe
            className="creo_plus_video"
            width="100%"
            height="100%"
            src="https://www.youtube-nocookie.com/embed/YxFgivyuD2E?controls=0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className="features container">
        <div className="features_header">Feature's of Creo +</div>
        {features.map((feature) => {
          return (
            <div className={feature.reversed ? "featured_rev" : "feature"}>
              <div
                className="feature_cnt"
                data-aos="fade-right"
                data-aos-duration="800"
              >
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
              <div
                className="feature_img"
                data-aos="fade-left"
                data-aos-duration="800"
              >
                <img src={feature.img} alt="" />
              </div>
            </div>
          );
        })}
      </div>
      <TableCreoPlus />
    </div>
  );
}

export default Creoplus;
