

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
  }
