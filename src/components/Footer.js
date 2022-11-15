import {Link} from "react-router-dom";
import { useTranslation, Trans } from 'react-i18next';

const Footer = () => {
  const { t, i18n } = useTranslation();

  return (
    <footer className="container-full">
      <div className="grid grid-cols-12 gap-4 container-child">
        <div/>

        <div className="col-span-3">
          <img src="images/elements/logo-filled-white.png" className="footer-logo" alt="lac"/>
        </div>

        <div/>

        <ul className="footer-links col-span-3">
          <li><Link to="/"><Trans i18nKey="footer.link1">Accueil</Trans></Link></li>
          <li><Link to="/domaine"><Trans i18nKey="footer.link2">Domaine</Trans></Link></li>
          <li><Link to="/reglement"><Trans i18nKey="footer.link3">Règlement</Trans></Link></li>
          <li><Link to="/contact"><Trans i18nKey="footer.link4">Contact</Trans></Link></li>

          <div className="flex space-x-2 my-3">
            <a href="http://facebook.com"><img src="images/picto-fb.svg" alt="" /></a>
            <a href="http://instagram.com"><img src="images/picto-ig.svg" alt="" /></a>
          </div>
          
          <li><Link to="/"><Trans i18nKey="footer.link5">Politique de confidentialité</Trans></Link></li>
          <li><Link to="/"><Trans i18nKey="footer.link6">Mentions légales</Trans></Link></li>
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
