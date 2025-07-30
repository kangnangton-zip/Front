import logoImg from "../assets/logo_footer.png";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer>
      <div className="logo_box">
        <div className="footer_logo_img">
          <img src={logoImg}></img>
        </div>
        <div className="logo_text">HACKIYE</div>
      </div>
      <div className="footer_box">
        <div className="footer_text">
          <p>
            (주)000 | 사업자등록번호 000-00-00000 [사업자정보확인] |
            통신판매업신고 : 0000-XXXXX-0000 | 인터넷 신문 | 등록번호: X0000 |
            제호: XXX XXX | 등록일: 2022-10-24 대표 : XXX | XXX XXX XXX 000번길
            00, 0동 0층 000호 | 000000000000 | ©2025 XXXXX Inc.
          </p>
        </div>
        <div className="team_text">zip가고싶ㄷr</div>
      </div>
    </footer>
  );
}

export default Footer;
