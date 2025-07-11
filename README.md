# Weather_Fetcher
## Date: 11-07-2025
## Objective:
To demonstrate how to use Promises and async/await in JavaScript by fetching and displaying live weather data from an API. This activity reinforces real-world async data handling in web applications.

## Tasks:

#### 1. Create the HTML Structure:
Add a heading like ```<h1>WeatherNow</h1>```

Create an ```<input>``` for the city name

Add a ```<button>``` to trigger the fetch

Create a <div> to display the weather information

#### 2. Style with CSS:
Center the layout and style input and button

Style the weather output box with borders, padding, and a background color

Add hover effects for the button

#### 3. JavaScript with Promises and Async/Await:
Use fetch() to get weather data from a free API like https://api.weatherapi.com or a mock API

Wrap the fetch in an async function

Use await to wait for the response and parse it as JSON

Use .catch() to handle any errors in the promise

Display the temperature, description, and location in the output div


## HTML Code:
```
<!DOCTYPE html>
<html lang="en">
<head>

  <title>WeatherNow</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>

  <h1>WeatherNow</h1>

  <input type="text" id="cityInput" placeholder="Enter city name">

  <button onclick="getWeather()">Check Weather</button>

  <div id="weatherBox"></div>

  <script src="script.js"></script>
</body>
</html>

```

## CSS Code:
```
body 
{
  background-color: #fef5fb;
  font-family: Verdana, sans-serif;
  text-align: center;
  padding-top: 80px;
}

h1 
{
  font-size: 36px;
  color: #b84bbf;
}

input 
{
  padding: 10px;
  width: 250px;
  font-size: 16px;
  border: 2px solid #a8edc3;
  border-radius: 6px;
  margin-bottom: 20px;
  background-color: #fff0f6;
  color: #3b3b3b;
}

button 
{
  padding: 10px 20px;
  background-color: #d9f99d;
  color: #2d2d2d;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
 
}

button:hover 
{
  background-color: #c1f080;
}

#weatherBox 
{
  background-color: #f9e6ff;
  border: 2px solid #b3ffc8;
  padding: 25px;
  width: 300px;
  margin: 30px auto 0;
  font-size: 18px;
  color: #4b2e5e;
  border-radius: 10px;
  box-shadow: 0 0 12px #baffde88;
}

```

## JavaScript Code:
```
async function getWeather() {
  let cityName = document.getElementById("cityInput").value;
  let weatherBox = document.getElementById("weatherBox");

  if (cityName === "") {
    weatherBox.textContent = "Please enter a city name.";
    return;
  }

  let url = "https://wttr.in/" + cityName + "?format=%l+%t+%C";

  try {
    let response = await fetch(url);
    let data = await response.text(); 

    let parts = data.split(" ");

    let location = parts[0];
    let temperature = parts[1];
    let description = parts.slice(2).join(" "); 

    weatherBox.innerHTML = `
      <p><strong>Location:</strong> ${location}</p>
      <p><strong>Temperature:</strong> ${temperature}</p>
      <p><strong>Description:</strong> ${description}</p>
    `;
  } catch (error) {
    weatherBox.textContent = "Could not fetch weather. Try again.";
  }
}


```

## Output:
<img width="1919" height="1005" alt="image" src="https://github.com/user-attachments/assets/56f60ef9-40c3-4555-b7be-b1ea666d0340" />

## Result:
A mini module that successfully uses Promises and async/await to handle real-time API data, reinforcing asynchronous JavaScript patterns in a practical context.
