import React, { useState, Component } from 'react';
import './App.css';
import { Route, Routes, Navigate } from "react-router-dom";
import Login from './Component/Login';
import Page1 from './Component/Page1';
import Page2 from './Component/Page2';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Login />} />;
        <Route exact path="/Page1" element={<Page1 />} />;
        <Route exact path="/Page2" element={<Page2 />} />;
      </Routes>
    </div>
  )
};


export default App;
