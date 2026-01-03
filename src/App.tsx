import Header from './Header/Header';
import Main from './Main/Main';
import MarketExplorer from './MarketExplorer/MarketExplorer';
import StockDetail from './StockDetail/StockDetail';
import TaskTracker from './TaskTracker/TaskTracker';
import Footer from './Footer/Footer';
import About from './About/About';
import Error from './Error/Error';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function App() {
  return (
      <Router>
        <div className="wrapper">
          <Header/>
          <Routes>
            <Route path='/' element={<Main/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/tasks' element={<TaskTracker/>}></Route>
            <Route path='/stocks' element={<MarketExplorer/>}></Route>
            <Route path='/stocks:nameOfStock' element={<StockDetail/>}></Route>
            <Route path='*' element={<Error/>}></Route>
          </Routes>
          <Footer/>
        </div>
      </Router>
  );
}

