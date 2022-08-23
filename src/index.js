import React from 'react';
import ReactDOM from 'react-dom/client';
import "./styles/index.scss";
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ContextProvider from './store/page-context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ContextProvider>

);

