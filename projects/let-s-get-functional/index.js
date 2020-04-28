// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("lodown-jazsmith24");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./<YOUR_GITHUB_FOLDER/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */
// create a function that filters male customers from an array of customer objects
// return the filter function called on the input array
// the call back function should return customerobj that has a male gender
// use the .lengthprop to return length of array

var maleCount = function(array) {
    return _.filter(array, function(customerObj){
        // return the 
        return customerObj.gender === 'male';
    }).length;
};


//return  use the ude of reduce function to get the number of female cstomers in an array
// check if the customerObj is a female 
// add 1 to the seed
// return seed

var femaleCount = function(array){
   return _.reduce(array, function(prev, customerObj){
        if (customerObj.gender === 'female'){
            prev += 1;
        }
        return prev;
    }, 0);
};

var oldestCustomer = function(array) {
    //I: array
    //O: string with the name of the oldest customer
let filterOutput = '';
let ageOfCustomers = 0;
    for (var i = 0; i < array.length; i++) {
       if (array[i].age > ageOfCustomers) {
           ageOfCustomers = array[i].age;
           filterOutput = array[i].name;
       }
    } return filterOutput;
};

// create a function that takes an array and returns the youngest customer
// create a filterOutput variable assigned with an empty string
// declare a variable called ageOfCustomers and assign it with Infinity
// loop through tthe array
// check if the customer age is greater that ageOfCustomers var
// if so reassign ageOfCustomer to the current customer age
// and reassign filterOutput ot the youngest customers age
// return filter output
var youngestCustomer = function(array) {
    let filterOutput = '';
    let ageOfCustomers = Infinity;
    for (var i = 0; i < array.length; i++) {
        
        if (ageOfCustomers > array[i].age) {
            
            ageOfCustomers = array[i].age;
            filterOutput = array[i].name;
            
        }
    }
    return filterOutput;
};



//create variable var sumOfAllBallances and assign it the value 0;    
//loop array using for loop
// assign oject balance to variable balanceStroing        
// use slice to remove $        
// use split to create array seperating element atcomma        
// use join to join array        
// convert to number datatype        
// add and assign the value of balanceTypeOfNumber to sumOfAllBalances       
//assign the length of array to numberOfCustomersWithBalance
//return sumOfAllBalances / numberOfCustomersWithABalance

var averageBalance = function(array){
var sumOfAllBalances = 0;
var customersWithABalanceArray = [];

for(var i = 0; i < array.length; i++){
      
        customersWithABalanceArray.push(array[i].balance)//use to get number to divid by
        let balanceString = array[i].balance;
        let balanceStringNo$ = balanceString.slice(1);
        let balanceStringToArraySlitAtComma = balanceStringNo$.split(',');
        let newBalanceString = balanceStringToArraySlitAtComma.join('');
        let balanceTypeOfNumber = Number(newBalanceString);
        sumOfAllBalances += balanceTypeOfNumber;
       
}
var numberOfCustomersWithABalance = customersWithABalanceArray.length;

return sumOfAllBalances / numberOfCustomersWithABalance;
};





var firstLetterCount = function(array, letter){
    
// use the filter function to return an array of customers names that begin with input letter
// use the .length property on the filter return to get the number of customers

  return  _.filter(array, function(customer, index, array){
    return customer.name[0].toLowerCase() === letter.toLowerCase(); 
}).length;
};


// Find how many friends of a given customer have names that start with a given letter
//  - **Input**: `Array`, `Customer`, `Letter`
//  - **Output**: `Number`
// declare two variables, one called friends and one called frens
// use _.each to iterate through the array to access customer objects in array
// check if the customer given is equal to the customer name
//if so, assign customer.friends array to the friends variable
// assign filter called on friends array to the frens var
// use filter function to return an array of friends who has the given letter at the beginning of the name
// return frens.length

var friendFirstLetterCount = function(array, customer, letter){

    var friends;
    var frens;
    _.each(array, function(custObj, index, array){
        
        if (customer === custObj.name){
            friends = custObj.friends;
        frens = _.filter(friends, function(friend){
         return   friend.name[0].toLowerCase() === letter.toLowerCase();
        });
        }
        
    });
    return frens.length;
};


//  - Find the customers' names that have a given customer's name in their friends list
//  - **Input**: `Array`, `Name`
//  - **Output**: `Array
// loop through the given array
// loop through the object friends list
// check if the given name is contained in the friends list
// if so, push customer name in array
// return array
var friendsCount = function(array, name){
    var arr = [];
    
    _.each(array, function(custObj, index, array){
    var friends;
        friends = custObj.friends;
      
    _.each(friends, function(friendObj){
       
         if (friendObj.name === name){
             arr.push(custObj.name);
          }
        });
    });
    
    return arr;
};



var topThreeTags = function(array){
  // create an array
var top3 = []; 

_.each(array, function(element, index, collection) { // loop through the array

_.each(element.tags, function(tag, index, collection) {// loop through the tags array in object
    top3.push(tag); // push tags into top3 array
});
});

// reduce the array to the top three occurences within an object
var reduced = _.reduce(top3,function(accObj, tags){
  
  if(accObj[tags]){
accObj[tags] += 1;
return accObj;
  }
  accObj[tags] = 1;
  return accObj;
},{});

// create an empty array
var sortedArray = [];

// for-in loop throught the reduced object
// push an object that includes reduced array tag assign with key and occured assign with the key values
for (var key in reduced){
  sortedArray.push({tag: key, occured: reduced[key]});
}

// sort the array in order of greatest to least occurences
sortedArray.sort(function (a,b){
  return b.occured - a.occured;
});
// return the top three occuring tags
return [sortedArray[0].tag, sortedArray[1].tag, sortedArray[2].tag];
};

//  - **Objective**: Create a summary of genders, the output should be:
// ```javascript
// {
//     male: 3,
//     female: 4,
//     non-binary: 1
// }
//  - **Input**: `Array`
//  - **Output**: `Object`
//  - **Constraints**: Use `reduce`

var genderCount = function (array, classifier){
    classifier = classifier || String; // assign classifier to classifier var
    
    return array.reduce(function (counter, item) { // return function reduce called on array 
    // declare var p assigned with classifier called on item gender
        var p = classifier(item.gender);
    // assign counter[p] + 1 or 1 if the counter has own property
        counter[p] = counter.hasOwnProperty(p) ? counter[p] + 1 : 1;
        return counter;
    }, {});
    

};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
