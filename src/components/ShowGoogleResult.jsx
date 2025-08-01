import { useEffect, useState } from "react";
import "../styles/ShowResult.css";
import { useLocation } from "react-router-dom";
import normalizeId from "../utils/normalizedTd.js";
import axios from "axios";

function ShowGoogleResult() {
  const [open, setOpen] = useState(false);
  const [site, setSite] = useState([]); // 아래 result를 여기로 할거임
  const location = useLocation();

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };
  // const list = site.slice(3);

  useEffect(() => {
    if (location.hash) {
      const id = decodeURIComponent(location.hash.replace("#", ""));
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  }, [location]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/google")
    .then((res) => {
    console.log("응답 전체:", res);         // 전체 확인
    console.log("응답 데이터:", res.data);   // 핵심 데이터
    setSite(res.data);
  })
  .catch((err) => {
    console.error("API 오류:", err);
  });
  }, []);

  return (
    <div className="show-result-container">
      <div className="show-result-header">
        <h1 className="show-result-header-text">
          01034762742ab@gmail.com님의
          <br /> 해킹 검사 결과는...
        </h1>
        {site[0] && (
  <div className="show-result-summary-container">
    <div className="show-result-summary">
      <div className="result-number">{site[0][0]}</div>
      <div className="result-name">다크웹</div>
    </div>
    <div className="show-result-summary">
      <div className="result-number">{site[0][1]}</div>
      <div className="result-name">Hibp</div>
    </div>
    <div className="show-result-summary">
      <div className="result-number">{site[0][2]}</div>
      <div className="result-name">유출</div>
    </div>
  </div>
)}
        <div className="show-result-list-container">
          <div className="show-result-list">
            <div className="list-toggle-box" onClick={handleToggle}>
              <div className={`toggle-shape ${open ? "down" : "right"}`}></div>
              <div className="toggle-name">유출 예상 서비스 내역</div>
            </div>
            {open && (
              <div className="lists">
                <ul>
                  {/* {list.map((item) => (
                    <li className="list">
                      <a href={`/sites#${normalizeId(item)}`}>{item}</a>
                    </li>
                  ))} */}
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
