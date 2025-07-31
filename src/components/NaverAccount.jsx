import "../styles/NaverAccount.css";
import logoImg from "../assets/logo_footer.png";
import naverImg from "../assets/naver_login_logo.png";
import naverGestImg from "../assets/naver_guest.png";

function NaverAccount() {
  return (
    <div className="naver-account">
      <div className="login-container">
        <div className="naver-header">
          <img src={naverImg} alt="naver" className="naver-logo"/>
          <p>NAVER 계정으로 로그인</p>
        </div>
        <div className="account-selection">
          <div className="account-selection-box">
            <div className="account-selection-left">
              <div className="logo-box">
                <img src={logoImg} alt="logo" className="logo" />
                <p>HACKIYE</p>
              </div>
              <div className="account-selection-title">계정 선택</div>
            </div>
            <div className="account-selection-right">
              <div className="account">
                <div className="profie-img"></div>
                <p className="account-id">아이디</p>
              </div>
              <div className="account">
                <div className="profie-img"></div>
                <p className="account-id">아이디</p>
              </div>
              <div className="account">
                <div className="profie-img"></div>
                <p className="account-id">아이디</p>
              </div>
              <div className="account">
                <div className="profie-img"></div>
                <p className="account-id">아이디</p>
              </div>
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
