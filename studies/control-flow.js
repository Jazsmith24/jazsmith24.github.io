/**
 * 
 * Control Flow:
 * 
 * Controll flow refers to the functionality/behavior of our code.
 * We make our code functional by setting conditional statements.
 * 
 * We do this by setting conditional statements, followed by a 
 * code block in which to execute if the condition resolves to a boolean value of true. The interpreter will read the code and check each condition set.
 * If the condition set resolves to false, the next condition will be checked until true. Once the interpreter has found a condition that is true,
 * it no longer reads the rest of the code following the codeblock.
 *
 * There are two ways we can control the our code behavior:
 *      1. If-Else if-Else Chains
 *      2. Switch Statements
 * 
 */
 
 
 /**
  * 
  * 1. If - Else if - Else 
  * 
  * In order to form this conditional chain you must start with the keyword 'if' followed by parenthesis which hold the value
  * that is to be tested. If the condition resolves to a true value, the code block 
  * following the condition will execute. The code block is stored within curly braces. 
  * 
  * If you would like to test another condition you will use the same syntax as the if statement,
  * but instead of if , you will use the keyword 'else if'. Following the else if statement is the else statement.
  * Starting with the keyword 'else', this statement does not have a condition stored in parenthesis but will have a code block in curly braces.
  * The else statement serves as the default set in case none of the previous conditions resolve true.
  * 
 */
 
 /**
  * If Statement 
  *     - There can only be one if statement.
  *     - If the condition inside the parenthesis is true we will perform a function or display information based on it's code block in the curly braces.
  *
 */
 
 let legend = 'Jimmy Early'; // variable named legend set to the string of 'Jimmy Early'
 
 if (legend === 'Jimmy Early'){
     console.log('Jimmy got soul'); // prints 'Jimmy got soul' to console
 }
 
 /**
  * Else if Statement
  *     - You can have as many else if statements as you'd like.
  *     - This condition will be checked if its preceeding condition fails.
  *     - This will run a different code block if true.
  */ 
 
 else if (legend === 'John'){
     console.log("We're just ordinary people"); // this set conditon is not true
 }
 
 /**
  * Else statement
  *     - You may only have one else statement.
  *     - This will serve as the default action on our code in case the if/else-if statement(s) do not resolve true.
  */ 
 
 else {
     console.log("You can't kill a man with soul"); // this condition will not be ran because the if statement resolved true.
 }
 
 /**
  * 
  * 2. Switch Statements
  * 
  * Switch statements, similar to the if-else if-else chain, checks a case(condition) in order to execute a set code block.
  * The switch statement evaluates an input and compares it to each case clause and executes code associated with that input.
  * To start a switch statement, you must begin with the keyword, "switch" followed by parenthesis which holds the variable name to be tested.
  * Following the parenthesis will be the curly braces. The curly braces holds all cases to test. If the case matches with the variable tested,
  * the code block following the case will execute. After each code block, you must include a break statement.
  * 
  * You would want to use a switch statement over an if-else if- else chain if you woould like cleaner code.
  * 
  */
  
  // set a variable named favorite food assigned with favorite food
  let favoriteFood = 'gumbo';
  
  // create a switch statement testing the favoriteFood variable
  switch (favoriteFood){
   // check if the favorite food matches the string "stewed chicken"
   case "stewed chicken": // this condition will not pass so the interpreter will move on to the next case
    console.log("I love stewed chicken!");
    break; // if you do not break, the interpreter will not move on to the next case
  
  // check if favorite food matches the string "gumbo"
   case "gumbo":
    console.log("I love gumbo!");
    break;
    
    default: // similar to the else statement
    console.log("I don't have a favorite food"); // "I don't have a favorite food" will print to the console if none of the previous cases match.
  }