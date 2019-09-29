

var ctx = document.querySelector("canvas").getContext("2d"),
    dashLen = 220, dashOffset = dashLen, speed = 20,
    txt = 'Игра "ЖИЗНЬ"', x = 250, y=200, i = 0;
     txt2 = 'Выбери сетку Игры', x2 = 250, y2=400, i2 = 0;


ctx.font = "50px Comic Sans MS, cursive, TSCu_Comic, sans-serif";
ctx.lineWidth = 5; ctx.lineJoin = "round"; ctx.globalAlpha = 2/3;


function draw() {
text_animate(220, 220, 100, 'Игра "ЖИЗНЬ"', 250, 150, 0, "black");
text_animate(220, 220, 100, 'Выбери сетку игры"', 180, 230, 0, "green");
text_animate(220, 220, 50, '12х8  15х10  8х10  18х12  30х20', 20, 330, 0, "blue");
text_animate(220, 220, 50, '36х24  45x30  60x40  90x60  ', 60, 430, 0, "blue");
}

function text_animate (dashLen, dashOffset, speed, txt, x, y, i, color) {
(function loop() {
ctx.strokeStyle = ctx.fillStyle = color;
  ctx.setLineDash([dashLen - dashOffset, dashOffset - speed]); // create a long dash mask
  dashOffset -= speed;                                         // reduce dash length
  ctx.strokeText(txt[i], x, y);                               // stroke letter

  if (dashOffset > 0) requestAnimationFrame(loop);             // animate
  else {
    ctx.fillText(txt[i], x, y);                               // fill final letter
    dashOffset = dashLen;                                      // prep next char
    x += ctx.measureText(txt[i++]).width + ctx.lineWidth * Math.random();
    ctx.setTransform(1, 0, 0, 1, 0, 3 * Math.random());        // random y-delta
    ctx.rotate(Math.random() * 0.005);                         // random rotation
    if (i < txt.length) requestAnimationFrame(loop);
  }
})();}


requestAnimationFrame(draw)