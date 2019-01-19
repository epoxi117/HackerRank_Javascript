var size = 10;

const staircase = size => {
  let stairs = "";
  let spaces = size - 1;
  let poundSign = "#";

  for (var x = 0; x < size; x++) {
    for (var y = 0; y < spaces; y++) {
      stairs += " ";
    }

    stairs += poundSign;
    poundSign += "#";
    stairs += "\n";

    spaces -= 1;
  }

  console.log(stairs);
};

staircase(size);
