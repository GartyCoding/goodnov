import React, { useRef } from "react";
import { Link } from "react-router-dom";
import bannerMobile from "../images/img-source/home-banner-mb.png";
import banner from "../images/img-source/home-banner.png";
import imgIntroDt from "../images/img-source/home-intro-dt.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPaperPlane,
  faArrowRight,
  faStar,
  faQuoteLeft,
} from "@fortawesome/free-solid-svg-icons";
library.add(faPaperPlane);
library.add(faArrowRight);
library.add(faStar);
library.add(faQuoteLeft);

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import SwiperCore, { Navigation } from "swiper";

SwiperCore.use([Navigation]);

import "../styles/Home.css";

const Home = () => {
  const introRef = useRef(null);
  const scrollToIntro = () => {
    const introElement = introRef.current;
    const offsetTop = introElement.getBoundingClientRect().top;
    window.scrollTo({
      top: offsetTop - 70,
      behavior: "smooth"
    });
  };
  return (
    <div className="home-page">
      <div className="banner">
        <div className="banner-l">
          <p className="small">Our Pride!</p>
          <p>Creative</p>
          <p>Youtube</p>
          <p>TikTok</p>
          <p>Content</p>

          <div className="btn-explore" onClick={scrollToIntro}>
            Explore
          </div>
          <div className="banner-desc">
            Good November is a digital<br className="show-mb"/> creative agency based in <br className="show-mb"/>
            Bangkok established in 2024
          </div>
        </div>
        <div className="banner-r">
          <img src={bannerMobile} alt="Banner" className="show-mb"></img>
          <img src={banner} alt="Banner" className="show-dt"></img>
        </div>
      </div>
      <div className="bar-text">
        <h1>Get to know us better</h1>
      </div>
      <div className="intro" ref={introRef}>
        <h2 className="heading-line">Who we are</h2>
        <div className="wrapper-intro">
          <div className="text-intro">
            <div className="wrapper-text-intro">
              <p>
                <strong>Goodnovember</strong> คือทีมที่พร้อมทํางาน
                <br />
                ที่นําประสบการณ์ทั้ง หมดของแต่ละคนมาเท
                <br />
                รวมกัน การันตีด้วยเสียงที่หนักแน่นว่า
              </p>

              <p>
                ความรู้ความเข้าใจและความสามารถของเราเข้มแข็ง
                <br />
                และเคียงข้างลูกค้า แบบไม่ส่ายหัวและทิ้งงาน
                <br />
                ก้าวผ่านบรีฟที่หลากหลายงบประมาณที่จำกัด
              </p>

              <div className="line"></div>

              <p>
                ความต้องการที่เร่งรีบมาแบบนับไม่ถ้วนทําให้ทีมเราแข็งแกร่ง <br className="show-dt"/> และเติบโตไปพร้อมๆกับลูกค้าไม่ว่าจะรายเล็กหรือรายใหญ่
              </p>

              <Link to="/contact" className="link-contact">
                <FontAwesomeIcon icon={faPaperPlane} />
                <span>Contact us</span>
              </Link>
            </div>
          </div>

          <div className="img-intro">
            <img src={imgIntroDt} alt="Introduction"></img>
          </div>
        </div>
      </div>

      <div className="slide-works">
        <h2 className="heading-line">How does it work</h2>

        <Swiper spaceBetween={15} slidesPerView="auto" navigation={true} loop={true}>
          <SwiperSlide>
            <div className="card-work">
              <div className="icon-work"></div>
              <div className="text-work">
                <h3>Topic 1</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor{" "}
                </p>
                <Link className="link-work">
                  <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card-work">
              <div className="icon-work"></div>
              <div className="text-work">
                <h3>Topic 2</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor{" "}
                </p>
                <Link className="link-work">
                  <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card-work">
              <div className="icon-work"></div>
              <div className="text-work">
                <h3>Topic 3</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor{" "}
                </p>
                <Link className="link-work">
                  <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="slide-customer">
        <h2 className="heading-line">What Our customer says</h2>

        <Swiper spaceBetween={15} slidesPerView="auto" navigation={true} loop={true}>
          <SwiperSlide>
            <div className="card-customer">
              <div className="icon-customer">
                <FontAwesomeIcon icon={faQuoteLeft} />
              </div>
              <div className="text-customer">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
              </div>
              <div className="star">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <div className="name-customer">Mandy Oza</div>
              <div className="company-customer">Xyz company ceo</div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card-customer">
              <div className="icon-customer">
                <FontAwesomeIcon icon={faQuoteLeft} />
              </div>
              <div className="text-customer">asdasdasd</div>
              <div className="star">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <div className="name-customer">Mandy Oza</div>
              <div className="company-customer">Xyz company ceo</div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card-customer">
              <div className="icon-customer">
                <FontAwesomeIcon icon={faQuoteLeft} />
              </div>
              <div className="text-customer">gggg</div>
              <div className="star">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <div className="name-customer">Mandy Oza</div>
              <div className="company-customer">Xyz company ceo</div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Home;
