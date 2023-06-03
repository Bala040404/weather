let commonCities = ["Chennai", "Mumbai", "Delhi", "Kolkata"];
let rand = Math.floor(Math.random() * 3) + 1;
let temper = document.querySelector("#temp");
let humidity = document.querySelector("#hm");
let windSpeed = document.querySelector("#ws");
let randcity = document.querySelector("#randcity");

function weatherData(city) {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '1c142d51f3msh60cccd485fb45f3p143925jsn13f34d093925',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };


    let add = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city;
    let x = fetch(add, options)

    x.then(function (res) {
        return res.json();
    }).then(function (dat) {
        let text = `${city}`;
        randcity.innerText = text;
        temper.innerText = dat.temp;
        humidity.innerText = dat.humidity;
        windSpeed.innerText = dat.wind_speed;

        console.log();
    }).catch(function (er) {
        console.log(er);
    })
}

weatherData(commonCities[rand]);



let form = document.querySelector("#form");
let inp = document.querySelector("#inp");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    let city = inp.value;
    weatherData(city);

})









// fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));
