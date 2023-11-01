import { useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

import Home from './pages/Home';
import ProfileCard from './pages/chapter1/ProfileCard/ProfileCard';
import FullScreenVideo from './pages/chapter1/FullScreenVideo/FullScreenVideo';
import TownAnimation from './pages/chapter1/TownAnimation/TownAnimation';
import PanoramaUI from './pages/chapter2/PanoramaUI/PanoramaUI';
import FlexVideoBox from './pages/chapter2/FlexVideoBox/FlexVideoBox';
import SwiperGallery from './pages/chapter2/SwiperGallery/SwiperGallery';
import ResponsiveGallery from './pages/chapter3/ResponsiveGallery/ResponsiveGallery';
import TimeResponsive from './pages/chapter3/TimeResponsive/TimeResponsive';
import SequenceMotion from './pages/chapter3/SequenceMotion/SequenceMotion';
import MusicPlayer from './pages/chapter3/MusicPlayer/MusicPlayer';

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/') {
      document.querySelector('body').className = '';
    }
  }, [location]);

  return (
    <>
      {/* {location.pathname !== "/" && (
        <div onClick={() => navigate("/")}>뒤로 가기</div>
      )} */}

      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/ProfileCard'} element={<ProfileCard />} />
        <Route path={'/FullScreenVideo'} element={<FullScreenVideo />} />
        <Route path={'/TownAnimation'} element={<TownAnimation />} />
        <Route path={'/PanoramaUI'} element={<PanoramaUI />} />
        <Route path={'/FlexVideoBox'} element={<FlexVideoBox />} />
        <Route path={'/SwiperGallery'} element={<SwiperGallery />} />
        <Route path={'/ResponsiveGallery'} element={<ResponsiveGallery />} />
        <Route path={'/TimeResponsive'} element={<TimeResponsive />} />
        <Route path={'/SequenceMotion'} element={<SequenceMotion />} />
        <Route path={'/MusicPlayer'} element={<MusicPlayer />} />
      </Routes>
    </>
  );
}

export default App;
