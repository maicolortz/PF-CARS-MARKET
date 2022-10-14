import React from "react";
import "./index.css";
import App from "./App";
import { createRoot } from 'react-dom/client';
import { Provider } from "react-redux";
import axios from "axios";
import store from "./Redux/Store";
const container = document.getElementById('root');
const root = createRoot(container);

axios.defaults.baseURL=process.env.REACT_APP_API || "http://localhost:3001"

root.render(
    <React.StrictMode>
  <Provider store={store}>
      <App />
    </Provider>
    </React.StrictMode>
);

