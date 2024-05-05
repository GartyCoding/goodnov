import React, { useState } from "react";
import { Link } from "react-router-dom";
import bannerMobile from "../images/img-source/work-banner-mb.png";
import workCore from "../images/work-core.png";
import TalkBar from "./LetTalkBar";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import SwiperCore, { Navigation } from "swiper";
import "../styles/Services.css";

SwiperCore.use([Navigation]);
import "../styles/Work.css";

const Work = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleDetail = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="work-page">
      <div className="work-banner">
        <div>
          <div className="work-banner-l">
              <h1>Work with<br className="show-dt"/> GoodNov</h1>
              <p>ร่วมเป็นส่วนหนึ่งของทีมที่มีประสบการณ์ ความรู้<br className="show-dt"/> และความสามารถ พร้อมจะเติบโต ไปด้วยกันที่ ... <br className="show-dt"/>Good November</p>
          </div>
          <div className="work-banner-r">
            <img src={bannerMobile}></img>
          </div>
        </div>
      </div>

      <div className="yellow-bar-text">
        <h2>Our Core Values</h2>
      </div>

      <div className="work-core">
        <div className="container">
          <p className="work-core-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor i
  ncididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing 
  elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
        </div>

        <Swiper spaceBetween={15} slidesPerView="auto" navigation={true} loop={true}>
          <SwiperSlide>
            <div className="card-core">
              <div className="icon-core"></div>
              <div className="text-core">
                <div>
                  <img src={workCore} alt="" />
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card-core">
              <div className="icon-core"></div>
              <div className="text-core">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card-core">
              <div className="icon-core"></div>
              <div className="text-core">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

      </div>

      <div className="work-apply">
        <h2 className="heading-line">What's your passion?</h2>

        <div>
          <div className={`wrapper-apply ${openIndex === 0 ? "open" : ""}`}>
            <div className="apply-header" onClick={() => toggleDetail(0)}>
              <h3>Assistant Social Media Marketing Manager</h3>
              <div className={`btn-open ${openIndex === 0 ? "open" : ""}`}></div>
            </div>

            {openIndex === 0 && (

            <div className="apply-detail">
                <h4>What you’ll Do:</h4>
                <ul>
                  <li>Craft and execute innovative social media strategies that break the mold, driving engagement and creating memorable interactions with our audience.</li>
                  <li>Collaborate with key stakeholders to align marketing initiatives with business objectives and be able to administer the back-end system.</li>
                  <li>Dive deep into analytics and reporting, using data to weave compelling narratives about our brand's journey and impact.</li>
                  <li>Lead with creativity, collaborating on content that challenges the status quo and sets new standards in digital engagement.</li>
                  <li>Be a community champion, fostering an environment of open dialogue and connection with our audience.</li>
                  <li>Mentor and inspire a team of social media mavens, cultivating a space for professional growth and creative exploration.</li>
                </ul>

                <h4>What you’ll Need: </h4>
                <ul>
                  <li>A minimum of 3-5 years of experience in social media marketing communication & analysis/ brand management; preferably with relevant experience in e-Commerce, FMCG, Digital Agency.</li>
                  <li>Bachelor’s degree in Marketing, Communications, or related field.</li>
                  <li>Strong analytical skills with the ability to interpret social media metrics and insights.</li>
                  <li>Excellent organizational and project management skills, with the ability to manage multiple tasks simultaneously.</li>
                  <li>Familiarity with social media scheduling tools and analytics tools.</li>
                  <li>Creative mindset with strong written and verbal communication skills.</li>
                  <li>Ability to work collaboratively in a team environment and independently with minimal supervision.</li>
                  <li>Knowledge of digital advertising is a plus.</li>
                </ul>

                <div className="wrapper-btn-apply">
                  <Link to="" className="btn-apply">Apply Now</Link>
                </div>

            </div>
            )}
          </div>

          <div className={`wrapper-apply ${openIndex === 1 ? "open" : ""}`}>
            <div className="apply-header" onClick={() => toggleDetail(1)}>
              <h3>Marketing Manager</h3>
              <div className={`btn-open ${openIndex === 1 ? "open" : ""}`}></div>
            </div>

            {openIndex === 1 && (
            <div className="apply-detail">
                <h4>What you’ll Do:</h4>
                <ul>
                  <li>Craft and execute innovative social media strategies that break the mold, driving engagement and creating memorable interactions with our audience.</li>
                  <li>Collaborate with key stakeholders to align marketing initiatives with business objectives and be able to administer the back-end system.</li>
                  <li>Dive deep into analytics and reporting, using data to weave compelling narratives about our brand's journey and impact.</li>
                  <li>Lead with creativity, collaborating on content that challenges the status quo and sets new standards in digital engagement.</li>
                  <li>Be a community champion, fostering an environment of open dialogue and connection with our audience.</li>
                  <li>Mentor and inspire a team of social media mavens, cultivating a space for professional growth and creative exploration.</li>
                </ul>

                <h4>What you’ll Need: </h4>
                <ul>
                  <li>A minimum of 3-5 years of experience in social media marketing communication & analysis/ brand management; preferably with relevant experience in e-Commerce, FMCG, Digital Agency.</li>
                  <li>Bachelor’s degree in Marketing, Communications, or related field.</li>
                  <li>Strong analytical skills with the ability to interpret social media metrics and insights.</li>
                  <li>Excellent organizational and project management skills, with the ability to manage multiple tasks simultaneously.</li>
                  <li>Familiarity with social media scheduling tools and analytics tools.</li>
                  <li>Creative mindset with strong written and verbal communication skills.</li>
                  <li>Ability to work collaboratively in a team environment and independently with minimal supervision.</li>
                  <li>Knowledge of digital advertising is a plus.</li>
                </ul>

                <div className="wrapper-btn-apply">
                  <Link to="" className="btn-apply">Apply Now</Link>
                </div>

            </div>
            )}
          </div>
        </div>
      </div>

      <TalkBar/>
    </div>
  );
};

export default Work;
