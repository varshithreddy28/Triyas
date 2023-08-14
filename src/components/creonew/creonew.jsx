import React, { useState, useEffect } from 'react'
import "./creonew.css"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Modal from '../Modal/Modal';

export default function Creonew() {

    const [modelOpen, setModelOpen] = useState(false)
    const [submitted, setSubmit] = useState(false)

    const creo_features = [
        {
            name: "Creo Composites",
            content: 'Use Creo to design with composites materials to ensure a strong, but lightweight product.Composites provide the benefit of being able to mix and match fabric to create strength, flexibility, and impact absorption very locally within the design.The resulting structure that we are left with is incredibly optimized for meeting your correct engineering goals',
            btn: "Discover Creo Composites",
            img: "https://pdsvision.com/wp-content/uploads/2022/11/PTC-Creo-10-Composites.jpg.webp",
            inverted: true
        }, {
            name: "Creo electrification",
            content: "Creo has improved design tools for cables and harness design to help you create and manage wiring harnesses.The Split/ Merge Harness Tool for Cabling can split an existing harness into two separate harnesses which can be later merged back together. New ECAD capabilities have been added, including paste masks and hole parameters, to better design and control PCB design.",
            btn: "Discover Routed Systems",
            img: "https://pdsvision.com/wp-content/uploads/2022/11/PTC-Creo-10-Eletrification.jpg.webp",
            inverted: false
        }, {
            name: "Design for ergonomics",
            content: "Customers must be able to use your products safely and efficiently. Discover enhancements to Creo that allow you to account for the range of movement, the field of vision and uniqueness of users.The Visual Field features can now perform a reflection analysis and manikins now support multiple reach envelopes.",
            btn: "Explore Human factors",
            img: "https://pdsvision.com/wp-content/uploads/2022/11/PTC-Creo-10-Ergonomics.jpg.webp",
            inverted: true
        }, {
            name: "Simulation driven design",
            content: "Introducing Creo Ansys Simulation Advanced, the latest addition to the Creo simulation offerings, which includes support for nonlinear materials. Creo Simulation Live now includes expanded contact simulation options and improved result options for fluids and structures. Creo Flow Analysis and Creo Simulate have also been enhanced with better animation and multibody support, respectively. Additional, generative design continues to evolve with the addition of rotational symmetry and the ability to add point mass and remote loads.",
            btn: "Discover Creo Ansys Simulation",
            img: "https://pdsvision.com/wp-content/uploads/2022/11/PTC-Creo-10-Simulation.jpg.webp",
            inverted: false
        }, {
            name: "Additive and subtractive manufacturing",
            content: "For additive manufacturing, the latest functionalities allow users to create several new beam-based lattice types such as rhombic and formula-driven lattices are now available in Creo 10. For subtractive manufacturing, High- Speed Milling now supports barrel tools for both wall and floor 5 - axis finish, to reduce toolpath time and increase surface finish quality.",
            btn: "Discover Additive Manufacturing",
            img: "https://pdsvision.com/wp-content/uploads/2022/11/PTC-Creo-10-Additive-Manufacturing.jpg.webp",
            inverted: true
        },
    ]

    const setModelState = () => {
        // if details are not submitted then only we need to open this
        if (submitted === false)
            setModelOpen(!modelOpen);
    }

    const handleModalClose = () => {
        setModelOpen(false);
    }

    const handleModelSubmit = () => {
        setSubmit(true)
        setModelOpen(false);
    }

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('modalsubmit'));
        if (items) {
            // console.log(items)
            setSubmit(items);
        }
    }, [])

    useEffect(() => {
        if (submitted)
            localStorage.setItem('modalsubmit', JSON.stringify(true));
    }, [submitted])

    return (
        <div>
            <div className="whats_new_header">
                <div className="header_new">
                    PTC Creo 10 – New Features and Functionality
                </div>
                <div className="lines">
                </div>
            </div>
            <div className="frth_cnt container">
                <div className="wnew_cnt">
                    <div className="wnewheader">Usability and productivity</div>
                    <div className="wnewtcnt">
                        Our best Creo. Ever. You’ll find a wide variety of improvements to
                        help make every day more productive. These include new tools for
                        managing, manipulating, and understanding CAD models, as well as
                        new capabilities to design composite products and enhancements in
                        electrification, ergonomics design, model-based definition (MBD),
                        simulation and both additive and subtractive manufacturing.
                    </div>
                    <div className="creo_enhance">
                        {
                            submitted ? <><a href="https://www.triyas.com/" target='_blank' rel="noreferrer">
                                <button onClick={() => setModelState()} id="enhance_btn"> Creo 10 - Top enhancements </button>
                            </a>
                                <Modal open={modelOpen} handleModalClose={handleModalClose} handleModelSubmit={handleModelSubmit} />
                            </> : <>
                                <button onClick={() => setModelState()} id="enhance_btn"> Creo 10 - Top enhancements </button>
                                <Modal open={modelOpen} handleModalClose={handleModalClose} handleModelSubmit={handleModelSubmit} />
                            </>
                        }

                    </div>
                </div>
                <div className="video-responsive">
                    <iframe
                        width="92%"
                        height="100%"
                        src="https://www.youtube-nocookie.com/embed/zUKBscabvj0?controls=0"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                    ></iframe>
                </div>
            </div>
            {
                creo_features.map(feature => {
                    return (
                        <div className="container">
                            {
                                feature.inverted ?
                                    <div className="compositions inverted">
                                        <div className="compo_img">
                                            <LazyLoadImage
                                                src={feature.img} // use normal <img> attributes as props
                                            />
                                            {/* <img loading="lazy" src={feature.img} alt="" srcset="" /> */}
                                        </div>
                                        <div className="compo_cnt">
                                            <div className="new_header">
                                                {feature.name}
                                            </div>
                                            <div className="new_cnt">
                                                {feature.content}
                                            </div>
                                            <div className="creo_enhance">
                                                {
                                                    submitted ? <><a href="https://www.triyas.com/" target='_blank' rel="noreferrer">
                                                        <button onClick={() => setModelState()} id="enhance_btn"> {feature.btn} </button>
                                                    </a>
                                                        <Modal open={modelOpen} handleModalClose={handleModalClose} handleModelSubmit={handleModelSubmit} />
                                                    </> : <>
                                                        <button onClick={() => setModelState()} id="enhance_btn"> {feature.btn} </button>
                                                        <Modal open={modelOpen} handleModalClose={handleModalClose} handleModelSubmit={handleModelSubmit} />
                                                    </>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    : <div className="compositions">

                                        <div className="compo_cnt">
                                            <div className="new_header">
                                                {feature.name}
                                            </div>
                                            <div className="new_cnt">
                                                {feature.content}
                                            </div>
                                            <div className="creo_enhance">
                                                {
                                                    submitted ? <><a href="https://www.triyas.com/" target='_blank' rel="noreferrer">
                                                        <button onClick={() => setModelState()} id="enhance_btn"> {feature.btn} </button>
                                                    </a>
                                                        <Modal open={modelOpen} handleModalClose={handleModalClose} handleModelSubmit={handleModelSubmit} />
                                                    </> : <>
                                                        <button onClick={() => setModelState()} id="enhance_btn"> {feature.btn} </button>
                                                        <Modal open={modelOpen} handleModalClose={handleModalClose} handleModelSubmit={handleModelSubmit} />
                                                    </>
                                                }
                                            </div>
                                        </div>
                                        <div className="compo_img">
                                            <LazyLoadImage
                                                src={feature.img} // use normal <img> attributes as props
                                            />
                                            {/* <img loading="lazy" src={feature.img} alt="" srcset="" /> */}
                                        </div>
                                    </div>
                            }
                        </div>
                    )
                })
            }

        </div>
    )
}
