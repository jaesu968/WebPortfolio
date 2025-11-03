import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

// ReactDOM.createRoot is the modern way to start a React application.
// It tells React where in the HTML file to render the application.
// In this case, it's an element with the id 'root' in index.html.
ReactDOM.createRoot(document.getElementById('root')).render(
  // React.StrictMode is a tool for highlighting potential problems in an application.
  // It activates additional checks and warnings for its descendants. It only runs in development mode.
  <React.StrictMode>
    {/*
      HashRouter is used here instead of BrowserRouter.
      It uses the hash (#) portion of the URL to keep your UI in sync with the URL.
      This is a great choice for deploying on static hosting services like GitHub Pages,
      as it prevents errors when a user tries to directly access a nested route.
    */}
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
)
