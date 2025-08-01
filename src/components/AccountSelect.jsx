import "../styles/AccountSelect.css";
import naverLogo from "../assets/naver_logo.png";
import googleLogo from "../assets/google_logo.png";
import { Link } from "react-router-dom";

function AccountSelect() {
  return (
    <>
      <div className="account-select">
        <h1 className="select-title">계정 연동</h1>
        <div className="login-button naver-login">
          <Link to="/naver" className="link naver-link">
            <img src={naverLogo} alt="naver" className="naver-logo"></img>
            <p className="login-text">네이버 계정으로 로그인</p>
          </Link>
        </div>
        <div className="login-button google-login">
          <Link to="/google" className="link googl-link">
            <img src={googleLogo} alt="google" className="google-logo"></img>
            <p className="login-text">구글 계정으로 로그인</p>
          </Link>
        </div>
        <p className="terms-text">
          회원가입 없이 이용 가능하며 첫 로그인시 <span>이용약관</span> 및{" "}
          <span>개인정보처리방침</span>
          <br />
          동의로 간주됩니다.
        </p>
      </div>
    </>
  );
}

export default AccountSelect;
