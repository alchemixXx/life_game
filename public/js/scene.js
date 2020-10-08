 // сцена
var scene,camera,renderer,controls,menuscene, menurender, menucamera;
let width = window.innerWidth;
let height = window.innerHeight;

// звук
let listener_sound = new THREE.AudioListener();
let sound_click = new THREE.Audio(listener_sound);
  let audioLoader = new THREE.AudioLoader();
  audioLoader.load('../sounds/Click2.wav', function (buffer) {
    sound_click.setBuffer(buffer);
    sound_click.setLoop(false);
    sound_click.setVolume(0.5);
});

menuscene = new THREE.Scene();
menuscene.name = "menu";

function scene() {
    scene = new THREE.Scene();// создание сцены. В ней будем располагать все созданые объекты
scene.name = "World"
    scene.position.x = 0; // центруем сцену
    camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 10000);// создание камеры
    camera.position.set(0, -2000, 1100);
    camera.name = 'camera'; // устанавливаем позицию камеры
    camera.add(listener_sound);
    renderer = new THREE.WebGLRenderer({ canvas: canvas});// создаем поле отображения

    renderer.setSize( window.innerWidth, window.innerHeight); // задаем размер

   renderer.shadowMap.enabled = true; // Рендеринг теней
    window.addEventListener('resize', handleWindowResize, false); // пересчет при изменении размера окна
}


function handleWindowResize() { // пересчет при изменении размера окна
	// update height and width of the renderer and the camera
	renderer.setSize(window.innerWidth, window.innerHeight);
	camera.aspect = window.innerWidth/ window.innerHeight;
	camera.updateProjectionMatrix();
}

function button_sound() {
    let sound = sound_click;
    sound.play();
  };