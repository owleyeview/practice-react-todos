// Rashaan Lightpool
// 2023-12-01
// Adapted from Wev Dev Simplified's React Tutorial
// https://youtu.be/Rh3tobg7hEo

// This is the entry point for the application. It renders the App component

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
