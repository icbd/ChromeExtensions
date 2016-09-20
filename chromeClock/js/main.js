//do it
showClock(document.getElementById('clockDiv'));


//绘制时间, 每隔1秒调用一次
function showClock(clockDiv) {
    var now = new Date();
    var h = now.getHours();
    var m = now.getMinutes();
    var s = now.getSeconds();

    var time = formatNum(h) + ":" + formatNum(m) + ":" + formatNum(s);
    clockDiv.innerHTML = time;

    setTimeout(
        function () {
            showClock(clockDiv)
        }
        ,
        1000
    );
}


//格式化时间, 补齐为两位数
function formatNum(num) {
    if (num < 10) {
        return '0' + num;
    }
    return num;
}