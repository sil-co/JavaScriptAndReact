import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  // React.ScriptModeは検査のためにつける。本番環境に影響なし。Flagmentと同様にUIを描画しない
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // 第二引数 index.html のid="root"を指定し、レンダリングする場所を指定。
  document.querySelector("#root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
