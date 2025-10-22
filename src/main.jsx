import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import DarkVeil from './components/DarkVeil.jsx'
import './index.css'

// Render DarkVeil to body (outside root)
const backgroundRoot = document.createElement('div');
backgroundRoot.id = 'background-root';
document.body.insertBefore(backgroundRoot, document.body.firstChild);

ReactDOM.createRoot(backgroundRoot).render(
  <React.StrictMode>
    <DarkVeil 
      hueShift={220}
      noiseIntensity={0.02}
      speed={0.25}
      warpAmount={0.3}
      resolutionScale={0.75}
    />
  </React.StrictMode>,
);

// Render App to #root
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

