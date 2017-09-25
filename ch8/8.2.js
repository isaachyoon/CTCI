function robotPath(grid) {

	return robotPathHelper(grid, grid.length-1, grid[0].length-1)

}

function robotPathHelper(grid, r, c) {

	if(r < 0 || c < 0) {
		return 0;
	}

	if(r === 0 || c === 0) {
		return 1;
	}

	if(grid[r][c] === -1) {
		return 0;
	}

	grid[r][c] = robotPathHelper(grid, r - 1, c) + robotPathHelper(grid, r, c - 1);
	return grid[r][c];
}

let grid = [[0, 0, 0],
						[0, -1, 0],
						[0, 0, 0]
					 ]
let output = robotPath(grid);
console.log(output)
