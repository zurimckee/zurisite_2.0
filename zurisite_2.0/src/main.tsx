import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './HomePage.tsx'
import './App.css'
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
