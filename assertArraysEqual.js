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
        console.log("\x1b[32m%s\x1b[0m", `Assertion Passed: ${array1} === ${array2}`);
    } else {
        console.log("\x1b[31m%s\x1b[0m", `Assertion Failed: ${array1} !== ${array2}`);
    }
};

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);

