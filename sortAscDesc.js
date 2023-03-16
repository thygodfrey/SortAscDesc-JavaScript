// Function to sort the array in ascending order
function sortAscending(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}

// Function to sort the array in descending order
function sortDescending(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] < array[j]) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}

// Accept user input and convert it to an array of numbers
let input = prompt("Enter numbers separated by commas: ");
let array = input.split(",").map(Number);

// Call the sorting functions and display the sorted arrays
let sortedAsc = sortAscending(array);
let sortedDesc = sortDescending(array);
console.log("Ascending order: " + sortedAsc);
console.log("Descending order: " + sortedDesc);
