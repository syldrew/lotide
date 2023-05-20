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

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);


const without = function (arr, toRemove) {

    let result = [];
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (toRemove.indexOf(arr[i]) === -1) {
            result.push(arr[i]);
        }
    }
    return result;
};

