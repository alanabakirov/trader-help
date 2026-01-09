# Trader help website project (project overview) 

This project is SPA React+Typescript (also a bit of Ant design elements) project, which was designed to helps traders and investors explore stock market data, manage tasks, and view stock-level analysis. It has several pages: main page, about us, task tracker (data stored in local storage), market explorer (list down stocks from API) and particular stock page (info about particular stock, also on this page user can get analysis via Gemini API about investment for this stock. In general, this application uses client-side routing, integrates public market APIs, stores task data in local storage, and uses Gemini API to provide basic investment insights for individual stocks. 

## Setup instructions 

1) Clone repo with git clone 
2) Navigate to project directory cd trader-help 
3) Install all dependencies (use npm install) 
4) Replace GEMINI_API_KEY value to "AIzaSyBOzWekYoENfXAJehzEFwSeK-32_gfS_8U" or just your gemini api key. Because of google policy, you cant use gemini api key if they are posted on public repo in github, so just replace its variable with given value (as a future improvement, I might just add env file, but just for now left it like that. However, I will replace it for sure because of safety reasons). 
5) Now you can run project with npm start 

### Description of the public API(s) used 

This project uses the Marketstack public REST API to get stock market data for the Market Explorer and individual stock detail pages. Since the free Marketstack plan is limited to 100 API calls per month, the integration was intentionally kept minimal and efficient. Only two API calls are used: 
1) One to fetch a list of up to 100 main stocks from the NASDAQ exchange for the Market Explorer page 
2) Second one to retrieve the latest available data for a selected stock on the stock detail page. 

Also my project integrates the Google Gemini API to provide basic AI generated investment insights for individual stocks. The Gemini 2.5 Flash model is used because of its fast response time and suitability for lightweight, real-time analysis. Stock data retrieved from the Marketstack API and user-provided inputs such as investment time and budget, is sent to the model to generate data-driven insights. The response focuses on recent price behavior, suitability for short- or long-term holding, potential strategy considerations, and associated risks, while intentionally avoiding generic advice or financial guarantees. This integration demonstrates practical usage of a modern generative AI API within a frontend application. 

### Known issues, challenges faced, and your solutions 

1) The main issue was working within the free Marketstack API limitations. Main challenge of this issue was to explore deep documentation of Marketstack API and find out which is free and which calls are not free. As a solution, I just chose the right calls to API to show max info, but at the same time dont make calls to often. 
2) Next issue: Keep design the same for each page - consistent design. My main challenge was to track possible differences between pages classes. My solution was to use bem methodology and just copy from time to time css classes already created by me from other componenets css files and modify it a bit. 
3) Last main issue: Create easy and understandble way to easily and fastly modify tasks. Main challenge was to reduce clicks, because I didnt want to make pop up menu, and my solution was to change color and task status after each click on task. There are 3 task statuses: Todo, In progress and Done. User can choose task status during creation of task, and also modify it just with click (it toggles) 

### Future improvements 

1) Add a filtration system and search bar to the Market Explorer page to allow users to easily find specific stocks. This is why stock data is currently fetched and stored in App.tsx, it centralizes the data and makes it easier to manage and filter across components. 
2) Error handling and loading indicators are already implemented on the Stock Detail page, because retrieving detailed stock data can sometimes take longer. But on market explorer page, API calls are faster and less critical, so explicit loading and error handling were not implemented initially. These features will be added to the Market Explorer page in the near future to ensure consistent user experience across the app.
3) Add env file and add API keys there (safety reason)