var grid = document.getElementById("grid");
var bg =      new   Image();
var context = grid.getContext('2d');
document.addEventListener('mousemove', playerMove);
bg.src = "app/static/images/Simple-Blue-Background.jpg";

    // отрисовка сетки
    function draw() {

    context.drawImage(bg, 0, 0); // прорисовка бэкграунда

    }
    requestAnimationFrame(draw);
