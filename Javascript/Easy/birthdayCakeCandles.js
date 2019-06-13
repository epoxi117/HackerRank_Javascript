var arr = [2, 3, 1, 3, 5, 1, 3];

const birthdayCakeCandles = arr => {
  let currMax = 0;
  let count = 0;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === currMax) {
      count++;
    }

    if (arr[i] > currMax) {
      currMax = arr[i];
      count = 1;
    }
  }

  console.log(count);
};

birthdayCakeCandles(arr);
