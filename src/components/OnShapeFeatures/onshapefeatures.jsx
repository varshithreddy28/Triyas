import React from "react";
import "./onshapefeatures.css";

export default function OnShapeFeatures({ features, id, className, title }) {
    return (
        <div id={id}>
            <div className="onshape_fea_header">{title}</div>
            <div className={`onshape_features container ${className}`}>
                {features.map((feature) => {
                    return (
                        <div className="feature_onshape">
                            <div className={`fea_headers ${className} `}>
                                <div className="fea_title">{feature.name}</div>
                                <img src={feature.imageUrl} alt="featureimage" srcset="" />
                            </div>
                            <div className="fea_cnt">{feature.content}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
