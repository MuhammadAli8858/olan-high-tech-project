import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/App.jsx';
import { loadContent } from './app/data/contentStore.js';
import './styles/index.css';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element #root not found');

// Сначала пробуем подгрузить контент с сервера (то, что задано в админ-панели),
// затем рендерим сайт. Если сервер недоступен — рендерим со встроенным контентом.
loadContent().finally(() => {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
});
