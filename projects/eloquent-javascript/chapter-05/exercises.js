// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
//Use the reduce method in combination with the concat method to “flatten” an array of arrays 
//into a single array that has all the elements of the original arrays.
function flatten(array) {
return array.reduce(function(prevVal, acc){
 return prevVal.concat(acc);
},[]);
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
//  It takes a value, a test function, an update function, and a body function.
// Each iteration, it first runs the test function on the current loop value and stops if that returns false. 
// Then it calls the body function, giving it the current value.
// Finally, it calls the update function to create a new value and starts from the beginning.
function loop(start, func, updateFunc, bodyFunc) {
for (let value = start; func(value); value = updateFunc(value)) {
    bodyFunc(value);
  }
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
//returns true when the given function returns true for every element in the array.

function every(array, func) {
  let allPass = true;
for (let i = 0; i < array.length; i++){
  if (!func(array[i])){
    allPass = false;
  }
}
return allPass;
}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

// function dominantDirection(text) {
//   // let scripts = countBy method (text and char) as parameters
//   // let script = characterScript methof (char.codePointAt(0))
//   let scripts = countBy(text, char => {
//     let script = characterScript(char.codePointAt(0));
//     return script ? script.direction : "none"; // return script direction: none
//   }).filter(({name}) => name != "none"); // use .filter() method
//   // use a switch conditional to evalaute each case
//   switch (scripts.length) { // scripts.length gives you number for length of 
//     case 0: // compare it against each case
//       return 'no dominant direction found';
//     case 1:
//       return scripts[0].name;
//     default: // use if else statement as the default 
//       if (scripts.reduce((acc, cur) => acc.count === cur.count)) {
//         return 'no dominant direction found';
//       } else {
//         return scripts.reduce((acc, cur) => acc.count >= cur.count ? acc.name : cur.name);
//       }
//   }


function dominantDirection(texts){
  let countArr = countBy(texts, function(text){
    let characterInfo = characterScript(text.charCodeAt())
    if (characterInfo){
      return characterInfo.direction;
    }
  });
  
  // sort my array by the occurence of direction count
  countArr.sort(function(a, b){
    return b.count - a.count;
  });
  return countArr[0].name;
}
// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
