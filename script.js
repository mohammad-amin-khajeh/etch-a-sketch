// create the grid container
const grid = document.createElement("div");
grid.setAttribute("class", "container");

// global values
const gridSize = 16;
const hoverColor = "#7f2";
const gridColor = "#ddd";
const resetButton = document.querySelector(".reset");

function makeGrid(size, hoverColor) {
	for (let _ = 0; _ < size; _++) {
		const gridCol = document.createElement("div");
		gridCol.setAttribute("class", "gridCol");

		for (let _ = 0; _ < size; _++) {
			const gridRow = document.createElement("div");
			gridRow.setAttribute("class", "gridRow");
			gridCol.appendChild(gridRow);

			gridRow.addEventListener(
				"mouseenter",
				() => (gridRow.style.backgroundColor = hoverColor),
			);
		}

		grid.appendChild(gridCol);
	}
	document.body.appendChild(grid);
}

resetButton.addEventListener("click", () => {
	const pixels = document.querySelectorAll(".gridRow");
	pixels.forEach((pixel) => (pixel.style.backgroundColor = gridColor));
});

makeGrid(gridSize, hoverColor);
