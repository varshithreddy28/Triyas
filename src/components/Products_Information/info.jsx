import React from 'react'
import "./info.css"

export default function Info({ title, features, id }) {
    return (
        <div id={id}>
            <div className="features container">
                <div className="info_header">
                    {title}
                </div>
                {
                    features.map(feature => {
                        return (
                            <div className={feature.reversed ? "info_rev" : "info"}>
                                <div className="info_cnt">
                                    <div className="info_title_header">
                                        {feature.name}
                                    </div>
                                    <div className="info_cnt_txt">
                                        {feature.content}
                                    </div>
                                </div>
                                <div className="info_img">
                                    <img src={feature.img} alt="" />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
