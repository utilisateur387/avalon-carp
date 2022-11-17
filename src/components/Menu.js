import { Link } from "react-router-dom";
import logo from '../logo-white.svg';
import { useTranslation, Trans } from 'react-i18next';
import { useState, useEffect } from 'react'


const Menu = ({ isMenuVisible, setIsMenuVisible }) => {
  const { i18n } = useTranslation();
  const lngs = {
    en: { nativeName: 'EN' },
    fr: { nativeName: 'FR' }
  };
  const handleClickMenuLink = () => {
    setIsMenuVisible(false)
  }

  useEffect(() => {
    // Handler to call on window resize
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuVisible(false)
      }
    }
    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return (
      <div className="menu" style={{ display: isMenuVisible ? 'block' : 'none'}}>
        <div className="menu-links">
          <Link to="/domaine" onClick={handleClickMenuLink}>
            <Trans i18nKey="nav.link1">Le Domaine</Trans>
          </Link>
          <Link to="/galerie" onClick={handleClickMenuLink}>
            <Trans i18nKey="nav.galerie">Galerie</Trans>
          </Link>
          <Link to="/offres" onClick={handleClickMenuLink}>
            <Trans i18nKey="nav.link2">Nos Offres</Trans>
          </Link>
          <Link to="/reglement" onClick={handleClickMenuLink}>
            <Trans i18nKey="nav.link3">Règlement</Trans>
          </Link>
          <Link to="/contact" onClick={handleClickMenuLink}>
            <Trans i18nKey="nav.link4">Contact</Trans>
          </Link>
          <div className="white mt-10">
            {Object.keys(lngs).map((lng) => (
              <button key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal', margin: '0 3px' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
                {lngs[lng].nativeName}
              </button>
            ))}
          </div>
        </div>
      </div>
  )
}

export default Menu;
