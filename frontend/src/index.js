import React from 'react';
import ReactDOM from 'react-dom/client'; // React 18부터 createRoot 사용
import './index.css';  // TailwindCSS 스타일
import App from './App';  // App 컴포넌트

// React 18부터는 createRoot를 사용합니다.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
