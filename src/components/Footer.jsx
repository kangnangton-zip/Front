import { Link } from "react-router-dom";
import logoImg from "../assets/logo_footer.png";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-logo">
          <Link to="/index" className="footer-link">
            <img src={logoImg} className="footer-logo-img"></img>
            <div className="logo-text">HACKIYE</div>
          </Link>
        </div>
        <div className="footer-info">
          <div className="comapny-info">
            <p>
              (주)000 | 사업자등록번호 000-00-00000 [사업자정보확인] |
              통신판매업신고 : 0000-XXXXX-0000 | 인터넷 신문 | 등록번호: X0000 |
              제호: XXX XXX | 등록일: 2022-10-24 대표 : XXX | XXX XXX XXX
              000번길 00, 0동 0층 000호 | 000000000000 | ©2025 XXXXX Inc.
            </p>
          </div>
          <div className="team-name">zip가고싶dir</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
