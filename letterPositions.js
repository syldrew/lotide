const assertArraysEqual = function (array1, array2) {
    if (eqArrays(array1, array2)) {
        console.log(`Assertion Passed: ${array1} === ${array2}`);
    } else {
        console.log(`Assertion Failed: ${array1} !== ${array2}`);
    }
};

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

const letterPositions = function (sentence) {
    const results = {};
    for (let i = 0; i < sentence.length; i++) {
        let letter = sentence[i];
        if (letter === ' ') {
            continue;
        } else if (!results[letter]) {
            results[letter] = [i];

        } else {
            results[letter].push(i);
        }

    } return results;
};
console.log(letterPositions("This is a test."))


<<<<<<< HEAD
assertArraysEqual(letterPositions("hello").e, [1]);
=======
assertArraysEqual(letterPositions("hello").e, [1]);
>>>>>>> c242b66492058f760fd47f69e4b0157e80819cb8
