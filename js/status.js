/**
 * Created by cbd on 2016/10/4.
 */


// GET请求
function httpRequest(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            callback(true);
        }
    };
    xhr.onerror = function () {
        callback(false);
    };
    xhr.send();
}


var URL = 'https://www.google.com.hk/';


// 5000毫秒 间隔
setInterval(function () {
    httpRequest(URL, function (status) {
        chrome.browserAction.setIcon(
            {
                path: 'images/' + (status ? 'yes.png' : 'no.png')
            }
        );
    })
}, 5000);