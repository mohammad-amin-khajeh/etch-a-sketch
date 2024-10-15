// create the grid container
const board = document.createElement("div");
board.setAttribute("class", "container");
document.body.appendChild(board);

// global values
let currentGridSize = 16;
const hoverColor = "#7f2";
const gridColor = "#ddd";
const resetButton = document.querySelector(".reset");
const changeSizeButton = document.querySelector(".change-size");

function makeGrid(size, hoverColor) {
	let container = resetContainer();
	for (let i = 0; i < size; i++) {
		const gridCol = document.createElement("div");
		gridCol.setAttribute("class", "gridCol");

		for (let j = 0; j < size; j++) {
			const gridRow = document.createElement("div");
			gridRow.setAttribute("class", "gridRow");
			gridCol.appendChild(gridRow);

			gridRow.addEventListener(
				"mouseenter",
				() => (gridRow.style.backgroundColor = hoverColor),
			);
		}
		container.appendChild(gridCol);
	}
}

function resetBoard() {
	const pixels = document.querySelectorAll(".gridRow");
	pixels.forEach((pixel) => (pixel.style.backgroundColor = gridColor));
}

resetButton.addEventListener("click", () => {
	resetBoard();
});

function changeGridSize() {
	currentGridSize = prompt("enter the new size(16-100): ", currentGridSize);
	if (currentGridSize > 100 || currentGridSize < 16) {
		alert("Please enter a valid number between 16 and 100 inclusive");
		changeGridSize();
	}
}

changeSizeButton.addEventListener("click", () => {
	changeGridSize();
	resetBoard();
	makeGrid(currentGridSize, hoverColor);
});

function resetContainer() {
	const oldContainer = document.querySelector(".container");
	document.body.removeChild(oldContainer);
	let newContainer = document.createElement("div");
	newContainer.setAttribute("class", "container");
	document.body.appendChild(newContainer);
	return newContainer;
}

makeGrid(currentGridSize, hoverColor);
