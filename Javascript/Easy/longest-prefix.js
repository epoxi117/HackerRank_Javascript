/*
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {

    let common_prefix = "";

    let length = findShortestWordLength(strs);

    let numOfWords = strs.length;

    let currentIndex = 0;

    let currentChar = "";

    let checkCount = 0;


    for (let x = 0; x < length; x++) {

        for (let i = 0; i < numOfWords; i++) {

            if (i == 0) {
                currentChar = strs[i][x];
            }
            console.log(`Current character: ${currentChar}`);

            for (let j = 0; j < 1; j++) {
                if (common_prefix.length == 0) {
                    common_prefix += currentChar;
                    i = numOfWords;
                } else {
                    if (currentChar == strs[i][currentIndex]) {
                        checkCount++;
                    }
                }
            }

        }
        //checks to see if the prefix letter was consistent throughout the entire array
        if (checkCount >= numOfWords) {
            common_prefix += currentChar;
        }
        checkCount = 0;
        // currentIndex++;
    }
    console.log(`Common Prefix: ${common_prefix}`);

};

let findShortestWordLength = (stringArr) => {
    let len = stringArr[0].length;

    stringArr.forEach(word => {
        if (word.length < len) {
            len = word.length;
        }
    });

    return len;
}

let arr = ["flower", "flow", "flight"];

longestCommonPrefix(arr);