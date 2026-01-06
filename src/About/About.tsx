import "./About.css";
import CardSlider from "../CardSlider/CartSlider";

export default function About(){

    const slides = [
        {
            id: 1,
            title: "Marketstack as API",
            description: "We use Marketstack to pull professional-grade data from over 70 global exchanges.",
            link: "https://marketstack.com/",
            image: "/aboutPageSlider1.JPG"
        },
        {
            id: 2,
            title: "Gemini for AI analysis",
            description: "It processes complex market sentiment to provide a second opinion on your trades.",
            link: "/tasks",
            image: "/aboutPageSlider2.JPG"
        },
        {
            id: 3,
            title: "React",
            description: "The entire interface is built on React with TypeScript to ensure maximum stability and speed.",
            link: "https://www.typescriptlang.org/docs/handbook/react.html",
            image: "/aboutPageSlider3.JPG"
        }
    ];

    return (
        <main className="about">
            <div className="about_descriptionBlock">
                <h1 className="about_mainTitle">About us</h1>
                <p className="about_p">Trader Help was founded by Alan Abakirov with a straightforward goal: to take the chaos out of day trading. As someone deeply involved in the development of fintech tools, Alan realized that most traders don't fail because they lack data, but because they lack a clear system. This platform was built to solve that problem by combining raw market data from 70+ global exchanges with the analytical power of Google Gemini AI. It’s not just about looking at charts; it’s about having a smart workspace that helps you filter the noise and focus on what actually moves the needle in your portfolio.</p>
                <p className="about_p">Beyond the numbers, Alan designed this app with a "discipline-first" mindset. The integrated task tracker isn't just an extra feature—it’s the heart of the workflow, helping you stick to your strategy when the market gets volatile. We believe that professional-grade tools should be accessible and easy to use, which is why every part of this dashboard is built to be clean, fast, and intuitive. Whether you’re just starting out or you’re a seasoned pro, this project is here to give you the structure and the edge you need to stay consistent in an ever-changing market.</p>
            </div>
            <div className="about_slider">
                <CardSlider slides={slides}/>
            </div>
        </main>
    )
}