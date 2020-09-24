// создание доски
let board = function board() {
let size_grid = 20; // задаем размеры сетки
let texture_board = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide}); // задаем текстуру плоскости
let material_board = new THREE.MeshLambertMaterial({ map: texture_board }); // создание материала доски
let geometry_plane = new THREE.PlaneGeometry(10, 10, size_grid, size_grid);

    let mesh = new THREE.Mesh(geometry_plane, material_board);
    mesh.position.x = 0;
    mesh.position.y = 0;
    mesh.position.z = 0;
    mesh.name = 'board';
  }