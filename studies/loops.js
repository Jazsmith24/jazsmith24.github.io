/** 
 * 
 * LOOPS
 * 
 * Loops are blocks of code used to iterate over collections of data in order to access each value within individually.
 * 
 * There are three kinds of loops:
 *      1. For Loop
 *      2. For-in Loop
 *      3. While Loop
 * 
 * As you loop, within the code block you can set an action perform on each iteration.
 * 
 */ 
 
 /**
 *     FOR LOOP - used to loop over a string or an array.
 * 
 * The for loop will loop over the array or string and access each index individually.
 *   In order to create a for loop, you must begin with the keyword, "for" followed by parenthesis which will hold our  
 * starting condition; ending condition; and iteration. After we set these conditions then we set the code block in curly braces.
 * 
 * Syntax : for (var i = 0; i < list.length; i++){}
 * 
 * starting condition (var i = 0;)- index number in which we we would like our iteration to begin;
 * stopping condition (i < list.length;)- index number in which we would like our index to stop;
 * incrementer (i++) - this is how we move on to the next value as we loop. 
 * 
*/ 

// EXAMPLE //

//create an array
let favSingers = ["Beyonce", "Jazmine Sullivan", "Tweet", "Durand Bernarr", "Bilal"];

// loop through the favSingers array
// print values to console
for (var i = 0; i < favSingers.length; i++){
    console.log(favSingers[i]); //prints    Beyonce
                                         // Jazmine Sullivan
                                         // Tweet
                                         // Durand Bernarr
                                         // Bilal
    
    }
    
    
/**
 *  FOR-IN LOOP - used to loop over an object and access object keys/value individually.
 * 
 * Starts with the for keyword followed by the parenthesis that holds the key words (var key in objectName).
 * var key refers to the the keys inside the object, followed by keyword "in objectName" which refers to the object we want to loop over.
 * 
 * Syntax:
 *
 *
 *      for (var key in /*object name*\) {
 *          console.log(key); // prints the object keys
 *          console.log(object[key]); // prints the object key values.
 *                 }
 * 
*/ 
  
  // EXAMPLE //
  
// create a variable called hometown assign with an object filled with key value pairs
var hometown = {
  city: "New Orleans",
  population: 350000,
  food: ['gumbo', 'po boys', 'beignets']
};


for (var key in hometown) {
  console.log(key); // will print keys
  console.log(hometown[key]); // will print key value pairs
}                                            

/**
 * 
 * WHILE LOOP - states a condition that while the condition is true, execute code block.
 * 
 * Uses the keyword, while, then in parenthsis, states a condition that while true the code block will execute repeatedly
 * until false. At the end of the code block, we must set an incrementer in order to reach the condition. 
 * If we do not set an incrementer, we will get an infinite loop and the page will crash.
 * 
 * Syntax :
 * 
 * var count = 0;            // starting condition
 * while(count <= 10) {       // condition set
     console.log(count);     // code to execute while condtion is true
     count++                 // incrementer
 }
*/ 

var count = 20;
while (count >= 5){ // while the count is greater than or equal to 5
    console.log(count); // will print 20 down to 5
    count--; // decrement by 1
}