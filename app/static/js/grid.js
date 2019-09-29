var canvas = document.getElementById("play"); // создаем зону прорисовки
var mouse_scroll = document.getElementById('play'); // создаем зону отслеживания прокрутки мыши
var mouse_click = document.getElementById('play'); // создаем зону отслеживания клика мыши
const c = canvas.getContext('2d')
mouse_click.addEventListener('click', event_click);
mouse_scroll.addEventListener("wheel", onWheel);

// объявим и присвоим надальные значения переменным сетки
var size_grid = 3; // значение относительной сетки смотри function grid()
var grid_unit = 20; // начальное значение ячейки сетки

//зададим зону отрисовки сетки (менять вместе с function grid() )
var play_height = 600; // высота зоны прорисовки
var play_width = 900; // ширина зоны прорисовки

// создадим массив ноликов и еденичек игры
var matrix = matrixArray(play_height/grid_unit,play_width/grid_unit);
function matrixArray(rows,columns){
  var arr = new Array();
  for(var i=0; i<rows; i++){
    arr[i] = new Array();
    for(var j=0; j<columns; j++){

      arr[i][j] = 0;
    }
  }
  return arr;
}
// зададим шаг сетки
function grid() {

    switch (size_grid) {
  case 0:
        grid_unit = 5;
        break;
  case 1:
        grid_unit = 10;
        break;
  case 2:
        grid_unit = 15;
        break;
  case 3:
        grid_unit = 20;
        break;
  case 4:
        grid_unit = 25;
        break;
  case 5:
        grid_unit = 30;
        break;
  case 6:
        grid_unit = 50;
        break;
  case 7:
        grid_unit = 60;
        break;
  case 8:
        grid_unit = 75;
        break;
  case 9:
        grid_unit = 100;
        break;
  case 10:
        grid_unit = 150;
        break;
  default:
        grid_unit = grid_unit;
        break;

}
}


function draw() {

}


// отрисовка шариков
function ball()  {

    var balls = document.getElementById('play').getContext('2d');
    balls.globalCompositeOperation = 'destination-over';
    balls.clearRect(0, 0, play_width, play_height);
    for (var i = 0; i < play_height/grid_unit; i++){
      for (var j = 0; j < play_width/grid_unit; j++){
      if (matrix[i][j] === 1) {
      balls.strokeStyle = `black`;
      balls.beginPath();
      balls.arc(grid_unit/2 + j * grid_unit, grid_unit/2 + i * grid_unit, grid_unit/2, 0, Math.PI * 2, true); //прорисовка шара
      balls.fill();
      }
      else;
      }
    }
  for (let i = 0; i < play_height/grid_unit; i++) {
    for (let j = 0; j < play_width/grid_unit; j++) {
    balls.strokeStyle = `rgb(192, 192, 192)`
    balls.strokeRect(j * grid_unit, i * grid_unit, grid_unit, grid_unit)
        }
    }
}
requestAnimationFrame(ball);

// изменение размера сетки
function onWheel(e) {
size_grid = size_grid - Math.sign(e.deltaY);
 if (size_grid > 10 ) {size_grid =10;}
 else if (size_grid < 0) {size_grid =0;}
 else
grid();
matrix = matrixArray(play_height/grid_unit,play_width/grid_unit);
ball();
}

//вспомогательная функция принта массива в консоль
function print_grid_array() {
console.log (matrix);
}

// отрисовка выбранных пользователем шариков
function event_click(mouse_click) {

console.log(mouse_click.clientX, mouse_click.clientY)
var x =  Math.ceil(mouse_click.clientY/grid_unit)-1;
var y =  Math.ceil(mouse_click.clientX/grid_unit)-1;
console.log (x,y);
if (matrix[x][y] == 0) {
matrix[x][y] = 1;
} else matrix[x][y] = 0;

ball();
}
// передаем значения массива в бэк по кнопке
/*function grid_back() {
getJSON
}*//*function grid_back() {
getJSON
}*/
