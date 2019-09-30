
//создание поля отображения стартовой страницы
var ctx = document.querySelector("canvas").getContext("2d"),
    dashLen = 220, dashOffset = dashLen, speed = 20,




mouse_click = document.getElementById('play');
mouse_click.addEventListener('click', event_click);

function event_click(mouse_click) {
console.log(mouse_click.clientX, mouse_click.clientY)
if (mouse_click.clientX > p12x8.x && mouse_click.clientX < p12x8.x+110 && mouse_click.clientY < p12x8.y && mouse_click.clientY > p12x8.y-50) {
console.log("p12x8");

} else if (mouse_click.clientX > p15х10.x && mouse_click.clientX < p15х10.x+150 && mouse_click.clientY < p15х10.y && mouse_click.clientY > p15х10.y-50){
console.log("p15х10");
} else if (mouse_click.clientX > p18х12.x && mouse_click.clientX < p18х12.x+150 && mouse_click.clientY < p18х12.y && mouse_click.clientY > p18х12.y-50){
console.log("p18х12");
} else if (mouse_click.clientX > p30х20.x && mouse_click.clientX < p30х20.x+150 && mouse_click.clientY < p30х20.y && mouse_click.clientY > p30х20.y-50){
console.log("p30х20");
} else if (mouse_click.clientX > p36х24.x && mouse_click.clientX < p36х24.x+150 && mouse_click.clientY < p36х24.y && mouse_click.clientY > p36х24.y-50){
console.log("p36х24");
} else if (mouse_click.clientX > p45x30.x && mouse_click.clientX < p45x30.x+150 && mouse_click.clientY < p45x30.y && mouse_click.clientY > p45x30.y-50){
console.log("p45x30");
} else if (mouse_click.clientX > p60x40.x && mouse_click.clientX < p60x40.x+150 && mouse_click.clientY < p60x40.y && mouse_click.clientY > p60x40.y-50){
console.log("p60x40");
} else if (mouse_click.clientX > p90x60.x && mouse_click.clientX < p90x60.x+150 && mouse_click.clientY < p90x60.y && mouse_click.clientY > p90x60.y-50){
console.log("p90x60");
} else if (mouse_click.clientX > p180x120.x && mouse_click.clientX < p180x120.x+210 && mouse_click.clientY < p180x120.y && mouse_click.clientY > p180x120.y-50){
console.log("p180x120");
}
else;
}




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

console.log (p45x30.x, p45x30.y);

// отслеживание места расположения мышки
var mousePosition = document.getElementById('play');
mousePosition.addEventListener('mousemove', mouse_position);
let x=0;
let y=0;
function mouse_position(mousePosition) {

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
}


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
ctx.lineWidth = 5; ctx.lineJoin = "round"; ctx.globalAlpha = 2/3;
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

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function include(url) {
        var script = document.createElement('script');
        script.src = url;
        document.getElementsByTagName('head')[0].appendChild(script);
    }