let country, region, city;
const time = document.getElementById("user_time");

const today = new Date();
const hours = today.getHours();
const minutes = today.getMinutes();
const seconds = today.getSeconds();
const now = `
    ${hours}시 ${minutes < 10 ? `0${minutes}` : minutes}분 ${seconds < 10 ? `0${seconds}` : seconds}초
`

$.getJSON("https://extreme-ip-lookup.com/json", function (data) {
    console.log(data);
    $("#user_country").text(data.country);
    $("#user_region").text(data.region);
    $("#user_city").text(data.city);

    country = data.country;
    region = data.region;
    city = data.city;
    localStorage.setItem("Country", country);
    localStorage.setItem("Region", region);
    localStorage.setItem("City", city);
});

time.innerHTML = now;
localStorage.setItem("Time", now);