window.onload = async function (array, offset) {
    let material_text = new THREE.MeshPhongMaterial({side: THREE.DoubleSide, color: 0x11be00}); // 120319 510d6e 11be00
    let loader = new THREE.FontLoader();
    let font = await loadFont('./js/fonts/Fredoka One_Regular.json');


    buttons('Random', 500, 0, 150, 1.59, -0, 0,80);
    buttons('Start game', 500, 0, 300, 1.59, -0, 0,80);
    buttons('Clear', 500, 0, 0, 1.59, -0, 0,80);
    buttons('«', -300, -500, -200, 1.4, 0.0, 0,120);
    buttons('»', 200, -500, -200, 1.4, 0.0, 0,120);
    buttons('INSERT', -160, -500, -400, 1.4, 0.0, 0,60);
    // функция  кнопки
    function buttons(text_button, x, y, z, rotationX, rotationY, rotationZ,size) {
        let mesh_text = new THREE.Mesh(
            create_text_geometry(text_button, font, size, 20, 12, true, 10, 5, 5),
            material_text,
        );
        mesh_text.position.x = x;
        mesh_text.position.y = y;
        mesh_text.position.z = z;
        mesh_text.rotation.x = rotationX;
        mesh_text.rotation.y = rotationY;
        mesh_text.rotation.z = rotationZ;
        mesh_text.name = text_button;
        scene.add(mesh_text);
        // objects.push(mesh_text);
    }

    function create_text_geometry(
        texts,
        font,
        size,
        height,
        curveSegments,
        bevelEnabled,
        bevelThickness,
        bevelSize,
        bevelSegments,
    ) {
        let geometry_text = new THREE.TextBufferGeometry(texts, {
            // создание геометрии текста
            font: font,
            size: size,
            height: height,
            curveSegments: curveSegments,
            bevelEnabled: bevelEnabled,
            bevelThickness: bevelThickness,
            bevelSize: bevelSize,
            bevelSegments: bevelSegments,
        });
        return geometry_text;
    };

    function loadFont(url) {
        return new Promise((resolve, reject) => {
            loader.load(url, resolve, undefined, reject);
        });
    }
    function text_game() {
    let text_geometry = new create_text_geometry('GAME LIFE', font, 150, 20, 12, true, 10, 5, 5);
    let mesh_text = new THREE.Mesh(text_geometry, material_text);
    mesh_text.position.x = -560;
    mesh_text.position.y = 200;
    mesh_text.position.z = 500;
    mesh_text.rotation.x = 1.5709; /*controls.object.rotation.x;*/
    mesh_text.name = 'GAME LIFE';
    scene.add(mesh_text);
  };
    text_game();
}


