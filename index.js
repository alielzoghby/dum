// *************** input *************

var button = document.querySelectorAll(".drum");
sounds = {
  a: "sounds/tom-1.mp3",
  s: "sounds/tom-2.mp3",
  d: "sounds/tom-3.mp3",
  f: "sounds/tom-4.mp3",
  j: "sounds/snare.mp3",
  k: "sounds/crash.mp3",
  l: "sounds/kick-bass.mp3",
};

// *************** make sounds *************

function switchSounds(value) {
  switch (value) {
    case "a":
      var tom1 = new Audio(sounds.a);
      tom1.play();
      break;
    case "s":
      var tom2 = new Audio(sounds.s);
      tom2.play();
      break;
    case "d":
      var tom3 = new Audio(sounds.d);
      tom3.play();
      break;
    case "f":
      var tom4 = new Audio(sounds.f);
      tom4.play();
      break;
    case "j":
      var snare = new Audio(sounds.j);
      snare.play();
      break;
    case "k":
      var crash = new Audio(sounds.k);
      crash.play();
      break;
    case "l":
      var kick = new Audio(sounds.l);
      kick.play();
      break;
    default:
  }
}

// *************** click by mouse *************

for (i = 0; i < button.length; i += 1) {
  button[i].addEventListener("click", function () {
    var buttontext = this.textContent;
    switchSounds(buttontext);
    keyAnimation(buttontext);
  });
}

// *************** click by keyword *************

addEventListener("keydown", function (event) {
  switchSounds(event.key);
  keyAnimation(event.key);
});

// *************** key animation *************

function keyAnimation(keyName) {
  var button = document.querySelector("." + keyName);
  button.classList.add("pressed");
  setTimeout(function () {
    button.classList.remove("pressed");
  }, 200);
}
