import "../styles/NaverAccount.css";
// import logoImg from "../assets/logo_footer.png";
import naverImg from "../assets/naver_login_logo.png";

function NaverAccount() {
  return (
    <div className="naver_account">
      <div className="login_container">
        <div className="naver_header">
          <img src={naverImg} alt="naver" />
          <p>NAVER 계정으로 로그인</p>
        </div>
        <div className="account_selection">
          <div className="account_selection_title">
            <div className="logo_box">
              {/* <img src={logoImg} alt="logo" className="logo" /> */}
              <p>HACKIYE</p>
            </div>
            <div className="account_list_box">
              <div className="account"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="language_selector">한국어 | English</div>
    </div>
  );
}

export default NaverAccount;
