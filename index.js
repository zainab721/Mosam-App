function refreshweather(response)
{
let temperatureElement = document.querySelector("#temperature");
let temperature = response.data.temperature.current;
let cityElement = Document.querySelector("#city");
let descricriptionElement = Document.querySelector("#discription");







cityElement.innerHTML = response.data.city;
temperatureElement.innerhtml = Math.round(temperature); 
descricriptionElement.innerhtml = response.data.condition.descricription;
humidityElemen.innerhtml ='${response.data.condition.humidity}%';
