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

function cameraCenterPosition() {
    control.reset();
  }