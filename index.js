// DOM elements

const container = document.querySelector(".grid-container");
const button = document.getElementById("reset");

// Button on click, start the new grid function
button.addEventListener("click", () => {
  newGrid();
  hover();
  
});

// Function that makes grid, if you put in 16, it will make 16x16 grid...
function gridMaker(gridSize) {
  container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

  for (i = 0; i < gridSize * gridSize; i++) {
    const square = document.createElement("div");
    square.classList.add("squares");
    container.appendChild(square);
  }
  hover();
}

gridMaker(16);

function hover() {
  document.querySelectorAll(".squares").forEach((item) => {
    item.addEventListener("mouseover", (event) => {
      //adds color on hovering (mouseover) over div with class .squares
      const setHoverColor = () => {
          const randomColor = Math.floor(Math.random()*16777215).toString(16);
          item.style.backgroundColor = "#" + randomColor;
      }
      return setHoverColor();
    });
  });
}

// clearing the grid with looping through childs of container, and deleting the last node...
function clearGrid() {
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
}

// Making the newGrid with popup (user-prompt)
function newGrid() {
  clearGrid();
  let gridSize = parseInt(
    prompt("What size of the grid would you like to have?")
  );
  
  gridMaker(gridSize);
}

// Random color maker function 

