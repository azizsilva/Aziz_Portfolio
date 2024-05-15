import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
       <a  href="mailto:azizrezgui60@gmail.com"> <span>azizrezgui60@gmail.com</span></a>
        <div className="f-icons">
          <Insta color="white" size={"3rem"} />
        <a target="_blank" href="https://www.facebook.com/profile.php?id=100084609236207" rel="noreferrer">  <Facebook color="white" size={"3rem"} /></a>
          <Gitub color="white" size={"3rem"} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
