var menuscene, menurender;


menuscene = new THREE.Scene();
menuscene.name = "menu";

menurender = new THREE.WebGLRenderer();
menurender.setSize( window.innerWidth, window.innerHeight);
menurender.domElement = "menu";

let_there_be_light(menuscene);
console.log(menuscene);
console.log(scene);

