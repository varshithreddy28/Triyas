import React from "react";
import RightArrow from "../../assests/rightarrow.svg";
import "./points.css";

export default function Points({ features }) {
  return (
    <div>
      <div className="service_features container">
        {/* <div className="service_features_header">Feature's of Creo +</div> */}
        {features.map((feature) => {
          return (
            <div
              className={
                feature.reversed ? "service_featured_rev" : "service_feature"
              }
            >
              <div className="service_feature_cnt">
                <div className="service_feature_header">{feature.name}</div>
                <div className="service_feature_cnt_txt">{feature.cnt}</div>
                <div className="service_feature_pnts">
                  {feature.points.map((pnt) => {
                    return (
                      <div className="service_pnt">
                        <img src={RightArrow} alt="" srcset="" />
                        <span className="service_pnt_txt">{pnt}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="service_feature_img">
                <img src={feature.img} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
