import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Login from './Component/Login';
import Dashboard from './Component/Dashboard';
import Page2 from './Component/Page2';
import Table from './Component/FetchUsers';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Login />} />;
        <Route exact path="/Dashboard" element={<Dashboard />} />;
        <Route exact path="/FetchUsers" element={<Table />} />;
        <Route exact path="/Page2" element={<Page2 />} />;
      </Routes>
    </div>
  )
};


export default App;
