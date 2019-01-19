var listToAdd = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];

function aVeryBigSum(ar) {
  let total = 0;

  for (var index = 0; index < ar.length; index++) {
    total += ar[index];
  }

  console.log(total);
  return total;
}

aVeryBigSum(listToAdd);
