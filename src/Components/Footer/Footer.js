import React from "react";
import "./Footer.css";
import linkedIn from "../../images/linkedin.png";
import facebook from "../../images/facebook.png";
import twitter from "../../images/twitter.png";
import github from "../../images/github.png";

const Footer = () => {
  return (
    <div className="row">
      <div className="text-center">
        <div className="footer-icon-style pt-5">
          <a target="_blank" href="https://www.linkedin.com/in/naeem70/">
            <img src={linkedIn} alt="" />
          </a>
          <a
            target="_blank"
            href="https://www.facebook.com/profile.php?id=100014514373434"
          >
            <img src={facebook} alt="" />
          </a>
          <a target="_blank" href="https://github.com/naeemmahmud70">
            {" "}
            <img src={github} alt="" />{" "}
          </a>
          <a target="_blank" href="https://twitter.com/NaeemMa74195742">
            <img src={twitter} alt="" />
          </a>
        </div>
      </div>
      <div className="text-center py-4">
        <small className="text-secondary">
          naeem@2022, All rights reserved.
        </small>
      </div>
    </div>
  );
};

export default Footer;
