import React from "react";
import "./what.css";
import ShowMoreText from "react-show-more-text";

export default function What({ header, content }) {
  return (
    <div>
      <div className="service_what container">
        <div className="what_header">{header}</div>
        <div className="service_parent_line">
          <span id="service_line"></span>
        </div>
        <div className="what_content">
          <ShowMoreText
            /* Default options */
            lines={3}
            more="Expand"
            less="Show less"
            className="service_content_sm"
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
  );
}
