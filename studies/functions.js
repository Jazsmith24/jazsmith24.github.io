/**
 * 
 * FUNCTIONS 
 * 
 * What is a function?
 * Functions are blocks of reuseable code that accepts inputs, processes those inputs, and returns a new data value.
 * 
 * Parts to a function declaration:
 * 
 * 1. Name
 * 2. Parameter(s)- (optional)
 * 3. Function body (where the code runs)
 * 4. Return statement
 * 
 * SYNTAX:
 *
 * function name(parameter(s)) {
 *  <function body> // code to execute
 *  <function body> 
 *  return statement // optional, can only be used in function body, pulls value to parent scope
 *     }
 *
*/ 

let name = 'Jazmine';

// Function Declaration //

// declare a function named firstCharacter that returns the first character in a string

function firstCharacter(string){
    return string[0];
}



/** Calling a Function 
 * 
 *  You call a function by its name followed by parenthesis with value to be passed inside.
 *  Calling a function, runs the code in the function body.
 * 
 *  SYNTAX for calling functions:  functionName(arguments);
 */ 
 console.log(firstCharacter(name)); // prints 'J' to the console.
 
/** Function Expressions
 * 
 * Functions assigned to variables ar called function expressions. 
 * This is useful because in javascript, you can pass around functions as if they were plain data.
 * 
 * let function = function(param, param){
 *   <function body>
 *   <function body>
 *   return statement;
 *   };
 * 
*/ 

// Example of function Expression //

let printInput = function(string){
    console.log(string);
};

// The function call does not change
let namePrint = printInput(name); // prints 'Jazmine' to console



/**
 * SCOPE
 * 
 * Types of scope:
 *  1. Global Scope
 *  2. Local Scope
 *  3. Block Scope
 * 
 * Scope refers to the visibility or accessibility of a variable or other resource in the area of your code.
 * 
 * 
 * 
*/ 