var list = [
  [-1, -1, 0, -9, -2, -2],
  [-2, -1, -6, -8, -2, -5],
  [-1, -1, -1, -2, -3, -4],
  [-1, -9, -2, -4, -4, -5],
  [-7, -3, -3, -2, -9, -9],
  [-1, -3, -1, -2, -4, -5]
];

const hourglassSum = arr => {
  let maxSum = 0;
  let tempSum = 0;
  //starts from top-left of hourglass
  let coordX = 0;
  let coordY = 0;

  let hourglass_per_row = arr[0].length - 2;

  let hourglassTotals = [];

  for (var glassRow = 0; glassRow < hourglass_per_row; glassRow++) {
    for (var glassCount = 0; glassCount < hourglass_per_row; glassCount++) {
      //three for loops for adding sum of hourglass
      for (var row_Count = 0; row_Count < 3; row_Count += 2) {
        for (var x = 0; x < 3; x++) {
          tempSum += arr[coordY + row_Count][coordX + x];
          console.log(
            "Coords: " + "(" + (coordY + row_Count) + "," + (coordX + x) + ")"
          );
        }

        if (row_Count === 0) {
          for (var u = 0; u < 1; u++) {
            tempSum += arr[coordY + 1][coordX + 1];
            console.log(
              "Coords: " + "(" + (coordY + 1) + "," + (coordX + 1) + ")"
            );
          }
        }
      }
      console.log("tempSum: " + tempSum);
      console.log("\n");

      hourglassTotals.push(tempSum);

      tempSum = 0;

      //   console.log("Coords: " + "(" + coordY + "," + coordX + ")");
      //Hourglass takes a step to the right
      coordX++;
    }

    //reset hourglass x coordinate
    coordX = 0;

    //Hourglass takes a step down
    // console.log("Coords: " + "(" + coordY + "," + coordX + ")");
    coordY++;
  }

  maxSum = Math.max(...hourglassTotals);
  console.log(maxSum);
  return maxSum;
};

hourglassSum(list);
