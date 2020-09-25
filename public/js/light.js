
// вызов источников света
function let_there_be_light(scene) {
    let lightPoint1 = lightPoint( 'light1',800, -350, 450, 0xffffff,
    1.0, 1000, true);
    let lightPoint2 = lightPoint( 'light2',-100, -100, 350, 0xffffff,
    2.0, 1000, true);
    let lightPoint3 = lightPoint( 'light3',200, -750, 50, 0xffffff,
    2.0, 1000, true);
    let lightPoint4 = lightPoint( 'light4',1100, -450, -50, 0xffffff,
    2.0, 1000, true);
    let lightPoint5 = lightPoint( 'light5',1000, -50, 650, 0xffffff,
    1.0, 1000, true);
    scene.add (lightPoint1, lightPoint2, lightPoint3, lightPoint4, lightPoint5);
    return scene;
}
// lightPoint function description:
// name - имя для источника света
// positionX,positionY,positionZ - координаты расположения света
// color - цвет свечения
// intensity - интенивность
// distance  - дистанция действия свечения
// debug_mode - добавление вспомогательных линий для определения места расположения источника света
// функция точечного света.
function lightPoint (name, positionX,positionY,positionZ, color, intensity, distance, debug_mode) {
    let light = new THREE.PointLight(color, intensity, distance);
    light.position.set(positionX, positionY, positionZ);
    light.name = name;
    if (debug_mode == true) {
        let pointLightHelper = new THREE.PointLightHelper( light, 100 );
        pointLightHelper.name ="pointLightHelper";
        light.add (pointLightHelper);

    }
    return light;
}



