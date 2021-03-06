// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    // check if the value input is an array, return true, false if otherwise
    if (Array.isArray(value)){
        return true;
    }
    return false;
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
 
 // check if the type of value is an object,but it is not null, not an Array,& not a Date
 // return true, false otherwise
function isObject(value) {
    // YOUR CODE BELOW HERE //
   if(typeof value === 'object' && !Array.isArray(value) && value !== null && !(value instanceof Date)) {
    return true;
}
return false;
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
 
 // check if the value given is an object ,but it is not null, & not a Date, return true
 // check if type of value is an array,but it is not null, & not a Date, return true
 // otherwise return false
function isCollection(value) {
    // YOUR CODE BELOW HERE //
     if(typeof value === 'object' && value !== null && !(value instanceof Date)) {
    return true;
} else if (Array.isArray(value) && value !== null && !(value instanceof Date)){
    return true;
}
return false;
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
 
 // check the type of the value input and return it's type as a string. 
 // types: string, number, boolean, undefined, null, array, date, function, object.
 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    if (typeof value === "string"){
        return "string";
    } else if (typeof value === "number"){
        return "number";
    } else if (typeof value === "boolean"){
        return "boolean";
    } else if(typeof value === "undefined"){
        return "boolean";
    } else if (value === null){
        return "null";
    } else if (Array.isArray(value)){
        return "array";
    } else if (value instanceof Date){
        return "date";
    } else if (typeof value === 'function'){
        return "function";
    } else if (typeof value === 'object'){
        return "object";
    }
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
