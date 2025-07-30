import "../styles/AccountSelect.css";
import naverLogo from "../assets/naver_logo.png";
import googleLogo from "../assets/google_logo.png";

function AccountSelect() {
  return (
    <section>
      <h1>계정 연동</h1>
      <div className="login_box naver">
        <img src={naverLogo} alt="naver" className="logo"></img>
        <p>네이버 계정으로 로그인</p>
      </div>
      <div className="login_box google">
        <img src={googleLogo} alt="google" className="logo"></img>
        <p>구글 계정으로 로그인</p>
      </div>
      <p className="text">
        회원가입 없이 이용 가능하며 첫 로그인시 <span>이용약관</span> 및<br />
        <span>개인정보처리방침</span> 동의로 간주됩니다.
      </p>
    </section>
  );
}

export default AccountSelect;
