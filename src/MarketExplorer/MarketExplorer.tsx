import { Stock } from "../App";
import './MarketExplorer.css';
import { NavLink } from "react-router-dom";

type MarketExplorerProps = {
  stocks: Stock[];
};

export default function MarketExplorer({ stocks }: MarketExplorerProps){
    return (
        <main>
            <div className="marketExplorer_introContainer">
                <p className="marketExplorer_mainTitle">Explore market</p>
                <p className="marketExplorer_text">Click on interested stock and you can explore more: get price and analysis from Gemini</p>
            </div>
            <div className="marketExplorer_stockContainer">
                {stocks.map((stock) => (
                    <NavLink to={`/stocks/${stock.symbol}`} className="marketExplorer_stockCard" key={stock.symbol}>
                        <p className="marketExplorer_stockCard_nameText">{stock.name} - {stock.symbol}</p>
                        <p className="marketExplorer_stockCard_exchangeText">Exchange: {stock.stock_exchange.acronym}</p>
                        <p className="marketExplorer_stockCard_countryText">Country: {stock.stock_exchange.country_code}</p>
                        <p className="marketExplorer_stockCard_eodText">EOD: {stock.has_eod ? "Available" : "Not available"}</p>
                    </NavLink>
                ))}
            </div>
        </main>
    )
}