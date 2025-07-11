async function getWeather() {
  let cityName = document.getElementById("cityInput").value;
  let weatherBox = document.getElementById("weatherBox");

  if (cityName === "") {
    weatherBox.textContent = "Please enter a city name.";
    return;
  }

  let url = "https://wttr.in/" + cityName + "?format=j1";

  try {
    let response = await fetch(url);
    let data = await response.json();

    let location = cityName;
    let temperature = data.current_condition[0].temp_C + "°C";
    let description = data.current_condition[0].weatherDesc[0].value;

    weatherBox.innerHTML = `
      <p><strong>Location:</strong> ${location}</p>
      <p><strong>Temperature:</strong> ${temperature}</p>
      <p><strong>Description:</strong> ${description}</p>
    `;
  } catch (error) {
    weatherBox.textContent = "Could not fetch weather. Try again.";
  }
}
