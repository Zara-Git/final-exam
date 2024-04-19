import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";
import store from "./redux/store";
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
