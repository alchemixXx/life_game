
let matrix = matrixArray(size_grid, size_grid); // создадим рандомную матрицу с "организма"
let matrix_balls = matrixArray_ball(size_grid, size_grid, width, height); // генерируем параметры расположения для каждого "организма"
let ball = new THREE.SphereGeometry(height / size_grid / 2, 12, 12); // создание шарика
let texture_ball = new THREE.TextureLoader().load('../images/ameba_green1.jpg'); //определяем текстуру шара

function ballsView() { //отобразим на доске все шарики
  objects = [];
  for (let i = 0; i < size_grid; i++) {
    for (let j = 0; j < size_grid; j++) {
      if (matrix_balls[i][j].visible_balls !== false) {
        let mesh = new THREE.Mesh(ball, new THREE.MeshLambertMaterial({map: texture_ball}));
        mesh.position.x = matrix_balls[i][j].positionX;
        mesh.position.y = matrix_balls[i][j].positionY;
        mesh.position.z = matrix_balls[i][j].positionZ;
        mesh.name = 'i-' + i + ' j-' + j;
        scene.add(mesh);
        objects.push(mesh);
      } else {
        let mesh = new THREE.Mesh(
            ball,
            new THREE.MeshPhysicalMaterial({transparent: true, transparency: 1.0, opacity: 0.0}),
        );
        mesh.position.x = matrix_balls[i][j].positionX;
        mesh.position.y = matrix_balls[i][j].positionY;
        mesh.position.z = matrix_balls[i][j].positionZ;
        mesh.name = 'i-' + i + ' j-' + j;
        scene.add(mesh);
        objects.push(mesh);
      }
    }
  }
};

  // функция генерации параметров каждого шарика в пространстве доски
  function matrixArray_ball(rows, columns, width, height) {
    class balls {
      constructor(positionX, positionY, positionZ, rotationX, rotationY, rotationZ, visible_balls) {
        this.positionX = positionX;
        this.positionY = positionY;
        this.positionZ = positionZ;
        this.rotationX = rotationX;
        this.rotationY = rotationY;
        this.rotationZ = rotationZ;
        this.visible_balls = visible_balls;
        let n;
      }
    }
    let arr = new Array();
    for (let i = 0; i < size_grid; i++) {
      arr[i] = new Array();
      for (let j = 0; j < size_grid; j++) {
        if (matrix[i][j] === 1) {
          n = new balls(
            (j * height) / rows + height / rows / 2 - height / 2,
            height / 2 - (i * height) / columns - height / columns / 2,
            height / size_grid / 2.5,
            0.001,
            0.001,
            0.001,
            true,
          );
          arr[i][j] = n;
        } else {
          n = new balls(
            (j * height) / rows + height / rows / 2 - height / 2,
            height / 2 - (i * height) / columns - height / columns / 2,
            height / size_grid / 2.5,
            0.001,
            0.001,
            0.001,
            false,
          );
          arr[i][j] = n;
        }
      }
    }
    return arr;
  };

// функция создания новой матрицы
  function matrixArray(rows, columns) {
    let arr = new Array();
    for (let i = 0; i < rows; i++) {
      arr[i] = new Array();
      for (let j = 0; j < columns; j++) {
        n = Math.random(); /*Math.random() вернуть после отладки*/
        if (n <= 0.8) {
          arr[i][j] = 0;
        } else {
          arr[i][j] = 1;
        }
      }
    }
    return arr;
  };