const badVersion = 4;

/**
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 */
const isBadVersion = (v) => {
  if (v >= 4) {
    console.log(true);
  } else {
    console.log(false);
  }
};

/**
 * @param {function} isBadVersion()
 * @return {function}
 */

/**
 * @param {integer} n Total versions
 * @return {integer} The first bad version
 */
let solution = (isBadVersion) => (n) => {
  var left = 0;
  var right = n;

  while (right - left !== 1) {
    var mid = parseInt((left + right) / 2);

    if (isBadVersion(mid)) {
      right = mid;
    } else {
      left = mid;
    }
  }
  return right;
};

let n_1 = [1, 2, 3, 4, 5, 6];
let n_2 = [1];

console.log(solution(isBadVersion)(n_1));
