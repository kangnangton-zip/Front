import "../styles/GoogleAccount.css";
import logoImg from "../assets/logo_white.png";
import googleImg from "../assets/google_logo.png";
import googleGestImg from "../assets/guest.png";
import GoogleAccountList from "./GoogleAccountList";
import { Link } from "react-router-dom";

function GoogleAccount() {
  return (
    <div className="google-account">
      <div className="login-container">
        <div className="google-header">
          <img src={googleImg} alt="google" className="google-logo" />
          <p>Google 계정으로 로그인</p>
        </div>
        <div className="account-selection">
          <div className="account-selection-box">
            <div className="account-selection-left">
              <div className="logo-box-google">
                <Link to="/index">
                  <img src={logoImg} alt="logo" className="logo" />
                </Link>
              </div>
              <div className="account-selection-title-google">계정 선택</div>
              <p className="google-text">
                <a>OpenAI</a>(으)로 이동
              </p>
            </div>
            <div className="account-selection-right">
              <Link to="http://localhost:5173/google/result">
               <GoogleAccountList id="김강냉" email="01034762742ab@gmail.com" />
              </Link>
              <GoogleAccountList id="김강냉" email="bergi4025@gmail.com" />
              <GoogleAccountList id="김강냉" email="id01034665629@gmail.com" />
              <GoogleAccountList id="김강냉" email="mijsl4608@gmail.com" />
              <div className="another account">
                <img
                  src={googleGestImg}
                  alt="google-gest"
                  className="google-gest-img"
                ></img>
                <p className="account-id">다른 계정 사용</p>
              </div>
              <div className="terms-text">
                앱을 사용하기 전에 OpenAI의 <span>개인정보처리방침</span> 및{" "}
                <span>서비스 약관</span>을 검토하세요.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="service-links">
        <div className="language-selector">한국어 | English</div>
        <div className="policy-items">
          <div className="policy-item">도움말</div>
          <div className="policy-item">개인정보처리방침</div>
          <div className="policy-item">약관</div>
        </div>
      </div>
    </div>
  );
}

export default GoogleAccount;
