let arr = [1, 3, 5, 7, 9];

const miniMaxSum = arr => {
  let tempArr = arr.sort();
  let minSum = 0;
  let maxSum = 0;

  //Finding minimum sum
  for (var i = 0; i < arr.length - 1; i++) {
    minSum += arr[i];
  }

  tempArr = tempArr.reverse();
  //Finding maximum sum
  for (var x = 0; x < arr.length - 1; x++) {
    maxSum += arr[x];
  }

  console.log(minSum + " " + maxSum);
};

miniMaxSum(arr);
