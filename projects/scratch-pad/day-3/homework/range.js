// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as 
 *  parameters and returns an Array containing all integers 
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  BONUS: If the first argument is greater than the second, 
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 */
 
 // declare a variable named range that takes a start number and an end number
 // create an empty array 
 // check if start is less than end, loop from start to end and push each value in the array
 // check if start is greater than end, loop start to end decrementing and push each value into the array
 // return the array
 
function range(start, end) {
    // YOUR CODE GOES BELOW HERE //
  var arr = [];
  
  if (start < end){
  for (let i = start; i <= end; i++){
    arr.push(i);
  }
}
else if (start > end){
  for (let i = start; i >= end; i--){
    arr.push(i);
  }
}
return arr;
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.range = range;
}