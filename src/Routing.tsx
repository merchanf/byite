import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Settings, Launcher, Swipe } from '@pages/index';
import { routes } from '@constants/index';

const { BASE, SETTINGS, SWIPE } = routes;

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={BASE} element={<Launcher />} />
        <Route path={SETTINGS} element={<Settings />} />
        <Route path={SWIPE} element={<Swipe />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
