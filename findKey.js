const assertEqual = function (actual, expected) {
    if (actual === expected) {
        console.log(`Assertion passed: ${actual} === ${expected}`);
    } else {
        console.log(`Assertion failed: ${actual} !== ${expected}`);
    }
};
const findKey = function (object, callback) {
    let keysArr = Object.keys(object);
    for (let i = 0; i < keysArr.length; i++) {

        if (callback(object[keysArr[i]])) {
            return keysArr[i];
        }
    }
    return undefined;
};
findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri": { stars: 3 },
    "noma": { stars: 2 },
    "elBulli": { stars: 3 },
    "Ora": { stars: 2 },
    "Akelarre": { stars: 3 }
}, x => x.stars === 2);

let object = {
    "Blue Hill": { stars: 1 },
    "Akaleri": { stars: 3 },
    "noma": { stars: 2 },
    "elBulli": { stars: 3 },
    "Ora": { stars: 2 },
    "Akelarre": { stars: 3 }
};
let actual1 = findKey(object, x => x.stars === 2);
let expected1 = "noma";

assertEqual(actual1, expected1);

assertEqual(actual1, expected1);
