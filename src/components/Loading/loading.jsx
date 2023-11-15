import React from "react";
import { Link } from "react-router-dom";
import "./loading.css"; // You can create a CSS file for styling
import { HashLink } from "react-router-hash-link";

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="custom-loader">
        <div className="loader-dot dot1"></div>
        <div className="loader-dot dot2"></div>
        <div className="loader-dot dot3"></div>
      </div>
      <p className="loading-message">
        Hey! We are fetching the data from the server.
        <br />
        In the meantime, please explore our Products and Services{" "}
        <div className="service_contactus">
          <button>
            <HashLink className={``} to={`/#services`} smooth>
              Explore
            </HashLink>
          </button>
        </div>
      </p>
    </div>
  );
};

export default Loading;
