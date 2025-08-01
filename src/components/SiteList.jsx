import { useNavigate } from "react-router-dom";
import siteList from "../assets/siteList.js";
import "../styles/SiteList.css";
import Button from "./Button";
import { useEffect, useRef } from "react";
import SiteCard from "./SiteCard.jsx";

function SiteList() {
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onWheel = (e) => {
      if (e.deltaY === 0) return;
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    };

    el.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      el.removeEventListener("wheel", onWheel);
    };
  }, []);

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
        <div className="site-list-cards">
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
