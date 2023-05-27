const eqArrays = function (array1, array2) {
    if (array1.length !== array2.length) {
        return false;
    }
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            return false;
        }
    }
    return true;
};

const assertArraysEqual = function (array1, array2) {
    if (eqArrays(array1, array2)) {
        console.log(`Assertion Passed: ${array1} === ${array2}`);
    } else {
        console.log(`Assertion Failed: ${array1} !== ${array2}`);
    }
};

<<<<<<< HEAD
const takeUntil = function (array, callback) {
    let results = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            results = array.slice(0, i);
            return results;
        }
    }
    return results;
=======
const takeUntil = function(array, callback) {
  let results = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      results = array.slice(0, i);
      return results;
    }
  }
  return results;
>>>>>>> c242b66492058f760fd47f69e4b0157e80819cb8
};
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
