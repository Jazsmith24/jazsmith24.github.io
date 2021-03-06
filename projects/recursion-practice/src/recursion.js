// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
  //base case: what to do with a negative argument (conditional)
  if(n < 0) {
    return null;
  } else if(n === 0) { //base case: stop recursing when n gets down to zero (conditional)
    return 1;
  } 
  //recursive case(s): 1. call factorial function, 2. try to get down to base case (else)
    return n * factorial(n - 1);
  
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
  // base case: if array.length is 0 return 0
  if (!array.length){
    return 0;
  }
  // recursive: 
  return array[0] + sum(array.slice(1));
};



// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  // base:
  
  // recursive:
};

// 4. Check if a number is even.
var isEven = function(n) {
  // base: if n is 0 return true if n is 1 return false
  if (Math.abs(n) === 1){
    return false;
  }
  
  if (Math.abs(n) === 0){
    return true;
  }
  // recursive: call the function and subtract 2
  return isEven(Math.abs(n) - 2);
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  // base: if n is 0 return 0
  if (n === 0){
    return 0;
  }
  // base case: negative number condition n + 1 + function call on n + 1, positive number condition n - 1 + function call on n - 1
   if (n < 0){
     return n + 1 + sumBelow(n + 1);
   }
   return n - 1 + sumBelow(n - 1);
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y) {
  var result = []; //empty array to push results into
  if(x + 1 === y || x == y || y + 1 === x){ //if there's only one number difference between x and or y or they are equal
    return result; //return the empty array
  } else if (x < y){ //if x is smaller than y
    result.push(x + 1); //push x + 1 into results array
    return result.concat(range(x + 1, y)); //add the result to calling range again, adding one to x until base case is met
  } else if (x > y) { //if x is greater than y
    result.push(x - 1); //push x - 1 into results array
    return result.concat(range(x - 1, y)); //concat that with calling range again, subtracting one from x until you get to base case
  }
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number

var exponent = function(base, exp) {
  //base case when exp gets down to 1 
  if (exp === 0) {
    return 1;
  } else if (exp < 0){ //if the exponent is negative
    return 1 / exponent(base, - exp);
  }
  //recursive case(s) call exponent and subtract one from exp and multiply base by the function call
  return base * exponent(base, exp - 1);
};


// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  if(n === 2){ //base case: when n equals 2, stop recursing and return true
    return true;
  } else if(n === 1){ //if n is 1, return true
    return true;
  }else if(n > 2){ //if we're not at 2 yet...
    return powerOfTwo(n/2); //recursive case: call powerOfTwo and divide n by 2 again
  } else { //if n never gets down to 2, return false
    return false;
  }
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {
  // base: string has no length return an empty string
  if (!string.length){
    return "";
  }
  // recursive:  add the last element(string.length - 1)  to the second to last element. 
  return string[string.length - 1] + reverse(string.substring(string.length - 1, 0));
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  
 string = string.replace(/\s/g, '');
  //base case: if the string has no length
  if(!string.length){
    return true;
  } else if(string[0].toLowerCase() !== string[string.length - 1].toLowerCase()){  //if first and last index are not the same, return false
    return false;
  } else {   //recursive case: slice off the first and last index
    return palindrome(string.substring(1).slice(0, -1));
  }
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
var multiply = function(x, y) { 
   if(x === 0 || y === 0){        
    return 0;
  } else if (x < 0 && y < 0){      
    return multiply(-x, -y - 1) - x; 
  } else {                         
    return x + multiply(x, y - 1); 
  }
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  //base case: once we finish comparing both strings and they're empty, return true
  if(!str1.length && !str2.length){
    return true;
    //base case: if the current index of one string is different than another, stop recursing
  } else if(str1[0] !== str2[0]){
    return false;
  } else if(str1[0] === str2[0]){ //recursive case: slice one index off each string and compare new 0th index
    return compareStr(str1.slice(1), str2.slice(1)); 
  }
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str){
  let result = [];
  //base case: if the string has no length, return array
  if(!str.length){
    return result;
  } else {//recursive case: slice off the first index of input string and push it into array
    result.push(str[0]); 
    return result.concat(createArray(str.slice(1)));
  }
};

// 17. Reverse the order of an array
var reverseArr = function (array) {
  // base: if the array has no length return 
  if (!array.length){
    return [];
  }
  
  return reverseArr(array.slice(1)).concat(array[0]);
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  let result = [];
 //base: if the array length is equal to value stop 
  if (result.length === length){
    return result;
  }
  
// recursive: add the value <value> amount of times
result.push(value);
return result.concat(buildList(value, length - 1));

};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  
  //base case: when the array is empty, stop recursing and return
  if(!array.length){
    return 0;
  } return (array[0] === value) + countOccurrence(array.slice(1), value);
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  let mapped = [];
  // base: if array has no length return empty array
  if(!array.length){
    return mapped;
  }
  
  mapped.push(callback(array[0]));
  return mapped.concat(rMap(array.slice(1), callback));
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  //base case: stop recursing when we find the input number and return the index where that element is
  //base case: if n is less than 0 return null
  if(n < 0){
    return null;
  } else if(n === 0 || n === 1){
    return n;
  } //recursive case: 
  return nthFibo(n - 1) + nthFibo(n - 2);
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input) {
  let capped = [];
  // base: if array is empty return empty array
  if (!input.length){
  return capped;
  }
  // push the first element of array capitalized into capped array
  capped.push(input[0].toUpperCase());
  // recursive : concat capped with the function called on input with 0 sliced off
  return capped.concat(capitalizeWords(input.slice(1)));
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array, i) {
  let capped = [];
  // base: if array has no length return capped
  if (!array.length){
    return capped;
  }
  let x = array[0].charAt(0).toUpperCase() + array[0].substr(1).toLowerCase();
  // push x (capitalized string) into the array
  capped.push(x);
  // recursive: concat capped array with the function called on the array with 0 sliced
  return capped.concat(capitalizeFirst(array.slice(1)));
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj = {}) {
  if (str.length === 0){
   return obj; 
  }
  letterTally(str.substring(1), obj);
  
  if (obj[str[0]] === undefined) {
    obj[str[0]] = 1;
  } else {
    obj[str[0]] += 1;
  }
  return obj;
};


// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list) {
  let arr = [];
  // base: if list is empty return array
  if (!list.length){
    return arr;
  }
  
  // check if the first and second index are te same, slice one off
  if (list[0] === list[1]){
    return compress(list.slice(1));
  }
  // push 1st element in new arr
  arr.push(list[0]);
  // concat array with list with 1 sliced off
  return arr.concat(compress(list.slice(1)));
};

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  let arr = [];
  // if array has nolength return array
  if (!array.length){
    return arr;
  }
  // if array has a length of 1, push the element into new array
  if (array.length === 1){
    arr.push(array[0]);
    return arr;
  }
  // if the first element is not equal to the next push the first element
  if (array[0] !== array[1]){
    arr.push(array[0]);
  }
  // return concat arr with the function called on array. slice 
    return arr.concat(minimizeZeroes(array.slice(1)));  
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  let arr = [];
  // if array has no length return arr
  if (!array.length){
  return arr;  
  }
  // if the array at 0 is < 0 or greater than 0, push the absolute value in the newarray
  if (array[0] < 0 || array[0] > 0){
    
    arr.push(Math.abs(array[0]));
    
  }
  // check if the array at 1 index if negative, push it into the arra
  if (array[1] < 0){
    arr.push(array[1]);
    
  } else if (array[1] > 0){
    // if the arrray at 1 is positive change it to negative and oush it into the array
    arr.push(array[1] *= -1);
  }
  //concat the new array with the old array sliced 1
  return arr.concat(alternateSign(array.slice(2)));
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  if (str.length === 0){
    return '';
  } 
  
  var tempStr = numToText(str.substring(0, str.length-1));
  var replace;
  
  switch (str[str.length-1]) {
    case '1': replace = 'one';
      break;
    case '2': replace = 'two';
      break;
    case '3': replace = 'three';
      break;
    case '4': replace = 'four';
      break;
    case '5': replace = 'five';
      break;
    case '6': replace = 'six';
      break;
    case '7': replace = 'seven';
      break;
    case '8': replace = 'eight';
      break;
    case '9': replace = 'nine';
      break;
    default: replace = str[str.length-1];
      break;
  }
  return tempStr + replace;
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
  
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
