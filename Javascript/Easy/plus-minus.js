let arr = [-4, 3, -9, 0, 4, 1];

const plusMinus = arr => {
  let positive = 0,
    negative = 0,
    zero = 0;

  for (var i = 0; i < arr.length; i++) {
    debugger;
    if (arr[i] > 0) {
      positive++;
    } else if (arr[i] < 0) {
      negative++;
    } else {
      zero++;
    }
  }

  console.log((positive / arr.length).toFixed(6));
  console.log((negative / arr.length).toFixed(6));
  console.log((zero / arr.length).toFixed(6));
};
