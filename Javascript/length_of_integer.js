let x = 1234;

const findLength = (x) => {
  let length = 0;

  if (x < 2) {
    console.log(1);
    return;
  }

  length = Math.ceil(Math.log10(x));

  console.log(length);
};

findLength(101);
