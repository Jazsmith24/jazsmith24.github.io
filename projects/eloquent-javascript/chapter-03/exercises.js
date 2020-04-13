////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// Write a function min that takes two arguments and returns their minimum.
// params: arg1, arg2
// return the least of the two arguments using math.min
function min(arg1, arg2) {
return Math.min(arg1,arg2);
}

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/**
 * We’ve seen that % (the remainder operator) can be used to test whether a number 
 * is even or odd by using % 2 to see whether it’s divisible by two. 
 * Here’s another way to define whether a positive whole number is even or odd:

Zero is even.

One is odd.

For any other number N, its evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description.
The function should accept a single parameter (a positive, whole number) and return a Boolean.


*/ 

function isEven(number) {
if (number === 0){
  return true;
} 
if (number === 1){
  return false;
}

if (number < 0){
 return isEven(-number);
}else {
   return isEven(number - 2);
}
}

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/**
 * write a function called countChar that behaves like countBs, except it takes a second argument
 * that indicates the character that is to be counted (rather than counting only uppercase “B” characters).
 */ 
 // params: string, and a letter to look for
 // create an array
 // loop through the string
 // check if the character in the string is equal to the letter input.
 // if so, push the letter into the array
 // return the length of the array
function countChars(string, letter) {
var letterArr = [];

for (let i = 0; i < string.length; i++){
  if (string[i] === letter){
    letterArr.push(string[i]);
  }
}
return letterArr.length;
}

////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/**
 * Write a function countBs that takes a string as its only argument and returns a number 
 * that indicates how many uppercase “B” characters there are in the string.
*/ 
// function takes a string value as a parameter
// create an array 
// loop through the string 
// check if the letter at the index is a "B"
// push the letter into the array
// return the array.length

function countBs(string) {
var bees = [];

for (let i = 0; i < string.length; i++){
  if (string[i] === "B"){
    bees.push(string[i]);
  }
}
return bees.length;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};
