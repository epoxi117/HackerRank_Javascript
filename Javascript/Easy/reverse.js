var reverse = function(x) {
  let reversed = "";
  let temp = Math.abs(x);

  let multiplier = 1;

  debugger;

  temp = temp.toString();

  if (x < 0) {
    reversed += "-";
  }

  for (let i = temp.length - 1; i >= 0; i--) {
    reversed += temp.charAt(i);
  }

  if (x > 2147483647) {
    reverse = "0";
  }

  console.log(reversed);

  return reversed;
};

reverse(-123);
