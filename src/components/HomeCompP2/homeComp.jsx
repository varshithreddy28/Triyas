import React from "react";
import "./homeComp.css";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";


export default function Info({ title, features, id }) {
    return (
        <div id={id}>
            <div className="features container">
                <div
                    className="info_header"
                    // class="aos-init"
                    data-aos="fade-up"
                    data-aos-duration="800"
                >
                    {title}
                </div>
                {features.map((feature, index) => {
                    return (
                        <div className={feature.reversed ? "info_rev homeCntCmp1" : "info homeCntCmp"}>
                            <div
                                className="info_cnt homeCmp"
                                data-aos={feature.reversed ? "fade-left" : "fade-right"}
                                data-aos-duration="800"
                            >
                                <div className={`${id} info_title_header`}>{feature.name}</div>
                                <div className="info_cnt_txt">{feature.content}</div>
                                <div className="btnV">
                                    {
                                        feature.gotoUrl && <Link className="cnt_altair" to={`/${feature.gotoUrl}`} smooth>
                                            <button id="view_homPdt">View</button>
                                        </Link>
                                    }

                                </div>


                            </div>
                            <div
                                className="info_img homeCmp"
                                data-aos={feature.reversed ? "fade-right" : "fade-left"}
                                data-aos-duration="800"
                            >
                                <img src={feature.img} alt="" />
                            </div>
                            <div className={`${(index % 2) == 0 ? 'addRght' : 'addLeft'}`}>

                                {
                                    (feature.designImg) && <img className={feature.reversed ? "hmimg2" : "hmimg3"} src={feature.designImg} alt="" srcset="" />
                                }
                                {/* {
                                    (index === 1) ? <img className="hmimg3" src={ThirdRight} alt="" srcset="" /> : ""
                                }
                                {
                                    (index === 2) ? <img className="hmimg2" src={BtmOne} alt="" srcset="" /> : ""
                                } */}
                            </div>

                        </div>
                    );
                })}
            </div>
        </div>
    );
}
