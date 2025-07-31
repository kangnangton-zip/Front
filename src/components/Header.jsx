import "../styles/Header.css";
import logoImg from "../assets/logo_header.png";

function Header() {
  return (
    <header>
      <div className="logo-container">
        <div className="header-logo">
          <img src={logoImg} alt="logImg" className="logo-img"></img>
          <div className="logo-text">HACKIYE</div>
        </div>
      </div>
    </header>
  );
}

export default Header;
