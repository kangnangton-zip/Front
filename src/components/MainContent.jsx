import "../styles/MainContent.css";
import hackImg from "../assets/main_img01.png";
import Button from "./Button";

function MainContent() {
  return (
    <main>
      <div className="main_wrapper">
        <div className="blue_bubble"></div>
        <div className="pupple_bubble"></div>
        <div className="section about_section">
          <div className="text_box">
            <h1>
              대규모 해킹사태,
              <br /> 당신의 계정은 안전할까요?
            </h1>
            <p>
              현재 뉴스에서 심심치 않게 나오는 해킹 뉴스, 보안에 대한 불안이
              커지고 있습니다.
            </p>
          </div>
        </div>
        <div className="section hack_section">
          <img src={hackImg} alt="해킹 이미지" />
          <div className="text_box">
            <h1>해킹</h1>
            <p>HACKIEY에서는 해킹 확인부터 보안 솔루션까지 알려드립니다.</p>
          </div>
        </div>
        <div className="section feat_section">
          <h1>
            HACKIEY는 <br />
            당신만의 디지털 방패입니다
          </h1>
          <div className="feat_box">
            <div className="box hack_box">
              <p>해킹 여부 확인</p>
              <Button />
            </div>
            <div className="box list_box">
              <p>해킹된 사이트 확인</p>
              <Button />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
export default MainContent;
