const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "ff27213ce6ee7bcb13c4a62ac935e6c8";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
      });
}
function onGeoError(){
    // alert("cant")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
// lat = 37.509593336267024
// lng = 127.03639193027861
// api key : ff27213ce6ee7bcb13c4a62ac935e6c8

// api.openweathermap.org/data/2.5/weather?lat=37.5108295&lon=127.0292881&appid=ff27213ce6ee7bcb13c4a62ac935e6c8