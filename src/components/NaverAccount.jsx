import "../styles/NaverAccount.css";
import logoImg from "../assets/logo_footer.png";
import naverImg from "../assets/naver_login_logo.png";

function NaverAccount() {
  return (
    <div className="naver-account">
      <div className="login-container">
        <div className="naver-header">
          <img src={naverImg} alt="naver" />
          <p>NAVER 계정으로 로그인</p>
        </div>
        <div className="account-selection">
          <div className="account-selection-title">
            <div className="logo-box">
              <img src={logoImg} alt="logo" className="naver-logo" />
              <p>HACKIYE</p>
            </div>
            <div className="account-list-box">
              <div className="account"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="language-selector">한국어 | English</div>
    </div>
  );
}

export default NaverAccount;
