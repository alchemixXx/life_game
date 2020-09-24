


function lightPoint (name, position.x,position.y,position.z, color, intensity, distance) {
let light = new THREE.PointLight(color, intensity, distance);
light.position.set(position.x, position.y, position.z);
light.name = name;
scene.add(light);
}
let lightPoint1 = lightPoint( 'light1',800, -350, 450, 0xffffff, 1.0, 1000)

// let light = function lights() {
//     let light = new THREE.PointLight(0xffffff, 1.0, 1000);
//     let light1 = new THREE.PointLight(0xffffff, 2.0, 1000);
//     let light2 = new THREE.PointLight(0xffffff, 2.0, 1000);
//     let light3 = new THREE.PointLight(0xffffff, 2.0, 1000);
//     let light4 = new THREE.PointLight(0xffffff, 1.0, 1000);
//   // устанавливаем координаты света
//     light.position.set(800, -350, 450);
//     light1.position.set(-100, -100, 350);
//     light2.position.set(200, -750, -50);
//     light3.position.set(1100, -450, -50);
//     light4.position.set(1000, -50, 650);
    // this.scene.add(light, light1, light2, light3, light4);

  /*let pointLightHelper = new THREE.PointLightHelper( light, 100 ); // вспомогательные вектора света
    let pointLightHelper1 = new THREE.PointLightHelper( light1, 100 );
    let pointLightHelper2 = new THREE.PointLightHelper( light2, 100 );
    let pointLightHelper3 = new THREE.PointLightHelper( light3, 100 );
    let pointLightHelper4 = new THREE.PointLightHelper( light4, 100 );
    scene.add(pointLightHelper);
    scene.add(pointLightHelper1);
    scene.add(pointLightHelper2);
    scene.add(pointLightHelper3);
    scene.add(pointLightHelper4);*/

};
