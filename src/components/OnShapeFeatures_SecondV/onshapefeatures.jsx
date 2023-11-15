import React from "react";
import "./onshapefeatures.css";
import Accordion from 'react-bootstrap/Accordion';

export default function OnShapeFeatures({ features, id, className, title }) {
  return (
    <div id={id} style={{ backgroundColor: "#f8fafc" }}>
      <div className="onshape_fea_headerV2">{title}

        <div class="lines"></div>
      </div>
      <div className={`onshape_featuresV2 container ${className}`}>
        <Accordion defaultActiveKey="0">
          {features.map((feature, index) => {
            return (
              <Accordion.Item eventKey={index}>
                <Accordion.Header className="accordHead">{feature.name}</Accordion.Header>
                <Accordion.Body>
                  {feature.content}
                </Accordion.Body>
              </Accordion.Item>
            );
          })}
        </Accordion>

      </div>
    </div>
  );
}
