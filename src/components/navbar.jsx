import React, { useState, useEffect } from "react";
import logo from "../images/netflix_logo.png";
import smile from "../images/smile_icon.png";

export default function Navbar() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className="navbar__">
      <div className={`${show && "nav_black"}`}>
        <div className="d-flex justify-content-between p-2">
          <div className="logo">
            <img src={logo} alt="Netflix Logo" />
          </div>
          <div className="icon">
            <img src={smile} alt="Netflix Smile Logo" />
          </div>
        </div>
      </div>
    </div>
  );
}


// yarn add react-youtube
// yarn add movie-trailer