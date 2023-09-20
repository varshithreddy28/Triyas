import React from "react";
import CompanyLogo from "../../assests/Triyas_Web.png";
import { BiLogoLinkedin, BiLogoFacebook } from "react-icons/bi";
import { BsTwitter, BsYoutube } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import PTC from "../../assests/ptcpartner.svg";
import Altair from "../../assests/altairlogo.webp";

import "./bottomnav.css";

export default function Bottomnav() {
  const social = [
    {
      name: "Linked In",
      logo: <BiLogoLinkedin />,
      link: "https://in.linkedin.com/company/triyas",
    },
    {
      name: "Twitter",
      logo: <BsTwitter />,
      link: "https://www.google.com/",
    },
    {
      name: "Facebook",
      logo: <BiLogoFacebook />,
      link: "https://www.facebook.com/solidworksreseller",
    },
    {
      name: "Mail",
      logo: <GrMail />,
      link: "varshithreddybobbili28@gmail.com",
    },
  ];
  const mail = [
    {
      name: "HR",
      mail: "hr@triyas.com",
    },
    {
      name: "Info",
      mail: "info@triyas.com",
    },
    {
      name: "Sales",
      mail: "sales@triyas.com",
    },
  ];
  return (
    <div>
      <div className="bottom_nav">
        <div className="visit">
          {/* <div className="company_logo">
            <img src={CompanyLogo} alt="" srcset="" />
          </div> */}
          <div className="visitHeader">LOCATION</div>
          <div className="plot_num">Plot Number 682</div>
          <div className="plaza">Babukhan Rasheed Plaza</div>
          <div className="rd_no">Road #36, Jubliee Hills</div>
          <div className="place">Hyderbad 500 033</div>
          <div className="cntry">India</div>
        </div>
        <div className="chnlpartner_tot">
          <div className="visitHeader">Channel Partners of</div>
          <div className="chnlpartnr_img">
            <div className="img_prtr">
              <img src={PTC} alt="" />
            </div>
            <div className="img_prtr">
              <img src={Altair} alt="" />
            </div>
          </div>
        </div>

        {/* <div className="contact_btm_nav">
          <div className="visitHeader">Contact us :</div>
          {mail.map((ele) => {
            return (
              <div className="email">
                <div className="title">
                  <u>{ele.name}</u>
                </div>
                <a href={`mailto:${ele.mail}`}>{ele.mail}</a>
              </div>
            );
          })}
        </div> */}
        <div className="follow_nav">
          <div className="visitHeader">SOCIAL PROFILE</div>
          <div className="follow">
            {social.map((ele) => {
              return (
                <div className="follow_cmpy">
                  {/* <img src={ele.logo} alt="" /> */}
                  {ele.logo}
                  <a
                    href={ele.name === "Mail" ? `mailto:${ele.link}` : ele.link}
                    target="_blank"
                  >
                    {ele.name}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
