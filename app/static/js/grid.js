var canvas = document.getElementById("play");
const c = canvas.getContext('2d')
for (let i = 0; i < 30; i++) {
  for (let j = 0; j < 30; j++) {
    /*c.strokeStyle = `rgb(${i * 5}, ${j * 5}, ${(i+j) * 50})`*/
    c.strokeRect(j * 40, i * 40, 40, 40)
  }
}
