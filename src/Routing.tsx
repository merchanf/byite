import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  SelectLocation,
  Launcher,
  Swipe,
  Settings,
  Whoami,
  Profile,
} from '@pages/index';
import { routes } from '@constants/index';

const { BASE, SELECT_LOCATION, SWIPE, SETTINGS, WHOAMI, PROFILE, SHARED } =
  routes;

const Test = () => {
  return <div>Test</div>;
};

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={BASE} element={<Launcher />} />
        <Route path={SELECT_LOCATION} element={<SelectLocation />} />
        <Route path={SWIPE} element={<Swipe />} />
        <Route path={SETTINGS} element={<Settings />} />
        <Route path={WHOAMI} element={<Whoami />} />
        <Route path={PROFILE} element={<Profile />} />
        <Route path={`${SHARED}/:placeId`} element={<Launcher />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
