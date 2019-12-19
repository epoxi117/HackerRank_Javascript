let test_matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const traverseArray = (_matrix) => {
    // let cell_limit = ROWS * COLUMNS;
    let count = 0;
    let horizontal_orient = true;
    let reverse = false;
    let x_traversal = 0;
    let y_traversal = 0;
    let reverse_cycle = 0;

    while (count < 8) {

        if (reverse) {
            console.log("called reverse");

            if (horizontal_orient) {
                console.log("x reverse");
                console.log("y: " + y_traversal);
                console.log("x: " + x_traversal);
                x_traversal -= 1;
                _matrix[y_traversal - 1][x_traversal] = 999;
            } else {
                console.log("y reverse");
                console.log("y: " + y_traversal);
                console.log("x: " + x_traversal);
                y_traversal -= 1;
                _matrix[y_traversal][x_traversal - 1] = 999;
            }

        } else {
            if (horizontal_orient) {
                x_traversal += 1;
                _matrix[y_traversal][x_traversal - 1] = 999;
            } else {
                y_traversal += 1;
                _matrix[y_traversal - 1][x_traversal - 1] = "wow";

            }
        }



        count++;
        if (count % 3 == 0) {
            horizontal_orient = !horizontal_orient;
            reverse_cycle += 1;
            if (reverse_cycle % 2 == 0) {
                console.log("reversed");
                reverse = !reverse;
            }
        }


    }





    console.log(_matrix);
};


traverseArray(test_matrix);