// Array.length
const arr = [2, 54, 646, 34, 2, 23, 2, 3, 2, 3, 2, 32];
console.log(arr.length); //12

const last = arr[arr.length - 1];

console.log(last); //output: 32

// Array.push() : Add an item to the end of an Array

const pusharr = arr.push("ahsan", "waheed");
console.log(pusharr); // output 14 . it gives lenght of array
console.log(arr); //output:[2, 54, 646, 34, 2, 23, 2, 3, 2, 3, 2, 32, 'ahsan', 'waheed']
// Array.pop() : Remove an item from the end of an Array

const poparr = arr.pop();
console.log(poparr); // output: waheed . it print the pop value of array
console.log(arr); //  [2, 54, 646, 34, 2, 23, 2, 3, 2, 3, 2, 32, 'ahsan']

// Array.shift() :Remove an item from the beginning of an Array

let shiftarr = arr.shift();
console.log(shiftarr); // output : 2
console.log(arr); //  [54, 646, 34, 2, 23, 2, 3, 2, 3, 2, 32, 'ahsan']

// Array.unshift( ) : Add an item to the beginning of an Array

let unshiftarr = arr.unshift("sarim", "aashir");
console.log(unshiftarr); // output: 14 . its give the lenght of array
console.log(arr); //['sarim', 'aashir', 54, 646, 34, 2, 23, 2, 3, 2, 3, 2, 32, 'ahsan']

// Array.indexOf() :  to Find the index of an item in the Array

let indexOfArr = arr.indexOf(646);
console.log(indexOfArr); // output : 3 , index alway count from 0

// Array.splice() : Remove an item by index position
//  splice takes two argumetns  splice(start, deleteCount)
// first one is shown the start position and onother is for how many item we want to delete

let spliceArr = arr.splice(2, 6); // arr : ['sarim', 'aashir', 54, 646, 34, 2, 23, 2, 3, 2, 3, 2, 32, 'ahsan']
console.log(spliceArr); // output:  [54, 646, 34, 2, 23, 2], start from 2 and 6 items are deleted
console.log(arr); //['sarim', 'aashir', 3, 2, 3, 2, 32, 'ahsan']

let spliceArr1 = arr.splice(5); //origonal array : ['sarim', 'aashir', 3, 2, 3, 2, 32, 'ahsan']
console.log(spliceArr1); // output:  [2]

console.log(arr); // ['sarim', 'aashir', 3, 2, 3, 32, 'ahsan']

// Array.slice() The slice() method returns a shallow copy of a portion of an array into a new array object
//  selected from start to end (end not included) where start and end represent the index of items in that array.
//   The original array will not be modified.

let sliceArr = arr.slice(1, 5); // origonal array : ['sarim', 'aashir', 3, 2, 3, 32, 'ahsan']
console.log(sliceArr); // ['aashir', 3, 2, 3]
console.log(arr); //  it will not modifies the origonal array

// Copy an Array

let copyArr = [...arr]; // ['sarim', 'aashir', 3, 2, 3, 32, 'ahsan']
console.log(copyArr); // ['sarim', 'aashir', 3, 2, 3, 32, 'ahsan']

//coping array by using slice method:

let copySliceArr = arr.slice(); // origonl array: ['sarim', 'aashir', 3, 2, 3, 32, 'ahsan']
console.log(copySliceArr); // ['sarim', 'aashir', 3, 2, 3, 32, 'ahsan']

// Deep copy for an array
let myarr = [34, 43, 2, { name: "ahsan" }];
let deepCopy = JSON.parse(JSON.stringify(myarr));
deepCopy[2] = 1;
deepCopy[3].name = "aliyan";
console.log(myarr, deepCopy);
