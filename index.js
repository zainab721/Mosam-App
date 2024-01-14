function refreshweather(response)
{
let temperatureElement = document.querySelector("#temperature");
let temperature = response.data.temperature.current;
let cityElement = Document.querySelector("#city");
let descricriptionElement = Document.querySelector("#discription");
let humidityElement = Document.querySelector("#humidity");
let windspeedElement = Document.querySelector("#wind-speed");
let timeElement = Document.querySelector("#time");
let date = new Date(response.data.time * 1000);
let iconElement = Document.querySelector("#icon");


cityElement.innerHTML = response.data.city;
temperatureElement.innerhtml = Math.round(temperature); 
descricriptionElement.innerhtml = response.data.condition.descricription;
humidityElemen.innerhtml ='${response.data.condition.humidity}%';
windspeedElement.innerhtml  = '${response.data.wind.speed}km/h';
timeElement.innerhtml = formatDate(date);
iconElement.innerHTML =  `<img src="${response.data.condition.icon_url}" class="weather-app-icon" />`;
}

function displayTemperature(response) {
    let temperatureElement = document.queryselactor("#temperture");
    let temperature = Math.round(response.data.temperature.current);
    let city = response.data.city;
    temperatureElement.innerHTML = "temperature in Sydney is ${temperature}°C";
  
  cityElement.innerHTML = response.data.city;
  temperatureElement.innerhtml = Math.round(temperature); 
}

function formatDate(date)
{
    let day = date.getDay();
    let minutes = date.getMinutes();
    let getHours = date.getHours();

    let days =   [
        "Sunday" ,   
        "Sunday" ,   
        "Monday" ,   
        "Tuesday" ,   
        "Wednsday" ,   
        "Thursday" ,   
        "Friday" ,  
        "Saturday" ,  
     ];
    }

    let day = days [date.getDay()];
   
   if (minutes < 10 ) {
   minutes = '0${minutes}';
   }
       return  '$(day) $(hour) $(minutes)';

       function searchCity(city); {
        let apiKey = "e095dc345c934o5ae8fb54ctcbb40bf0";
        let apiUrl ="https://api.shecodes.io/weather/v1/current?query=Lisbon&key=e095dc345c934o5ae8fb54ctcbb40bf0&units=metric"
          
         axios.get(apiUrl).then(refreshweather);
       }
    function handlesearchubmit(event) {
         event.preventDefault();

         searchCity(searchInput.Value);

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Paris");
    }