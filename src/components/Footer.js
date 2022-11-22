import {Link} from "react-router-dom";
import { useTranslation, Trans } from 'react-i18next';

const Footer = () => {
  const { t, i18n } = useTranslation();

  const handleClickLink = () => {
    window.scrollTo(0, 0)
  }

  return (
    <footer className="container-full">
      <div className="md:grid grid-cols-12 gap-4 container-child flex justify-center">

        <div></div>

        <div className="col-span-3">
          <Link to="/" onClick={handleClickLink}>
            <img src="images/elements/logo-pastille.svg" className="footer-logo" alt="lac"/>
          </Link>
        </div>

        <div></div>

        <ul className="footer-links col-span-3">
          <li><Link to="/" onClick={handleClickLink}><Trans i18nKey="footer.link1">Accueil</Trans></Link></li>
          <li><Link to="/domaine" onClick={handleClickLink}><Trans i18nKey="footer.link2">Domaine</Trans></Link></li>
          <li><Link to="/reglement" onClick={handleClickLink}><Trans i18nKey="footer.link3">Règlement</Trans></Link></li>
          <li><Link to="/contact" onClick={handleClickLink}><Trans i18nKey="footer.link4">Contact</Trans></Link></li>

          <div className="flex space-x-3 my-4 justify-center md:justify-start">
            <a href="https://www.facebook.com/Avaloncarp/" target="_blank" className="picto-social picto-fb">
              {/* <img src="images/elements/picto-fb-mauve.svg" alt="" /> */}
              
              {/* <div>
                <object data="images/picto-fb.svg" className="logo-fb"></object>
              </div> */}
            </a>
            <a href="https://www.instagram.com/avalon_carp_lake/" target="_blank" className="picto-social picto-ig">
              
              {/* <object data="images/picto-ig.svg" className="logo-ig">
              </object> */}
            </a>
          </div>
          
          <li><Link to="/docs/avalon_carp_politique_confidentialite.pdf" target="_blank"><Trans i18nKey="footer.link5">Politique de confidentialité</Trans></Link></li>
          <li><Link to="/docs/avalon_carp_mentions_legales.pdf" target="_blank"><Trans i18nKey="footer.link6">Mentions légales</Trans></Link></li>
        </ul>

        <div className="footer-infos col-span-3">
          <p className="mb-5">
            avalon carp lake<br/>
            1 route de la faucherie<br/>
            87270 limoges
          </p>
          <hr className="mb-1"/>
          <hr/>
          <p className="my-5">
            +33 (0)6 71 58 56 24<br/>
            avaloncarplake@gmail.com
          </p>
          <hr className="mb-1"/>
          <hr/>
          <p className="mt-5">
            <Trans i18nKey="footer.horaires">9am to 12pm — 2pm to 5pm</Trans>
          </p>
        </div>

        <div/>
      </div>
    </footer>
  )
}

export default Footer;
