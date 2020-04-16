// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/
// create a function expression that takes a value
// return the value unchanged
_.identity = function(value){
    return value;
};

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

// create a function that checks the data type of the value input and returns the datatype as a string

_.typeOf = function (value) {
    // YOUR CODE BELOW HERE //
    if (typeof value === "string"){
        return "string";
    } else if (typeof value === "number"){
        return "number";
    } else if (typeof value === "boolean"){
        return "boolean";
    } else if(typeof value === "undefined"){
        return "undefined";
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
};


/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

// create a function that takes an array and a number
// check if array is not an array, return an empty array
// check if number was not given or if number is NAN, return first element in the array
// otherwise, return first <number> element array
_.first = function(array, number){
  if (!Array.isArray(array)){
      return [];
  } else if (number === null || isNaN(number)){
      return array[0];
  } else if (number < 0){
      return [];
  }else {
    array.splice(number, array.length); 
    return array;
  }
};


/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/
// create a function that takes an array and a number
// check if array is not an array, return an empty array
// check if number was not given or if number is NAN, return last element in the array
// otherwise, return last <number> element array
_.last = function(array, number){
  if (!Array.isArray(array)){
      return [];
      
  } else if (number === undefined || isNaN(number)){
      return array[array.length - 1];
      
  } else if (number < 0){
      return [];
      
  }else if (number > array.length) {
       return array;
       
   } else if (number) {
    return array.slice(array.length - number, array.length); 
  }
};


/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

// for loop through the given array 
// check if the index is equal to the value given, return index
// if the value is not in the array return -1.

_.indexOf = function(array, value){
    for (let i = 0; i < array.length; i++){
        if (array[i] === value){
            return i;
        }
    }
    return -1;
};

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/
// function takes an array and a value
// for loop through the array
// check if the array contains the value using the ternary operator
// false otherwise

_.contains = function(array, value){
    return array.includes(value) ? true : false;
};

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

// check if the type of collection is an array
// for loop through the array , call <function> on each element in the array
// check if the collection is an object, 
// for in loop through the object, call the function on each value, key, collection

_.each = function(collection, func){
    if (Array.isArray(collection)){
        for (let i = 0; i < collection.length; i++){
            func(collection[i], i, collection);
        }
    } else {
        for (let key in collection){
            func(collection[key], key, collection);
        }
    }
};

/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

// declare a variable assigned with an array literal
// loop through the array
// call the indexOf on the array and the elements in the array
// check if the return value of the index function call is equal to -1
// if so, push the element into the new array
// return the new array

_.unique = function(array) {
   var newArray =[];
   
   for (let i = 0; i < array.length; i++){
  
       if ( _.indexOf(newArray, array[i]) === -1){
           newArray.push(array[i]);
       }
   } 
   return newArray;
   
};

/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/
// declare a function expression named filter that takes an array
// create a new array
// use the each  function to loop through the array
// chck if funct called on the element index collection is true
// push the element into newArray
// return the newArray

_.filter = function(array, funct){
    var newArray = [];
    _.each(array, function(element, index, collection){
        
        if(funct(element, index , array)){
            newArray.push(element);
        }
        
    });
    return newArray;
};



/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/
// reject function takes an array and a function
// create a new array
// use the each function to loop through the input array
// check if calling   the  function on  the  element index collection is false
// push the element into the array
// return the new array

_.reject = function(array, fun){
    var newArray = [];
   _.each(array, function(element, index, collection){
       
        if( fun(element, index , array) === false){
            newArray.push(element);
        }
   });
    return newArray;  
};


/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/
// create a new array
// set a variabe called truthyValues assigned with the filter function called on the array and a function
// set a variabe called falsyValues assigned with the reject function called on the array and a function
// push both arrays into the newArray
// return newArray
  _.partition = function(array, aFunction){
      var newArray = [];

    var truthyValues = _.filter(array, aFunction);
    var falsyValues = _.reject(array, aFunction);

 
    newArray.push(truthyValues);
    newArray.push(falsyValues);


    return newArray;
 };

/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/
// create a new array 
// loop through the collection using each
// push the value of the function call into the new array
// return the newArray
_.map = function(collection,func){
        var newArray = [];

    _.each(collection,function(element, index, collection) {
     
        newArray.push(func(element,index, collection));
    });
    return newArray;
};


/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/
// declare function that takes an array of objects and a key property
// use _.map to return an array of containing values of the input property

_.pluck = function(objArr, property){
   return _.map(objArr, function(object, index, objArr){
        return object[property];
  });
};

/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/
//declare a function that takes a collection and a function
// set a variable assigned to true
// check if there is a function provided
// if there's noo function, loop through the collection 
// inside the loop check if the element is equal to false, if so, reassign the allPass value to false
// return all pass

// use each to looop through the collection
// if calling the test function on each element is false reassign all pass to false
// return all pass

_.every = function(collection, funct){
    let allPass = true;
    
    if (!funct){
        for (let i = 0; i < collection.length;i++){
            if (collection[i] === false){
                allPass = false;
            }
        }
        return allPass;
    }
       
    _.each(collection, function(element, index, collection){
        
       if(!funct(element, index, collection)){
           allPass = false;
       } 
    });
   return allPass; 
};

/** _.some
* Arguments:
*   1) A collection
*7   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

//declare a function that takes a collection and a function
// set a variable assigned to false
// check if there is a function provided
// if there's noo function, loop through the collection 
// inside the loop check if the element is equal to true, if so, reassign the allPass value to true
// return some pass

// use each to looop through the collection
// if calling the test function on each element is true reassign all pass to true
// return somepass


_.some = function(collection, funct){
    let somePass = false;
    
    if (!funct){
        for (let i = 0; i < collection.length;i++){
            if (collection[i] === true){
                somePass = true;
            }
        }
        return somePass;
    }
       
    _.each(collection, function(element, index, collection){
        
       if(funct(element, index, collection)){
           somePass = true;
       } 
    });
   return somePass; 
};

/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/
// declare a function that takes an array a function and a seed
// declare a variable named previousResult 
// if there is no seed set previousResult to the given seed
// assign the function call  _.each to call <function> for each element in the collection, to previousResult

//  otherwise, set previousResult to the first element in the aarray
// for loop through the array and assign previousResult to the function call on the previous result
    // and array elements
// return previous result

_.reduce = function(list, func, seed){
    let previousResult;
    if (seed !== undefined){
        previousResult = seed;
        _.each(list, function(element, i, list){
          previousResult = func(previousResult, element, i, list);  
        });
    }
    else {
        previousResult = list[0];
        for (let i = 1; i < list.length; i++){
            previousResult = func(previousResult, list[i], i, list);  
        }
    }
    return previousResult;
};


/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

_.extend =   function(...args){
  return   Object.assign(...args);
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
