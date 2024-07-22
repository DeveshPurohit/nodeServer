const express = require("express");
const app = express();
const cors = require ("cors");
const PORT = 8080;

app.use(cors());

app.get("/api/home", (req, res) => {
    res.json({message: "Hey from Devesh Purohit"})
})

app.get("/api/news", async (req, res) => {
    const data = await fetch(`https://newsapi.org/v2/everything?q=keyword&apiKey=${process.env.NAPIKEY}`)
    const news = await data.json();
    res.json({news: news.articles.slice(0,3)})
})

app.get("/api/weather", async (req, res) => {
    const city = req.query.city;
    try {
      const weatherData = await getWeatherData(city);
      res.json({temperature: weatherData.main.temp+"°C", description: weatherData.weather[0].description, windSpeed: weatherData.wind.speed+"km/h"})
    } catch (error) {
      res.status(500).send("Error fetching weather data.");
    }
  });

// Function to fetch weather data
async function getWeatherData(city) {
  const apiKey = process.env.WAPIKEY;
  const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`;
  try {
    const response = await fetch(weatherURL);
    const weatherData = await response.json();
    return weatherData;
  } catch (error) {
    console.log("Error fetching weather data:", error);
    throw error;
  }
}

app.listen(PORT, () => {
    console.log(`server started on port : ${PORT}`);
})
