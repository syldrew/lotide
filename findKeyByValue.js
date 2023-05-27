
const assertEqual = function (actual, expected) {
    if (actual === expected) {
        console.log(`Assertion passed: ${actual} === ${expected}`);
    } else {
        console.log(`Assertion failed: ${actual} !== ${expected}`);
    }
};
const findKeyByValue = function (object, val) {
    let objectKey = Object.keys(object);
    let i = 0;
    for (let element in object) {
        if (object[element] === val) {
            return objectKey[i];
        }
        i++;
    }
    return undefined;
}

const bestTVShowsByGenre = {
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
<<<<<<< HEAD
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
=======
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
>>>>>>> c242b66492058f760fd47f69e4b0157e80819cb8
