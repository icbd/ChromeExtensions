/**
 * Created by cbd on 2016/10/3.
 */

function httpRequest(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            callback(xhr.responseText);
        }
    }
    xhr.send();
}


var popupContent = document.getElementById("popupContent");
httpRequest("http://api.jirengu.com/weather.php", function (result) {
    popupContent.innerHTML = "<p>" + result + "</p>";
});