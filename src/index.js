import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Visit from './routes/visit';
import Stay from './routes/stay';
import Travel from './routes/travel';
import Homepage from './routes/homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/global.scss';
import * as Constants from './constants';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path={Constants.PATH_HOMEPAGE} element={<Homepage />} />
      <Route path={Constants.PATH_VISIT} element={<Visit />} />
      <Route path={Constants.PATH_STAY} element={<Stay />} />
      <Route path={Constants.PATH_TRAVEL} element={<Travel />} />
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
