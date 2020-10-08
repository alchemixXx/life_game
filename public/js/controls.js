let mouse = new THREE.Vector2(),
  INTERSECTED;
let raycaster = new THREE.Raycaster();
document.addEventListener('dblclick', cameraCenterPosition, false); // событие центрирование камеры по двойному клику
let control, controlmenu;
function controls() {
  control = new THREE.OrbitControls(camera, canvas);
  /*controlmenu = new THREE.OrbitControls(camera, menu );*/
  control.maxDistance = 3500;
  control.minDistance = 1000;
  control.enableDamping = 0.5;
  control.rotateSpeed = 5;
  control.saveState();
  // control.update();
}

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
    } else if (intersects[0].object.name === '«') {
      // отработка клика по кнопке butt4
      butt4();
      for (let i = 20; i > 0; i = i - 3) {
        await button_click(intersects, i);
      }
    } else if (intersects[0].object.name === '»') {
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

//
async function button_click(intersects, i) {
  intersects[0].object.position.y = intersects[0].object.position.y - i;
  intersects[0].object.position.z = intersects[0].object.position.z - i;
  await sleep(5);
  intersects[0].object.position.y = intersects[0].object.position.y + i;
  intersects[0].object.position.z = intersects[0].object.position.z + i;
  return intersects;
}
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// кнопка старт игры
function button_start(firstCall = true) {
  if (firstCall) {
    button_sound();
  }

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
      button_start(false);
    } else {
      console.log('DONE!');
    }
  }, 200);

  // setTimeout(button_start, 1000)
}

// кнопка Random
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
              transmission: 1.0,
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
            transmission: 1.0,
            opacity: 0.0,
          });
        }
      }
    }
  }
}
function butt4() {
  button_sound();
}
// кнопка butt5
function butt5() {
  button_sound();
}
