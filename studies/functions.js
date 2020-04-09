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
 * Scope refers to the visibility or accessibility of a variable or other resource in the area of your code.
 * 
 * Types of scope:
 *  1. Global Scope
 *  2. Local Scope
 *  3. Block Scope
 * 
 * 1. A GLOBAL scoped variable has global scope, meaning all scripts and functions on a web page can access it.
 * 
 * 2. A LOCAL scoped variable has a local scope, this refers to declarations that happen within the body of a function.
 * Local variables are only recognized inside their functions.
 * 
 * 3. A BLOCK scoped variable has a block scope, refers to declarations that happen within the body of a function.
 * 
 * GLOBAL -global scope
 * Function - Local scope
 *     IF statements - block scope
 *     Else statements - block scope
 * LOOPS -block scope
 * 
 * Outer scopes do not have access to their inner scoped functions but inner scopes have access to their outer scope.
*/ 

var globalVariable = "Jazmine"; // this is an example of a global variable. It is availiable to all functions and scripts in the page.


// declare a function called greet that takes a string as a parameter
// create a greeting variable with the string value of Hello
// check if the inupt string has a length greater than 0
// if so, concat the greeting var with the input string.
// return greeting
function greet(string){
    var greeting = "Hello"; // local scope variable, only availibale within function
    
    if (string.length - 1 > 0){ // conditional statements are block scoped
        greeting += ' ' + string;
    }
    return greeting;
}

console.log(greet(globalVariable)); // prints "Hello Jazmine" to console

/**
 * CLOSURES
 * 
 * What defines a CLOSURE?
 * 
 * An inner function with access to the parent scope, even after the parent function has closed.
 * This inner function uses variables or parameters from a parent scope.
 * 
 * Closures are useful when returning functions from functions
 * Keep variables alive in returned functions.
 *
 * 
*/
// named pass assigned with string of 'fluffy'
var pass = "fluffy";

// declare a function called password that returns a function that returns the input string from outer parameter

function password(string){
    return function(){
        return string; // closure - parameter from outer scope
    };
}

console.log(password(pass)); // will print [function] to the console