import React from "react";
import "./info.css";

export default function Info({ title, features, id }) {
  return (
    <div id={id}>
      <div className="service_features container">
        <div className="service_info_header">{title}</div>
        {features.map((feature) => {
          return (
            <div
              className={feature.reversed ? "service_info_rev" : "service_info"}
            >
              <div
                className="service_info_cnt"
                data-aos={feature.reversed ? "fade-left" : "fade-right"}
                data-aos-duration="800"
              >
                <div className="service_info_title_header">{feature.name}</div>
                <div className="service_info_cnt_txt">
                  {/* <ShowMoreText
                    lines={4}
                    more="Expand"
                    less="Show less"
                    className="content-css"
                    anchorClass="show-more-less-clickable"
                    expanded={false}
                    // width={2000}
                    truncatedEndingComponent={"..... "}
                  > */}
                  {feature.content}
                  {/* </ShowMoreText> */}
                </div>
              </div>
              <div
                className="service_info_img"
                data-aos={feature.reversed ? "fade-right" : "fade-left"}
                data-aos-duration="800"
              >
                <img src={feature.img} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
