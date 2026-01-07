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
import axios from "axios";

export type Stock = {
    symbol: string;
    name: string;
    has_eod: boolean;
    has_intraday: boolean;
    stock_exchange: {
    acronym: string;
    country_code: string;
  };
};
interface MarketExplorerProps {
  stocks: Stock[];
}

export default function App() {


  const [listOfStocks, setListOfStocks] = useState<Stock[]>([]);;
  const [isInitialized, setIsInitialized] = useState(false);
  const APIKEY = "65c8594968d3c37b42fee0fa0ee44fe6";

  async function fetchStockData(){
    try{
      const response = await axios.get(`https://api.marketstack.com/v1/tickers`, {
        params: {
          access_key: APIKEY,
          exchange: "XNAS",
          limit: 100
        }
      });
      setListOfStocks(response.data.data);
      setIsInitialized(true);
    }catch{
      console.log("some error occured");
    }
  }

  useEffect(()=>{
    fetchStockData();
  }, [])

  return (
      <Router>
        <div className="wrapper">
          <Header/>
          <Routes>
            <Route path='/' element={<Main/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/tasks' element={<TaskTracker/>}></Route>
            <Route path='/stocks' element={<MarketExplorer stocks={listOfStocks}/>}></Route>
            <Route path='/stocks/:nameOfStock' element={<StockDetail/>}></Route>
            <Route path='*' element={<Error/>}></Route>
          </Routes>
          <Footer/>
        </div>
      </Router>
  );
}

