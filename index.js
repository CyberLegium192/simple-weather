const submit = document.getElementById('submit')
const display = document.querySelector('.data-display')
const weather = document.querySelector('.icon-weather')
const celcius = document.querySelector('.celcius')
const kota = document.querySelector('.name_input')
const humidity = document.querySelector('.humidity')
const wind = document.querySelector('.wind')
const ri = document.querySelector('.ri')
const riwind = document.querySelector('.riwind')



weather.style.display = 'none'
submit.onclick = () => {
  weather.style.display = 'block'
  const input = document.getElementById('search').value
  fetch(`https://api.weatherapi.com/v1/current.json?key=e049541048744b6eb88220245231707&q=${input}&aqi=no`)
  .then(resp => resp.json())
  .then(data => {
    const noval = data.current
    console.log(data)
    console.log(noval)
    celcius.innerHTML = `${noval.temp_c}°C`,
    kota.innerHTML = data.location.name,
    humidity.innerHTML = `${noval.humidity}%<span>humidity</span>`
    wind.innerHTML = `${noval.wind_kph}Km/h<span>Wind Speed</span>`
    ri.classList.add('ri-mist-fill')
    riwind.classList.add('ri-windy-fill')
    
    if (noval.condition.text == 'Mist') {
      weather.src = 'https://cdn-icons-png.flaticon.com/512/4151/4151022.png'
    }
    if(noval.condition.text == 'Partly cloudy'){
      weather.src = 'https://cdn-icons-png.flaticon.com/128/5370/5370498.png'
    }
    if(noval.condition.text == 'Clear'){
      weather.src = 'https://cdn-icons-png.flaticon.com/128/6581/6581490.png'
    }
    if(noval.condition.text == 'Overcast'){
      weather.src = 'https://cdn-icons-png.flaticon.com/128/6316/6316087.png'
    }
    if(noval.condition.text == 'Sunny'){
      weather.src = 'https://cdn-icons-png.flaticon.com/128/2570/2570483.png'
    }
    if(noval.condition.text == 'Cloudy'){
      weather.src = 'https://cdn-icons-png.flaticon.com/128/414/414927.png'
    }
    if(noval.condition.text == 'Patchy rain possible'){
      weather.src = 'https://cdn-icons-png.flaticon.com/128/6649/6649337.png'
    }
    if(noval.condition.text == 'Moderate or heavy rain shower'){
      weather.src = 'https://cdn-icons-png.flaticon.com/128/4834/4834677.png'
    }
    if(noval.condition.text == 'Light rain shower'){
      weather.src = 'https://cdn-icons-png.flaticon.com/128/1959/1959338.png'
    }
    if(noval.condition.text == 'Light rain'){
      weather.src = 'https://cdn-icons-png.flaticon.com/128/1959/1959338.png'
    }
  })
  
}
