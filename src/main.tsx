import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import RecoilNexus from 'recoil-nexus';
import { Settings, Launcher, Swipe } from '@pages/index';
import { routes } from '@constants/index';

const { BASE, SETTINGS, SWIPE } = routes;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div id="map" />
    <RecoilRoot>
      <RecoilNexus />
      <BrowserRouter>
        <Routes>
          <Route path={BASE} element={<Launcher />} />
          <Route path={SETTINGS} element={<Settings />} />
          <Route path={SWIPE} element={<Swipe />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>
);
