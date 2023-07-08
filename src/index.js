import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App {...vidData}/> we can use sprade operator for sprading a single object */}
    <App />
  </React.StrictMode>
);  
