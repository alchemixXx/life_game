
var scene,camera,renderer,controls;
let width = window.innerWidth;
let height = window.innerHeight;

function scene() {
    scene = new THREE.Scene();// создание сцены. В ней будем располагать все созданые объекты
    scene.name = "World"
    scene.position.x = -380; // центруем сцену
    camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 10000);// создание камеры
    camera.position.set(0, -2000, 700);
    camera.name = 'camera'; // устанавливаем позицию камеры

    renderer = new THREE.WebGLRenderer({ canvas: canvas});// создаем поле отображения
    renderer.setSize( window.innerWidth, window.innerHeight-4); // задаем размер
    // document.body.appendChild( renderer.domElement );
    renderer.shadowMap.enabled = true; // Рендеринг теней
    window.addEventListener('resize', handleWindowResize, false); // пересчет при изменении размера окна


/*controls = new THREE.OrbitControls(camera, canvas );
controls.maxDistance = 3500;
  controls.minDistance = 1500;
  controls.enableDamping = 0.5;
  controls.rotateSpeed = 5;
  controls.saveState();
controls.update();*/
}


function handleWindowResize() { // пересчет при изменении размера окна
	// update height and width of the renderer and the camera
	renderer.setSize(window.innerWidth, window.innerHeight-4);
	camera.aspect = window.innerWidth/ window.innerHeight;
	camera.updateProjectionMatrix();
}