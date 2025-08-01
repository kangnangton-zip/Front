import "../styles/Main.css";
import hackImg from "../assets/main_img01.png";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

function MainContent() {
  const navigate = useNavigate();

  const goToAccount = () => {
    navigate("/account");
  };

  const goToSites = () => {
    navigate("/sites");
  };
  return (
    <main>
      <div className="main-container">
        <div className="blue-bubble"></div>
        <div className="pupple-bubble"></div>
        <div className="section about-section">
          <div className=" text-box about-text">
            <h1>
              대규모 해킹사태,
              <br /> 당신의 계정은 안전할까요?
            </h1>
            <p>
              현재 개인정보는 물론 같은 계정을 사용하는 서비스까지<br />
해킹하는 방식이 속속들이 보이고 있어 보안에<br />
대한 불안이 커지고 있습니다.

            </p>
          </div>
        </div>
        <div className="section hack-section">
          <img src={hackImg} alt="해킹 이미지" className="hack-img" />
          <div className="text-box hack-text">
            <h1>
              해킹 여부 진단, <br />
              더욱 다양하게
            </h1>
            <p>
              HACKIEY에서는 계정과 연동된 모든<br />
회원가입 내역을 조회, 다양한 부분에서<br />
해킹 여부를 판단합니다.
            </p>
          </div>
        </div>
        <div className="section feat-section">
          <h1>
            HACKIEY는 <br />
            당신만의 디지털 방패입니다
          </h1>
          <div className="feat-box">
            <div className="feat-item hack-check">
              <p>해킹 여부 확인</p>
              <Button onClick={goToAccount} />
            </div>
            <div className="feat-item list-check">
              <p>해킹된 사이트 확인</p>
              <Button onClick={goToSites} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
export default MainContent;
