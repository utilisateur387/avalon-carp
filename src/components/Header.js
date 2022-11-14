import {Link} from "react-router-dom";
import logo from '../logo-white.svg';

const Header = () => {
  return (
    <header className="z-[1000]">
      <div>
        <Link to="/domaine" className="header-link">Le Domaine</Link>
        <Link to="/offres" className="header-link">Nos Offres</Link>
        <Link to="/" className="header-link">
          <img src={logo} className="header-logo" alt="logo" />
        </Link>
        <Link to="/reglement" className="header-link">Règlement</Link>
        <Link to="/contact" className="header-link">Contact</Link>
      </div>
    </header>
  )
}

export default Header;
