import Header from "../components/Header";
import Footer from "../components/Footer";
import SiteList from "../components/SiteList";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function SiteListPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = decodeURIComponent(location.hash.replace("#", ""));
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <Header />
      <SiteList />
      <Footer />
    </>
  );
}

export default SiteListPage;
