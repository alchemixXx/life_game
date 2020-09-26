// создание доски
var size_grid = 25
function board() {
    ; // задаем размеры сетки
    let texture_board = new THREE.TextureLoader().load('../images/6LLZ22.png');
    texture_board.wrapS = THREE.RepeatWrapping;
    texture_board.wrapT = THREE.RepeatWrapping;
    texture_board.repeat.set(size_grid,size_grid) ;
    let material_board = new THREE.MeshStandardMaterial ({ map: texture_board, transparent: true}); // создание материала доски
    /*material_board.normalMap = texture_board;*/
    let geometry_plane = new THREE.PlaneGeometry(height, height, size_grid, size_grid);
    let mesh = new THREE.Mesh(geometry_plane, material_board);
        mesh.position.x = 0;
        mesh.position.y = 0;
        mesh.position.z = 0;
        mesh.name = 'board';
        scene.add (mesh);

  }