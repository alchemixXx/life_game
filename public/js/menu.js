


menucamera =  new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 10000);// создание камеры
    menucamera.position.set(0, -2000, 700);
    menucamera.name = 'menucamera'; // устанавливаем позицию камеры
    menuscene = new THREE.Scene();
menuscene.name = "menu";

menurender = new THREE.WebGLRenderer();


menurender.setSize( window.innerWidth, window.innerHeight);
/*menurender.domElement = "menu";*/

let_there_be_light(menuscene);
console.log(menurender);


