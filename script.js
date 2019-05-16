let sideNo = 4;
let box;
let lilBox;
let boxes;

let size = document.querySelector(".size");
let papaBox = document.querySelector(".container");

let changeColor = function(event) {
  event.target.style.background = 'black';
}

createGrid();

size.addEventListener('click', () => {
  removeGrid();
  sideNo = prompt("How many squares would you like each side of your Etch-a-Sketch to have?");
  sideNo = Number(sideNo);
  createGrid();
});

function createGrid() {
  removeGrid();
  for (let i = 0; i < (sideNo * sideNo); i++) {
   box = document.createElement("div");
   lilBox = box.classList.add('lilBox');
   boxes = document.getElementsByClassName("lilBox")
   for (let l = 0; l < (boxes.length); l++) {
     boxes[l].addEventListener('mouseenter', changeColor, false);
     boxes[l].addEventListener('mouseleave', changeColor, false);
   }
   papaBox.appendChild(box);
   box.style.height = (400/sideNo) + 'px';
   box.style.width = (400/sideNo) + 'px';
  }
}

function removeGrid() {
  while (papaBox.firstChild) {
    papaBox.removeChild(papaBox.firstChild);
  }
}
