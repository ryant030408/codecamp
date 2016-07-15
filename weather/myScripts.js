//var temp;
var loc;
var icon;
var celfar = "&deg;f";

var lat;
var long;
var apiKey = "8f4effd0d0aa6c46b7eaec32aea48237";

function updateByZip(zip) {
    var url = "http://api.openweathermap.org/data/2.5/weather?zip=" + zip + "&APPID=8f4effd0d0aa6c46b7eaec32aea48237&units=imperial";
    sendRequest(url);
}

function updateByGeo(lat, lon) {
    var url = "http://api.openweathermap.org/data/2.5/weather?" + "lat=" + lat + "&" + "lon=" + lon + "&APPID=8f4effd0d0aa6c46b7eaec32aea48237&units=imperial";
    sendRequest(url);
}

function sendRequest(url) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var data = JSON.parse(xmlhttp.responseText);
            var weather = {};
            weather.temp = data.main.temp;
            weather.loc = data.name;
            weather.icon = data.weather[0].icon;
            temps = weather.temp.toFixed(2);
            update(weather);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function update(weather) {
    temp.innerHTML = temps;
    loc.innerHTML = weather.loc;
    icon.src = "http://openweathermap.org/img/w/" + weather.icon + ".png";
    document.getElementById("temps").innerHTML = celfar;
    if(weather.icon.charAt(2) == 'd'){
        document.getElementById("all").style.backgroundColor= "#ff5e00";
    }else{
        document.getElementById("all").style.backgroundColor= "#1f1512";
        document.getElementById("all").style.color = "white"
    }
}

function showPosition(position) {
    updateByGeo(position.coords.latitude, position.coords.longitude);
}
window.onload = function () {
    temp = document.getElementById("temperature");
    loc = document.getElementById("location");
    icon = document.getElementById("icons");
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else {
        var zip = window.prompt("Enter Zip");
        updateByZip(zip);
    }
}



function tChange() {
    if (celfar == "&deg;f") {
        celfar = "&deg;c"
        document.getElementById("temps").innerHTML = celfar;
        temp.innerHTML = (((temps - 32) * 5) / 9).toFixed(2);
    }else{
        celfar = "&deg;f"
        document.getElementById("temps").innerHTML = celfar;
        temp.innerHTML = temps;
    }
}