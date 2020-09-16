const testData: number[][] = [
  [0, 0, 0, 0, 0],
  [0, 1, 1, 0, 0],
  [1, 0, 0, 1, 0],
  [0, 0, 1, 0, 0],
  [1, 1, 1, 0, 0],
  [0, 1, 1, 0, 0],
  [1, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
];

export function processData(data: number[][]) {
  let newLifes = populateZeros(data);
  let keepLiving = populateZeros(data);
  let result_dict = populateZeros(data);
  data.forEach((_, rowIndex) => {
    newLifes =  checkNewLifes(data, rowIndex, newLifes);
    keepLiving = checkStillLIving(data, rowIndex, keepLiving);
  });
  data.forEach((row, rowIndex) => {
    row.forEach((_, cellIndex) => {
      if (newLifes[rowIndex][cellIndex] || keepLiving[rowIndex][cellIndex]) {
        result_dict[rowIndex][cellIndex] = 1;
      }
    })
  })


  console.log('New life');
  for (const item of newLifes) {
    console.log(item);
  }
  console.log('Still alive');
  for (const item of keepLiving) {
    console.log(item);
  }
  console.log('Result dict');
  for (const item of result_dict) {
    console.log(item);
  }
  return data;
}

function populateZeros(data: number[][]) {
  const result = [];
  data.forEach((_, index) => {
    const values = [];
    data[index].forEach(_ => values.push(0));
    result.push(values);
  })

  return result;
}

function checkNewLifes(data: number[][], rowIndex: number, newLifes: number[][]) {
  data[rowIndex].forEach((_, cellIndex) => {
    let counter = 0;
    for (const currentRow of [-1, 0, 1]) {
      for (const currentCell of [-1, 0, 1]) {
        const [checkedRowIndex, checkedCellIndex] = checkCondtions(
          rowIndex,
          currentRow,
          cellIndex,
          currentCell,
          data,
        );
        if (data[rowIndex][cellIndex] === 1) {
          continue;
        }
          const checkedCell = data[checkedRowIndex][checkedCellIndex];
 
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

function checkStillLIving(data: number[][], rowIndex: number, keepLiving: number[][]) {
  data[rowIndex].forEach((_, cell_index) => {
    let counter = 0;
    for (const currentRow of [-1, 0, 1]) {
      for (const currentCell of [-1, 0, 1]) {
        const [checkedRowIndex, checkedCellIndex] = checkCondtions(
          rowIndex,
          currentRow,
          cell_index,
          currentCell,
          data,
        );
          const checkedCell = data[checkedRowIndex][checkedCellIndex];
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

function checkCondtions(rowIndex: number, currentRow: number, cellIndex: number, currentCell: number, data: number[][]) {
  let checkedRowIndex = rowIndex + currentRow;
  let checkedCellIndex = cellIndex + currentCell;
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

processData(testData);
