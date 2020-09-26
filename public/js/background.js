// загружаем фон (бек)
let LOADING_MANAGER = new THREE.LoadingManager();
 let IMAGE_LOADER = new THREE.ImageLoader(LOADING_MANAGER);
  function background() {
    const sphere = new THREE.SphereGeometry(2000, 128, 128);
    sphere.scale(-1, 1, 1);
    sphere.name = 'background';
    const texture = new THREE.Texture();
    const material = new THREE.MeshBasicMaterial({
      map: texture,
    });
    IMAGE_LOADER.load('../images/background_5.jpg', (image) => {
      texture.image = image;
      texture.needsUpdate = true;
    });
    let mesh_arround = new THREE.Mesh(sphere, material);
    mesh_arround.rotation.x = 1.57;
    scene.add(mesh_arround);
  }