import React from 'react';
import ReactDOM from 'react-dom/client';
import * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';
import { RecoilRoot } from 'recoil';
import RecoilNexus from 'recoil-nexus';
import { Toaster } from 'react-hot-toast';
import Routing from './Routing';
import { env } from './constants';

Sentry.init({
  dsn: env.SENTRY_DSN,
  integrations: [new BrowserTracing()],
  tracesSampleRate: 1.0,
});

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
