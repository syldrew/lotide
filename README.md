# Lotide

A mini clone of the [Lodash](https://lodash.com) library.


## Purpose


**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @syldrew/lotide`

**Require it:**

`const _ = require('@syldrew/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`


## Documentation


The following functions are currently implemented:

assertArraysEqual : Write a function that prints an appropriate message after comparing the two arrays.

assertEqual:Write an updated Assert Equal Function that uses template literals.

assertObjectsEqual: Write a function that takes in 2 objects and returns true if they are equal and false otherwise.

countLetters: Write a function that takes in a sentence and returns a count of each of the letters in the sentence.

countOnly: Write a function that takes in a collection of items and returns a specific subset of those items.

eqArrays: Write a function that takes in 2 arrays and returns true if the arrays are equal and false otherwise.

eqObjects: Write a function that takes in 2 objects and return true if they are equal and false otherwise.

findKey: Write a function that takes in an object and callback and returns the first key that meets the criteria specified in callback.

findKeyByValue: Write a function that takes in an object and a value and returns the first key that corresponds to that value.

head: Write a function that takes in an array and returns the first element in the array.

letterPositions: Write a function that takes in a string and returns all indices of letter positions in the string.

map: Write a function that takes in an array and a callback and returns a new array based on the results of the callback on each item in the array.

middle: Write a function that takes in an array and returns middle most element of the array.

tail: Modularize tail function.

takeUntil: Write a function that takes in an array and callback and returns a slice of the array based on the criteria specified in the callback.

without: Write a function that takes in a source array and an itemsToRemove arrays and returns only the items from the source array that are not in the  

itemsToRemove array.


