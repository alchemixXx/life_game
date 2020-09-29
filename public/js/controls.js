let mouse = new THREE.Vector2(), INTERSECTED;
let raycaster = new THREE.Raycaster();
document.addEventListener('dblclick',  cameraCenterPosition, false); // событие центрирование камеры по двойному клику
function controls () {
let control = new THREE.OrbitControls(camera, canvas );
control.maxDistance = 3500;
  control.minDistance = 1000;
  control.enableDamping = 0.5;
  control.rotateSpeed = 5;
  control.saveState();
  // control.update();
};

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

  //
  async function button_click(intersects, i) {
    intersects[0].object.position.y = intersects[0].object.position.y - i;
    intersects[0].object.position.z = intersects[0].object.position.z - i;
    await setTimeout(100);
    intersects[0].object.position.y = intersects[0].object.position.y + i;
    intersects[0].object.position.z = intersects[0].object.position.z + i;
    return intersects;
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

    function button_Random(data = false) {
    /*button_sound();*/
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
    /*button_sound();*/
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
// функция обновления сцены от новой матрицы
  function refresh() {

    matrix_balls = matrixArray_ball();
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