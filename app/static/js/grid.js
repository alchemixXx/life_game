var canvas = document.getElementById("play");
const c = canvas.getContext('2d')
elem.addEventListener('click', event_click);

function draw() {
event_click();
    for (let i = 0; i < 30; i++) {
    for (let j = 0; j < 30; j++) {
    c.strokeStyle = `rgb(192, 192, 192)`
    c.strokeRect(j * 40, i * 40, 40, 40)
        }
    }
}
requestAnimationFrame(draw);

function event_click() {
console.log (pageX);
console.log (pageY);
}

/*function ball()  {

}*/


