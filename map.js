const words = ["ground", "control", "to", "major", "tom"];
<<<<<<< HEAD
const map = function (array, callback) {
    const results = [];
    for (let item of array) {
        results.push(callback(item));
    }
    return results;
}

const results1 = map(words, word => word[0]);
console.log(results1)
=======
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
console.log(results1)
>>>>>>> c242b66492058f760fd47f69e4b0157e80819cb8
