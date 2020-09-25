window.onload = function () {
loop();
};

function scene() {
    let scene = new THREE.Scene();// создание сцены. В ней будем располагать все созданые объекты
    scene.name = "World"
    scene.position.x = -380; // центруем сцену
let camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 10000);// создание камеры
    camera.position.set(-100, -1600, 700);
    camera.name = 'camera'; // устанавливаем позицию камеры
let renderer = new THREE.WebGLRenderer({ canvas: canvas });// создаем поле отображения
    renderer.setSize( window.innerWidth, window.innerHeight-4); // задаем размер
    document.body.appendChild( renderer.domElement );


    board(scene); // добавим доску на сцену
    let_there_be_light(scene);// добавим свет на сцену

renderer.render(scene, camera);
let controls = new THREE.OrbitControls(camera, canvas );
controls.update();
}
function loop() {
    requestAnimationFrame(loop);
    scene();
}