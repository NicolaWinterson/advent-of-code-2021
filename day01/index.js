/* 
--- Day 1: Sonar Sweep ---
How many measurements are larger than the previous measurement? 
*/

const fs = require("fs");

const lines = fs
  .readFileSync("depths.txt", { encoding: "utf-8" })
  .split("\n")
  .filter((x) => Boolean(x))
  .map((x) => parseInt(x));

let increased = 0;

for (let i = 0; i < lines.length; i++) {
  const previous = lines[i - 1];
  const current = lines[i];
  if (current > previous) {
    increased++;
  }
}

console.log(increased);
/* 
count the number of times the sum of measurements in this sliding window increases from the previous sum. 
So, compare A with B, then compare B with C, then C with D, and so on. 
Stop when there aren't enough measurements left to create a new three-measurement sum. 
*/

let increased2 = 0;

for (let i = 3; i < lines.length; i++) {
  const previous = lines[i - 1] + lines[i - 2] + lines[i - 3];
  const current = lines[i] + lines[i - 1] + lines[i - 2];
  if (current > previous) {
    increased2++;
  }
}

console.log(increased2);
