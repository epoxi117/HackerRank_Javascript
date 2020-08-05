function deletion_distance(str1, str2) {
  let s1 = str1.split("");
  let s2 = str2.split("");
  let l1 = str1.length;
  let l2 = str2.length;
  var longest_string = 0;

  console.log(s1);
  console.log(s2);

  if (s1.length > s2.length) {
    var current_longest = 0;
    for (let ii = 0; ii < s1.length - s2.length + 1; ii++) {
      for (let xx = 0; xx < s2.length; xx++) {
        if (s2[xx] == s1[ii + xx]) {
          console.log(`s2 ${s2[xx]} matches with s1 ${s1[ii + xx]}`);
          current_longest += 10;
        }
      }

      if (current_longest > longest_string) {
        longest_string = current_longest;
      }
      current_longest = 0;
    }

    console.log(longest_string);
  } else {
    var current_longest = 0;
    for (let ii = 0; ii < s2.length - s1.length + 1; ii++) {
      for (let xx = 0; xx < s1.length; xx++) {
        if (s1[xx] == s2[ii + xx]) {
          current_longest += 10;
        }
      }

      if (current_longest > longest_string) {
        longest_string = current_longest;
      }
      current_longest = 0;
    }

    console.log(longest_string);
  }
}

deletion_distance("Cat", "at");
