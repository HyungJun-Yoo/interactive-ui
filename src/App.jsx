import { useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

import Home from "./pages/Home";
import ProfileCard from "./pages/ProfileCard/ProfileCard";

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
      </Routes>
    </>
  );
}

export default App;
