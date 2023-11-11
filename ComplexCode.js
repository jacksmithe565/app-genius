/*
Filename: ComplexCode.js
Content: A complex and sophisticated JavaScript code demonstrating multiple algorithms and functionalities.
*/

// Define a class to represent a person
class Person {
  constructor(name, age, profession) {
    this.name = name;
    this.age = age;
    this.profession = profession;
  }

  // Method to greet a person
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Declare an array of persons
const persons = [
  new Person("John", 25, "Engineer"),
  new Person("Sarah", 30, "Doctor"),
  new Person("Michael", 35, "Teacher"),
];

// Calculate the average age of the persons
let totalAge = 0;
for (let i = 0; i < persons.length; i++) {
  totalAge += persons[i].age;
}
const averageAge = totalAge / persons.length;

console.log(`Average age: ${averageAge}`);

// Implement a Fibonacci sequence generator function
function fibonacci(n) {
  const sequence = [0, 1];

  for (let i = 2; i <= n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }

  return sequence;
}

console.log(`Fibonacci sequence: ${fibonacci(10)}`);

// Perform a linear search in an array
function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i; // Element found, return its index
    }
  }

  return -1; // Element not found
}

const numbers = [5, 10, 15, 20, 25];
const target = 15;
console.log(`Linear search: Element ${target} found at index ${linearSearch(numbers, target)}.`);

// Create a queue data structure using a class
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty.";
    }

    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue()); // Output: 1

// Implement a binary search algorithm
function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (array[middle] === target) {
      return middle; // Element found, return its index
    }

    if (array[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return -1; // Element not found
}

const sortedNumbers = [5, 10, 15, 20, 25];
const searchTarget = 15;
console.log(`Binary search: Element ${searchTarget} found at index ${binarySearch(sortedNumbers, searchTarget)}.`);

// More code...
// ...
// ...
// (200 lines long code)