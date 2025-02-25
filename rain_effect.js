function strop(cleft, ctop, d) {
    var drop = document.createElement('div');
    drop.className = 'punct';
    drop.style.left = cleft + 'px';
    drop.style.top = ctop + 'px';
    drop.id = d;
    document.getElementById('content').appendChild(drop);
}

function randomFromInterval(from, to) {
    return Math.floor(Math.random() * (to - from + 1) + from);
}
var n, interval;

function newDrop() {
    var x = randomFromInterval(20, 480),
        y = randomFromInterval(10, 50);
    strop(x, y, n);
    n--;
    if (n > 0) {
        setTimeout(newDrop, 500);
    }
}

function start() {
    n = 30;
    newDrop();
    interval = setInterval(function() {
        var drops = document.getElementsByClassName('punct'),
            newY;
        if (drops.length == 0) {
            clearInterval(interval);
            return;
        }
        for (var i = 0; i < drops.length; i++) {
            newY = drops[i].offsetTop + 2;
            if (newY > drops[i].parentNode.offsetHeight) {
                drops[i].parentNode.removeChild(drops[i]);
            }
            else {
                drops[i].style.top = newY + 'px';
            }
        }
    }, 30);
}