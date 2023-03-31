import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { App } from 'components/App';
import { store } from "./reduce/store";
import './index.css';

import reportWebVitals from './reportWebVitals';


ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();