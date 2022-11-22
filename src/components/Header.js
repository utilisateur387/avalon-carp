import { Link, NavLink } from "react-router-dom";
import logo from '../logo-white.svg';
import { useTranslation, Trans } from 'react-i18next';
import Menu from "./Menu";
import { useState, useEffect } from "react";

const Header = ({scrollTop}) => {
  const { i18n } = useTranslation();
  const lngs = {
    en: { nativeName: 'EN' },
    fr: { nativeName: 'FR' }
  };
  
  let [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleClickBurger = (e) => {
    setIsMenuVisible(!isMenuVisible)
  }
  const handleClickLogo = () => {
    setIsMenuVisible(false)
    scrollTop()
  }
  const handleClickLink = () => {
    scrollTop()
  }

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true)

  const handleScroll = () => {
      const currentScrollPos = window.scrollY

      if(currentScrollPos > prevScrollPos){
          setVisible(false)
      }else{
          setVisible(true)
      }

      setPrevScrollPos(currentScrollPos)
  }

  useEffect( () => {
      window.addEventListener('scroll', handleScroll);

      return () => window.removeEventListener('scroll', handleScroll)
  })

  return (
    <>
      <header className={`z-[1000] sticky ${visible ? 'top-0' : '-top-[142px]'}`}>
        <div className="container-full header-desktop" style={{background: isMenuVisible ? 'none' : 'linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%)'}} >
          <div className="container-child">
            <NavLink 
              to="domaine" 
              onClick={handleClickLink} 
              className={({ isActive }) => isActive ? 'header-link font-bold' : 'header-link' }>
              <Trans i18nKey="nav.link1">Le Domaine</Trans>
            </NavLink>
            <NavLink 
              to="offres" 
              onClick={handleClickLink} 
              className={({ isActive }) => isActive ? 'header-link font-bold' : 'header-link' }>
              <Trans i18nKey="nav.link2">Nos Offres</Trans>
            </NavLink>
            <Link to="/" className="header-link" onClick={handleClickLogo}>
              <img src={logo} className="header-logo" alt="logo" />
            </Link>
            <NavLink 
              to="reglement" 
              onClick={handleClickLink} 
              className={({ isActive }) => isActive ? 'header-link font-bold' : 'header-link' }>
              <Trans i18nKey="nav.link3">Règlement</Trans>
            </NavLink>            
            <NavLink 
              to="contact" 
              onClick={handleClickLink} 
              className={({ isActive }) => isActive ? 'header-link font-bold' : 'header-link' }>
              <Trans i18nKey="nav.link4">Contact</Trans>
            </NavLink>
          </div>
        </div>

        <img src={!isMenuVisible ? "images/picto-menu-burger.svg" : "images/picto-menu-cross.svg"} alt="" className="menu-burger" onClick={handleClickBurger} />
      </header>

      <Menu isMenuVisible={isMenuVisible} setIsMenuVisible={setIsMenuVisible} />
    </>
  )
}

export default Header;
