var logo = document.getElementById('s_lg_img');
logo.addEventListener('mouseover', move, false);

function move(event) {
    // 略小于可视区域
    var w = document.body.clientWidth * 0.8;
    var h = document.body.clientHeight * 0.8;

    // 当前(触发mouseover事件时)的鼠标坐标
    var curX = event.clientX;
    var curY = event.clientY;

    var nowX = curX - getRandom();
    var nowY = curY - getRandom();

    // 保证logo在可视区域内
    if (nowX < 0) {
        nowX *= -1;
    } else if (nowX > w) {
        nowX -= w;
    }

    if (nowY < 0) {
        nowY *= -1;
    } else if (nowY > h) {
        nowY -= h;
    }

    logo.style.position = 'fixed';
    logo.style.left = nowX + 'px';
    logo.style.top = nowY + 'px';
}

/**
 * 随机整数 [-50,50)
 * @returns {number}
 */
function getRandom() {
    return Math.floor(Math.random() * 100 - 50);
}