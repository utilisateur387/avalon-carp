import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer-links">
        <Link to="/">Accueil</Link>
        <Link to="/domaine">Domaine</Link>
        <Link to="/reglement">Règlement</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div>
        <p>
          avalon carp lake<br/>
          1 route de la faucherie<br/>
          87270 limoges
        </p>
        <p>
          +33 (0)6 71 58 56 24<br/>
          avaloncarplake@gmail.com
        </p>
        <p>
          9am to 12pm — 2pm to 5pm
        </p>
      </div>
    </footer>
  )
}

export default Footer;
