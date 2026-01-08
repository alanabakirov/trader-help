import { useParams } from "react-router-dom";
import { useEffect, useState} from "react";
import axios from "axios";
import './StockDetail.css';
import { Spin } from 'antd';

export default function StockDetail(){

    const APIKEY = "488f2e89630202fed0c15f83625cbbd9";
    const GEMINI_API_KEY = "AIzaSyC4m_RaLrpGEkBBWsqc2RrZpTNemrvbGNQ";
    let { nameOfStock } = useParams();
    const [stock, setStock] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [investmentTime, setInvestmentTime] = useState<any>("Short-term (weeks/months)");
    const [budget, setBudget] = useState<any>("<$1,000");
    const [answer, setAnswer] = useState<any>();
    const [loadingResponse, setLoadingResponse] = useState<any>();


        async function getInfoAboutStock(){
        try{
            const response = await axios.get("https://api.marketstack.com/v1/eod/latest", {
            params: {
                access_key: APIKEY,
                symbols: nameOfStock
            }
            });
            
            console.log(response);
            setStock(response.data.data[0]);
            setIsLoading(false);
            console.log(stock);
        }catch{
            console.log("some error occured");
        }finally{
            setIsLoading(false);
        }

    }

    useEffect(()=>{
        getInfoAboutStock()
    }, []);


    async function askGemini() {
        if (!investmentTime|| !budget) return;

        setLoadingResponse(true);
        setAnswer("");

        try {
        const response = await axios.post("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent", {
            contents: [
                {
                parts: [
                    {
                    text: `You are a financial assistant. Info for analysis: Stock info: ${JSON.stringify(stock, null, 2)}. Investment horizon: ${investmentTime}. Budget: ${budget}. Tasks: 1. Briefly describe the stock’s recent price behavior (trend, volatility). 2. Explain whether this stock is more suitable for short-term or long-term holding based on the data. 3. Suggest a cautious strategy appropriate for the given budget. 4. Clearly mention at least one risk. Rules: - Be specific and data-driven. - Avoid generic advice. - Do NOT give financial guarantees. - Keep the answer concise (5–8 bullet points).`
                    }
                ]
                }
            ]
            },
            {
            params: {
                key: GEMINI_API_KEY
            }
            }
        );

        setAnswer(response.data.candidates[0].content.parts[0].text);

        } catch (error) {
            console.log("error:" + error);
            setAnswer("Failed to get AI response.");
        } finally {
        setLoadingResponse(false);
        }
    }


  if (isLoading) {
    return <main className="stockDetail loadingBlockClass">
        <Spin size="large"/>
    </main>;
  }

  if (!stock) {
    return <main className="stockDetail loadingBlockClass">No data available. Some error occured🥲. maybe, try to reload page, but idk, it could be problem with api</main>;
  }

  return (
    <main className="stockDetail">
      <div className="stockDetail_intro">
        <h1 className="stockDetail_mainTitle">Stock info</h1>
        <p className="stockDetail_introDescription">Here you can view your stock info and use AI to get advice on investment.</p>
      </div>
      <div className="stockDetail_card">
        <p className="stockDetail_title">{stock.symbol}</p>
        <p className="stockDetail_dateText">Date: {new Date(stock.date).toLocaleDateString()}</p>
        <div className="stockDetail_priceInfo">
          <div className="stockDetail_priceInfoElement">
            <p className="stockDetail_text">Open</p>
            <p className="stockDetail_text">{stock.open}</p>
          </div>
          <div className="stockDetail_priceInfoElement">
            <p className="stockDetail_text">High</p>
            <p className="stockDetail_text">{stock.high}</p>
          </div>
          <div className="stockDetail_priceInfoElement">
            <p className="stockDetail_text">Low</p>
            <p className="stockDetail_text">{stock.low}</p>
          </div>
          <div className="stockDetail_priceInfoElement">
            <p className="stockDetail_text">Close</p>
            <p className="stockDetail_text">{stock.close}</p>
          </div>
          <div className="stockDetail_priceInfoElement">
            <p className="stockDetail_text">Adj. Close</p>
            <p className="stockDetail_text">{stock.adj_close}</p>
          </div>
        </div>
        <div className="stockDetail_extraInfo">
          <div className="stockDetail_priceInfoElement">
            <p className="stockDetail_text">Dividend</p>
            <p className="stockDetail_text">{stock.dividend}</p>
          </div>
          <div className="stockDetail_priceInfoElement">
            <p className="stockDetail_text">Split Factor</p>
            <p className="stockDetail_text">{stock.split_factor}</p>
          </div>
        </div>
      </div>

       <div className="stockDetail_gemini">
            <select className="stockDetail_geminiSelect" onChange={e => setInvestmentTime(e.target.value)}>
                <option value="short-term">Short-term (weeks/months)</option>
                <option value="long-term">Long-term (years)</option>
            </select>
            <select className="stockDetail_geminiSelect" onChange={e => setBudget(e.target.value)}>
                <option value="< $1,000">&lt; $1,000</option>
                <option value="$1,000–$5,000">$1,000 – $5,000</option>
                <option value="$10,000+">$10,000+</option>
            </select>
            <button className="stockDetail_geminiButton" onClick={askGemini} disabled={loadingResponse}>
                {loadingResponse ? "Analyzing..." : "Get AI Insight"}
            </button>
            <div className="stockDetail_answer">{answer}</div>
       </div>
    </main>
  );
}