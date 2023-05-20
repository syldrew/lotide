
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

const assertEqual = function (actual, expected) {
    if (actual === expected) {
        console.log(`Assertion passed: ${actual} === ${expected}`);
    } else {
        console.log(`Assertion failed: ${actual} !== ${expected}`);
    }
};





const middle = function (array) {
    if (array.length <= 2) {
        return [];
    } else if (array.length % 2 === 0) {
        return [array[Math.ceil(array.length / 2) - 1], array[Math.ceil(array.length / 2)]];
    } else {
        return [array[Math.floor(array.length / 2)]];
    }
};

console.log(middle([1, 2, 3])) // => [2]

