var canvas = document.getElementById("play"); // создаем зону прорисовки
var mouse_scroll = document.getElementById('play'); // создаем зону отслеживания прокрутки мыши
const c = canvas.getContext('2d')
/*elem.addEventListener('click', event_click);*/
mouse_scroll.addEventListener("wheel", onWheel);

var grid_unit = 25;// объявим переменные сетки
var play_height = 600; // высота зоны прорисовки
var play_width = 900; // ширина зоны прорисовки

// функция отрисовки сетки
function draw() {
    c.globalCompositeOperation = 'destination-over';
    c.clearRect(0, 0, play_width, play_height);
    for (let i = 0; i < play_height/grid_unit; i++) {
    for (let j = 0; j < play_width/grid_unit; j++) {
    c.strokeStyle = `rgb(192, 192, 192)`
    c.strokeRect(j * grid_unit, i * grid_unit, grid_unit, grid_unit)
        }
    }

}
requestAnimationFrame(draw);

/*function event_click() {
console.log (pageX);
console.log (pageY);
}*/
// отрисовка шариков
function ball()  {
    var balls = document.getElementById('play').getContext('2d');
    for (var i = 0; i < play_height/grid_unit; i++){
      for (var j = 0; j < play_width/grid_unit; j++){
        balls.strokeStyle = `rgb(192, 192, 192)`
        balls.beginPath();
        balls.arc(grid_unit/2 + j * grid_unit, grid_unit/2 + i * grid_unit, grid_unit/2, 0, Math.PI * 2, true);
        balls.stroke();
      }
    }
}
requestAnimationFrame(ball);

// функция изменения размера сетки

function onWheel(e) {

  var info = document.getElementById('delta');
  grid_unit = grid_unit - e.deltaY/5;

  info.innerHTML = grid_unit;
draw();
ball();

  e.preventDefault ? e.preventDefault() : (e.returnValue = false);
}

