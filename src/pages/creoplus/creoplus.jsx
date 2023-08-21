import React from "react";
import { HashLink } from "react-router-hash-link";
import "./creoplus.css";
import CreoLogo from "../../assests/creoplus_logo.webp";
import ShowMoreText from "react-show-more-text";
import Productivity from "../../assests/productivity.svg";
import Users from "../../assests/users.svg";
import RightArrow from "../../assests/rightarrow.svg";
import CreoImg from "../../assests/creoplus_img.jpg";

function Creoplus() {
  const SaaSAdv = [
    {
      name: "Increased Productivity & Innovation",
      icon: Productivity,
      cnt: "SaaS customers can expect to see productivity and innovation gains in terms of a rapid delivery of the latest CAD capabilities, access to cloud-computing technologies, and real-time design collaboration.",
    },
    {
      name: "Better User Experience",
      icon: Users,
      cnt: "CAD software is automatically updated with SaaS, so the user experience is better and more consistent for all. CAD SaaS is also more easily accessible and available.",
    },
  ];

  const features = [
    {
      name: "Real-time collaboration",
      cnt: "Creo+ enables you to collaborate with multiple contributors in real time, both inside and outside the organization.",
      points: [
        "Improve collaboration and communication",
        "Ensures that everyone is working on the latest design",
      ],
      video: "https://www.youtube.com/embed/MGKj9C-3v3I",
      reversed: true,
      img: CreoImg,
    },
    {
      name: "Simplified CAD administration",
      cnt: "Streamline the management and deployment of Creo across the organization utilizing PTC Control Center.",
      points: [
        "Centrally manage and deploy of all entitlements",
        "Deploy Creo+ updates automatically",
        "Reduce the time spent on installation and upgrading the software.",
      ],
      video: "https://www.youtube.com/embed/ShKhpi-cgaU",
      reversed: false,
      img: CreoImg,
    },
  ];

  return (
    <div className="creoplus">
      <div className="first_cnt_plus">
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
              <div className="head_creo">Creo+ SaaS CAD</div>
            </div>
            <div className="creo_gen_info">
              Creo+ combines the power and proven functionality of Creo
              delivered via SaaS, with new cloud-based tools to enhance
              collaboration and simplify CAD administration.
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
      <div className="scndcnt container">
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
            CAD Software as a Service (SaaS) is a model for licensing, delivery,
            and management of engineering CAD software for improved
            accessibility, scalability, collaboration, and security. In many
            instances, SaaS also enhances existing software capabilities and
            functionality.
            <br />
            While in-office communication software like Customer Relationship
            Management (CRM) and Human Resource Management (HRM) have embraced
            the SaaS model, CAD SaaS is just reaching its inflection point, with
            widespread adoption expected in the coming years. PTC is well
            positioned to help customers when they are ready to make the
            transition to SaaS, with cloud-based CAD and PLM solutions.
          </ShowMoreText>
        </div>
      </div>
      <div className="third_cnt container">
        <div className="saas_adv">What are the CAD advantages of SaaS?</div>
        <div className="lines_pls">
          <div className="lines"></div>
        </div>
        <div className="sass_adv_ans">
          Software as a Service (SaaS) offers a wealth of opportunities for
          companies, especially when it comes to CAD solutions. Ultimately, your
          CAD system will be more powerful and efficient as a SaaS product.
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
      <div className="intro_creo_plus container">
        <div className="into_cnt">
          <div className="into_header">Introducing Creo+</div>
          <div className="intro_cnt">
            Creo+ combines the power and proven functionality of Creo, delivered
            via SaaS, with new cloud-based tools to enhance collaboration,
            improve accessibility, and simplify license management. In addition
            to all the capabilities of Creo 10, Creo+ includes collaboration
            tools to enable multiple team members to review, explore, and edit
            part design—in real time.
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
    </div>
  );
}

export default Creoplus;
