// src/App.js

import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/homePage';
import TestPage from './pages/testPage';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/test"element={<TestPage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
