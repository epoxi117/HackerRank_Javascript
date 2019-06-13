let array1 = [6, 4, 19, 3, 24, 1, 2, 78, 14];
let temp = [2];

const mergeSort = arr => {
  let mid = Math.ceil(arr.length / 2);

  if (arr.length < 2) {
    console.log(arr);
    return arr;
  }

  console.log("First half: " + mid);
  console.log("Second half " + (arr.length - mid));

  debugger;

  let arrayOne = arr.slice(0, mid);
  let arrayTwo = arr.slice(mid, arr.length);

  arrayOne = mergeSort(arrayOne);
  arrayTwo = mergeSort(arrayTwo);

  console.log(arrayOne);
  console.log(arrayTwo);

  return merge(arrayOne, arrayTwo);
};

const merge = (arrA, arrB) => {
  let arrC = [];

  debugger;

  console.log("A " + arrA);
  console.log("B " + arrB);

  while (arrA.length > 0 && arrB.length > 0) {
    for (let i = 0; i < arrA.length; i++) {
      if (arrA[i] > arrB[i]) {
        arrC.push(arrB[i]);
        arrB.splice(i, 1);
      } else {
        arrC.push(arrA[i]);
        arrA.splice(i, 1);
      }
    }
    debugger;
  }

  while (arrA.length > 0) {
    for (let x = 0; x < arrA.length; x++) {
      arrC.push(arrA[x]);
      arrA.splice(x, 1);
    }
    debugger;
  }

  while (arrB.length > 0) {
    for (let x = 0; x < arrB.length; x++) {
      arrC.push(arrB[x]);
      arrB.splice(x, 1);
    }
    debugger;
  }
  console.log("C: " + arrC);

  return arrC;
};

mergeSort(array1);

const splitTest = list => {
  let mid = Math.floor(list.length / 2);

  a = list.splice(0, mid);

  console.log(a);

  b = a.splice(0, mid / 2);
  console.log(b);

  c = b.splice(0, mid / 4);
  console.log(c);
};

// splitTest(array1);
