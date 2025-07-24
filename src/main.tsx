import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import * as Sentry from '@sentry/react';

if (import.meta.env.VITE_SENTRY_ENABLED === 'true') {
  Sentry.init({
    dsn: import.meta.env.VITE_SENTRY_DSN,
    integrations: [
      Sentry.browserTracingIntegration(), // ✅ Use this new method
    ],
    sendDefaultPii: true,
    tracesSampleRate: 1.0,
  });
  console.log("🔍 DSN in Prod:", import.meta.env.VITE_SENTRY_DSN);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
