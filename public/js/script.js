
window.onload = async function (array, offset) {
  // задаем параметры окна (на всю страницу)

  let width = window.innerWidth;
  let height = window.innerHeight;

  let objects = [];
  let loader = new THREE.FontLoader();
  let canvas = document.getElementById(`canvas`);
  canvas.setAttribute(`width`, width);
  canvas.setAttribute(`height`, height);
  let size_grid = 20; // задаем размеры сетки
  let font = await loadFont('./js/fonts/helvetiker_bold.typeface.json'); // загрузка шрифта
  let matrix = matrixArray(size_grid, size_grid); // генерируем новую матрицу

  let matrix_balls = matrixArray_ball(size_grid, size_grid, width, height); // генерируем новую матрицу balls

  let LOADING_MANAGER = new THREE.LoadingManager();
  let IMAGE_LOADER = new THREE.ImageLoader(LOADING_MANAGER);
  let listener_sound = new THREE.AudioListener();
  let mouse = new THREE.Vector2(),
    INTERSECTED;
  let raycaster = new THREE.Raycaster();
  let loader_GLTF = new THREE.GLTFLoader();

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
  }

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
            0.000,
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
  }

  // создаем поле отображения
  let renderer = new THREE.WebGLRenderer({ canvas: canvas });
  renderer.setClearColor(0x000000); // задаем цвет фона
  // создание сцены
  let scene = new THREE.Scene();
  scene.position.x = -380;
  // создание камеры
  let camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 10000);
  camera.position.set(0, -1600, 700);

  camera.name = 'camera';
  /*camera.rotation.set (100,0,0);*/

  // загрузка в камеру звука
  camera.add(listener_sound);
  let sound_click = new THREE.Audio(listener_sound);
  let audioLoader = new THREE.AudioLoader();
  audioLoader.load('../sounds/Click2.wav', function (buffer) {
    sound_click.setBuffer(buffer);
    sound_click.setLoop(false);
    sound_click.setVolume(0.5);
  });
 /* let sound_space = new THREE.Audio(listener_sound);
  audioLoader.load('../sounds/spaceship.wav', function (buffer) {
    sound_space.setBuffer(buffer);
    sound_space.setLoop(false);
    sound_space.setVolume(0.5);
  });*/

  // создание света
  // добавляем точечный свет
  let light = new THREE.PointLight(0xffffff, 1.0, 1000);
  let light1 = new THREE.PointLight(0xffffff, 2.0, 1000);
  let light2 = new THREE.PointLight(0xffffff, 2.0, 1000);
  let light3 = new THREE.PointLight(0xffffff, 2.0, 1000);
  let light4 = new THREE.PointLight(0xffffff, 1.0, 1000);
  // устанавливаем координаты света
  light.position.set(800, -350, 450);
  light1.position.set(-100, -100, 350);
  light2.position.set(200, -750, -50);
  light3.position.set(1100, -450, -50);
  light4.position.set(1000, -50, 650);

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
  scene.add(light, light1, light2, light3, light4);

  // вращение мышью и ограничения вращения
  let controls = new THREE.OrbitControls(camera, canvas);
  // controls.minAzimuthAngle = -Math.PI/10.0;
  // controls.maxAzimuthAngle = Math.PI/10.0;
  // controls.minPolarAngle = Math.PI/1.4;
  // controls.maxPolarAngle = Math.PI/1.1;
  controls.maxDistance = 3500;
  controls.minDistance = 1500;
  controls.enableDamping = 0.5;
  controls.rotateSpeed = 5;
  controls.saveState();
  let O;

  /*function mouseMove (event) {
    event.preventDefault();
     mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
     mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
     raycaster.setFromCamera( mouse, camera );
     let intersects = raycaster.intersectObjects( scene.children );
     let name = intersects[ 0 ].object.name;

     /!*scene.getObjectByName(INTERSECTED.name).material =  INTERSECTED.material;*!/
     if ( intersects.length > 0 ) {
         if ( INTERSECTED != intersects[ 0 ].object && name.indexOf("i-") !== -1) {

             console.log(name.indexOf("i-"));
             INTERSECTED = intersects[ 0 ].object;
             O.name = intersects [0].object.name;
             INTERSECTED.material = intersects [0].object.material;
             /!*INTERSECTED.material = intersects [ 0 ].object.material;*!/
             intersects [ 0 ].object.material = new THREE.MeshPhysicalMaterial( { transparent: true, transparency: 1.0, opacity: 1.0});
         }
     } else {

            INTERSECTED = null;
     }
}*/

  // установка\удаление шариков  отработка кнопок по 1 клику
  async function onDocumentMouseDown(event) {
    event.preventDefault();
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    let intersects = raycaster.intersectObjects(scene.children);
    let selectedObject;
    if (intersects.length > 0) {
      /*selectedObject = scene.getObjectByName(intersects[0].object.name);*/

      if (intersects[0].object.name === 'Random') {
        // отработка клика по кнопке Random
        for (let i = 25; i > 0; i = i - 3) {
          await button_click(intersects, i);
        }
        button_Random();
      } else if (intersects[0].object.name === 'Start game') {
        // отработка клика по кнопке Start game
        for (let i = 25; i > 0; i = i - 3) {
          await button_click(intersects, i);
        }
        button_start();
      } else if (intersects[0].object.name === 'Clear') {
        // отработка клика по кнопке Clear
        for (let i = 25; i > 0; i = i - 3) {
          await button_click(intersects, i);
        }
        button_clear();
      } else if (intersects[0].object.name === 'butt4') {
        // отработка клика по кнопке butt4
        butt4();
        for (let i = 20; i > 0; i = i - 3) {
          await button_click(intersects, i);
        }
      } else if (intersects[0].object.name === 'butt5') {
        // отработка клика по кнопке butt5
        for (let i = 20; i > 0; i = i - 3) {
          await button_click(intersects, i);
        }
        butt5();
      } else
        for (let i = 0; i < size_grid; i++) {
          for (let j = 0; j < size_grid; j++) {
            if (
              matrix_balls[i][j].positionX === intersects[0].object.position.x &&
              matrix_balls[i][j].positionY === intersects[0].object.position.y &&
              matrix_balls[i][j].positionZ === intersects[0].object.position.z
            ) {
              if (matrix_balls[i][j].visible_balls === true) {
                matrix_balls[i][j].visible_balls = false;
                selectedObject = scene.getObjectByName(intersects[0].object.name);
                selectedObject.material = material_ball_transparence;
              } else {
                matrix_balls[i][j].visible_balls = true;
                selectedObject = scene.getObjectByName(intersects[0].object.name);
                selectedObject.material = material_ball;
              }
            } else {
            }
          }
        }
    } else {
    }
  }

  //  Создание текстуры
  let texture_ball = new THREE.TextureLoader().load('../images/ameba_green1.jpg'); //определяем текстуру шара
  let texture_board = new THREE.TextureLoader().load('../images/stone1.jpg'); //определяем текстуру плоскости
  let texture_line = new THREE.TextureLoader().load('../images/gradient1.jpg'); //определяем текстуру плоскости

  // создание объектов
  /* let geometry_text = new THREE.TextGeometry(); // создание плоскости*/
  let geometry_plane = new THREE.PlaneGeometry(height, height, size_grid, size_grid); // создание плоскости
  let ball = new THREE.SphereGeometry(height / size_grid / 2, 12, 12); // создание шарика
  let geometry_lines_x = new THREE.BoxGeometry(height, 4, 4); // создание линий сетки по оси х
  let geometry_lines_y = new THREE.BoxGeometry(4, height, 4); // создание линий сетки по оси у

  // фцункция создания геометрии текста
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

  // материалы
  let basic_material = new THREE.MeshBasicMaterial({ color: 0x000000 }); // создание базового материала
  let material_lines = new THREE.MeshLambertMaterial({ map: texture_line }); // создание материала
  let material_ball = new THREE.MeshLambertMaterial({ map: texture_ball }); // создание материала
  let material_ball_transparence = new THREE.MeshPhysicalMaterial({
    transparent: true,
    transparency: 1.0,
  }); // создание прозрачного материала
  material_ball_transparence.opacity = 0;
  let material_ball_transparence_0_5 = new THREE.MeshPhysicalMaterial({
    transparent: true,
    transparency: 1.0,
  }); // создание прозрачного материала
  material_ball_transparence_0_5.opacity = 0.8;
  let material_board = new THREE.MeshLambertMaterial({ map: texture_board }); // создание материала
  let material_text = new THREE.MeshPhongMaterial({ side: THREE.DoubleSide, color: 0x11be00 }); // 120319 510d6e 11be00

  // загружаем фон (бек)
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
    mesh_arround = new THREE.Mesh(sphere, material);
    mesh_arround.rotation.x = 1.57;
    scene.add(mesh_arround);
  }

  // функция массива шариков
  function ballsView() {
    objects = [];
    for (let i = 0; i < size_grid; i++) {
      for (let j = 0; j < size_grid; j++) {
        if (matrix_balls[i][j].visible_balls !== false) {
          let mesh = new THREE.Mesh(ball, new THREE.MeshLambertMaterial({ map: texture_ball }));
          mesh.position.x = matrix_balls[i][j].positionX;
          mesh.position.y = matrix_balls[i][j].positionY;
          mesh.position.z = matrix_balls[i][j].positionZ;
          mesh.name = 'i-' + i + ' j-' + j;
          scene.add(mesh);
          objects.push(mesh);
        } else {
          let mesh = new THREE.Mesh(
            ball,
            new THREE.MeshPhysicalMaterial({ transparent: true, transparency: 1.0, opacity: 0.0 }),
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
  }

  // функция генерации сетки
  function create_grid() {
    for (let i = 0; i <= size_grid; i++) {
      let mesh_lines_y = new THREE.Mesh(geometry_lines_y, material_lines);
      scene.add(mesh_lines_y);
      mesh_lines_y.position.x = (i * height) / size_grid - height / 2;
      mesh_lines_y.position.z = 1;

      for (let j = 0; j <= size_grid; j++) {
        let mesh_lines_x = new THREE.Mesh(geometry_lines_x, material_lines);
        scene.add(mesh_lines_x);
        mesh_lines_x.position.y = (i * height) / size_grid - height / 2;
        mesh_lines_x.position.z = 1;
      }
    }
  }
  // генератор доски
  function board() {
    let mesh = new THREE.Mesh(geometry_plane, material_board);
    mesh.position.x = 0;
    mesh.position.y = 0;
    mesh.position.z = 0;
    mesh.name = 'board';
    scene.add(mesh);
  }

  // функция отображения названия игры
  function text_game() {
    let text_geometry = new create_text_geometry('GAME LIFE', font, 100, 20, 12, true, 10, 5, 5);
    let mesh_text = new THREE.Mesh(text_geometry, material_text);
    mesh_text.position.x = -350;
    mesh_text.position.y = 200;
    mesh_text.position.z = 300;
    mesh_text.rotation.x = 1.59; /*controls.object.rotation.x;*/
    mesh_text.name = 'GAME LIFE';
    scene.add(mesh_text);
  }
  // функция отображения кнопки
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

  ballsView();
  create_grid();
  board();
  text_game();
  background();
  loop(); // вызов созданной сцены
  // координаты кнопок
  {
    buttons('Random', 500, 0, 150, 1.59, -0.19, 0);
    buttons('Start game', 500, 0, 300, 1.59, -0.19, 0);
    buttons('Clear', 500, 0, 0, 1.59, -0.19, 0);
    buttons('butt4', -300, -500, -100, 1.4, 0.0, 0);
    buttons('butt5', 100, -500, -100, 1.4, 0.0, 0);
  }
  // создаем движение
  function loop() {
    /*initEventListeners();*/
    controls.update();
    renderer.render(scene, camera); // включаем в рендеринг сцену и камеру
    requestAnimationFrame(function () {
      loop();
    }); // включаем цикл
    document.addEventListener('mousedown', onDocumentMouseDown, false); // отслеживание наведения мышки на объект
    document.addEventListener('dblclick', cameraCenterPosition, false); // событие центрирование камеры по двойному клику
    /*document.addEventListener ('mousemove', mouseMove,false);*/
  }

  // загрузим шрифт
  function loadFont(url) {
    return new Promise((resolve, reject) => {
      loader.load(url, resolve, undefined, reject);
    });
  }

  // генерация нового поля с шариками по клику кнопки "Random"
  function button_Random(data = false) {
    button_sound();
    let name;
    matrix = matrixArray(size_grid, size_grid); // генерируем новую матрицу
    matrix_balls = matrixArray_ball(size_grid, size_grid, width, height); // генерируем новую матрицу balls

    for (let i = 0; i < size_grid; i++) {
      for (let j = 0; j < size_grid; j++) {
        name = 'i-' + i + ' j-' + j;

        for (let n = 0; n < scene.children.length; n++) {
          if (scene.children[n].name === name) {
            if (matrix_balls[i][j].visible_balls === false) {
              scene.children[n].material = new THREE.MeshPhysicalMaterial({
                transparent: true,
                transparency: 1.0,
                opacity: 0.0,
              });
            } else {
              scene.children[n].material = new THREE.MeshLambertMaterial({ map: texture_ball });
            }
          }
        }
      }
    }
  }

// функция обновления сцены от новой матрицы
  function refresh() {
    
    matrix_balls = matrixArray_ball();
    console.log(matrix_balls);
    for (let i = 0; i < size_grid; i++) {
    for (let j = 0; j < size_grid; j++) {
      name = 'i-' + i + ' j-' + j;

      for (let n = 0; n < scene.children.length; n++) {
        if (scene.children[n].name === name) {
          if (matrix_balls[i][j].visible_balls === false) {
            scene.children[n].material = new THREE.MeshPhysicalMaterial({
              transparent: true,
              transparency: 1.0,
              opacity: 0.0,
            });
          } else {
            scene.children[n].material = new THREE.MeshLambertMaterial({ map: texture_ball });
          }
        }
      }
    }
  }
  }

  

  // кнопка старт игры
  function button_start() {
    const oldData = JSON.stringify(matrix);
    let name;
    for (let i = 0; i < size_grid; i++) {
      for (let j = 0; j < size_grid; j++) {
        name = 'i-' + i + ' j-' + j;
        for (let n = 0; n < scene.children.length; n++) {
          if (scene.children[n].name === name) {
            if (scene.children[n].material.map === texture_ball) {
              matrix[i][j] = 1;
              /*scene.children[n].material = material_ball_transparence;*/
            } else {
              matrix[i][j] = 0;
            }
          }
        }
      }
    }
    const data = processData(matrix);
    matrix = data;
    refresh();
    setTimeout(() => {
    if (oldData !== JSON.stringify(data)) {
      button_start()
    } else {
      console.log("DONE!")
    }
    }, 200)
    
    // setTimeout(button_start, 1000)
  }
  // кнопка очистка поля
  function button_clear() {
    button_sound();
    for (let i = 0; i < size_grid; i++) {
      for (let j = 0; j < size_grid; j++) {
        let name = 'i-' + i + ' j-' + j;
        for (let n = 0; n < scene.children.length; n++) {
          if (scene.children[n].name === name) {
            scene.children[n].material = new THREE.MeshPhysicalMaterial({
              transparent: true,
              transparency: 1.0,
              opacity: 0.0,
            });
          }
        }
      }
    }
  }
  // кнопка butt4
  function butt4() {
    button_sound();
    console.log(loader_GLTF);
  }
  // кнопка butt5
  function butt5() {
    button_sound();
  }

  // функция паузы
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  // функция центрирование камеры по двойному клику
  function cameraCenterPosition() {
    controls.reset();
  }
  // отработка движения при клике
  async function button_click(intersects, i) {
    intersects[0].object.position.y = intersects[0].object.position.y - i;
    intersects[0].object.position.z = intersects[0].object.position.z - i;
    await sleep(10);
    intersects[0].object.position.y = intersects[0].object.position.y + i;
    intersects[0].object.position.z = intersects[0].object.position.z + i;
    return intersects;
  }

  function button_sound() {
    let sound = sound_click;
    sound.play();
  }

  function processData(data) {
    var newLifes = populateZeros(data);
    var keepLiving = populateZeros(data);
    var result_dict = populateZeros(data);
    data.forEach(function (_, rowIndex) {
      newLifes = checkNewLifes(data, rowIndex, newLifes);
      keepLiving = checkStillLIving(data, rowIndex, keepLiving);
    });
    data.forEach(function (row, rowIndex) {
      row.forEach(function (_, cellIndex) {
        if (newLifes[rowIndex][cellIndex] || keepLiving[rowIndex][cellIndex]) {
          result_dict[rowIndex][cellIndex] = 1;
        }
      });
    });
    // console.log('New life');
    // for (var _i = 0, newLifes_1 = newLifes; _i < newLifes_1.length; _i++) {
    //     var item = newLifes_1[_i];
    //     console.log(item);
    // }
    // console.log('Still alive');
    // for (var _a = 0, keepLiving_1 = keepLiving; _a < keepLiving_1.length; _a++) {
    //     var item = keepLiving_1[_a];
    //     console.log(item);
    // }
    console.log('Result dict');
    for (var _b = 0, result_dict_1 = result_dict; _b < result_dict_1.length; _b++) {
      var item = result_dict_1[_b];
      // console.log(item);
    }
    console.log(result_dict);
    return result_dict;
  }
  // exports.processData = processData;
  function populateZeros(data) {
    var result = [];
    data.forEach(function (_, index) {
      var values = [];
      data[index].forEach(function (_) {
        return values.push(0);
      });
      result.push(values);
    });
    return result;
  }
  function checkNewLifes(data, rowIndex, newLifes) {
    data[rowIndex].forEach(function (_, cellIndex) {
      var counter = 0;
      for (var _i = 0, _a = [-1, 0, 1]; _i < _a.length; _i++) {
        var currentRow = _a[_i];
        for (var _b = 0, _c = [-1, 0, 1]; _b < _c.length; _b++) {
          var currentCell = _c[_b];
          var _d = checkCondtions(rowIndex, currentRow, cellIndex, currentCell, data),
            checkedRowIndex = _d[0],
            checkedCellIndex = _d[1];
          if (data[rowIndex][cellIndex] === 1) {
            continue;
          }
          var checkedCell = data[checkedRowIndex][checkedCellIndex];
          if (currentCell === 0 && currentRow === 0) {
            continue;
          }
          if (checkedCell === 1) {
            counter++;
          }
        }
      }
      if (counter === 3) {
        newLifes[rowIndex][cellIndex] = 1;
      }
    });
    return newLifes;
  }
  function checkStillLIving(data, rowIndex, keepLiving) {
    data[rowIndex].forEach(function (_, cell_index) {
      var counter = 0;
      for (var _i = 0, _a = [-1, 0, 1]; _i < _a.length; _i++) {
        var currentRow = _a[_i];
        for (var _b = 0, _c = [-1, 0, 1]; _b < _c.length; _b++) {
          var currentCell = _c[_b];
          var _d = checkCondtions(rowIndex, currentRow, cell_index, currentCell, data),
            checkedRowIndex = _d[0],
            checkedCellIndex = _d[1];
          var checkedCell = data[checkedRowIndex][checkedCellIndex];
          if (data[rowIndex][cell_index] === 1) {
            if (currentCell === 0 && currentRow === 0) {
              continue;
            }
            if (checkedCell === 1) {
              counter++;
            }
          }
          if (counter === 3 || counter === 2) {
            keepLiving[rowIndex][cell_index] = 1;
          } else {
            keepLiving[rowIndex][cell_index] = 0;
          }
        }
      }
    });
    return keepLiving;
  }
  function checkCondtions(rowIndex, currentRow, cellIndex, currentCell, data) {
    var checkedRowIndex = rowIndex + currentRow;
    var checkedCellIndex = cellIndex + currentCell;
    if (checkedRowIndex < 0) {
      checkedRowIndex = data.length - 1;
    } else if (checkedRowIndex >= data.length) {
      checkedRowIndex = 0;
    }
    if (checkedCellIndex < 0) {
      checkedCellIndex = data[rowIndex].length - 1;
    } else if (checkedCellIndex >= data[rowIndex].length) {
      checkedCellIndex = 0;
    }
    return [checkedRowIndex, checkedCellIndex];
  }
};

/*
scene.getObjectByName( "GAME LIFE" ).rotation.x = scene.getObjectByName( "GAME LIFE" ).rotation.x - controls.object.rotation.x;*/
