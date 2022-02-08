// map();
// map method take an anonymous function and return the new array that contain values.an
// Filter, Map return an array, and forEach returns undefined. This is the main difference between these loops.
let arrOfObj = [
  {
    name: "ahmed",
    age: 34,
  },
  {
    name: "haroon",
    age: 33,
  },
  {
    name: "sarim",
    age: 22,
  },
];

let returnArrayOfMap = arrOfObj.map((e) => {
  return e.name;
});
console.log(returnArrayOfMap); //['ahmed', 'haroon', 'sarim']

// forEach is not chain-able like map, reduce or filter.
let returnArrayOfForeach = arrOfObj.forEach((e) => {
  return e.name; //it does not return any thing the return key is not working with it
  console.log(e.name);
});
console.log(returnArrayOfForeach); //undefined

// reduce method take two argumnets atleast to  perform opereations
// its mostly used to perform addition in long array

const array1 = [1, 2, 3, 4];
const reducer = (previousValue, currentValue) => previousValue + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15

const total = array1.reduce(
  (accumulator, element) => accumulator + element,
  45
);
console.log(total); //55

// exmp

let votes = ["y", "n", "n", "n", "y", "absent"];

let voteCount = votes.reduce((tally, val) => {
  if (tally[val]) {
    tally[val]++;
  } else {
    tally[val] = 1;
  }
  return tally;
}, {});
console.log(voteCount);

// exmp

let books = [
  {
    name: "Book One",
    rating: 4.3,
    author: "ahsan waheed",
  },
  {
    name: "Book Two",
    rating: 3.3,
    author: "ahsan waheed",
  },
  {
    name: "Book Three",
    rating: 2.3,
    author: "ahsan waheed",
  },
  {
    name: "Book Four",
    rating: 4.1,
    author: "ahsan waheed",
  },
  {
    name: "Book Five",
    rating: 3.7,
    author: "ahsan waheed",
  },
];

let groupByRating = books.reduce((groupedBooks, book) => {
  const key = Math.floor(book.rating);
  if (!groupedBooks[key]) groupedBooks[key] = [];
  groupedBooks[key].push(book);
  return groupedBooks;
});
console.log(groupByRating);
// The find() method returns the value of the first element in the provided array
// that satisfies the provided testing function.
// If no values satisfy the testing function, undefined is returned.

let movies = ["Mr.fox", "Mr. and Mrs. Smith", "Mrs. Doubtfire", "Mrs. Deed"];
const movie = movies.find((m) => m.includes("Mrs"));
console.log(movie); //Mr. and Mrs. Smith, it return the first one and break

const movie2 = movies.find((m) => m.indexOf("Mrs") === 0);
console.log(movie2); //Mrs. Doubtfire

// exmp #2

Array();
let a = "aha";
let b = Array(a);
console.log(b);
console.log(typeof b);

let books1 = [
  {
    name: "Book One",
    rating: 4.3,
  },
  {
    name: "Book Two",
    rating: 4.1,
  },
  {
    name: "Book Three",
    rating: 4.3,
  },
];

const book2 = books1.find((f) => f.rating >= 4.1);

console.log(book2);

// The filter() method creates a new array
//  with all elements that pass the test implemented by the provided function.

const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

const result = words.filter((word) => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

const arr = [34, 56, 74, 22, 333, 12, 76, 88, 77, 99, 13, 15, 17, 1];

const oddarr = arr.filter((x) => x % 2 == 1);
console.log(oddarr); //[333, 77, 99, 13, 15, 17, 1]
const evenarr = arr.filter((x) => x % 2 == 0);
console.log(evenarr); //[34, 56, 74, 22, 12, 76, 88]
const bigNo = arr.filter((x) => x > 70);
console.log(bigNo); //[74, 333, 76, 88, 77, 99]

// exmp #2
let arr1 = [
  { id: 15 },
  { id: -1 },
  { id: 0 },
  { id: 3 },
  { id: 12.2 },
  {},
  { id: null },
  { id: NaN },
  { id: "undefined" },
];

let invalidEntries = 0;

function filterByID(item) {
  if (Number.isFinite(item.id) && item.id !== 0) {
    return true;
  }
  invalidEntries++;
  return false;
}

let arrByID = arr1.filter(filterByID);

console.log("Filtered Array\n", arrByID);
// Filtered Array
// [{ id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 }]

console.log("Number of Invalid Entries = ", invalidEntries);
// Number of Invalid Entries = 5

// Mutable is a type of variable that can be changed.
// In JavaScript, only objects and arrays are mutable, not primitive values.

// A mutable object is an object whose state can be modified after it is created.
// Strings and Numbers are Immutable.
