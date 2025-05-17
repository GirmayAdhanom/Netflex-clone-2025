import React, { useEffect, useState } from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MenuIcon from '@mui/icons-material/Menu';
import netflix from '../../assets/netflix.png';

function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) {
        setShowMobileMenu(false);
      }
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    if (isMobile) {
      setShowMobileMenu(prev => !prev);
    }
  };

  return (
    <div className={`header-outer-container ${isScrolled ? 'scroll' : ''}`}>
      <div className="Header_Container">
        <div className="Header_wrapper">
        <img className="Header_Logo" src={netflix} alt="Netflix Logo" />

          {(!isMobile || showMobileMenu) && (
  <div className="Left_side">
    <ul className={`Header_links ${showMobileMenu && isMobile ? 'mobile-menu-open' : ''}`}>
      <li><a href="#">Home</a></li>
      <li><a href="#">TV Show</a></li>
      <li><a href="#">Movie</a></li>
      <li><a href="#">New & Popular</a></li>
      <li><a href="#">My Lists</a></li>
      <li><a href="#">Browse by Language</a></li>
    </ul>
  </div>
)}

          <div className="Right_side">
            <div className="Header_Icons"><SearchIcon /></div>
            <div className="Header_Icons"><CircleNotificationsIcon /></div>
            <div className="Header_Icons"><AccountBoxIcon /></div>
            <div className="Header_Icons"><ArrowDropDownIcon /></div>

            {isMobile && (
              <div className="Mobile-Menu" onClick={toggleMobileMenu}>
                <MenuIcon />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
