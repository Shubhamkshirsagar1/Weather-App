let result = document.getElementById("result");
let city = document.getElementById("city");
let searchButton = document.getElementById("search-button");


let getWeather = () => {
    let cityValue = city.value;

    // If input feild is Empty
    if (cityValue === "") {
        result.innerHTML = `<h3 class="errmsg"> PLEASE ENTER A CITY NAME..<h3>`
    }
    // If input feild is Not Empty
    else {

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}`;
        console.log(url);
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                console.log(data.weather[0].icon);
                console.log(data.weather[0].main);
                console.log(data.weather[0].description);
                console.log(data.name);
                console.log(data.main);
                console.log(data.main.temp_min);
                console.log(data.main.temp_max);
                console.log(data.main.temp_max);

                result.innerHTML = `
                        <h2> ${data.name}</h2>

                        <h4 class="weather"> ${data.weather[0].main}</h4>

                        <h4 class="description"> ${data.weather[0].description}</h4>

                        <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png";<br>

                        <h1> ${(data.main.temp - 273.15).toFixed(2)}&#176C</h1>

                        <div class="temp-container">
                            <div>
                                <h4 class="title">min</h4>
                                <h4 class="temp">${(data.main.temp_min- 273.15).toFixed(2)}&#176C</h4>
                            </div>

                            <div>
                                <h4 class="title">max</h4>
                                <h4 class="temp">${(data.main.temp_max - 273.15).toFixed(2)}&#176C</h4>
                            </div>
                        </div>

                        
                    `
                // If city name is not Valid
            }).catch(() => {
                result.innerHTML = `<h3 class="errmsg"> CITY NOT FOUND </h3>`
            })
    }
}

searchButton.addEventListener("click", getWeather);