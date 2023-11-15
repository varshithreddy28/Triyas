import React from "react";
import CompanyLogo from "../../assests/Triyas_Web.png";
import { BiLogoLinkedin, BiLogoFacebook } from "react-icons/bi";
import { BsTwitter, BsYoutube } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import Altair from "../../assests/altairlogo.webp";
import LinkedIn from '../../assests/Home/LinkedIn svg.svg'
import X from '../../assests/Home/X.svg'
import FaceBook from '../../assests/Home/Facebook.svg'

import PTC from '../../assests/Home/PTCLogo.svg'

import "./bottomnav.css";
import { Link } from "react-router-dom";

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
    <div className="jhdfg ">
      <div className="bottom_nav container">
        <div className="cmpyLogo ">
          <img className="cmpyImgL" src={CompanyLogo} alt="Company Logo" srcset="" />
        </div>

        <div className="cmpySolu">
          <div className="borderH"></div>
          <div className="sol1">
            <div className="solTlt">
              About Triyas
            </div>
            <div className="solTlt">
              Simulations
            </div>
            <div className="solTlt">
              Support
            </div>
            <div className="solTlt">
              Creo
            </div>
            <div className="solTlt">
              Creo+
            </div>
          </div>
          <div className="sol1">
            <div className="solTlt">
              CAD Services
            </div>
            <div className="solTlt">
              CAE Services
            </div>
            <div className="solTlt">
              Staffing Services
            </div>
            <div className="solTlt">
              Design
            </div>
            <div className="solTlt">
              OnShape
            </div>
          </div>
          <div className="sol1">

            <div className="solTlt">
              Altair Events
            </div>
            <div className="solTlt">
              PTC Events
            </div>
            <div className="solTlt">
              AR & VR
            </div>
          </div>
          <div className="borderHL"></div>

        </div>

        <div className="cmpyChnlPrts">
          <div className="chnlPrtrH">
            Channel Partners
          </div>
          <div className="chnls">
            <img className="chnlsN" src={"https://res.cloudinary.com/dbomu1erj/image/upload/v1699204281/Images_Website/d59h3pmzscqkgs8ai3z0.svg"} alt="PTC Logo" />
            <img className="chnlsN" src={"https://res.cloudinary.com/dbomu1erj/image/upload/v1699204433/Images_Website/i24jxxvq3jxx63jerjgf.svg"} alt="Altair Logo" />
          </div>
          <div className="socilaLinks">
            <a href="http://google.com" target="_blank" rel="noopener noreferrer">
              <img src={LinkedIn} alt="LinkedIn" srcset="Linkedin Logo" />
            </a>
            <a href="http://google.com" target="_blank" rel="noopener noreferrer">
              <img src={X} alt="LinkedIn" srcset="Linkedin Logo" />
            </a>
            <a href="http://google.com" target="_blank" rel="noopener noreferrer">
              <img src={FaceBook} alt="LinkedIn" srcset="Linkedin Logo" />
            </a>
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

      </div>
    </div>
  );
}
