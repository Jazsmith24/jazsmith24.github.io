/**
 * VARIABLES
 * 
 * Variables are used in a program to hold data in memory. Variables are named identifiers 
 * that hold on to data of any data type in our program. There are three keywords used to declare 
 * a variable:
 * 
 *      1. var
 *      2. let
 *      3. const
 * 
 * Following the keyword is the name chosen for our variable. 
 * There are two phases of variable declaration:
 *  1. Declaration
 *  2. Initialization
 * 
*/ 

// Declaration - At the declaration phase the varible is named //

var variableDeclared; // variable is undefined at declaration phase

// Initialization - at the initialization phase, data is assigned to the variable //

variableDeclared = 'string datatype'; // variable is now defined

// Re-assignment - Variables can be re-assigned //

variableDeclared = [1, 2, 3, 4]; // variable value is changed to the array of numbers


// Var, Let, Const //

/**
 *  1. VAR 
 * 
 * Declaring a variable syntax:
 *                              var varName;
 * 
 * Variable can be declared anywhere, and has no value until it is assigned.
 * Variables declared with var are global scoped. 
 * Variables declared inside functions assignments are only available to the function's local scope.
 * Variables declared with 'var' can be re-assigned.
 */ 

// Declaration //
var declaration;
console.log(declaration); // gives an undefined value because the assignment has not been reached

// Assignment //
declaration = 'variable declared with var';
console.log(declaration); // prints 'variable declared with var'

// Re-Assignment //
declaration = 'var declared with var'; // value changed
console.log(declaration); // 'var declared with var';

/**
 *  2. LET
 * 
 * Syntax of declaring a variable with let:
 *          let varName; 
 *  The let statement declares a block scope local variable, meaning it's stuck in block scope.
 *  Variables declared with let cannot be redeclared within it's scope.
 * 
 * - Variables declared with let are hoisted by it's name but not it's value.
 * - Let variables are hoisted to the top of their scope- But NOT Available until the interpreter 
 *  reaches the line the variable is declared
 * - Cannot re-declare a let variable in the same scope.
 * - accessing let variables before they’re declared will throw a ReferenceError
 * - can be re-assigned
*/ 

// console.log(array); < -- Reference error
/* Console logging before the declaration will throw a reference error because
the variable is not availiable until the line in which it is declared has been reached.*/

// Declaration //
let array;

// Assignment //
array = [1, 2, 3];

// Re-assignment //
array = [4, 5, 6];

 console.log(array); // prints [4, 5, 6] to console
// Variables declared with let within a function are not hoisted outside of it's scope


function age(num){
 let myAge = num;
 console.log(myAge); // prints the value of myAge number value
} 

// let variables are not hoisted outside of it's scope
// console.log(myAge); // If you try to console log my age from outside of it's scope, it will throw an reference error

for (let i = 0; i < array.length; i++){ // the variable declared with let in this for loop is only availiable in it's block scope
    console.log(array[i]); // prints array values 4, 5, 6
}

/**
 *  3. CONST
 * 
 * Syntax of a const declaration : const varName = 'assignment';
 * 
 *  Variables declared with const must be initialized when declared.
 *  These variables cannot be changed thorugh re-declaration or re-assignment.
 *  Const variables are block scoped.
 *  Accessing const variables before they’re declared will throw a ReferenceError
 * 
*/ 

// Declaration & Assignment //
const school = "Operation Spark";



/**
 *     HOISTING
 * 
 *  Hoisting refers bringing variable declarations or function declarations to the top of their scope.
 *  
 * Variable declarations and function declarations are hoisted differently.
 * Variable declarations are hoisted by name but not the value and 
 * functions are hoisted by their name and function body.
 * Hoisting happens at runtime, before the code is executed.
 * 
*/ 

/**  Hoisting Variable Declarations - hoisted by name but not the value 
 *  
 *  Variables
 * Can be declared anywhere
 * Available anywhere in scope
 * Before or after declaration
 * No value UNTIL assigned 
 * 
 */
 
 // example of variable declaration hoisting
 let hometown;
 
 hometown = "New Orleans"; // variable hometown will be hoisted to top of scope at run time. 
 
 console.log(hometown); // prints "New Orleans" to console.
 
 /** Hoisting Function Declarations 
  * 
  * There are two function classifications:
  *     1. Function Declaration - Function Declarations are hoisted by the function name and body.
  *     2. Function Expression - Only hoisted by name like variables.
  * 
 */ 
 
 /**
  *  Function Declaration
  */ 
  
  console.log(add(3, 4)); 
  // prints 7 to console because function declarations are hoisted to the top of scope, therefore, it's output value is available.
  
  function add(num1, num2){
      return num1 + num2;
  }
  
/**  
 * Function Expressions
 *
 * Function expressions are functions assigned to variables using the assignment(=) operator.
 * Function expressions are only hoisted by name. You cannot invoke function expressions before definining them.
 * If you call a function expression before it is defined, it will print undefined.
 * 
 * Functions assigned to variables returns it's output value to the variable
*/

var printName = function(string){
 return string;
};
 console.log(printName('Jaz')); // prints 'Jaz'