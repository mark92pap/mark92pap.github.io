import React from "react";
import "./Footer.css";

import { Github, Facebook, Instagram, Twitter } from "./icons";

const Footer = () => {
  return (
    <footer className="footer bg-dark ">
      <div className="container">
        <div className="copyright">
          <h1>Markos Papanikoloudis</h1>
          <p>Copyright &copy; 2022</p>
        </div>
        <div className="social">
          <a
            href="https://github.com/mark92pap"
            rel="noreferrer"
            target="_blank"
          >
            {Github}
          </a>
          <a
            href="https://www.facebook.com/markos.papanikoloudis"
            rel="noreferrer"
            target="_blank"
          >
            {Facebook}
          </a>
          <a
            href="https://www.instagram.com/markpap92/"
            rel="noreferrer"
            target="_blank"
          >
            {Instagram}
          </a>
          <a
            href="https://twitter.com/markVoodoo"
            rel="noreferrer"
            target="_blank"
          >
            {Twitter}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
