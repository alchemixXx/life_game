var grid = document.getElementById("play");
var bg =      new   Image();
var context = play.getContext('2d');
document.addEventListener('mousemove', playerMove);
bg.src = "app/static/images/Simple-Blue-Background.jpg";

    // отрисовка сетки
    function draw() {

    context.drawImage(bg, 0, 0); // прорисовка бэкграунда

    } requestAnimationFrame(draw);
    score();