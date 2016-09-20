(function () {
    var now = new Date(),
        hourDeg = now.getHours() / 12 * 360 + now.getMinutes() / 60 * 30, // 30 = 360/12
        minuteDeg = now.getMinutes() / 60 * 360 + now.getSeconds() / 60 * 6,// 6 = 360/60
        secondDeg = now.getSeconds() / 60 * 360,
        stylesDeg = [
            "@keyframes rotate-hour{from{transform:rotate(" + hourDeg + "deg);}to{transform:rotate(" + (hourDeg + 360) + "deg);}}",
            "@keyframes rotate-minute{from{transform:rotate(" + minuteDeg + "deg);}to{transform:rotate(" + (minuteDeg + 360) + "deg);}}",
            "@keyframes rotate-second{from{transform:rotate(" + secondDeg + "deg);}to{transform:rotate(" + (secondDeg + 360) + "deg);}}"
        ].join("");

    document.getElementById("embededByJS").innerHTML = stylesDeg;

})();