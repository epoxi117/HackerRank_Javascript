let arr = [5, 4, 3, 1231, 23, -1, 211];

const findMin = () => {
  let min = 0;

  for (let ii = 0; ii < arr.length; ii++) {
    if (parseInt(arr[ii]) < parseInt(min)) {
      min = arr[ii];
    }
  }

  console.log(min);
};

findMin();
