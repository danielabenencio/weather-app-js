let baseUrl = 'https://api.openweathermap.org/data/2.5/weather'
let api_key = '5fdeecad3940f2f2125fa86071f6130e'
let kelvin = 273.15

document.getElementById("searchButton").addEventListener('click', () => {
    const city = document.getElementById("entryCity").value
    if(city){
        fetchWeatherData(city)
    }
})

function fetchWeatherData(city) {
    fetch(`${baseUrl}?q=${city}&appid=${api_key}`)
        .then(data => data.json())
        .then(data => showWeatherData(data))
    
}

function showWeatherData(data) {
    const divWeatherData = document.getElementById('weatherData')
    divWeatherData.innerHTML= ''

    const cityName= data.name;
    const countryName = data.sys.country;
    const temperature = data.main.temp;
    const humidity = data.main.humidity;
    const description = data.weather[0].description;
    const icon = data.weather[0].icon
    

    const cityTitle = document.createElement("h2")
    cityTitle.textContent = `${cityName}, ${countryName}`

    const temperatureInfo = document.createElement("p")
    temperatureInfo.textContent = `The temperature is: ${Math.floor(temperature-kelvin)}°C`

    const humidityInfo = document.createElement("p")
    humidityInfo.textContent = `The humidity is: ${humidity}%`

    const iconInfo = document.createElement('img')
    iconInfo.src = `https://openweathermap.org/img/wn/${icon}@2x.png`

    const descriptionInfo = document.createElement("p")
    descriptionInfo.textContent = description

    divWeatherData.appendChild(cityTitle)
    divWeatherData.appendChild(temperatureInfo)
    divWeatherData.appendChild(humidityInfo)
    divWeatherData.appendChild(iconInfo)
    divWeatherData.appendChild(descriptionInfo)
}