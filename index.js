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
humidityElemen.innerhtml ='${response.data.condition.humidity}%';
windspeedElement.innerhtml = Document.querySelector = '${response.data.wind.speed}km/h';
timeElement.innerhtml ='${date.getDay()}'; '${date.getHours()}';'${date.getMinutes()}';'${date.getseconds()}';
iconElement.innerHTML =  `<img src="${response.data.condition.icon_url}" class="weather-app-icon" />`;