import { useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

import Home from "./pages/Home";
import ProfileCard from "./pages/ProfileCard/ProfileCard";
import FullScreenVideo from "./pages/FullScreenVideo/FullScreenVideo";
import TownAnimation from "./pages/TownAnimation/TownAnimation";
import PanoramaUI from "./pages/PanoramaUI/PanoramaUI";
import FlexVideoBox from "./pages/FlexVideoBox/FlexVideoBox";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/") {
      document.querySelector("body").className = "";
    }
  }, [location]);

  return (
    <>
      {/* {location.pathname !== "/" && (
        <div onClick={() => navigate("/")}>뒤로 가기</div>
      )} */}

      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/ProfileCard"} element={<ProfileCard />} />
        <Route path={"/FullScreenVideo"} element={<FullScreenVideo />} />
        <Route path={"/TownAnimation"} element={<TownAnimation />} />
        <Route path={"/PanoramaUI"} element={<PanoramaUI />} />
        <Route path={"/FlexVideoBox"} element={<FlexVideoBox />} />
      </Routes>
    </>
  );
}

export default App;
