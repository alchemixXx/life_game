
let listener_sound = new THREE.AudioListener();
let sound_click = new THREE.Audio(listener_sound);
  let audioLoader = new THREE.AudioLoader();
  audioLoader.load('../sounds/Click2.wav', function (buffer) {
    sound_click.setBuffer(buffer);
    sound_click.setLoop(false);
    sound_click.setVolume(0.5);
});
function button_sound() {
    let sound = sound_click;
    sound.play();
  };