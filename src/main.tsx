import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import * as Sentry from '@sentry/react';

Sentry.init({
  dsn: 'YOUR_DSN_HERE',
  integrations: [
    Sentry.browserTracingIntegration(), // ✅ Use this new method
  ],
  tracesSampleRate: 1.0,
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
