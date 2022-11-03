import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import RecoilNexus from 'recoil-nexus';
import { Toaster } from 'react-hot-toast';
import Routing from './Routing';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div id="map" />
    <RecoilRoot>
      <Toaster />
      <RecoilNexus />
      <Routing />
    </RecoilRoot>
  </React.StrictMode>
);
