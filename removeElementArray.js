// const _ = require('lodash')


const inputArray = [1,3,23,21,23,2,43,54,763,2,23,1,434,231];
const elementToReplace = 2;
// const elementToReplaceObject = { a: 4};

// SOLUTION 1 - filter method. Removes all occurences of the element
const resultingArray = inputArray.filter(el => el !==elementToReplace);
console.log(resultingArray); // return inputArray without 2 
console.log(inputArray)

// SOLUTION 2 -slice and findIndex. Removes only first occurence
const index = inputArray.findIndex(el => el === elementToReplace);
const sliceArray = [...inputArray.slice(0, index), ...inputArray.slice(index+1)]
console.log(sliceArray)

// SOLUTION 3 - lodash remove method
// const lodashResultArray = _.remove(inputArray, el => el===elementToReplace)
// console.log(lodashResultArray)


