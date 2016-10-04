/**
 * Created by cbd on 2016/10/4.
 */

// 取出存储的城市代码, 若取不到就设置为上海的
var cityCode = localStorage.cityCode || "CN101020100";

// 将select选中为cityCode
var querySelectorValue = "option[value=" + cityCode + "]";
var selected = document.querySelector(querySelectorValue);
selected.selected = "selected";
console.log(selected);


var saveBtn = document.getElementById('saveBtn');
saveBtn.onclick = function () {
    localStorage.cityCode = document.getElementById("select").value;

    alert("城市:" + cityCodeMap[localStorage.cityCode]);
};

