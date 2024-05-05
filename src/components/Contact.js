import React from "react";
import { Link } from "react-router-dom";
import bannerMobile from "../images/img-source/contact-banner.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {faArrowRight, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
library.add(faPaperPlane);
library.add(faArrowRight);
import { faFacebook, faInstagram, faYoutubeSquare, faTiktok } from '@fortawesome/free-brands-svg-icons';

import "../styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-banner">
        <div>
          <div className="contact-banner-l">
              <h1>We’d love to<br className="show-dt"/> hear from you</h1>
              <div className="contact-banner-text">
                <p>GOOD NOVEMBER CO., LTD</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                <p>
                  Mon - Fri 9:30 - 18:30<br/>
                  T 02xxxxxx<br/>
                  F 01xxxxxx
                </p>
              </div>
          </div>
          <div className="contact-banner-r">
            <img src={bannerMobile}></img>
          </div>
        </div>
      </div>
      <div className="yellow-bar-text">
        <h2>Contact Us</h2>
      </div>

      <div className="wrapper-contact-list">
        <Link to="" className="contact-list black">
          <FontAwesomeIcon icon={faPaperPlane} className="ic-link" />
          <p>Say Hi!</p>
          <p>Goodnovemberteam@gmail.com</p>
          <FontAwesomeIcon icon={faArrowRight} className="contact-arrow" />
        </Link>

        <Link to="https://www.facebook.com/share/FtrTyyuE5QTebF8b/?mibextid=LQQJ4d" className="contact-list blue">
          <FontAwesomeIcon icon={faFacebook} className="ic-link"/>
          <p>Connect With Us!</p>
          <p>Good November</p>
          <FontAwesomeIcon icon={faArrowRight} className="contact-arrow" />
        </Link>

        <Link to="https://www.instagram.com/g00dnov?igsh=NXl3Y3QyM3F2eTRs" className="contact-list ig">
          <FontAwesomeIcon icon={faInstagram} className="ic-link"/>
          <p>Join Us!</p>
          <p>g00dnov</p>
          <FontAwesomeIcon icon={faArrowRight} className="contact-arrow" />
        </Link>

        <Link to="https://youtube.com/@GoodNovOfficial?si=1gQqBGTolKVwkRxa" className="contact-list yt">
          <FontAwesomeIcon icon={faYoutubeSquare} className="ic-link"/>
          <p>See Us!</p>
          <p>GoodNov</p>
          <FontAwesomeIcon icon={faArrowRight} className="contact-arrow" />
        </Link>

        <Link to="https://www.tiktok.com/@goodnovemberr?_t=8lvefPMcYsS&_r=1" className="contact-list tt">
          <FontAwesomeIcon icon={faTiktok} className="ic-link"/>
          <p>Enjoy With Us!</p>
          <p>goodnovemberr</p>
          <FontAwesomeIcon icon={faArrowRight} className="contact-arrow" />
        </Link>
      </div>
    </div>
  );
};

export default Contact;
