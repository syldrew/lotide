const assert = require('chai').assert;
//const assertEqual = require('../assertEqual');
const tail   = require('../tail');


describe("#tail", () => {
  
    it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
      assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
    });
  });

//assertEqual(tail([5, 6, 7]), 5);
//assertEqual(tail(["Hello", "Lighthouse", "Labs"]), "Hello");

