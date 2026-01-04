import "./Main.css";
import CardSlider from "../CardSlider/CartSlider";

export default function Main(){

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
                <button className="main_button">Explore stocks</button>
            </div>
            <div className="main_cartSliderSection">
                <h1 className="main_title">Our services</h1>
                <CardSlider slides={slides}/>
            </div>
        </main>
    )
}