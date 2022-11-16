import {Link} from "react-router-dom";
import logo from '../logo-white.svg';
import { useTranslation, Trans } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();
  const lngs = {
    en: { nativeName: 'EN' },
    fr: { nativeName: 'FR' }
  };
  return (
    <header className="z-[1000]">
      <div className="container-full">
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

      <div>
        {Object.keys(lngs).map((lng) => (
          <button key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
            {lngs[lng].nativeName}
          </button>
        ))}
      </div>
    </header>
  )
}

export default Header;
