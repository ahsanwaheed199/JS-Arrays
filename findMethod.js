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
