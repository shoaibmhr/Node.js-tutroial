import axios from "axios";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("enter your city name", async (city) => {
  const apiKey = "6413a31420ea066d44fe896f4dbde2c4";
  const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric}`;
  try {
    const res = await axios.get(url);
    console.log(
      `The temperature in ${city} is ${res.data.main.feels_like}°C`,
    );
    console.log(`Weather description: ${res.data.weather[0].description}`);
    console.log(`Humidity: ${res.data.main.humidity}%`);
  } catch (error) {
    console.error("Did not fetch the api", error);
  } finally {
    rl.close();
  }
});
