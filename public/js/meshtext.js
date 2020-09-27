
let material_text = new THREE.MeshPhongMaterial({ side: THREE.DoubleSide, color: 0x11be00 }); // 120319 510d6e 11be00
let loader = THREE.FontLoader();
console.log(loader)
/*let font = loader.Font('./js/fonts/helvetiker_bold.typeface.json',  // загрузка шрифта
function ( font ) {
		// do something with the font
		scene.add( font );
		},

	// onProgress callback
	function ( xhr ) {
		console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
	},

	// onError callback
	function ( err ) {
		console.log( 'An error happened' );
	}
);*/

buttons('Random', 500, 0, 150, 1.59, -0.19, 0);
    buttons('Start game', 500, 0, 300, 1.59, -0.19, 0);
    buttons('Clear', 500, 0, 0, 1.59, -0.19, 0);
    buttons('butt4', -300, -500, -100, 1.4, 0.0, 0);
    buttons('butt5', 100, -500, -100, 1.4, 0.0, 0);

    // функция  кнопки
  function buttons(text_button, x, y, z, rotationX, rotationY, rotationZ) {
    let mesh_text = new THREE.Mesh(
      create_text_geometry(text_button, font, 80, 20, 12, true, 10, 5, 5),
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
    objects.push(mesh_text);
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
  }