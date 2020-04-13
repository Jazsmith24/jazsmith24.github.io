
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/**Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
It may be useful to know that you can find the length of a string by writing .length after it.
*/
// declare a function that takes a number that takes a number
// loop from 1 to the input number 
// on each iteration,add i to "#"
//print i
function triangles(num) {
 
for (var i = "#"; i.length <= num; i+="#"){
  console.log(i);

}

}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/**
 * Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions
 * For numbers divisible by 3, print "Fizz" instead of the number,
 * and for numbers divisible by 5 (and not 3), print "Buzz" instead.

  When you have that working, modify your program to print "FizzBuzz" 
  for numbers that are divisible by both 3 and 5
  (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
*/

// for loop from numbers 1 to 100
// for numbers divisible by 3 print "fizz"
// for numbers divisible by 5 print "buzz"
// for numbers divisble by 15 print "fizzbuzz" 

function fizzBuzz() {
  for (var num = 1; num <= 15; num++){
    if (num % 15 === 0){
      console.log("fizzbuzz");
    }else if (num % 3 === 0){
      console.log("fizz");
    }else if (num % 5 === 0){
      console.log("buzz");
    } else {
      console.log(num);
    }
  }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// create a function that takes a number as it's parameter
// set a variable str assigned with an empty string
// to create a chess board, for loop through starting at 0 up to the input number to create the line
// inside the loop, implememnt another for loop starting at 0 up to the input number to create a column
// check if the line + column is an even number, add a space to the string
// otherwise, add a '#' 
// insert a new line 

function drawChessboard(num){
    
    var str = "";

for (let line = 0; line < num; line++){
  for (let column = 0; column < num; column++){
    if ((line + column) % 2 === 0){
      str += " ";
    } else {
      str += "#";
    }
  }
    str += "\n";
}
console.log(str);
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
