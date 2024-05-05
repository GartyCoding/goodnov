import React from "react";
import '../styles/Footer.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutubeSquare, faTiktok } from '@fortawesome/free-brands-svg-icons';

import whiteLogo from '../images/GN-LOGO-WHITE.png'; 

const Footer = () => {
    return(
        <footer>
            <div>
                <div className="img-logo">
                    <img src={whiteLogo} alt="Logo Good November" />
                </div>
                <p className="footer-address">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                <div className="information-footer">
                    <p>+91 9876543210</p>
                    <p>Mail@gmail.com</p>
                    <p>xyz, anyware rode, sectore 4</p>
                </div>
            </div>

            <div>
                <div className="list-menu-footer">
                    <ul>
                        <li className="menu-footer"><Link to="/services">Services</Link></li>
                        <li className="menu-footer"><Link to="/team">Team</Link></li>
                        <li className="menu-footer"><Link to="/work">Work with GoodNov</Link></li>
                        <li className="menu-footer"><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
            
            <div>
                <div className="follow">
                    <p>Follow Us</p>
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
                </div>

                <p className="copyright">© COPYRIGHT 2024 GOOD NOVEMBER CO., LTD</p>

            </div>


        </footer>
    )
}

export default Footer;