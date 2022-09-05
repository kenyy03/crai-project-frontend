import React from 'react';
import './App.css';
import MainContent from './components/MainContent/MainContent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Room from './components/Room/Room';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<div><MainContent /></div>} />
        <Route path="/rooms" element={<Room />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
