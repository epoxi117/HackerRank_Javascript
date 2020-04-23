/*
Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:

Input:
11110
11010
11000
00000

Output: 1
Example 2:

Input:
11000
11000
00100
00011

Output: 3

*/

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  if (grid.length <= 0) {
    return 0;
  }

  let rows = grid.length;
  let cols = grid[0].length;
  let number_of_islands = 0;

  for (let row_index = 0; row_index < rows; row_index++) {
    for (let col_index = 0; col_index < cols; col_index++) {
      number_of_islands += dfs(row_index, col_index, grid);
    }
  }
  return number_of_islands;
};

const dfs = (row_index, col_index, grid) => {
  //check boundaries
  if (
    row_index < 0 ||
    row_index >= grid.length ||
    col_index < 0 ||
    col_index >= grid[0].length
  ) {
    return 0;
  }

  //check if element is 0
  if (grid[row_index][col_index] == 0) {
    return 0;
  }

  //mark index as being visited by marking it as 0
  grid[row_index][col_index] = 0;
  //recursively check neighbors using recursion, return 1 if neighbor is part of the island

  //check right neighbors
  dfs(row_index, col_index + 1, grid);
  //check bottom neighbors
  dfs(row_index + 1, col_index, grid);
  //check left neighbors
  dfs(row_index, col_index - 1, grid);
  //check top neighbors
  dfs(row_index - 1, col_index, grid);

  return 1;
};

const print = (grid) => {
  let rows = grid.length;
  let cols = grid[0].length;

  let row_print = "";

  for (let row_index = 0; row_index < rows; row_index++) {
    row_print += "\n";
    for (let col_index = 0; col_index < cols; col_index++) {
      row_print += String(grid[row_index][col_index]);
    }
  }

  console.log(row_print);
};

let example_1 = [
  [1, 1, 1, 1, 0],
  [1, 1, 0, 1, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 1],
];

let example_2 = [];

// numIslands(example_1);

// numIslands(example_1);
numIslands(example_2);
