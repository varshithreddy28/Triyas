import React from "react";
import "./overview.css";
import ShowMoreText from "react-show-more-text";

export default function Overview({ header, content, video, id }) {
  return (
    <div id={id} style={{ backgroundColor: 'white' }}>
      <div className="overview_compo">
        <div
          className="overview_cnt"
          data-aos="fade-right"
          data-aos-duration="800"
        >
          <div className="sjf">

            <div className="benifits">{header}</div>
            <div className="creo_cnt" style={{ textAlign: 'justify' }}>
              <ShowMoreText
                /* Default options */
                lines={4}
                more="Expand"
                less="Show less"
                className="content-css"
                anchorClass="show-more-less-clickable"
                expanded={false}
                // width={2000}
                truncatedEndingComponent={"..... "}
              >
                {content}
              </ShowMoreText>
            </div>
          </div>

        </div>
        <div
          className="video_overview"
          data-aos="fade-left"
          data-aos-duration="800"
        >
          <iframe
            className="overview_yt_video"
            width="100%"
            height="100%"
            src={video}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
