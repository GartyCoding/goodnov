import React from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutubeSquare, faTiktok } from '@fortawesome/free-brands-svg-icons';


const TalkBar = () => {
    return(
        <section className="yellow-bar-text">
            <h3>Let’s talk</h3>
            <div className="social-talk">
                <Link to="https://www.facebook.com/share/FtrTyyuE5QTebF8b/?mibextid=LQQJ4d">
                    <FontAwesomeIcon icon={faFacebook} />
                </Link>
                <Link to="https://www.instagram.com/g00dnov?igsh=NXl3Y3QyM3F2eTRs">
                    <FontAwesomeIcon icon={faInstagram} />
                </Link>
                <Link to="https://youtube.com/@GoodNovOfficial?si=1gQqBGTolKVwkRxa">
                    <FontAwesomeIcon icon={faYoutubeSquare} />
                </Link>
                <Link to="https://www.tiktok.com/@goodnovemberr?_t=8lvefPMcYsS&_r=1">
                    <FontAwesomeIcon icon={faTiktok} />
                </Link>
            </div>
       </section>
    )
}

export default TalkBar;