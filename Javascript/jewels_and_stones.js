/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */

let j_1 = "aA",
  s_1 = "aAAbbbb";

let j_2 = "z",
  s_2 = "ZZ";

var numJewelsInStones = function(J, S) {
  let temp_string = "";
  let total_jewels = 0;

  for (let ii = 0; ii < J.length; ii++) {
    let ascii_j = J.charCodeAt(ii);
    // console.log(ascii_j);

    for (let yy = 0; yy < S.length; yy++) {
      let ascii_s = S.charCodeAt(yy);
      //   console.log(ascii_s);
      if (ascii_j == ascii_s) {
        total_jewels++;
      }
    }
  }
  return total_jewels;
};

numJewelsInStones(j_2, s_2);
