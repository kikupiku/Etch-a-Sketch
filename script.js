let sideNo = 16;
let box;
let lilBox;
let boxes;
let buttonText;
let mode;
let knobOne;
let knobTwo;

let size = document.querySelector(".size");
let color = document.querySelector(".color");
let papaBox = document.querySelector(".container");
let clear = document.querySelector(".clear");

let makeBlack = function(event) {
  event.target.style.background = 'black';
}

let makeRandomColor = function(event) {
  event.target.style.background = "#" + (0x1000000 + Math.random() * 0xFFFFFF).toString(16).substr(1,6);
}

function createGrid() {
  removeGrid();
  for (let i = 0; i < (sideNo * sideNo); i++) {
   box = document.createElement("div");
   lilBox = box.classList.add('lilBox');
   boxes = document.getElementsByClassName("lilBox");
   papaBox.appendChild(box);
   box.style.height = (400/sideNo) + 'px';
   box.style.width = (400/sideNo) + 'px';
  }
  addKnobs();
}

function removeGrid() {
  while (papaBox.firstChild) {
    papaBox.removeChild(papaBox.firstChild);
  }
}

function chooseColor(blackOrColor) {
  for (let l = 0; l < (boxes.length); l++) {
    boxes[l].removeEventListener('mouseenter', blackOrColor);
    boxes[l].addEventListener('mouseenter', blackOrColor);
    console.log(blackOrColor);
  }
}

function addKnobs() {
  knobOne = document.createElement("div");
  knobOne.classList.add('knobOne');
  papaBox.appendChild(knobOne);
  knobTwo = document.createElement("div");
  knobTwo.classList.add('knobTwo');
  papaBox.appendChild(knobTwo);
}

createGrid();
chooseColor(makeBlack);

size.addEventListener('click', () => {
  removeGrid();
  sideNo = prompt("How many squares would you like each side of your Etch-a-Sketch to have?");
  sideNo = Number(sideNo);
  createGrid();
  chooseColor(makeBlack);
});

color.addEventListener('click', () => {
  buttonText = document.getElementsByClassName("color")[0].textContent;
  mode = document.getElementsByClassName("mode")[0].textContent;
  if (buttonText === "Change to Black & White") {
    document.getElementsByClassName("mode")[0].textContent = "Black & White Mode!"
    chooseColor(makeBlack);
    document.getElementsByClassName("color")[0].textContent = "Change to Random Color";
  } else {
    document.getElementsByClassName("mode")[0].textContent = "Random Color Mode!"
    chooseColor(makeRandomColor);
    document.getElementsByClassName("color")[0].textContent = "Change to Black & White";
  }
});

clear.addEventListener('click', () => {
  for (let c = 0; c < (boxes.length); c++) {
    boxes[c].style.background = "white";
  }
});
