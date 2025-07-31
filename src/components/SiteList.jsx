import siteList from "../assets/siteList.js";
import "../styles/SiteList.css";
import Button from "./Button";

function SiteList() {
  return (
    <div className="site-list-container">
      <div className="site-list-header">
        <h1 className="header-title">
          현재,
          <br /> 해킹된 사이트들...
        </h1>
        <p className="header-text">2025년 해킹된 사이트들을 정리합니다.</p>
      </div>
      <div className="site-list-cards">
        {siteList.map((site, index) => (
          <div className="site-card" key={index}>
            <div className="card-left">
              <img src={site.imgUrl} alt={site.name} className="site-img"></img>
              <h1 className="site-name">{site.name}</h1>
            </div>
            <div className="card-right">
              <div className="site-date">{site.date}</div>
              <div className="site-description">{site.description}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="box1"></div>
      <div className="box2"></div>

      <div className="feat-box">
        <div className="feat-item hack-check">
          <p>해킹 여부 확인</p>
          <Button />
        </div>
      </div>
    </div>
  );
}

export default SiteList;
