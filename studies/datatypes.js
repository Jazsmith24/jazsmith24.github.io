/**
 * 
 * DATA TYPES
 * 
 * There are two data types:
 *  1. Simple/Primative Datatypes
 *  2. Complex Datatypes
 * 
 * Data types can be assigned to variables.
 * 
 * Data types include:
 *      1. Strings
 *      2. Numbers
 *      3. Booleans (true or false)
 *      4. Undefined 
 *      5. Null
 *      6. NAN
 *      7. Infinity and -Infinity
 *      8. Array
 *      9. Object
 *     10. Function
 * 
 */ 
 
 /**
  * 
  * SIMPLE DATA TYPES
  * 
  *   Simple data types include strings, numbers, boolean values, undefined, null, NAN (not a number), infinity/-infinity 
  * 
  * Simple data types can only hold one value at a time. They do not accumulate values and only can hold 8 bytes of memory.
  * 
  */ 
  
  /**
   * 1. STRINGS
   * 
   *    Strings are a collection of characters or symbols surrounded by single quotes or double quotes.
   *    Strings can be combined using the addition operator(+). This is called string concatenation.
   *    You can access each character in the string by using bracket notation [].
   *    Strings also have a length propety which returns the number of characters in a string.
   * 
   */
   
   // Examples //
   
   let firstName = 'Jazmine'; // variable named firstName assigned with a string value of 'Jazmine'
   
   let lastName = 'Smith'; // variable named lastName assigned with the string value of 'Smith'
   
   /** String Concatenation - combining strings using the addition operator */
   
   // set a variable named fullName with the value of the concatenation of firstName and lastName variables with a space to seperate
   let fullName = firstName + ' ' + lastName;
   
   console.log(fullName); // this will print "Jazmine Smith" to the console.
   
   /** Accessing String Values 
   - you access string values by refering to the variable and using bracket notation with the number of the character index.
   */
   
   // print the z character from the firstName variable
   console.log(firstName[2]); // will print 'z' to console
   
   /** Length property - you can see the number of characters in a string by using .length. .length-1 returns the value's last index*/
   console.log(fullName.length - 1); // will print 12 to console
   
   /** Split Method - .split method put string characters into an array */
   console.log(firstName.split('')); // prints ['j','a','z','m','i','n','e']
   
   
   
   /**
    *  2. NUMBERS
    * 
    *   Number data types can be any numerical value that's positive, negative, or has decimal points
    *   You can add, subtract, multiply, and divide these values. You can also create new values with aritmetic expressions
    * 
    */
    
    // EXAMPLES //
    
    // declare a variable assign with the value of 10
    let ten = 10;
    
    // declare another variable assigned with the value of 7.5
    let sevenPointFive = 7.5;
    
    /* Create a new  value with arithmetic expresssion*/
    
    // declare a variable named sum assign with ten and sevenPointFive added together
    let sum = ten + sevenPointFive; // mathematical expression
    
    console.log(sum); // prints 17.5 to console.
    
    
    /**
     * 
     * 3. BOOLEAN - these are true or false values. You can almost think of them similar to on/off switches.
     *    True or false can be created with boolean expressions using comparison operators, typically used in conditional statements.
     *    
     */ 
     
     // example of boolean syntax //
     
     var bigBoolean = true; // variable assigned boolean value of true
     
     bigBoolean = false; //  variable bigBoolean re-assigned to the boolean value of false.
     
     // Conditional statements result to a boolean value //
     
     // check if bigBoolean is strictly equal to true, if so, return 1.
     //check if bigBooleans is strictly equal to false, if so return 0.
     if (bigBoolean === true){ // this condition will evaluate false because the variable bigBoolean is not a true value
      return 1; // code block skipped
     } else if (bigBoolean === false){ // condition resolved true
      return 0; // 0 is returned
     }
     
     
     /**
      * 4. Undefined - Undefined is automatically assigned to variables that has been declared but not assigned with a value.
      *              Alse may be assigned to arguments for which there are no actual arguments
      * 
      */ 
     
     let who;
     
     console.log(who); // will print undefined because there is not assingment to the who variable.
     
/**
 * 5. NULL - null is similar to undefined but it is intentionally used to assign non value to a varaiable.
 */
 
 let nonFactor = null; // assigned absence of value
 console.log(nonFactor); // prints null to the console

/**
 * 6. NAN (NOT A NUMBER) - value representing not-a-number
 * It is usually used to indicate an error condition for a function that should return a valid number.
 */ 

console.log(6 - '6'); // will not print 0. This will print NAN because a string datatype from a number.


/**
* 7. -INFINITY AND INFINITY -
*  a. Infiniity represents a value greater than all values.
*  b. Negative Infinity represents a value lesser than all values.
* 
*/ 

var greatestNum = Infinity; 
console.log(greatestNum); // prints the infinite value to console.

var leastNum = -Infinity;
console.log(leastNum);  // prints the negative infinite value to console.


/**
*  COMPLEX DATA TYPES
* Complex data types include, Arrays, Objects, and Functions.
* Complex data types can hold more than one value and grow infinite in size.
*/ 

/**
* 8. ARRAY [] - an array is an ordered list that is surrounded in square brackets.
* 
* Every value in an array has an index.
* The index is the number position of the value on the list; first value starting at 0 and so forth.
* Any datatype can be stored within an array. You access values in an array by using bracket notation.
*
* 
*/

// Declaration and assignment //

var friendsList = []; // variable assigned an array literal

friendsList = ['Crys', 'Zacky', 'Taylor', 'Cj']; 

/** Accessing arrays - you can access an array by using the array name followed by a bracket on the index number of the value you would like to retrieve*/

console.log(friendsList[0]); // prints 'crys' to console

friendsList[3] = 'Khari'; // this value will replace 'cj'



/** Length property - arrays has a .length property which will return the amount of values in an array.*/
console.log(friendsList.length - 1); // prints 4 to console

console.log(friendsList[friendsList.length - 1]);// prints the last value: 'Khari' to console.



/** Array Methods -
 * array methods include: .push(), .pop(), .unshift(), .shift(), .join()
 */ 
 
 // array.push() - this adds a value to the end of an array. //
 console.log(friendsList.push('Cj')); // adds 'Cj' to the end of the list 
 
 // array.pop() - removes a value from the end of an array //
console.log(friendsList.pop()); // removes 'Cj' from list

// array.unshift() - adds a value to the beginning of an array. //
friendsList.unshift('Cj'); // adds 'cj' to the beginning of the array

// array.shift() - removes a value from the beginnging of an array //
friendsList.shift(); //removes 'Cj' from the beginnning  of the array

console.log(friendsList); // [ 'Crys', 'Zacky', 'Taylor', 'Khari' ]

// array.join() - joins array values together in a string //
console.log(friendsList.join(',')); // prints Crys,Zacky,Taylor,Khari


/** Accessing arrays - you can access an array by using the array name followed by a bracket on the index number of the value you would like to retrieve*/

console.log(friendsList[0]); // prints 'crys' to console

friendsList[3] = 'Khari'; // this value will replace 'cj'




/**
 * 9. OBJECT {} 
 *  An OBJECT is a complex data type that is used to store a collection of data inside curly braces.
 * 
 * Similar to arrays, but instead of using indicies, values are stored as key/value pairs.
 * Keys are always strings and never numbers, but values can be any datatype.
 * Object key values can conatin reference to any other data type including : Strings, numbers, booleans, 
 * arrays, other objects and functions.
 * Objects do not have a length property.
 * 
*/

// Declaration and assignment //
let person = {}; // variable assigned an object literal

person = {
 firstName: 'Jaz',
 lastName: 'Smith',
 female: true,
 age: 24
}

/** Accessing Objects - you can access an object using bracket notation or dot notation
*
* 1. bracket notation ([])  syntax: object['newkey'] = new value 
* 2. dot notation (.)       syntax:  object.newkey = new value
*/

// Using Bracket notation //
console.log(person['firstName']); // prints 'Jaz' to console


// Using Dot Notation //
console.log(person.lastName); // prints 'Smith' to console

// Adding key/values to an object //
person.hometown = 'New Orleans';
person['friends'] = friendsList;

// console.log(person);  // { firstName: 'Jaz',
//                            lastName: 'Smith',
//                            female: true,
//                            age: 24,
//                            hometown: 'New Orleans',
//                            friends: [ 'Crys', 'Zacky', 'Taylor', 'Khari' ] }



/**
 * 10. FUNCTIONS
 * 
 * Functions are reusable blocks of code that accepts inputs, process those inputs, and returns new data value.
 * The inputs are called parameters. Parameters are place holders for the arguments that will be passed in when the function is called.
 * Parameters are optional. 
 * Calling a function will run the function body.
 * Functions optionally have return statements. Return statements pulls the value to parent scope.
 * Return statements can only be used inside the function body.
 * 
 * Function Declaration Parts:
 *  1. Name
 *  2. Parameter(s) 
 *  3. Function Body (where the code runs)
 *  4. return statement
*/ 

// declare a function named add that returns the sum of 2 inputs

function add(num1, num2){
 return num1 + num2;
}

// calling a function - functionName(valueinput);
console.log(add(2,3));// prints 5 to console.

/**
 * COPY BY VALUE VS COPY BY REFERENCE
 * 
 * Simple datatypes are copied by value.
 * By Copy is when you copy a value by referring to it's name.
 * 
 * Complex datatypes are copied by reference
 * By reference is when a copy is created in memory of the actual parameter's value that is passed in.
 * 
*/ 

// Copy by value //
let simpData1 = true;
let simpData2 = simpData1; // this variable holds the same value as simpData1
simpData2 = false; // re-assigning simpData2 will not affect the value of simpData1 which will remain true.

// Copy by reference //
let instruments = ['sax', 'piano', 'cello'];
let favoriteInstruments = instruments;

instruments.shift(); // removes 'sax' from the beginning of the array. Value of both variables will be affected.

console.log(instruments); // prints [ 'piano', 'cello' ]
console.log(favoriteInstruments); // prints [ 'piano', 'cello' ]
