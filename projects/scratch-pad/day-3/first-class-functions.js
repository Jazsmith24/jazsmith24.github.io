// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base){
    // YOUR CODE BELOW HERE //
    // create a function expression that test if a value is greater than the base given
    var greater = function (value){
      if (value > base){
          return true;
      }  
     return false;
    };
    
    return greater;
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    // create a function expression that takes a value
    var lesser = function (value){
        // check if the value if less than the base, return true. If not return false
      if (value < base){
          return true;
      }  
     return false;
    };
    // return the lesser value result
    return lesser;
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    // create a function extression that takes a string as a parameter
    var starts = function (string){
        //lowercase the string and the startsWith character to ensure comparability
        var str = string.toLowerCase();
        var start = startsWith.toLowerCase();
     // check if the string starts with the given letter
     if (str[0] === start){
         return true;
     }
     return false;
    };
    // return starts value
    return starts;
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    // create A FUNCTION EXPRESSION THAT TAKES A STRING 
var ends = function (string){
    // lowercase both given string values to compare
        var str = string.toLowerCase();
        var end = endsWith.toLowerCase();
     // check if the string starts with the given letter
     if (str[str.length - 1] === end){
         return true;
     }
     return false;
    };
    // return ends value
    return ends;
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return an Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
 
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    // create an array
    var modified = [];
    // loop through each element in the array and push the value of the modify function inisde the 
    // modified array
      strings.forEach(function(string){
        modified.push(modify(string));
    });
    // return modified array
    return modified;
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    // assign allPass to true
    let allpass = true;
    
    // loop through the strings array and check if the test results as false
    strings.forEach(function(string){
        if(test(string) === false){
            allpass = false;
        }
    });
    // return all pass
    return allpass;
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}