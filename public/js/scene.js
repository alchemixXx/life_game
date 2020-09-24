window.onload = function () {
scene();
board();
};

function scene() {
    let scene = new THREE.Scene();// создание сцены. В ней будем располагать все созданые объекты
    scene.position.x = -380; // центруем сцену
    let camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 10000);// создание камеры
    camera.position.set(0, -1600, 700);camera.name = 'camera'; // устанавливаем позицию камеры
    scene.add (camera);
    let renderer = new THREE.WebGLRenderer({ canvas: canvas });// создаем поле отображения
    renderer.setSize( window.innerWidth, window.innerHeight-4); // задаем размер
    document.body.appendChild( renderer.domElement );
light();
    // scene.add (board);
console.log(scene);
    /*scene.add (light);*/

}