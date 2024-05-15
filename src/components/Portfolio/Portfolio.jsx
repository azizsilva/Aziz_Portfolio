/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import kids from "../../img/kids.png";
import anvy from "../../img/anvy.png";
import labasni from "../../img/labasni.png";
import CTAB from "../../img/CTAB.png";
import hotel from "../../img/hotel.png";
import leadiya from "../../img/leadiya.png";
import lasa9ni from "../../img/lasa9ni.png";
import marina from "../../img/marina.png";
import jobid from "../../img/jobid.png";
import info from "../../img/info.png";
import abbm from "../../img/abbm.png";
import asset from "../../img/asset.png";
import sarvari from "../../img/sarvari.png";
import todevelop from "../../img/todevelop.png";
import biorich from "../../img/biorich.png";
import travelin from "../../img/travelin.png";
import test2 from "../../img/test2.png";
import procar from "../../img/procar.png";
import itpro from "../../img/itpro.png";
import its from "../../img/its.png";
import solar from "../../img/solar.png";
import resalera from "../../img/resalera.png";
import mutliservice from "../../img/mutliservice.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
        <a  target="_blank" href="https://meilleursplacements2021.com/" rel="noreferrer">  
        <img src={kids} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
        <a target="_blank" href="https://anvydeluxe.com/" rel="noreferrer">  
          <img src={anvy} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
        <a  href="#" rel="noreferrer">  
          <img src={CTAB} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
        <a target="_blank" href="https://www.labasni.com/" rel="noreferrer">    
          <img src={labasni} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
        <a target="_blank" href="https://jobid.fr/" rel="noreferrer">    
          <img src={jobid} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
        <a target="_blank" href="http://demo-hotel.epizy.com/?i=3" rel="noreferrer">    
          <img src={hotel} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
        <a target="_blank" href="https://leadiya.com/" rel="noreferrer">   
          <img src={leadiya} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
        <a target="_blank" href="https://lasa9ni.com/" rel="noreferrer">  
          <img src={lasa9ni} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
        <a target="_blank" href="http://marinapalace.great-site.net/?i=2" rel="noreferrer">    
         <img src={marina} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
        <a target="_blank" href="https://depan.info/" rel="noreferrer">  
           <img src={info} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
        <a target="_blank" href="https://abbmlondon.co.uk/" rel="noreferrer">  
          <img src={abbm} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
        <a target="_blank" href="https://assetriseproperties.ae/" rel="noreferrer"> 
          <img src={asset} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
        <a target="_blank" href="https://sarvari-fw.com/" rel="noreferrer"> 
           <img src={sarvari} alt="" /></a>
        </SwiperSlide>
         <SwiperSlide>
         <a target="_blank" href="https://www.todevelp.com/" rel="noreferrer"> 
            <img src={todevelop} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
        <a target="_blank" href="https://www.biorich4u.com/" rel="noreferrer"> 
         <img src={biorich} alt="" /></a>
        </SwiperSlide>
        
         <SwiperSlide>
         <a target="_blank" href="https://www.carthagea.fr/" rel="noreferrer"> 
          <img src={test2} alt="" /></a>
        </SwiperSlide>
         <SwiperSlide>
         <a target="_blank" href="http://www.procar.great-site.net/?i=2" rel="noreferrer"> 
          <img src={procar} alt="" /></a>
        </SwiperSlide>
         <SwiperSlide>
         <a target="_blank" href="https://itproagency.tn/" rel="noreferrer"> 
          <img src={itpro} alt="" /></a>
        </SwiperSlide>
         <SwiperSlide>
         <a target="_blank" href="https://itsforma.com/" rel="noreferrer"> 
           <img src={its} alt="" /></a>
        </SwiperSlide>
         <SwiperSlide>
         <a target="_blank" href="https://solarmag.tn/" rel="noreferrer"> 
          <img src={solar} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
        <a target="_blank" href="https://resalera.com/" rel="noreferrer">
           <img src={resalera} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
        <a  href="#" rel="noreferrer">
          <img src={mutliservice} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
        <a target="_blank" href="https://www.travelin-the-now.com/" rel="noreferrer">
          <img src={travelin} alt="" /></a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
