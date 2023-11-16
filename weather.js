let search = document.querySelector('.search-icon')
let weathericon = document.querySelector('.weather-icon')
let humidicon = document.querySelector('#humidicon')
let tempicon1 = document.querySelector('#tempicon1')
let tempicon2 = document.querySelector('#tempicon2')
let windicon = document.querySelector('#windicon')
async function check(city) {
    let api_key = "88c42d6c7776c56c9c7cff80d6fa8af0"
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
    let result = await fetch(`${url}`).then((response) => { return response.json() }).catch()
    console.log(result)
    
    humidicon.src = 'humidity.png'
    tempicon1.src = '/webd/Javascript/project/photo/thermometer.png'
    tempicon2.src = '/webd/Javascript/project/photo/temperature.png'
    windicon.src = '/webd/Javascript/project/photo/wind.png'
    document.querySelector('#humid').innerHTML = ` ${result.main.humidity}%`
    document.querySelector('#location').innerHTML = `${result.name}`
    let tempvalue =result.main.temp
    tempvalue = tempvalue - 273.15
    document.querySelector('#temp').innerHTML = `${Math.floor(tempvalue)}<sup>°C</sup><br> ${result.weather[0].main}`
    document.querySelector('#feels-like').innerHTML = `Feels like ${Math.floor(result.main.feels_like-273.15)}<sup>°C</sup>`
    document.querySelector('#coord-lat').innerHTML = Math.round(result.coord.lat)
    document.querySelector('#coord-lon').innerHTML = Math.round(result.coord.lon)
    document.querySelector('#temp-min').innerHTML =  `${Math.floor(result.main.temp_min - 273.15)}<sup>°C</sup>`
    document.querySelector('#temp-max').innerHTML = `${Math.floor(result.main.temp_max - 273.15)}<sup>°C</sup>`
    document.querySelector('#wind-speed').innerHTML = `${result.wind.speed} km/h`
    document.querySelector('#wind-deg').innerHTML = `${result.wind.deg}<sup>°</sup>`
    

    switch (result.weather[0].main) {
        case 'Clouds':
            weathericon.src = '/webd/Javascript/project/photo/cloudy.png'
            break;
        case 'Clear':
            weathericon.src = '/webd/Javascript/project/photo/sun.png'
            break;
        case 'Rain':
            weathericon.src = '/webd/Javascript/project/photo/weather.png'
            break;
        case 'Mist':
            weathericon.src = '/webd/Javascript/project/photo/mist.png'
            break;
        case 'Snow':
            weathericon.src = '/webd/Javascript/project/photo/winter-season.png'
            break;
        case 'Smoke':
            weathericon.src = '/webd/Javascript/project/photo/smoke.png'
            break;

        case 'Haze':
            weathericon.src = '/webd/Javascript/project/photo/haze.png'
            break;

        case 'Fog':
            weathericon.src = '/webd/Javascript/project/photo/fog.png'
            break;

        case 'Thunderstorm':
            weathericon.src = '/webd/Javascript/project/photo/thunderstorm.png'
            break;
    }
}
    let inputcity = document.querySelector('.search-place')
    document.querySelector('.search-icon').addEventListener('click', () => {
        check(inputcity.value)
    })
    const date = new Date();

    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    const currdate = date.toLocaleDateString('en-IN', options);
    document.querySelector('.time').innerHTML = `${date.getHours()} hr ${date.getMinutes()} min`
    document.querySelector('.date').innerHTML = currdate
