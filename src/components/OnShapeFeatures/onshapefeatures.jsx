import React from "react";
import "./onshapefeatures.css";

export default function OnShapeFeatures({ features, id, className, title, lines }) {
  return (
    <div id={id} style={{ backgroundColor: "#f8fafc" }}>
      <div className="onshape_fea_headerV2">{title}
        {
          lines &&
          <div class="lines"></div>
        }
      </div>
      <div className={`onshape_features container ${className}`}>
        {features.map((feature) => {
          return (
            <div className="feature_onshape">
              <div
                className={`fea_headers ${className} `}
                data-aos="fade-right"
                data-aos-duration="800"
              >
                <div className="hdbf">

                  <img
                    src={feature.imageUrl}
                    alt="featureimage"
                    srcset=""
                    data-aos="fade-left"
                    data-aos-duration="800"
                    className="featureImgImg"
                  />
                </div>

                <div className="fea_title">{feature.name}</div>

              </div>
              <div className="fea_cnt">{feature.content}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
