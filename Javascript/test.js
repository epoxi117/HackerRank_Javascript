let words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];

const filterWord = (my_word) => {
  words = words.filter((word) => {
    return word != my_word;
  });

  console.log(words);
};

filterWord("elite");
