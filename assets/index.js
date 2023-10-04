const apiKey = '0681a94213a39f2ef56ec76bb4166bc5';

//event listener to pull in city value from search form
const searchForm = document.getElementById('search-form');
searchForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const cityInput = document.getElementById('city-input');
  const city = cityInput.value;
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
        displayForecast(data);
        console.log(data)
    } catch (error) {
      // log for errors
      console.log('Error:', error);
    }
}