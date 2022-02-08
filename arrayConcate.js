// The concat() method is used to merge two or more arrays.
//  This method does not change the existing arrays, but instead returns a new array.

// Concatenating two arrays
const letters = ["a", "b", "c"];
const number = [1, 2, 3];

const alphaNumeric = letters.concat(number);
console.log(alphaNumeric);
// results in ['a', 'b', 'c', 1, 2, 3]

// Concatenating three arrays

const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9];

const numbers = num1.concat(num2, num3);
num2[1] = 3;
console.log(num2); //[4,3,6]
console.log(numbers);
// results in [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Concatenating nested arrays , it refered the origonal array
const num11 = [[1]];
const num22 = [2, [3]];

const numbers1 = num11.concat(num22);

console.log(numbers1);
// results in [[1], 2, [3]]

// modify the first element of num1
num11[0].push(4);
console.log(num11); //[1, 4]
console.log(numbers1);
// results in [[1, 4], 2, [3]]
