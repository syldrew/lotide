const assertEqual = function (actual, expected) {
    if (actual === expected) {
        console.log(`Assertion passed: ${actual} === ${expected}`);
    } else {
        console.log(`Assertion failed: ${actual} !== ${expected}`);
    }
};

const countLetters = function (sentence) {
    const result = {};
    for (const letter of sentence) {
        if (!result[letter])
            result[letter] = 1;
        else
            result[letter]++;
    }
    return result;
};
const LetterCount = countLetters("This is a test.");
console.log(LetterCount);

assertEqual(LetterCount["s"], 3);