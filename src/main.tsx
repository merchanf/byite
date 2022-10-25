import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import RecoilNexus from 'recoil-nexus';
import Routing from './Routing';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div id="map" />
    <RecoilRoot>
      <RecoilNexus />
      <Routing />
    </RecoilRoot>
  </React.StrictMode>
);
