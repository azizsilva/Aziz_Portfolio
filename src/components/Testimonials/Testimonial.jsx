import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Working with Mohamed Aziz Rezgui has been an absolute pleasure. Their expertise in coding, attention to detail, and commitment to delivering high-quality work is truly commendable. Not only did they exceed our expectations in terms of project delivery and functionality, but their proactive approach to problem-solving and clear communication made the entire process seamless. I highly recommend Mohamed Aziz Rezgui to anyone seeking a skilled and reliable developer for their projects.",
    },
    {
      img: profilePic2,
      review:
      "Working with Mohamed Aziz Rezgui has been an absolute pleasure. Their expertise in coding, attention to detail, and commitment to delivering high-quality work is truly commendable. Not only did they exceed our expectations in terms of project delivery and functionality, but their proactive approach to problem-solving and clear communication made the entire process seamless. I highly recommend Mohamed Aziz Rezgui to anyone seeking a skilled and reliable developer for their projects.",
    },
    {
      img: profilePic3,
      review:
      "Working with Mohamed Aziz Rezgui has been an absolute pleasure. Their expertise in coding, attention to detail, and commitment to delivering high-quality work is truly commendable. Not only did they exceed our expectations in terms of project delivery and functionality, but their proactive approach to problem-solving and clear communication made the entire process seamless. I highly recommend Mohamed Aziz Rezgui to anyone seeking a skilled and reliable developer for their projects.",
    },
    {
      img: profilePic4,
      review:
      "Working with Mohamed Aziz Rezgui has been an absolute pleasure. Their expertise in coding, attention to detail, and commitment to delivering high-quality work is truly commendable. Not only did they exceed our expectations in terms of project delivery and functionality, but their proactive approach to problem-solving and clear communication made the entire process seamless. I highly recommend Mohamed Aziz Rezgui to anyone seeking a skilled and reliable developer for their projects.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
