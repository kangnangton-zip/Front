import "../styles/SiteCard.css";
import normalizeId from "../utils/normalizedTd.js";

function SiteCard({ site, index }) {
  return (
    <div className="site-card" id={normalizeId(site.name)} key={index}>
      <div className="card-left">
        <img src={site.imgUrl} alt={site.name} className="site-img"></img>
        <h1 className="site-name">{site.name}</h1>
      </div>
      <div className="card-right">
        <div className="site-date">{site.date}</div>
        <div className="site-description">{site.description}</div>
      </div>
    </div>
  );
}

export default SiteCard;
