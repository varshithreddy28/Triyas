import React, { useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./contact.css";
// import { SMTPClient } from "emailjs";
import emailjs from "@emailjs/browser";
import Add1 from '../../assests/Home/add1.svg'
import Add2 from '../../assests/Home/add2.svg'
import Add3 from '../../assests/Home/add3.svg'


const Contact = ({ theme }) => {
  // const { REACT_APP_SERVICE } = process.env;
  const form = useRef();
  const [details, setDetails] = useState({
    name: "",
    email: "",
    company: "",
    phno: "",
    message: "",
  });

  const [mailSent, setMailSent] = useState(true);

  const handelChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setDetails({ ...details, [inputName]: inputValue });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    // console.log(process.env.REACT_APP_EMAILSERVICE, process.env);
    if (
      details.name == "" ||
      details.email == "" ||
      details.company == "" ||
      details.company == "" ||
      details.phno === ""
    ) {
      toast.error("Fill all the Required fields");
      console.log("FIll all req fields");
    } else if (details.email.indexOf("@") == -1) {
      toast.warning("Enter a valid email");
      console.log("Enter a valid email");
    } else if (details.phno.length !== 10) {
      toast.warning("Enter a valid Mobile Number");
      console.log("Enter a valid Phone Number");
    } else {
      console.log(process.env.REACT_APP_SERVICE);
      setMailSent(false);
      emailjs
        .sendForm(
          process.env.REACT_APP_SERVICE,
          process.env.REACT_APP_TEMPLATE_ID,
          e.target,
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
          }
        })
        .catch((err) => {
          toast.error(err.message);
          setMailSent(true);
        });
    }
  };

  return (
    <div className="contactPage" id="contact">
      <div className="containerContact container">
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
        <div className="contactForm">

          <div className="cmpyAddress">

            <div className="cmpydtls">
              <div className="ourAddress">
                Our Address
              </div>
              <div className="dfvg">

                <div className="cmpadd">
                  <div className="cntimgs">
                    <img src={Add1} alt="" />
                  </div>
                  <div className="cmpydtt">
                    Plot Number #682 Babukhan Rasheed Plaza Road #36 , Jubilee Hills, Hyderabad 500033 India
                  </div>
                </div>
                <div className="cmpadd cmpadd2">
                  <div className="cntimgs">
                    <img src={Add2} alt="" />
                  </div>
                  <div className="cmpydtt">
                    +91 97044 77677
                  </div>
                </div>
                <div className="cmpadd cmpadd2">
                  <div className="cntimgs">
                    <img src={Add3} alt="" />
                  </div>
                  <div className="cmpydtt">
                    contact@triyas.com
                  </div>
                </div>
              </div>

            </div>
            <div className="compyCnt">
              <div id="contactHeader">Connect With Us!</div>
              <form data-aos="fade-up" action="" onSubmit={handelSubmit}>
                <div className="contactdetails">
                  <div className="inputLabel">
                    {/* <label htmlFor="name">Name</label> */}
                    <input
                      type="text"
                      placeholder="Name"
                      id="name"
                      name="name"
                      onChange={handelChange}
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
                      onChange={handelChange}
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
                      onChange={handelChange}
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
                      onChange={handelChange}
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
                      onChange={handelChange}
                      rows={5}
                      value={details.message}
                    />
                  </div>
                </div>
                <div className="submitbtn">
                  <button type="submit">
                    {mailSent ? "Submit" : "Sending..."}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
