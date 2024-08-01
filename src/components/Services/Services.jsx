import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import Glasses from "../../img/glasses.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import CV_Aziz from './AzizRezgui.pdf';


const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>services</span>
        <spane >
        Développement d'applications Web personnalisées : création d'applications Web à partir de zéro à l'aide de frameworks PHP
        comme Laravel, Wordpress, CodeIgniter, etc.
        <br/>   <br />
        Développement de CMS : création de systèmes de gestion de contenu (CMS) à l'aide de PHP, soit personnalisés, soit utilisant<br/> des
        plateformes telles que WordPress, Joomla ou Drupal.
          <br/><br />
          Personnalisation de WordPress : Adaptation des thèmes et plugins WordPress existants pour répondre à des<br/> exigences spécifiques.

          <br/><br />
          Développement d'applications monopage (SPA) : création d'applications Web interactives avec
          React pour une expérience utilisateur fluide.

        </spane>
        <a href={CV_Aziz} download>
          <button className="button s-button">Focus</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
           <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"Html, Css, JavaScript, React, Nodejs, Express,PHP,Wordpress,Laravel"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
        
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
         
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
