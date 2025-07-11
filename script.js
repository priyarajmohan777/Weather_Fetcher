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

    // wttr.in returns plain text in this format: "CityName +Temperature +Condition"
    weatherBox.innerHTML = `<strong>Weather:</strong><br>${data}`;
  } catch (error) {
    weatherBox.textContent = "Could not fetch weather. Try again.";
  }
}
