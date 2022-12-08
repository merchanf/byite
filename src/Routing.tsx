import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SelectLocation, Launcher, Swipe, Settings } from '@pages/index';
import { routes } from '@constants/index';

const { BASE, SELECT_LOCATION, SWIPE, SETTINGS } = routes;

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={BASE} element={<Launcher />} />
        <Route path={SELECT_LOCATION} element={<SelectLocation />} />
        <Route path={SWIPE} element={<Swipe />} />
        <Route path={SETTINGS} element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
