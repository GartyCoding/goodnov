import React from "react";
import { Link } from 'react-router-dom';
import bannerMobile from "../images/img-source/servies-banner-mb.png";
import imgMobile from "../images/img-source/services-img-mb.png";
import imgTest from "../images/test.jpg";
import TalkBar from "./LetTalkBar";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import SwiperCore, { Navigation } from "swiper";
import "../styles/Services.css";

SwiperCore.use([Navigation]);

import "../styles/Services.css";

const Services = () => {
  return (
    <div className="services-page">
      <div className="services-banner">
        <div>
          <div className="services-banner-l">
              <h1>Our Services</h1>
              <p>Service ที่ลงตัวที่สุด คือ การจัดการกับความต้องการรอบด้าน<br className="show-dt"/>จากลูกค้าให้ดีที่สุด ... <br className="show-mb"/>แบบมืออาชีพและเป็นทีมเดียวกัน</p>
              <p>ทีมเราพร้อมที่จะเปลี่ยนให้เรื่องยาก... <br/>เป็นเรื่องง่าย</p>
          </div>
          <div className="services-banner-r">
            <img src={bannerMobile} alt="Banner" />
          </div>
        </div>
      </div>
      <div className="yellow-bar-text">
        <h2>Our services</h2>
      </div>

      <div className="services-all">
        <div className="wrapper-list">
          <div className="list-services">BRANDING</div>
          <div className="list-services">PRODUCTION</div>
          <div className="list-services">EVENT ORGANIZER</div>
          <div className="list-services">CONTENT CREATOR</div>
          <div className="list-services">ADVERTISING</div>
          <div className="list-services">INFLUENCER</div>
          <div className="list-services">MEDIA MANAGEMENT</div>
          <div className="list-services">ARTIST MANAGER</div>
          <Link to="/contact" className="list-services contact">Contact Us</Link>
        </div>
        <div className="img-services">
          <img src={imgMobile} alt="Services" />
        </div>
      </div>

      <div className="services-slide">
        <div className="wrapper-services-slide">
            <div className="heading-slide">
              <h3>Creator / Brands<br/>For Youtube</h3>
            </div>

            <Swiper spaceBetween={15} slidesPerView="auto" navigation={true} loop={true}>
              <SwiperSlide>
                <div className="card-services">
                  <img src={imgTest} alt="Services" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card-services">
                  <img src={imgTest} alt="Services" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card-services">
                  <img src={imgTest} alt="Services" />
                </div>
              </SwiperSlide>
            </Swiper>
        </div>

        <div className="wrapper-services-slide">
          <div className="heading-slide">
            <h3>Campaign<br/>Management</h3>
          </div>
          <Swiper spaceBetween={15} slidesPerView="auto" navigation={true} loop={true}>
            <SwiperSlide>
              <div className="card-services">
                <img src={imgTest} alt="Services" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-services">
                <img src={imgTest} alt="Services" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-services">
                <img src={imgTest} alt="Services" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="wrapper-services-slide">
          <div className="heading-slide">
            <h3>Creator / Brands<br/>For TikTok</h3>
          </div>

          <Swiper spaceBetween={15} slidesPerView="auto" navigation={true} loop={true}>
            <SwiperSlide>
              <div className="card-services">
                <img src={imgTest} alt="Services" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-services">
                <img src={imgTest} alt="Services" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-services">
                <img src={imgTest} alt="Services" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="wrapper-services-slide">
          <div className="heading-slide">
            <h3>Creator / Brands<br/>For TikTok</h3>
          </div>

          <Swiper spaceBetween={15} slidesPerView="auto" navigation={true} loop={true}>
            <SwiperSlide>
              <div className="card-services">
                <img src={imgTest} alt="Services" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-services">
                <img src={imgTest} alt="Services" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-services">
                <img src={imgTest} alt="Services" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <TalkBar/>
    </div>
  );
};

export default Services;
