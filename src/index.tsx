import React from 'react';
import { createRoot } from 'react-dom/client';
import Main from './pages/home/home-screen';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
