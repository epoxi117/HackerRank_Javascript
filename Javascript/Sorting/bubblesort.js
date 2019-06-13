const randomList = () => {
  let list = [];

  for (let i = 0; i < 20; i++) {
    list.push(Math.floor(Math.random() * 100 + 1));
  }
  console.log(list);
  return list;
};

const bubbleSort = numList => {
  let n = numList.length;
  let swapFlag = false;

  numList.forEach(element => {
    swapFlag = false;
    let temp;

    for (let i = 0; i <= n - 1; i++) {
      temp = numList[i];
      if (numList[i] > numList[i + 1]) {
        //swap
        numList[i] = numList[i + 1];
        numList[i + 1] = temp;

        swapFlag = true;
      }
    }
  });

  console.log(numList);
};

bubbleSort(randomList());
