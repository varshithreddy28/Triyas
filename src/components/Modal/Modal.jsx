import React, { useState, useEffect, useRef } from 'react'
import "./modal.css"
import { ToastContainer, toast } from "react-toastify";
import emailjs from "@emailjs/browser";


function Modal({ open, handleModalClose, handleModelSubmit }) {
    const form = useRef();
    const [details, setDetails] = useState({
        name: "",
        email: "",
        company: "",
        phno: "",
        message: ""
    })
    const [mailSent, setMailSent] = useState(true);


    const handleChange = (e) => {
        const inputName = e.target.name
        const inputValue = e.target.value
        setDetails({ ...details, [inputName]: inputValue })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(details)

        if (
            details.name == "" ||
            details.email == "" ||
            details.company == "" ||
            details.company == "" || details.phno === ""
        ) {
            toast.error("Fill all the Required fields");
            console.log("FIll all req fields")
        } else if (details.email.indexOf("@") == -1) {
            toast.warning("Enter a valid email");
            console.log("Enter a valid email");
        } else if (details.phno.length !== 10) {
            toast.warning("Enter a valid Mobile Number");
            console.log("Enter a valid Phone Number");
        }
        else {
            console.log(process.env.REACT_APP_SERVICE);
            setMailSent(false);
            emailjs
                .sendForm(
                    process.env.REACT_APP_SERVICE,
                    process.env.REACT_APP_TEMPLATE_ID,
                    form.current,
                    process.env.REACT_APP_USER_ID
                )
                .then((res) => {
                    // console.log(res.status, "Is response....................");
                    if (res.status == 200) {
                        toast.success(
                            "Thanks for contacting me!You Will recive a reply soon."
                        );
                        setMailSent(true);
                        setDetails({
                            name: "",
                            email: "",
                            phno: "",
                            company: "",
                            message: "",
                        });
                        handleModelSubmit()
                    }
                })
                .catch((err) => {
                    console.log("Mail Not Sent")
                    toast.error("There is problem in sending mail! Please try later");
                    // setMailSent(true);
                });
        }

    }

    if (open === false)
        return null

    return (
        <div>
            <div className="modal_background"></div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <div className="modal_content">
                <div className="modal_header">Fill the Form to continue : </div>
                <form ref={form} action={handleSubmit} method="post">
                    <div className="contactdetails">
                        <div className="inputLabel">
                            {/* <label htmlFor="name">Name</label> */}
                            <input
                                type="text"
                                placeholder="Name"
                                id="name"
                                name="name"
                                onChange={handleChange}
                                value={details.name}
                            // required="true"
                            />
                        </div>
                        <div className="inputLabel">
                            {/* <label htmlFor="email">Email</label> */}
                            <input
                                type="email"
                                placeholder="Email"
                                id="email"
                                name="email"
                                onChange={handleChange}
                                value={details.email}
                            />
                        </div>
                    </div>
                    <div className="contactdetails">
                        <div className="inputLabel">
                            {/* <label htmlFor="name">Name</label> */}
                            <input
                                type="number"
                                placeholder="Phone Number"
                                id="Phone Number"
                                name="phno"
                                onChange={handleChange}
                                value={details.phno}
                            // required="true"
                            />
                        </div>
                        <div className="inputLabel">
                            {/* <label htmlFor="email">Email</label> */}
                            <input
                                type="text"
                                placeholder="Company"
                                id="company"
                                name="company"
                                onChange={handleChange}
                                value={details.company}
                            />
                        </div>
                    </div>
                    <div className="message">
                        <div className="inputLabel">
                            {/* <label htmlFor="message">Message</label> */}
                            <textarea
                                type="text"
                                placeholder="Message"
                                id="message"
                                name="message"
                                onChange={handleChange}
                                rows={3}
                                value={details.message}
                            />
                        </div>
                    </div>
                    <div className="modal_btns">
                        <button className='modal_close' onClick={handleModalClose}>Close</button>
                        <button className='modal_submit' onClick={handleSubmit}>{mailSent ? "Submit" : "Sending..."}</button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default Modal
