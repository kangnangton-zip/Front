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
    // console.log(element);
    if (!element) return;

    setTimeout(() => {
      const elementTop = element.offsetTop;
      const elementHeight = element.offsetHeight;
      const containerHeight = container.clientHeight;

      console.log(container);

      // 컨테이너 내 스크롤 중앙 정렬
      const scrollTop = elementTop - containerHeight / 2 + elementHeight / 2;
      container.scrollTo({ top: scrollTop, behavior: "smooth" });
    }, 150);
  }, [location]);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const cards = container.querySelectorAll(".site-card");
      const containerRect = container.getBoundingClientRect();
      const centerY = containerRect.top + containerRect.height / 2;

      // // 스크롤이 맨 위에 있을 때
      // if (container.scrollTop === 0) {
      //   cards.forEach((card, idx) => {
      //     if (idx === 0) {
      //       card.style.transform = "scale(1)";
      //       card.style.zIndex = 2;
      //     } else {
      //       card.style.transform = "scale(0.8)";
      //       card.style.zIndex = 1;
      //     }
      //     card.style.transition = "transform 0.2s";
      //   });
      //   return;
      // }

      // // 스크롤이 맨 아래에 있을 때
      // if (cards.length > 0) {
      //   const lastCard = cards[cards.length - 1];
      //   const lastCardRect = lastCard.getBoundingClientRect();
      //   console.log(lastCardRect.bottom, containerRect.bottom);
      //   // 마지막 카드의 하단이 컨테이너 하단에서 40px 이내로 가까워지면
      //   if (Math.abs(lastCardRect.bottom - containerRect.bottom) < 40) {
      //     cards.forEach((card, idx) => {
      //       if (idx === cards.length - 1) {
      //         card.style.transform = "scale(1)";
      //         card.style.zIndex = 2;
      //       } else {
      //         card.style.transform = "scale(0.8)";
      //         card.style.zIndex = 1;
      //       }
      //       card.style.transition = "transform 0.2s";
      //     });
      //     return;
      //   }
      // }

      // 기본(중앙 기준) 스케일
      cards.forEach((card) => {
        const cardRect = card.getBoundingClientRect();
        const cardCenterY = cardRect.top + cardRect.height / 2;
        const distance = Math.abs(centerY - cardCenterY);

        // 거리 기반 scale 계산 (최대 1, 최소 0.8)
        const scale = Math.max(0.8, 1 - distance / 600);
        card.style.transform = `scale(${scale})`;
        card.style.transition = "transform 0.2s";
        card.style.zIndex = scale === 1 ? 2 : 1;
      });
    };

    container.addEventListener("scroll", handleScroll);
    handleScroll(); // 초기 호출

    return () => {
      container.removeEventListener("scroll", handleScroll);
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
        <div className="site-list-cards" ref={scrollRef}>
          <div className="virtual__scroll"></div>
          {siteList.map((site, index) => (
            <SiteCard site={site} index={index} />
          ))}
          <div className="virtual__scroll"></div>
        </div>
      </div>
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
