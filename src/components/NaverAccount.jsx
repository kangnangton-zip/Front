import "../styles/NaverAccount.css";
import logoImg from "../assets/logo_white.png";
import naverImg from "../assets/naver_login_logo.png";
import naverGestImg from "../assets/guest.png";
import NaverAccountList from "../components/NaverAccountList.jsx";
import { Link } from "react-router-dom";

function NaverAccount() {
  return (
    <div className="naver-account">
      <div className="login-container">
        <div className="naver-header">
          <img src={naverImg} alt="naver" className="naver-logo" />
          <p>NAVER 계정으로 로그인</p>
        </div>
        <div className="account-selection">
          <div className="account-selection-box">
            <div className="account-selection-left">
              <div className="logo-box-naver">
                <Link to="/index">
                  <img src={logoImg} alt="logo" className="logo" />
                </Link>
              </div>
              <div className="account-selection-title-naver">계정 선택</div>
            </div>
            <div className="account-selection-right">
              <NaverAccountList email="netstat3476@naver.com" />
              <NaverAccountList email="bellerose0923@naver.com" />
              <NaverAccountList email="joo060531jooha@naver.com" />
              <NaverAccountList email="아이디" />
              <div className="another account">
                <img
                  src={naverGestImg}
                  alt="naver-gest"
                  className="naver-gest-img"
                ></img>
                <p className="account-id">다른 계정 사용</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="language-selector">한국어 | English</div>
    </div>
  );
}

export default NaverAccount;
