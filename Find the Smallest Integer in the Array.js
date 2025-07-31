// Given an array of integers, find and return the smallest integer.

function findSmallestInt(args) {
  return Math.min(...args);
}

console.log(findSmallestInt([34, 15, 88, 2]));