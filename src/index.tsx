import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/App';
import reportWebVitals from './app/reportWebVitals';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals;
