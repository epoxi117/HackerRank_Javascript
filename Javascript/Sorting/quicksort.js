
/*
* Gilberto Placidon
* Referenced https://www.guru99.com/quicksort-in-javascript.html for implementation
*
*
*/

const swap = (list, left_index, right_index) => {
    let temp_item = list[left_index];
    list[left_index] = list[right_index];
    list[right_index] = temp_item;
    return list;
  }

const partition = (array, left_index, right_index) => {
  let pivot_element = array[Math.floor((left_index + right_index)/2)];
  let left = left_index;
  let right = right_index;


  while (left <= right){

    //increment left index on until pointed element is greater than the pivot
    while(array[left] < pivot_element){
        left ++;
      }
    
    //decrement right index on until pointed element is less than the pivot
      while(array[right] > pivot_element){
        right --;
      }
    
      //Swap elements to place them on the correct side of the pivot element
      if(left <= right) {
        array = swap(array, left, right);
        
        /* In the case that the elements swapped are right next to the pivot element,
        incrementing and decrementing left and right respectively will point them to the pivot element.
        In any case, the outer while loop will make sure to make the left pointer cross beyond the pivot element
        to be returned.
        */
        left ++;
        right --;
      }
  }
  console.log(array);

  //The returned left index will be used to determine the next range for sorting
  return left;
}


const quickSort = (array, left_index, right_index) => {
    let curr_index;

    // returns the left index of the most recent partition (one index element over the previous pivot)
    curr_index = partition(array, left_index, right_index);

    //more elements to be sorted on the left side of the pivot
    if(left_index < curr_index -1){
        console.log(`left: ${left_index} is less than current_index: ${curr_index}`);
        quickSort(array, left_index, curr_index -1);
    }

    //more elements to be sorted on the right side of the pivot
    if(curr_index < right_index){
        console.log(`current_index: ${curr_index} is less than right_index: ${right_index}`);
        quickSort(array, curr_index, right_index);
    }

    console.log(`sorted array: ${array}`);

}

const array_to_sort = [5,3,7,6,2,9];

let start_index = 0;
let end_index = array_to_sort.length -1;

quickSort(array_to_sort, start_index, end_index);