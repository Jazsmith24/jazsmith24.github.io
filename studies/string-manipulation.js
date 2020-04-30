/**
 * 
 * String Manipulation
 * 
 *  - String manipulation refers to the mutatation of a string value.
 * 
 *  Ways to Manipulate a String:
 * 
 *      1.  toUpperCase Method
 *      2.  toLowerCase Method
 *      3.  concat Method
 *      4.  Concatenation using addition operator
 *      5.  slice Method
 *      6.  replace Method
 * 
 * 
 */ 
 
 // 1. toUpperCase() method - changes a string value to uppercase //
 let lowercase = 'lowercase';
 
 let uppercase = lowercase.toUpperCase(); // variable assigned with the uppercase value of lowercase variable
 
 console.log(uppercase);// prints 'LOWERCASE' to console
 
 
 
 // 2. toLowerCase() method - changes a string value to lowercase //
 let capped = 'UPPERCASE';
 
 let notCapped = capped.toLowerCase(); // variable assigned with the capped value to lowercase 
 
 console.log(notCapped); // prints 'uppercase' to console
 
 
 
 
 
 // 3. concat() Method - adds two or more strings together //
 let school = "Operation Spark";
 let rating = "is super cool!";
 
 
console.log(school.concat(" ", rating)); // prints  "Operation Spark is super cool!" with a space in between to separate words.




// 4. Concatenation Using addition operator - we can also use the + operator to combine string values //

 let schoolRating = school + ' ' + rating; // string values combined with a space
 console.log(schoolRating); // prints  "Operation Spark is super cool!"
 

 
 /* 5. slice() Method - the slice method extracts part of a string and returns a shallow copy of the string. 
        Syntax:  string.slice(start, end);
        The start and end parameters refer to the range of indices to extract from the string.
 */

// created a function that takes in the school variable and lowercases the 'O' in "Operation Spark"
let littleO = function(string){
  return string[0].toLowerCase() + string.slice(1);
  // Starting at index 1, a shallow copy of the input string is added to the first index string.
};
 
console.log(littleO(school)); // prints 'operation Spark';



/* 6. replace() Method - replace method is used to specify certain characters in the string that you would like to alter
        Syntax: string.replace(searchValue, newValue);
        The searchValue idicates what values to look for, and newValue is what you wold like to replace searchValue with
*/
 
let fullName = "Jazmine Smith";

let newName = fullName.replace("Jazmine", "Jaz");
console.log(newName); // fullName value was altered to "Jaz Smith"