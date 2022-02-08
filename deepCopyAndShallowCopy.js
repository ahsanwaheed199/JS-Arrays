// shallow copy : copying one top level element. it does not provide the reference in top level but provide in
// nested level so it  change the nested level of array/object.

// deep copy : copying nested element. it does not provide any reference on both top and nested level the copied
// array / objects changes not affect the origonal one

// top level element example
let topLevelarr = ["ahsan", "waheed", 34, 342];
let topLevelobj = { name: "ahsan", fname: "waheed", age: 34 };

// nested level element example

let nestedLevelarr = ["ahsan ", "waheed", ["23", 34], { name: "sarim" }]; //nested level array
let nestedLevelobj = {
  name: "ahsan ",
  fname: "waheed",
  age: [34, 343, 32, 1, 12, 3, 37],
};

// reference array/object: if some thing will  change  the origonal array/object also change
let copytopLevelarr = topLevelarr;
copytopLevelarr[2] = "ali"; //it changes both arrays 2 index is from 34 to 'ali'
console.log(copytopLevelarr, topLevelarr); //['ahsan', 'waheed', 'ali', 342] ,  ['ahsan', 'waheed', 'ali', 342]

let copytopLevelobj = topLevelobj;
copytopLevelobj.age = 12;
topLevelobj.name = "aliyan";
console.log(topLevelobj, copytopLevelobj); //{name: 'aliyan', fname: 'waheed', age: 12} {name: 'aliyan', fname: 'waheed', age: 12}

// shallowo copies array (four methods)
// 1. array.concate(anotherarraY)
// 2.array.slice()
// 3.array.from(anotherarray)
// 4. let newarr=[...previousarray]

// 4. exmp
let shallowArr = [...nestedLevelarr]; //nestedLevelarr was defined in line 75 :["ahsan ", "waheed", ["23", 34], { name: "sarim" }];
shallowArr[0] = "ahmed";
shallowArr[3]["name"] = "affan";
console.log(shallowArr, nestedLevelarr);
// shallowArr console
//((4) ['ahmed', 'waheed', Array(2), {…}]
// 0: "ahmed"                              //change on both
// 1: "waheed"
// 2: (2) ['23', 34]
// 3: {name: 'affan'}                        //provide referense yet
// nestedLevelarr console:
// (4) ['ahsan ', 'waheed', Array(2), {…}]
// 0: "ahsan "                               //change on both
// 1: "waheed"
// 2: (2) ['23', 34]
// 3: {name: 'affan'}                        //provide referense yet

// in above both cases we saw that by using shallow copy we can not seeing the reference of top level Element.
// but it can provide reference also on nested level element

// shallow copy of an object

// 1.  Object.assign(target, ...source) //its used to copy the values and properties of one or more source objects
// to a targer object
let course = {
  name: "web programming",
  c_hours: 3,
};
let grade = {
  score: 65,
};
let result = Object.assign(course, grade, { mentor: "sarim ali" });
console.log(result);

// 2. spread object
let userInfo = {
  name: "saqlain",
  age: 34,
  hobies: ["swimming", "reading", "chess"],
};

let shallowCopyOfUserInfo = { ...userInfo };
shallowCopyOfUserInfo.name = "irtiza";
shallowCopyOfUserInfo.age = 23;
shallowCopyOfUserInfo.hobies[1] = "writing";
console.log(userInfo, shallowCopyOfUserInfo);
//output: userInfo
// name: "saqlain"                                   //shallow copy not refer the top level
// age: 34                                                //shallow copy not refer the top level
// hobies: (3) ['swimming', 'writing', 'chess']           //shallow copy  refer the nested level. that's why this is change

//shallowCopyOfUserInfo
// name: "irtiza"
// age: 23
// hobies: (3) ['swimming', 'writing', 'chess']

// deep copy of an object

let userInfo1 = {
  name: "saqlain",
  age: 34,
  hobies: ["swimming", "reading", "chess"],
};

let shallowCopyOfUserInfo1 = JSON.parse(JSON.stringify(userInfo1));
shallowCopyOfUserInfo1.name = "irtiza";
shallowCopyOfUserInfo1.age = 23;
shallowCopyOfUserInfo1.hobies[1] = "writing";
console.log(userInfo1, shallowCopyOfUserInfo1);
//output: userInfo
// name: "saqlain"                                   //shallow copy not refer the top level
// age: 34                                                //shallow copy not refer the top level
// hobies: (3) ['swimming', 'reading', 'chess']           //shallow copy not  refer the nested level. that's why this is not change

//shallowCopyOfUserInfo
// name: "irtiza"
// age: 23
// hobies: (3) ['swimming', 'writing', 'chess']
