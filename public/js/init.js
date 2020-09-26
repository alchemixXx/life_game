window.addEventListener('load', init, false);

function init() {

scene();
let_there_be_light();
board();
background();
controls();
ballsView();
loop();

};

function loop() {

renderer.render(scene, camera); // отобразим сцену
    document.addEventListener('mousedown', onDocumentMouseDown, false); // отслеживание наведения мышки на объект
    document.addEventListener('dblclick', cameraCenterPosition, false); // событие центрирование камеры по двойному клику
    requestAnimationFrame(loop);
    /*scene();*/
}

