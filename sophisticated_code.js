/* sophisticated_code.js */

// This code is a complex implementation of a multi-level sorting algorithm

// Helper function to generate random integers within a specified range
function generateRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate a random array of numbers
const array = [];
const arraySize = 1000;
for (let i = 0; i < arraySize; i++) {
  array.push(generateRandomInt(1, 1000));
}

// Function to perform quicksort on an array
function quicksort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[arraySize - 1];
  const partitionedArr = [];
  const smaller = [];
  const greater = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      smaller.push(arr[i]);
    } else {
      greater.push(arr[i]);
    }
  }

  partitionedArr.push(...quicksort(smaller));
  partitionedArr.push(pivot);
  partitionedArr.push(...quicksort(greater));

  return partitionedArr;
}

// Function to perform bubble sort on an array
function bubbleSort(arr) {
  const len = arr.length;
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < len - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
}

// Function to perform merge sort on an array
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];

  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Time complexity: O(n log n)
const sortedArray1 = quicksort([...array]);

// Time complexity: O(n^2)
const sortedArray2 = bubbleSort([...array]);

// Time complexity: O(n log n)
const sortedArray3 = mergeSort([...array]);

console.log('Sorted Array (Quick Sort):', sortedArray1);
console.log('Sorted Array (Bubble Sort):', sortedArray2);
console.log('Sorted Array (Merge Sort):', sortedArray3);
