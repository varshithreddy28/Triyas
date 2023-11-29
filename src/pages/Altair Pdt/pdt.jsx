import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./pdt.css";
import data from "./data.json";
import { useEffect } from "react";
import ShowMoreText from "react-show-more-text";

export default function Pdt_Altr() {
  const [curPdt, setcurPdt] = useState("");
  const [dispCnt, setdispCnt] = useState(false);

  const { pathname } = useLocation();
  const url = pathname.split("/");
  const temp = url[3];

  useEffect(() => {
    setcurPdt(temp);
  }, [temp]);

  useEffect(() => {
    console.log(temp);
    console.log(
      curPdt,
      ".............................................................................."
    );
    for (const obj of data) {
      if (obj.url == temp) setdispCnt(obj);
    }
  }, [curPdt]);

  return (
    <>
      {curPdt ? (
        <div className="single_pdt">
          <div className="pdt">
            <div className="pdt_hero">
              <div className="title_hero">
                <u> {dispCnt.name} </u>
              </div>
              <div className="title_tagline">{dispCnt.tagline}</div>
              <div className="title_discrip">
                <div className="discp">
                  <ShowMoreText
                    /* Default options */
                    lines={8}
                    more="Expand"
                    less="Show less"
                    className="service_content_sm"
                    anchorClass="show-more-less-clickable"
                    expanded={false}
                    // width={2000}
                    truncatedEndingComponent={"..... "}
                  >
                    {dispCnt.discreption}
                  </ShowMoreText>
                </div>
              </div>
            </div>
          </div>
          <div className="whythis container">
            <div className="yths_header">Why {`${dispCnt.dispname}`}</div>
            <div className="yths_descp">
              {dispCnt.whyaltr.map((ele) => {
                return (
                  <div className="card_yths">
                    <div className="crd_img">
                      <img src={ele.img} alt="" srcset="" />
                    </div>
                    <div className="card_title_yths">{ele.name}</div>
                    <div className="card_yths_dscp">{ele.disc}</div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="altrpdt">
            <div className="keyftrs_header">
              {dispCnt.keyfeatures.length > 0 ? `Key Features : ` : ""}
            </div>
            <div className="keyfetrs">
              {dispCnt.keyfeatures.map((ele) => {
                return (
                  <div className="ftr">
                    <div className="key_header">{ele.name}</div>
                    <div className="key_dsc">{ele.disc}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <div>
          Loading
          ................................................................................................................
        </div>
      )}
    </>
  );
}
