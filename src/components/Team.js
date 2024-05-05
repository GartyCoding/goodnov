import React from "react";
import { Link } from "react-router-dom";
import bannerMobile from "../images/img-source/team-banner-mb.png";
import card from "../images/card.jpg";
import "../styles/Team.css";
import TalkBar from "./LetTalkBar";

const Team = () => {
  return (
    <div className="team-page">
      <div className="team-banner">
        <div>
          <div className="team-banner-l">
              <h1>Team</h1>
              <p>ทีมเราพร้อมที่จะเปลี่ยนให้เรื่องยาก... <br/>เป็นเรื่องง่าย</p>
          </div>
          <div className="team-banner-r">
            <img src={bannerMobile}></img>
          </div>
        </div>
      </div>
      <div className="yellow-bar-text">
        <h2>Our Team</h2>
      </div>

      <div className="team-card">
          <div className="card">
              <img src={card} alt=""/>
              <div className="card-datail">
                <p className="team-name">Jetipat Manothara (Jay)</p>
                <p className="team-position">Account Executive</p>
                <p className="team-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                <div className="team-contact">
                  <Link className="link-team-contact"></Link>
                  <Link className="link-team-contact"></Link>
                  <Link className="link-team-contact"></Link>
                  <Link className="link-team-contact"></Link>
                </div>
              </div>
          </div>

          <div className="card">
              <img src={card} alt=""/>
              <div className="card-datail">
                <p className="team-name">Jetipat Manothara (Jay)</p>
                <p className="team-position">Account Executive</p>
                <p className="team-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                <div className="team-contact">
                  <Link className="link-team-contact"></Link>
                  <Link className="link-team-contact"></Link>
                  <Link className="link-team-contact"></Link>
                  <Link className="link-team-contact"></Link>
                </div>
              </div>
          </div>

          <div className="card">
              <img src={card} alt=""/>
              <div className="card-datail">
                <p className="team-name">Jetipat Manothara (Jay)</p>
                <p className="team-position">Account Executive</p>
                <p className="team-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                <div className="team-contact">
                  <Link className="link-team-contact"></Link>
                  <Link className="link-team-contact"></Link>
                  <Link className="link-team-contact"></Link>
                  <Link className="link-team-contact"></Link>
                </div>
              </div>
          </div>

          <div className="card">
              <img src={card} alt=""/>
              <div className="card-datail">
                <p className="team-name">Jetipat Manothara (Jay)</p>
                <p className="team-position">Account Executive</p>
                <p className="team-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                <div className="team-contact">
                  <Link className="link-team-contact"></Link>
                  <Link className="link-team-contact"></Link>
                  <Link className="link-team-contact"></Link>
                  <Link className="link-team-contact"></Link>
                </div>
              </div>
          </div>
      </div>

      <TalkBar/>
    </div>
  );
};

export default Team;
