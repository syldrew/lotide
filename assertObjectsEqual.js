const eqObjects = require("./eqObjects");

const assertObjectsEqual = function(actual, expected) {
    const inspect = require('util').inspect; 
      let lastResult = eqObjects(actual, expected) 
      // eqObjects returns either truthy or falsy values. lastResult is then converted to either
  
      if (lastResult == false) {
        return `Comparison Failed: ${inspect(actual)} ${inspect(expected)}`;
      }
      return `Comparison Passed: ${inspect(actual)} ${inspect(expected)}`;
    };

module.exports = assertObjectsEqual;