/** 
 *   OPERATORS
 *    - Opereators act on data input and are classed by the number of operators used.
 * 
 * - Uniary Operators  are used with 1 value
 * - BInary Operators are used with 2 values
 * - Ternary Operators are used with 3 values
 * 
 * 
 *  There are 6 types of operators:
 *      1. Assignment Operators
 *      2. Comparison Operators
 *      3. Arithmetic Operators
 *      4. Logical Operators
 *      5. Uniary Opertors
 *      6. Ternary Operators
 */ 
 
 /** 
  *  1. ASSIGNMENT OPERATOR (=)
  * 
  * - The assignment operator assigns a data type value to a variable.
  * 
  *  Other Assignment Operators:
  *    * These operators perfom mathematical expression while also assigning the resulting value.
  * 
  *   1. Addition Assignment   x += y
  *   2. Subtraction Assignmnt x -= y
  *   3. Multiplication Assignment x *= y
  *   4. Division Assignment x /= y
  *   5. Remainder Assignment x %= y
  * 
 */ 
 const assignmentRep = ['array', 'assignment']; // an array assigned to a variable using assignment operator
 
 /**
  *  2. COMPARISON OPERATORS (>, <, >=, <=, ==, ===)
  * 
  * - The comparison operators compares two values evaluating to true or false.
  * Type of comparison operators:
  * 
  *    1. Greater than >
  *    2. Less than <
  *    3. Greater than or equal to >=
  *    4. Less than or equal to <=
  *    5. Loose Comparison ==
  *    6. Strict Comparison ===
 */ 
 
 // 1. Greater Than - This compares two values to see if one value is greater than the other //
 if (1 > -1){ // results to true
  console.log(true); // code block will execute
 }
 
 // 2. Less Than - Less than operator checks if one value is less than another //
 if (5 < 10){ // results to true, code block will execute
  console.log(true);
 }
 
 // 3. Greater than or Equal to - >= checks if a value is greater than or equal to another //
 if (5 <= Math.abs(-5)){ // absolute value of -5 is equal to 5
  console.log('yep'); // this will print
 }
 
 // 4. Less than or equal to -  <= checks if a value is less than or equal to another //
 if (10 <= 5){ // results to false
  console.log('that is right'); // will not print 
 }
 
 // 5. Loose comparison - == operator checks if two values are equal regardless of datatype //
 console.log(6 == '6'); // results to true even though the values are different datatypes
 
 // 6. Strict Comparison - === operator checks if two values are equal in value and datatype //
 console.log (6 === '6'); // will result to false because the datatypes are different


 
 
 /**
  *  3. ARITHMETIC OPERATORS (+, -, *, /)
  * 
  * -   Arithmetic Operators are used to perform mathematic operations on number datatype values
  * 
  *   Arithmethic operators:
  *     1. addition operator
  *     2. subtraction operator
  *     3. multiplication operator
  *     4. division operator
  * 
 */ 
 
 /* Additon operator - can used to add two number values together and also can be used to concatenate strings */
 function add(num1, num2){
  return num1 + num2;
 }
 console.log(add(2, 2)); // prints 4 to console 
 
 /* Subtraction operator - used to subtract one number value from another */
 function subtract(num1, num2){
  return num1 - num2;
 }
 console.log(subtract(10, 9)); // prints 1 to console
 
 /* Multiplication operator - used to multiply two numbers */
 function multiply(num1, num2){
  return num1 * num2;
 }
 console.log(multiply(10, 2)); // prints 20 to console
 
 
 /* Division Operator - used to take one number value divided by another */
 function divide(num1, num2){
  return num1 /num2;
 }
 console.log(divide(10, 2)); // prints 5 to console.
 
 
 
 /**
  *  4.  LOGICAL OPERATORS (||, &&, !)
  *  - Used in condtional statements
  * 
  *  - There are 3 Logical Operators:
  *    1. || (or operator)
  *    2. && (And operator)
  *    3. !  (Bang Operator)
 */ 
 
 // 1. Or operator - When using the || operator only one value within the condition must be true //
  let x = 2;
  if(x === 2 || x > 0){ // will evaluate to true
   console.log(x); // the value of x ,which is 2, will print.
  } 
  
  // 2. And Operator - When using the && operator, both values within the condition must be true //
  if (x > 0 && x !== 2){ // this will result to false so code block will not execute
   console.log('Hey'); // 'Hey' will not print
  }
  
  
  // 3. Bang Operator - When using the ! operator, this flips the truthiness of a value.
  console.log(!(10 === '10')); // This will print true 
  
  
  
 /**
  *   5.  UNIARY OPERATORS (!, typeof, -)
  * 
  * 1. Bang Operator
  * 2. typeof Operator
  * 3. Uniary Negation Operator
 */ 
 
 // Bang Operator ! - negates the truthiness of a value to false //
 console.log(!false); // prints true
 
 // typeof Operator - check the data type of a value and returns it's type as a string //
 console.log(typeof 'Jaz'); // prints string to console
 
 /* Uniary Negation Operator - Precedes the operand and converts non-numbers data types to numbers, also negates a value */
 console.log(-"-10"); // will print 10 to console.
 
 /**
  *   6.  TERNARY OPERATOR 
  *  - The ternary operator is the only operator that works with 3 values
  *  - There's only 1 ternary operator which is used as a shorter way of writing a conditional chain.
  *  
  * The expression evaluate to a boolean value of true or false. 
  * 
 */
 
 let myName = "Jazmine Smith";
 
let isName = myName === "Jazmine Smith" ? true : false;
 
console.log(isName); // prints true to console because the return value of isName is true

 
 