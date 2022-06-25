import React from 'react';
import ReactDOM from 'react-dom/client';

// style
import 'normalize.css';
import './index.css';

// fonts
import './Fonts/Epilogue/static/Epilogue-ExtraBold.woff2';
import './Fonts/Epilogue/static/Epilogue-ExtraBold.ttf';
import './Fonts/Epilogue/static/Epilogue-Regular.woff2';
import './Fonts/Epilogue/static/Epilogue-Regular.ttf';
import './Fonts/Epilogue/static/Epilogue-Black.woff2';
import './Fonts/Epilogue/static/Epilogue-Black.ttf';
import App from './App.tsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);
