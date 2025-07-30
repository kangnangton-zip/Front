import "../styles/Header.css";
import logoImg from "../assets/logo_header.png";

function Header() {
  return (
    <header>
      <div className="header_logo_img">
        <img src={logoImg} alt="logImg"></img>
      </div>
      <div className="logo_text">HACKIYE</div>
    </header>
  );
}

export default Header;
