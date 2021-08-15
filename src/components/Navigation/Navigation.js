import React, { useState, useEffect } from "react";
import "./navigation.css";

function Navigation() {
  const [show, handleShow] = useState(false);

  // transitions sticky navbar to show when scrolled down
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
    <nav className={show && "nav__black"}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="netflix logo"
      />
      {show && <p>Hold shift + scroll to view more</p>}
      <img
        src="https://learning.royalbcmuseum.bc.ca/wp-content/uploads/2014/07/netflix-face.jpg"
        alt="netflix logo"
      />
    </nav>
  );
}

export default Navigation;
