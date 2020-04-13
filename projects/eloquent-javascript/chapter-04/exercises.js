////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/**
 * Write a range function that takes two arguments, start and end, 
 * and returns an array containing all the numbers from start up to (and including) end. 
*/ 
// create an array
// loop from start to end 
// push start to end in an array
// return the array
function range(start, end, step = start < end ? 1 : -1) {
var rangeArr = [];

if (step > 0)
 for (let i = start; i <= end; i += step){
     rangeArr.push(i); 
 }else if (start === end){
    return rangeArr;
  } else {
   for (let i = start; i >= end; i += step){
     rangeArr.push(i);
   }
 }
 return rangeArr;
}



////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// function to output the sum of an array
// set a sum variable equal to 0
// use for of loop to through the array
// on each iteration, add the value to the sum variable/
// return the sum
function sum(array) {
  var sum = 0;

for (let value of array){
  sum += value;
}
return sum;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order.
// create an empty array
// loop backwards through the input array
// on each iteration push the value into the new array
// return the new array
function reverseArray(array) {
var reversed = [];

for (let i = array.length - 1; i >= 0; i--){
  reversed.push(array[i]);
}
return reversed;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// it modifies the array given as argument by reversing its elements.
// loop through the given array
// 
function reverseArrayInPlace(array) {
  
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let prev = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = prev;
  }
  return array;
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// function arrayToList that builds up a list structure like the one shown when given an array

function arrayToList(array) {
 var list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = {value: array[i], rest: list};
  }
  return list;
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// listToArray function that produces an array from a list.

function listToArray(list) {
var listArray = [];
  for (let node = list; node; node = node.rest) {
    listArray.push(node.value);
  }
  return listArray;
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// prepend, which takes an element and a list and creates a new list that
//adds the element to the front of the input list, 
function prepend(value, list) {
return {value, rest: list};
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//and nth, which takes a list a number 
//and returns the element at the given position in the list (with zero referring to the first element)
//or undefined when there is no such element.

function nth(list, num) {
if (!list){
  return undefined;
} else if(num === 0){
  return list.value;
}
return nth(list.rest, num - 1);
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//Write a function deepEqual that takes two values and returns true only if they are the same value
//or are objects with the same properties, 
//where the values of the properties are equal when compared with a recursive call to deepEqual.
function deepEqual(val1, val2) {
  if (val1 === val2){
    return true;
  } 
  if (val1 == null || typeof val1 != "object" ||val2 == null || typeof val2 != "object"){
    return false;
  } 

  let keys1 = Object.keys(val1);
  let keys2 = Object.keys(val2);

  if (keys1.length != keys2.length) return false;

  for (let key of keys1) {
    if (!keys2.includes(key) || !deepEqual(val1[key], val2[key])) {
      return false;
  }
}
  return true;
  
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
