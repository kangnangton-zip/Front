import { useEffect, useState } from "react";
import "../styles/ShowResult.css";
import { useLocation } from "react-router-dom";
import normalizeId from "../utils/normalizedTd.js";

function ShowGoogleResult() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };
  const result = [0, 2, 5, "알바몬", "디올", "아디다스", "티파니", "GS Shop"];
  const list = result.slice(3);

  useEffect(() => {
    if (location.hash) {
      const id = decodeURIComponent(location.hash.replace("#", ""));
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  }, [location]);

  return (
    <div className="show-result-container">
      <div className="show-result-header">
        <h1 className="show-result-header-text">
          xsdasdwa@safsa.coms님의
          <br /> 해킹 검사 결과는...
        </h1>
        <div className="show-result-summary-container">
          <div className="show-result-summary">
            <div className="result-number">{result[0]}</div>
            <div className="result-name">다크웹</div>
          </div>
          <div className="show-result-summary">
            <div className="result-number">{result[1]}</div>
            <div className="result-name">Hibp</div>
          </div>
          <div className="show-result-summary">
            <div className="result-number">{result[2]}</div>
            <div className="result-name">유출</div>
          </div>
        </div>
        <div className="show-result-list-container">
          <div className="show-result-list">
            <div className="list-toggle-box" onClick={handleToggle}>
              <div className={`toggle-shape ${open ? "down" : "right"}`}></div>
              <div className="toggle-name">유출 예상 서비스 내역</div>
            </div>
            {open && (
              <div className="lists">
                <ul>
                  {list.map((item, index) => (
                    <li key={index} className="list">
                      <a href={`/sites#${normalizeId(item)}`}>{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowGoogleResult;
