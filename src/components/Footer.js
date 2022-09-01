import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="grid grid-cols-12 gap-4">
        <div/>

        <div className="col-span-3">
          <img src="images/elements/logo-filled-white.png" className="footer-logo" alt="lac"/>
        </div>

        <div/>

        <ul className="footer-links col-span-3">
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/domaine">Domaine</Link></li>
          <li><Link to="/reglement">Règlement</Link></li>
          <li><Link to="/contact">Contact</Link></li>
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
            9am to 12pm — 2pm to 5pm
          </p>
        </div>

        <div/>
      </div>
    </footer>
  )
}

export default Footer;
