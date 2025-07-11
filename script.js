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
