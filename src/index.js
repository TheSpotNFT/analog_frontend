import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import { MoralisProvider } from "react-moralis";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MoralisProvider serverUrl="https://akkb9qxrdada.usemoralis.com:2053/server" appId="kLYjcu0bVN6IJWG6VD4GXmoqSkieEce7Cdfd93qI">
        <App />
      </MoralisProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
