import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Marvel from './pages/marvel';

import  { BrowserRouter, Routes, Route } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<Marvel />}  />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


