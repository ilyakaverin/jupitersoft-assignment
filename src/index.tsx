import React from "react";
import ReactDOM from "react-dom/client";

// style
import "normalize.css";
import "./index.css";

// fonts
import "./Fonts/Epilogue/static/Epilogue-ExtraBold.woff2";
import "./Fonts/Epilogue/static/Epilogue-ExtraBold.ttf";
import "./Fonts/Epilogue/static/Epilogue-Regular.woff2";
import "./Fonts/Epilogue/static/Epilogue-Regular.ttf";
import "./Fonts/Epilogue/static/Epilogue-Black.woff2";
import "./Fonts/Epilogue/static/Epilogue-Black.ttf";
// @ts-ignore
import App from "./App.tsx";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
