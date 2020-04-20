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

var maleCount = function(array) {
    return _.filter(array, function(customerObj){
        // filter male customers
        return customerObj.gender === 'male';
    }).length;
};


// 
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



// var averageBalance = function(array){
  
// for (let i = 0; i < array.length; i++){
  
//   array[i].balance = array[i].balance.replace(/[^0-9.]/g, "");
//   array[i].balance = parseFloat(array[i].balance);
//   array[i].balance = Math.floor(array[i].balance);
// }

    
// let bal = array.reduce(function(acc, personObj){
//     return acc + personObj.balance;
// }, 0);

//  return bal / array.length;
// };

var averageBalance = function(array){
   
var sumOfAllBalances = 0;
var customersWithABalanceArray = [];

for(var i = 0; i < array.length; i++){
        customersWithABalanceArray.push(array[i].balance)
      
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
// use map function to return 
// loop through the given customer friends list
// 

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
  
var top3 = [];

_.each(array, function(element, index, collection) {

_.each(element.tags, function(tag, index, collection) {
    top3.push(tag);
});
});

var reduced = _.reduce(top3,function(accObj, tags){
  
  if(accObj[tags]){
accObj[tags] += 1;
return accObj;
  }
  accObj[tags] = 1;
  return accObj;
},{});
var sortedArray = [];

for (var key in reduced){
  sortedArray.push({tag: key, occured: reduced[key]});
}

sortedArray.sort(function (a,b){
  return b.occured - a.occured;
});
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
    classifier = classifier || String;
    return array.reduce(function (counter, item) {
        var p = classifier(item.gender);
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
