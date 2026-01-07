import "./Main.css";
import CardSlider from "../CardSlider/CartSlider";
import { useNavigate } from "react-router";

export default function Main(){
    let navigate = useNavigate();

const slides = [
  {
    id: 1,
    title: "Market Explorer",
    description: "Real-time data from global exchanges. Watch the market moves as they happen.",
    link: "/stocks",
    image: "/mainPageSlider1.JPG"
  },
  {
    id: 2,
    title: "Task Tracker",
    description: "Plan your trades and set daily goals. Discipline is the key to profit.",
    link: "/tasks",
    image: "/mainPageSlider2.JPG"
  },
  {
    id: 3,
    title: "AI Analysis",
    description: "Get smart advice from Gemini AI. Let technology validate your strategy.",
    link: "/stocks",
    image: "/mainPageSlider3.JPG"
  },
  {
    id: 4,
    title: "About Us",
    description: "Learn more about our mission to empower independent traders.",
    link: "/about",
    image: "/mainPageSlider4.JPG"
  }
];


    return (
        <main>
            <div className="main_heroSection">
                <h1 className="main_title">Master the Market only with us</h1>
                <p className="main_subtitle">Task-driven trading, and Gemini-powered stock analysis—all in one place.</p>
                <button className="main_button" onClick={()=>navigate("/stocks")}>Explore stocks</button>
            </div>
            <div className="main_cartSliderSection">
                <h1 className="main_title">Our services</h1>
                <CardSlider slides={slides}/>
            </div>
            <div className="main_motivationSection">
                <div className="main_motivationSection_container">
                    <p className="main_title">Invest</p>
                    <p className="main_title">right</p>
                    <p className="main_title">now</p>
                </div>
            </div>
            <div className="main_featuresOfApp">
                <div className="main_featuresContainer">
                    <div className="main_featureBox">
                        <h3 className="main_featureHeading">Global Data</h3>
                        <p className="main_featureDescription">We pull data from 70+ exchanges. Get the full picture of the global market instantly.</p>
                    </div>
                    <div className="main_featureBox">
                        <h3 className="main_featureHeading">AI Logic</h3>
                        <p className="main_featureDescription">Validate your gut feeling with AI. Smart analysis for smarter trades.</p>
                    </div>
                    <div className="main_featureBox">
                        <h3 className="main_featureHeading">Stay Organized</h3>
                        <p className="main_featureDescription">A built-in tracker ensures you never miss a trade or ignore your own strategy rules.</p>
                    </div>
                </div>
            </div>
        </main>
    )
}