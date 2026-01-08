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
            link: "https://aistudio.google.com/welcome?utm_source=google&utm_medium=cpc&utm_campaign=FY25-global-DR-gsem-BKWS-1710442&utm_content=text-ad-none-any-DEV_c-CRE_736763358935-ADGP_Hybrid+%7C+BKWS+-+EXA+%7C+Txt-Gemini+(Growth)-Gemini+API+Docs-KWID_2088805677811-aud-2303776546298:kwd-2088805677811&utm_term=KW_gemini%20api%20documentation-ST_gemini+api+documentation&utm_source=google&utm_medium=cpc&utm_campaign=Cloud-SS-DR-AIS-FY26-global-gsem-1713578&utm_content=text-ad&utm_term=KW_gemini%20api%20documentation&gad_source=1&gad_campaignid=22307834138&gbraid=0AAAAACn9t67hBJClpNfp93PVX6372nvJ3&gclid=Cj0KCQiAyP3KBhD9ARIsAAJLnnYZ6UU8KSOTkCj4A5BeOWVcdhPLPKEW_vT_NLzehGywIVIP7iOEI3caAlTiEALw_wcB",
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