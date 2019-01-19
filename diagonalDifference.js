let items = [[1, 2, 3], [4, 5, 6], [9, 8, 9]];

const diagonalDifference = list => {
  //Sum of left-right diagonal

  let size = list[0].length;

  let left_right_sum = 0;
  let right_left_sum = 0;
  let curr_index = 0;

  for (var i = 0; i < size; i++) {
    curr_index = rightDiagonalIndex(i, size);

    left_right_sum += list[i][curr_index];
  }

  for (var i = 0; i < size; i++) {
    curr_index = leftDiagonalIndex(i, size);

    right_left_sum += list[i][curr_index];
  }

  let total = Math.abs(left_right_sum - right_left_sum);

  console.log(total);
  return total;
};

const rightDiagonalIndex = (input, size) => {
  return Math.abs(size - (size - input));
};

const leftDiagonalIndex = (input, size) => {
  return size - 1 - input;
};

diagonalDifference(items);
