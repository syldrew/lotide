//const assertEqual = function (actual, expected) {
 // if (actual === expected) {
  //  console.log(`Assertion passed: ${actual} === ${expected}`);
  //} else {
  //  console.log(`Assertion failed: ${actual} !== ${expected}`);
 // }
//};

//const assertEqual = require('./assertEqual');

function head(arr) {
  let head = arr[0]
  return arr[0]
}

//assertEqual(head([5, 6, 7]), 5);
//assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

module.exports = head;

