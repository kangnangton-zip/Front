import "../styles/ShowResult.css";

function ShowNaverResult() {
  return (
    <div className="show-result-container">
      <div className="show-result-header">
        <h1 className="show-result-header-text">
          xsdasdwa@safsa.com님의
          <br /> 해킹 검사 결과는...
        </h1>
        <div className="show-result-summary-container">
          <div className="show-result-summary">
            <div className="result-number">0</div>
            <div className="result-name">Hibp</div>
          </div>
          <div className="show-result-summary">
            <div className="result-number">0</div>
            <div className="result-name">유출</div>
          </div>
        </div>
        <div className="show-result-list-container">
          <div className="show-result-list">
            <div className="toggle-shape"></div>
            <div className="toggle-name">유출 서비스 비교 내역</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowNaverResult;
