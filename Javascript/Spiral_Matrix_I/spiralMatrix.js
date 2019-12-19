let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let x_pos = 0;
let y_pos = 0;
let loop = 0;
let spiral_list = [];

const ROWS = matrix.length;
const COLUMNS = matrix[0].length;

// let matrix = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9,10,11,12]
//   ];

const traverseArray = (_matrix) => {
    let cell_limit = ROWS * COLUMNS;
    let count = 0;
    let bounded_count = 0;

    //push first element
    spiral_list.push(_matrix[0][0]);

    for (let ii = 0; ii < 5; ii++) {
        bounded_count = ii % 4;

        switch (bounded_count) {
            case 0:
                traverseRight(_matrix);
                break;
            case 1:
                traverseDown(_matrix);
                break;
            case 2:
                traverseLeft(_matrix);
                break;
            case 3:
                traverseUp(_matrix);
                break;
        }
        count++;
        if (count > 3) {
            loop++;
            count = 0;
        }
    }

    console.log(spiral_list);
};

const traverseRight = (_matrix) => {
    for (let iterate = 1; iterate < COLUMNS - loop; iterate++) {
        spiral_list.push(_matrix[y_pos][x_pos + 1]);

        x_pos++;
    }
};

const traverseDown = (_matrix) => {
    for (let iterate = 1; iterate < ROWS; iterate++) {
        spiral_list.push(_matrix[y_pos + 1][x_pos]);

        y_pos++;
    }
};

const traverseLeft = (_matrix) => {
    for (let iterate = COLUMNS - 1; iterate > 0; iterate--) {
        spiral_list.push(_matrix[y_pos][x_pos - 1]);

        x_pos--;
    }
};

const traverseUp = (_matrix) => {
    for (let iterate = 1; iterate < ROWS - 1; iterate++) {
        spiral_list.push(_matrix[y_pos - 1][x_pos]);

        y_pos--;
    }
};

traverseArray(matrix);