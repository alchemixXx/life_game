


function scenemenu() {
    renderer = new THREE.WebGLRenderer({ canvas: canvas});// создаем поле отображения
    renderer.setSize( window.innerWidth, window.innerHeight); // задаем размер
    menurender = new THREE.WebGLRenderer({canvas:menu, alpha: true});
    menurender.setClearColor( 0x000000, 0 );
    menurender.setSize( window.innerWidth, window.innerHeight);

}


let_there_be_light(menuscene);



