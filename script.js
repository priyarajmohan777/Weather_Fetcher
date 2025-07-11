async function getWeather() 
{
  let cityInputBox = document.getElementById("cityInput")
  let cityName = cityInputBox.value

  let weatherOutput = document.getElementById("weatherBox")

  if (cityName === "") 
  {
    weatherOutput.textContent = "Enter a city first"
    return
  }

  let fullUrl = "https://wttr.in/" + cityName + "?format=j1"

  try 
  {
    let response = await fetch(fullUrl)
    let data = await response.json()

    let current = data.current_condition[0]
    let area = data.nearest_area[0]

    let temp = current.temp_C
    let desc = current.weatherDesc[0].value
    let place = area.areaName[0].value

    weatherOutput.innerHTML = "Location: " + place + "<br>Temperature: " + temp + "°C<br>Description: " + desc
  } 

  catch (error) 
  {
    weatherOutput.textContent = "Could not fetch weather"
  }
}
