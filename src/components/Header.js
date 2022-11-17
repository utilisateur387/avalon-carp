import { Link } from "react-router-dom";
import logo from '../logo-white.svg';
import { useTranslation, Trans } from 'react-i18next';
import Menu from "./Menu";
import { useState } from "react";

const Header = () => {
  const { i18n } = useTranslation();
  const lngs = {
    en: { nativeName: 'EN' },
    fr: { nativeName: 'FR' }
  };
  let [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleClickBurger = (e) => {
    console.log(isMenuVisible)
    setIsMenuVisible(!isMenuVisible)
  }
  return (
    <>
      <header className="z-[1000]">
        <div className="container-full header-desktop" style={{background: isMenuVisible ? 'none' : 'linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.588) 100%)'}} >
          <div className="container-child">
            <Link to="/domaine" className="header-link">
              <Trans i18nKey="nav.link1">Le Domaine</Trans>
            </Link>
            <Link to="/offres" className="header-link">
              <Trans i18nKey="nav.link2">Nos Offres</Trans>
            </Link>
            <Link to="/" className="header-link">
              <img src={logo} className="header-logo" alt="logo" />
            </Link>
            <Link to="/reglement" className="header-link">
              <Trans i18nKey="nav.link3">Règlement</Trans>
            </Link>
            <Link to="/contact" className="header-link">
              <Trans i18nKey="nav.link4">Contact</Trans>
            </Link>
          </div>
        </div>

        <img src={!isMenuVisible ? "images/picto-menu-burger.svg" : "images/picto-menu-cross.svg"} alt="" className="menu-burger" onClick={handleClickBurger} />

        {/* <div>
          {Object.keys(lngs).map((lng) => (
            <button key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
              {lngs[lng].nativeName}
            </button>
          ))}
        </div> */}


      </header>
      <Menu isMenuVisible={isMenuVisible} setIsMenuVisible={setIsMenuVisible} />
    </>
  )
}

export default Header;
