import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AccountSelPage from "./pages/AccountSelectPage";
import MainPage from "./pages/MainPage";
import SiteListPage from "./pages/SiteListPage";
import NaverAccount from "./components/NaverAccount";
import GoogleAccount from "./components/GoogleAccount";
import ShowGooglePage from "./pages/ShowGooglePage";
import ShowNaverPage from "./pages/ShowNaverPage";
// import ScrollToTop from "./utils/ScroolToTop";

function App() {
  return (
    <BrowserRouter>
      {/* <ScrollToTop /> */}
      <Routes>
        <Route path="/index" element={<MainPage />} />
        <Route path="/account" element={<AccountSelPage />} />
        <Route path="/sites" element={<SiteListPage />} />
        <Route path="/naver" element={<NaverAccount />} />
        <Route path="/google" element={<GoogleAccount />} />
        <Route path="/naver/result" element={<ShowNaverPage />} />
        <Route path="/google/result" element={<ShowGooglePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
