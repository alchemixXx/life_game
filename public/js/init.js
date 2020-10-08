window.addEventListener('load', init, false);

function init() {

scene();
/*scenemenu();*/

let_there_be_light(scene);
board();
background();
controls();
ballsView();
console.log(renderer);
loop();

};

function loop() {
    renderer.render(scene, camera); // отобразим сцену
    document.addEventListener('mousedown', onDocumentMouseDown, false); // отслеживание наведения мышки на объект
   /* menurender.render(menuscene,camera);*/
    requestAnimationFrame(loop);
}

function cameraCenterPosition() {
    control.reset();
  }