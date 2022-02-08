let colors = [
  ["red", ["maroon", "pink"]],
  "violet",
  [("blue", "cyan")],
  ["green", "olive-green"],
  ["yellow", "orange"],
];

console.log(colors);
console.log(colors[0][1][1]); //pink
console.log(colors[3][1]); //olive-green

let salary = [
  ["ABC", 24, 18000],
  ["EFG", 30, 30000],
  ["IJK", 28, 41000],
  ["EFG", 31, 28000],
];
for (var i = 0; i < salary.length; i++) {
  console.log(salary[i]);
}
