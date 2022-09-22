import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { Settings, Launcher } from '@pages/index';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Launcher />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>
);
