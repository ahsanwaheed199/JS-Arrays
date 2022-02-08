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
