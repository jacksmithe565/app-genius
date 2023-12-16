Here's a sample code in JavaScript that performs a complex task related to data manipulation and analysis. It calculates the average and standard deviation of a set of numbers:

```javascript
/*
  Filename: stats-analysis.js

  This script calculates the average and standard deviation
  of a set of numbers.
*/

// Input data
const data = [26, 19, 34, 22, 15, 30, 21, 28, 24, 25];

// Calculate the sum of the numbers
const sum = data.reduce((acc, num) => acc + num, 0);

// Calculate the average
const average = sum / data.length;

// Calculate the squared differences from the average
const squaredDiffSum = data.reduce(
  (acc, num) => acc + Math.pow(num - average, 2),
  0
);

// Calculate the variance
const variance = squaredDiffSum / data.length;

// Calculate the standard deviation
const standardDeviation = Math.sqrt(variance);

// Output the results
console.log('Data:', data);
console.log('Average:', average);
console.log('Standard Deviation:', standardDeviation);
```

This code calculates the average and standard deviation of the provided numbers stored in the `data` array. It demonstrates the use of various JavaScript functions and techniques such as array manipulation (`reduce`), mathematical calculations, and console logging. Although it may not be as complex as a large-scale project, it showcases a more professional and sophisticated use of JavaScript.