const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion failed: ${actual} !== ${expected}`);
  }
};

function head(arr) {
let head= arr[0]
return arr[0]
}

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
<<<<<<< HEAD

=======
>>>>>>> e4cd011c8912a39b10d26b716459cc852f210ddf
