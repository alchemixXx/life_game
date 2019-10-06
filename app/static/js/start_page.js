
let grid_select = false;
function load () {
if (grid_select === false) {
start_page();
} else
    {game_grid(size_grid);
}
}

load ();


// прорисовка стартовой страницы
function start_page() {
//создание поля отображения стартовой страницы
var ctx = document.querySelector("canvas").getContext("2d"),
mouse_click = document.getElementById('play');
mouse_click.addEventListener('click', event_click);
function event_click(mouse_click) {
if (mouse_click.clientX > p12x8.x && mouse_click.clientX < p12x8.x+110 && mouse_click.clientY < p12x8.y && mouse_click.clientY > p12x8.y-50) {
call_grid (8,true);
} else if (mouse_click.clientX > p15х10.x && mouse_click.clientX < p15х10.x+150 && mouse_click.clientY < p15х10.y && mouse_click.clientY > p15х10.y-50){
call_grid (7,true);
} else if (mouse_click.clientX > p18х12.x && mouse_click.clientX < p18х12.x+150 && mouse_click.clientY < p18х12.y && mouse_click.clientY > p18х12.y-50){
call_grid (6,true);
} else if (mouse_click.clientX > p30х20.x && mouse_click.clientX < p30х20.x+150 && mouse_click.clientY < p30х20.y && mouse_click.clientY > p30х20.y-50){
call_grid (5,true);
} else if (mouse_click.clientX > p36х24.x && mouse_click.clientX < p36х24.x+150 && mouse_click.clientY < p36х24.y && mouse_click.clientY > p36х24.y-50){
call_grid (4,true);
} else if (mouse_click.clientX > p45x30.x && mouse_click.clientX < p45x30.x+150 && mouse_click.clientY < p45x30.y && mouse_click.clientY > p45x30.y-50){
call_grid (3,true);
} else if (mouse_click.clientX > p60x40.x && mouse_click.clientX < p60x40.x+150 && mouse_click.clientY < p60x40.y && mouse_click.clientY > p60x40.y-50){
call_grid (2,true);
} else if (mouse_click.clientX > p90x60.x && mouse_click.clientX < p90x60.x+150 && mouse_click.clientY < p90x60.y && mouse_click.clientY > p90x60.y-50){
call_grid (1,true);
} else if (mouse_click.clientX > p180x120.x && mouse_click.clientX < p180x120.x+210 && mouse_click.clientY < p180x120.y && mouse_click.clientY > p180x120.y-50){
call_grid (0,true);
}
else;
}

// функция вызова сетки game_grid
function call_grid (size_grid_param,grid_select_param) {
size_grid = size_grid_param;
grid_select = grid_select_param;
grid_select = true;
ctx.lineWidth = 1;
ctx.fillStyle = "black";
ctx.globalAlpha = 1;
mouse_click.removeEventListener('click', event_click);
return size_grid,grid_select,ctx.lineWidth,load();
}
/*//прорисовка закругленного квадрата
CanvasRenderingContext2D.prototype.roundRect = function (x, y, width, height, radius, fill, stroke) {
    var cornerRadius = { upperLeft: 0, upperRight: 0, lowerLeft: 0, lowerRight: 0 };
    if (typeof stroke == "undefined") {
        stroke = true;
    }
    if (typeof radius === "object") {
        for (var side in radius) {
            cornerRadius[side] = radius[side];
        }
    }

    this.beginPath();
    this.moveTo(x + cornerRadius.upperLeft, y);
    this.lineTo(x + width - cornerRadius.upperRight, y);
    this.quadraticCurveTo(x + width, y, x + width, y + cornerRadius.upperRight);
    this.lineTo(x + width, y + height - cornerRadius.lowerRight);
    this.quadraticCurveTo(x + width, y + height, x + width - cornerRadius.lowerRight, y + height);
    this.lineTo(x + cornerRadius.lowerLeft, y + height);
    this.quadraticCurveTo(x, y + height, x, y + height - cornerRadius.lowerLeft);
    this.lineTo(x, y + cornerRadius.upperLeft);
    this.quadraticCurveTo(x, y, x + cornerRadius.upperLeft, y);
    this.closePath();
    if (stroke) {
        this.stroke();
    }
    if (fill) {
        this.fill();
    }
    }*/

let Game_life = new text_animate(220, 220, 100, 'Игра "ЖИЗНЬ"', 250, 150, 0, "black","black", 50);
let Select_grid = new text_animate(220, 220, 100, 'Выбери сетку игры"', 180, 230, 0, "green","green", 50);
let p12x8 = new text_animate(220, 220, 50, '12х8', 30, 330, 0, "blue","blue", 90);
let p15х10 = new text_animate(220, 220, 50, '15х10', 180, 330, 0, "blue","blue", 50);
let p18х12 = new text_animate(220, 220, 50, '18х12', 355, 330, 0, "blue","blue", 50);
let p30х20 = new text_animate(220, 220, 50, '30х20', 535, 330, 0, "blue","blue", 50);
let p36х24 = new text_animate(220, 220, 50, '36х24', 720, 330, 0, "blue","blue", 50);
let p45x30 = new text_animate(220, 220, 50, '45x30', 40, 430, 0, "blue","blue", 50);
let p60x40 = new text_animate(220, 220, 50, '60x40', 240, 430, 0, "blue","blue", 50);
let p90x60 = new text_animate(220, 220, 50, '90x60', 440, 430, 0, "blue","blue", 50);
let p180x120 = new text_animate(220, 220, 50, '180x120', 640, 430, 0, "blue","blue", 50);



/*// отслеживание места расположения мышки
var mousePosition = document.getElementById('play');
mousePosition.addEventListener('mousemove', mouse_position);
let x=0;
let y=0;*/
/*function mouse_position(mousePosition) {

if (Math.abs(mousePosition.clientX-x) > 40 || Math.abs(mousePosition.clientY-y) > 40 ) {
x=mousePosition.clientX;
y=mousePosition.clientY;
if (mousePosition.clientX > p12x8.x && mousePosition.clientX < p12x8.x+110 && mousePosition.clientY < p12x8.y && mousePosition.clientY > p12x8.y-50) {
ctx.clearRect(0, 260,900 ,800);
p12x8 = new text_animate(220, 220, 50, '12х8', 30, 330, 0, "green","green", 50);
} else if (mousePosition.clientX > p15х10.x && mousePosition.clientX < p15х10.x+150 && mousePosition.clientY < p15х10.y && mousePosition.clientY > p15х10.y-50){
ctx.clearRect(0, 260,900 ,800);
p15х10 = new text_animate(220, 220, 50, '15х10', 180, 330, 0, "green","green", 50);
} else if (mousePosition.clientX > p18х12.x && mousePosition.clientX < p18х12.x+150 && mousePosition.clientY < p18х12.y && mousePosition.clientY > p18х12.y-50){
ctx.clearRect(0, 260,900 ,800);
p18х12 = new text_animate(220, 220, 50, '18х12', 355, 330, 0, "green","green", 50);
} else if (mousePosition.clientX > p30х20.x && mousePosition.clientX < p30х20.x+150 && mousePosition.clientY < p30х20.y && mousePosition.clientY > p30х20.y-50){
ctx.clearRect(0, 260,900 ,800);
p30х20 = new text_animate(220, 220, 50, '30х20', 535, 330, 0, "green","green", 50);
} else if (mousePosition.clientX > p36х24.x && mousePosition.clientX < p36х24.x+150 && mousePosition.clientY < p36х24.y && mousePosition.clientY > p36х24.y-50){
ctx.clearRect(0, 260,900 ,800);
p36х24 = new text_animate(220, 220, 50, '36х24', 720, 330, 0, "green","green", 50);
} else if (mousePosition.clientX > p45x30.x && mousePosition.clientX < p45x30.x+150 && mousePosition.clientY < p45x30.y && mousePosition.clientY > p45x30.y-50){
ctx.clearRect(0, 260,900 ,800);
p45x30 = new text_animate(220, 220, 50, '45x30', 40, 430, 0, "green","green", 50);
} else if (mousePosition.clientX > p60x40.x && mousePosition.clientX < p60x40.x+150 && mousePosition.clientY < p60x40.y && mousePosition.clientY > p60x40.y-50){
ctx.clearRect(0, 260,900 ,800);
p60x40 = new text_animate(220, 220, 50, '60x40', 240, 430, 0, "green","green", 50);
} else if (mousePosition.clientX > p90x60.x && mousePosition.clientX < p90x60.x+150 && mousePosition.clientY < p90x60.y && mousePosition.clientY > p90x60.y-50){
ctx.clearRect(0, 260,900 ,800);
p90x60 = new text_animate(220, 220, 50, '90x60', 440, 430, 0, "green","green", 50);
} else if (mousePosition.clientX > p180x120.x && mousePosition.clientX < p180x120.x+210 && mousePosition.clientY < p180x120.y && mousePosition.clientY > p180x120.y-50){
ctx.clearRect(0, 260,900 ,800);
p180x120 = new text_animate(220, 220, 50, '180x120', 640, 430, 0, "green","green", 50);
}
else;
}
else ;
}*/


// отрисовка плавного отображения текста
function text_animate (dashLen, dashOffset, speed, txt, x, y, i, color, color2, pixels) {
this.dashLen = dashLen;
this.dashOffset = dashOffset;
this.speed = speed;
this.txt = txt;
this.x = x;
this.y = y;
this.i = i;
this.color = color;
this.pixels = pixels;
this.length =txt.length;

ctx.font = `${pixels}px Comic Sans MS, cursive, TSCu_Comic, sans-serif`;
ctx.lineWidth = 5; ctx.lineJoin = "miter"; ctx.globalAlpha = 0.6;
(function loop() {
ctx.strokeStyle = color2
ctx.fillStyle = color;
  ctx.setLineDash([dashLen - dashOffset, dashOffset - speed]); // create a long dash mask
  dashOffset -= speed;                                         // reduce dash length
  ctx.strokeText(txt[i], x, y);                               // stroke letter

  if (dashOffset > 0) requestAnimationFrame(loop);             // animate
  else {
    ctx.fillText(txt[i], x, y);                               // fill final letter
    dashOffset = dashLen;                                      // prep next char
    x += ctx.measureText(txt[i++]).width + ctx.lineWidth;
    ctx.setTransform(1, 0, 0, 1, 0, 1 * Math.random());        // random y-delta
    ctx.rotate(Math.random() * 0.0001);                         // random rotation
    if (i < txt.length) requestAnimationFrame(loop);
  }
})();}


}

// прорисовка сетки
function game_grid(size_grid) {
this.size_grid =size_grid;

var canvas = document.getElementById("play"); // создаем зону прорисовки
var mouse_scroll = document.getElementById('play'); // создаем зону отслеживания прокрутки мыши
var mouse_click = document.getElementById('play'); // создаем зону отслеживания клика мыши
const c = canvas.getContext('2d')
mouse_click.addEventListener('click', event_click);
/*mouse_scroll.addEventListener("wheel", onWheel);*/

// объявим и присвоим начальные значения переменным сетки
var size_grid ; // значение относительной сетки смотри function grid()
var grid_unit =grid(size_grid); // начальное значение ячейки сетки

//зададим зону отрисовки сетки (менять вместе с function grid() )
var play_height = 600; // высота зоны прорисовки
var play_width = 900; // ширина зоны прорисовки

// создадим массив ноликов и еденичек игры
let matrix = matrixArray(play_height/grid_unit,play_width/grid_unit);
this.matrix = matrix;
console.log(this.matrix);
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
function grid(size_grid) {

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
return grid_unit;
}




// отрисовка шариков
function ball()  {

    let balls = document.getElementById('play').getContext('2d');
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
/*function onWheel(e) {
size_grid = size_grid - Math.sign(e.deltaY);
 if (size_grid > 10 ) {size_grid =10;}
 else if (size_grid < 0) {size_grid =0;}
 else
grid();
matrix = matrixArray(play_height/grid_unit,play_width/grid_unit);
ball();
}*/

//вспомогательная функция принта массива в консоль


// отрисовка выбранных пользователем шариков
function event_click(mouse_click) {
let x =  Math.ceil(mouse_click.clientY/grid_unit)-1;
let y =  Math.ceil(mouse_click.clientX/grid_unit)-1;
if (matrix[x][y] == 0) {
matrix[x][y] = 1;
} else matrix[x][y] = 0;
ball();
}
return matrix;

}




// вывод значений
function print(e) {
console.log(e);
}