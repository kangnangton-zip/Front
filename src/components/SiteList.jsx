import { useLocation, useNavigate } from "react-router-dom";
import siteList from "../assets/siteList.js";
import "../styles/SiteList.css";
import Button from "./Button";
import { useEffect, useRef } from "react";
import SiteCard from "./SiteCard.jsx";
import normalizeId from "../utils/normalizedTd.js";

function SiteList() {
  const scrollRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!location.hash) return;

    const rawId = decodeURIComponent(location.hash.replace("#", ""));
    const id = normalizeId(rawId);
    const container = scrollRef.current;
    if (!container) return;

    const element = document.getElementById(id);
    if (!element) return;

    // 딜레이 주기 (100~200ms 정도)
    setTimeout(() => {
      // 가로 스크롤 중앙 정렬
      const elementLeft = element.offsetLeft;
      const elementWidth = element.offsetWidth;
      const containerWidth = container.offsetWidth;
      const scrollLeft = elementLeft - containerWidth / 2 + elementWidth / 2;
      container.scrollTo({ left: scrollLeft, behavior: "smooth" });

      // 세로 스크롤 중앙 정렬
      const rect = element.getBoundingClientRect();
      const absoluteTop = rect.top + window.pageYOffset;
      const middle = absoluteTop - window.innerHeight / 2 + rect.height / 2;
      window.scrollTo({ top: middle, behavior: "smooth" });
    }, 150);
  }, [location]);

  const goToAccount = () => {
    navigate("/account");
  };

  return (
    <div className="site-list-container">
      <div className="site-list-header">
        <h1 className="header-title">
          현재,
          <br /> 해킹된 사이트들...
        </h1>
        <p className="header-text">2025년 해킹된 사이트들을 정리합니다.</p>
      </div>
      <div className="site-list-cards-wrapper">
        <div className="site-list-cards" ref={scrollRef}>
          {siteList.map((site, index) => (
            <SiteCard site={site} index={index} />
          ))}
        </div>
      </div>
      <div className="box1"></div>
      <div className="box2"></div>

      <div className="feat-box">
        <div className="feat-item hack-check">
          <p>해킹 여부 확인</p>
          <Button onClick={goToAccount} />
        </div>
      </div>
    </div>
  );
}

export default SiteList;
