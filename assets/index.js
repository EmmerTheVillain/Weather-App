const apiKey = '0681a94213a39f2ef56ec76bb4166bc5';

//event listener to pull in city value from search form
const searchForm = document.getElementById('search-form');
searchForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const cityInput = document.getElementById('city-input');
  console.log(cityInput);
  const city = cityInput.value;
  fetchForecast(city);
});
async function fetchForecast(city) {
    //API URL
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;
    try {
        // fetch api
        const res = await fetch(apiUrl);
        // parses the response
        const data = await res.json();
        // puts parsed data into a function
        runForecast(data);
        console.log(data);
    } catch (error) {
      // log for errors
      console.log('Error:', error);
    }
}
function runForecast(data) {
    // pull variables from parsed json
    var city = data.city.name;
    var dataObj = data.list[0];
    var dateOutput = dataObj.dt * 1000;
    var dateObj = new Date(dateOutput).toDateString();
    $('#city-title').text(city+', '+dateObj);
    var currentTemp = dataObj.main.temp;
    var currentHumi = dataObj.main.humidity;
    var currentWind = dataObj.wind.speed;
    // pass weather data to html
    $('#today-temp').text('Temp: '+currentTemp+'°F');
    $('#today-wind').text('Wind: '+currentWind+'mph');
    $('#today-hum').text('Humidity: '+currentHumi+'%');
    // icon url display
};
