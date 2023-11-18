/* 
Filename: complexCode.js

Description: This complex code snippet demonstrates a custom implementation of a linked list with several operations such as insert, delete, search, and reverse. It also includes helper functions for printing the list and checking its length.

Note: This is a simplified version of a linked list and does not include error handling or advanced optimizations.
*/

// Node class represents a single node in the linked list
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// LinkedList class represents the linked list and its operations
class LinkedList {
  constructor() {
    this.head = null;
  }

  // Insert an element at the end of the linked list
  insert(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  // Delete the first occurrence of an element from the linked list
  delete(data) {
    if (!this.head) {
      return;
    }

    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    let prev = null;

    while (current && current.data !== data) {
      prev = current;
      current = current.next;
    }

    if (current) {
      prev.next = current.next;
    }
  }

  // Search for an element in the linked list
  search(data) {
    let current = this.head;

    while (current) {
      if (current.data === data) {
        return true;
      }
      current = current.next;
    }

    return false;
  }

  // Reverse the linked list
  reverse() {
    let prev = null;
    let current = this.head;

    while (current) {
      const next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    this.head = prev;
  }

  // Get the length of the linked list
  length() {
    let count = 0;
    let current = this.head;

    while (current) {
      count++;
      current = current.next;
    }

    return count;
  }

  // Print the linked list
  print() {
    let current = this.head;
    let elements = '';

    while (current) {
      elements += current.data + ' -> ';
      current = current.next;
    }

    elements += 'null';
    console.log(elements);
  }
}

// Usage:

const linkedList = new LinkedList();

linkedList.insert(5);
linkedList.insert(10);
linkedList.insert(15);
linkedList.insert(20);

console.log('Original Linked List:');
linkedList.print();
console.log('Length:', linkedList.length());

console.log('\nSearching for element 10:', linkedList.search(10));
console.log('Searching for element 25:', linkedList.search(25));

console.log('\nDeleting element 10:');
linkedList.delete(10);
linkedList.print();
console.log('Length:', linkedList.length());

console.log('\nReversing the linked list:');
linkedList.reverse();
linkedList.print();