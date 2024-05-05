import React, { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import whiteLogo from '../images/GN-LOGO-WHITE.png'; 
import blackLogo from '../images/GN-LOGO-BLACK.png'; 

import "../styles/Header.css";

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const openMenu = isOpen ? 'open' : '';

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 1); 
    };

    window.addEventListener('scroll', handleScroll); 

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={isScrolled ? 'scrolled' : ''}>
      {/* <div className="container"> */}
        <nav>
          <Link to="/" className="logo">
            <img src={isHomePage ? whiteLogo : (isScrolled ? whiteLogo : blackLogo)} alt="Logo Good November" />
          </Link>

          <div className={`list-menu ${openMenu}`}>
            <div className="wrapper-logo">
              <img src={whiteLogo} alt="Logo Good November" />
            </div>
            <ul>
              <li className="menu" onClick={closeMenu}><Link to="/">Home</Link></li>
              <li className="menu" onClick={closeMenu}><Link to="/services">Services</Link></li>
              <li className="menu" onClick={closeMenu}><Link to="/team">Team</Link></li>
              <li className="menu" onClick={closeMenu}><Link to="/work">Work with GoodNov</Link></li>
              <li className="menu" onClick={closeMenu}><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className={`hamburger-menu ${openMenu}`} onClick={toggleMenu}>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </nav>
      {/* </div> */}
    </header>
  );
};

export default Header;
