/**
 * Created by cbd on 2016/10/4.
 */

function httpRequest(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            callback(xhr.responseText);
        }
    };

    xhr.onerror = function () {
        callback(false);
    };

    xhr.send();
}

var cityCode = localStorage.cityCode || "CN101020100";
var APIURL = "https://api.heweather.com/x3/weather?key=027990f634c84c258e8c14c8377cf568&cityid=" + cityCode;
httpRequest(APIURL, function (result) {
    if (result) {
        result = JSON.parse(result)['HeWeather data service 3.0'][0];
        var daily_forecast = result['daily_forecast'];

        var weatherTable = document.getElementById("weatherTable");
        var innerHtml = "<tr><th>日期</th><th>最高温</th><th>最低温</th><th>天气</th></tr>";

        for (var i = 0; i < daily_forecast.length; i++) {
            innerHtml += "<tr><td>" +
                daily_forecast[i]['date'] +
                "</td><td>" +
                daily_forecast[i]['tmp']['max'] +
                " °C</td><td>" +
                daily_forecast[i]['tmp']['min'] +
                " °C</td><td>" +
                daily_forecast[i]['cond']['txt_d'] + " 转 " + daily_forecast[i]['cond']['txt_d'] +
                "</td></tr>";
        }

        weatherTable.innerHTML = innerHtml;
        
        document.getElementById('weatherCity').innerHTML = "城市:"+cityCodeMap[localStorage.cityCode];
    }
});