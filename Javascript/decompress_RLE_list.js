let nums = [1, 2, 3, 4];

var decompressRLElist = function(nums) {
  let resultArray = new Array();
  if (nums.length <= 0) {
    return [];
  }

  for (let ii = 0; ii < nums.length; ii += 2) {
    let tempArray = fillArrayWithNumbers(nums[ii], nums[ii + 1]);
    resultArray = resultArray.concat(tempArray);
  }
  return resultArray;
};

function fillArrayWithNumbers(m, n) {
  var arr = Array.apply(null, Array(m));
  return arr.map(function(x, i) {
    return n;
  });
}

decompressRLElist(nums);
