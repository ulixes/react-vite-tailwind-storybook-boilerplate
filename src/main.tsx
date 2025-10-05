/**
 * Application Entry Point
 *
 * This is the main entry file for the React application.
 * It imports the global styles and renders the root App component.
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
