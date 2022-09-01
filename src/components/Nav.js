import {Link} from "react-router-dom";

const Nav = () => {
  return (
    <div className="navbar">
      <Link to="/domaine">Le Domaine</Link>
      <Link to="/offres">Nos Offres</Link>
      <Link to="/reglement">Règlement</Link>
      <Link to="/contact">Contact</Link>
    </div>
  )
}

export default Nav;
