
//const assertArraysEqual = function (array1, array2) {
 //   if (eqArrays(array1, array2)) {
   //     console.log(`Assertion Passed: ${array1} === ${array2}`);
   // } else {
    //    console.log(`Assertion Failed: ${array1} !== ${array2}`);
    //}
//};

//const eqArrays = function (array1, array2) {
 //   if (array1.length !== array2.length) {
   //     return false;
   // }
   // for (let i = 0; i < array1.length; i++) {
   //     if (array1[i] !== array2[i]) {
   //         return false;
   //     }
   // }
   // return true;
//};

const middle = function (array) {
    if (array.length <= 2) {

        return [];
    } else if (array.length % 2 === 0) {
        return [array[Math.ceil(array.length / 2) - 1], array[Math.ceil(array.length / 2)]];
    } else {
        return [array[Math.floor(array.length / 2)]];
    }
};

module.exports = middle;

//console.log(middle([1, 2, 3])) // => [2]

