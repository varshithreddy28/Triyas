import React from 'react'
import "./home.css"
import { HashLink } from "react-router-hash-link";

import AltairBg from '../../assests/altair_bg.jpg'
import AltairLogo from '../../assests/altair_logo.png'
import AltairSide from '../../assests/altair_side.jpg'


export default function Home() {
    return (
        <div>
            <div className="altair_home container">
                <div className="alt_left">
                    <div className="alt_left_img">
                        <img src={AltairLogo} alt="" />
                    </div>
                    <div className="alt_left_txt">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iusto vel eum rerum, at nostrum reiciendis aperiam voluptatibus enim numquam autem non distinctio illo a quam dicta quibusdam soluta quasi corrupti sit. Explicabo dolorem quod sint aperiam, enim nobis laborum.
                    </div>
                    <div className="alt_left_btns">
                        <a className='visit_altair' href="https://altair.com/" target='_blank' rel="noreferrer">
                            <button id='altair_link'>
                                Visit Altair
                            </button>
                        </a>

                        <HashLink className='cnt_altair' to={`/#contact`} smooth>
                            <button id="contact_altair">
                                Get in Touch
                            </button>
                        </HashLink>
                    </div>
                </div>
                <div className="alt_right">
                    <img src={AltairSide} alt="" />
                </div>
            </div>
        </div>
    )
}
