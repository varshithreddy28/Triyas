import React from "react";
import "./info.css";

export default function Info({ title, features, id }) {
  return (
    <div id={id}>
      <div className="features container">
        <div
          className="info_header"
          // class="aos-init"
          data-aos="fade-up"
          data-aos-duration="800"
          style={{ color: '#655DBB' }}
        >
          {title}
        </div>
        {features.map((feature) => {
          return (
            <div className={feature.reversed ? "info_rev" : "info"}>
              <div
                className="info_cnt"
                data-aos={feature.reversed ? "fade-left" : "fade-right"}
                data-aos-duration="800"
              >
                <div className="info_title_header">{feature.name}</div>
                <div className="info_cnt_txt">{feature.content}</div>
              </div>
              <div
                className="info_img"
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
