//
// This is only a SKELETON file for the 'Sum Of Multiples' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const sum = (array, number) => {
  let numberArray = [];
  let finalArray = [];
  let result = [];

  // create an array with all the numbers
  for(let i = 0; i < number; i++){
    numberArray = [...numberArray, i]
  }

  // loop through the array of multipliers
  // create an array populated w those divisible with no remainder
  for (let i = 0; i < array.length; i++ ){
    result = numberArray.filter(item => item % array[i] == 0);
    finalArray = [...finalArray, result];
  }

  // flatten the array of arrays and remove duplicates
  let uniqueChars = [...new Set(finalArray.flat())];

  // return the summation of all numbers in the array
  return uniqueChars.reduce((a, b) => a + b, 0);
};
