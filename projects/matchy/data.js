/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// create an animal variable assigned an empty object
// use dot notation to add a species of 'dog'
// use dot notation to add the name of 'coco'
//  give `animal` a **property** called `noises` with a value of empty array.
// print the animal object

var animal = {};

animal.species = 'dog';
animal.name = 'coco';
animal.noises = ['bark'];
console.log(animal);


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//  Create a variable named `noises` and assign it to an empty array.
//  Using **bracket notation** give `noises` A string representing a sound your animal might make.
//  Using an array function add another noise to the end of `noises`.
// Add an element to `noises to the beginning of array
// 
var noises = [];

noises[0] = "woof";
noises.push('growl');
noises.unshift('yelp');
noises[noises.length] = 'howl';

console.log(noises.length);
console.log(noises);


//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal.noises = noises;
animal.noises.push('whimper');



/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = [];

animals.push(animal);
console.log(animals);

var duck = {
    species: 'bird', 
    name: 'Jerome', 
    noises: ['quack', 'honk', 'sneeze', 'woosh'] 
};
animals.push(duck);
console.log(animals);

var lion = {
    species: 'lion',
    name: '',
    noises: ['roar', 'pur', 'growl', 'scratch']
};
animals.push(lion);

var parrot = {
    species: 'bird',
    name: 'stuart',
    noises: ["I'm hungry","Hi", "Big butts", "Clean my cage" ]
};
animals.push(parrot);

console.log(animals);
console.log(animals.length);
//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
friends = [];

function getRandom(array){
   return Math.floor(Math.random() * array.length);
}
friends.push(animals[getRandom(animals)].name);
console.log(friends);
animals[0]['friends'] = friends;
console.log(animals[0].friends);


/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}