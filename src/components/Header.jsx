import "../styles/Header.css";
import logoImg from "../assets/logo_header.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="logo-container">
        <div className="header-logo">
          <Link to="/index" className="header-link">
            <img src={logoImg} alt="logImg" className="logo-img"></img>
            <div className="logo-text">HACKIYE</div>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
