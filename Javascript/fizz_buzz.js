/* 
"Write a program that prints the numbers from 1 to 100. 
But for multiples of three print “Fizz” instead of the number and 
for the multiples of five print “Buzz”. For numbers which are multiples 
of both three and five print “FizzBuzz”."
*/

const fizzBuzz = () => {
  let output = "";

  for (let ii = 1; ii <= 100; ii++) {
    ii % 3 == 0 ? (output += "Fizz") : "";

    ii % 5 == 0 ? (output += "Buzz") : "";

    output.length > 0 ? console.log(ii, output) : "";

    output = "";
  }
};

fizzBuzz();
