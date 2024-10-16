// create the grid container
const board = document.createElement("div");
board.setAttribute("class", "container");
document.body.appendChild(board);

// global values
let currentGridSize = 16;
let opacitySteps = 2;
const resetButton = document.querySelector(".reset");
const changeSizeButton = document.querySelector(".change-size");
const changeOpacityStepButton = document.querySelector(".change-opacity-step");

makeGrid(currentGridSize);

function makeGrid(size) {
	const container = resetContainer();
	for (let i = 0; i < size; i++) {
		const gridCol = document.createElement("div");
		gridCol.setAttribute("class", "gridCol");

		for (let j = 0; j < size; j++) {
			const gridRow = document.createElement("div");
			gridRow.setAttribute("class", "gridRow");
			gridRow.style.opacity = 0;
			gridRow.style.backgroundColor = randomRgbColor();
			gridCol.appendChild(gridRow);

			gridRow.addEventListener("mouseenter", () => {
				if (gridRow.style.opacity < 1)
					return (gridRow.style.opacity =
						+gridRow.style.opacity + 0.1 * opacitySteps);
			});
		}
		container.appendChild(gridCol);
	}
}

function resetBoard() {
	const pixels = document.querySelectorAll(".gridRow");
	pixels.forEach((pixel) => (pixel.style.opacity = 0));
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
	makeGrid(currentGridSize);
});

function resetContainer() {
	const oldContainer = document.querySelector(".container");
	document.body.removeChild(oldContainer);
	const newContainer = document.createElement("div");
	newContainer.setAttribute("class", "container");
	document.body.appendChild(newContainer);
	return newContainer;
}

function randomRgbColor() {
	const r = Math.floor(Math.random() * 255);
	const g = Math.floor(Math.random() * 255);
	const b = Math.floor(Math.random() * 255);
	return `rgb(${r},${g},${b})`;
}

function changeOpacityStep() {
	opacitySteps = prompt(
		"how much should the opacity increase on each hover? (10-100): ",
		opacitySteps * 10,
	);
	if (opacitySteps < 10 || opacitySteps > 100) {
		alert("Please enter a number between 10 and 100 inclusive.");
		changeOpacityStep();
	} else opacitySteps /= 10;
}

changeOpacityStepButton.addEventListener("click", () => changeOpacityStep());
