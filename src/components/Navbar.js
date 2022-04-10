import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";
// import FacebookAPI from '../apis/facebook'

const Header = () => {
  const [profilePic, setProfilePic] = useState(null);

  const GetProfilePic = async () => {
    // DIRECT LINK
    setProfilePic("../../public/profile.jpg");
  };

  useEffect(() => {
    GetProfilePic();
  }, []);

  return (
    <div className="navbar">
      <div className="container flex">
        <div className="navbar-logo">
          <div className="crop">
            {profilePic ? <img alt="My face" src="profile.jpg" /> : null}
          </div>
          <h1>
            <Link to="/">Mark Papanikoloudis</Link>
          </h1>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
