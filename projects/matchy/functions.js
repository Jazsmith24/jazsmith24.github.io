/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search(array, str){
  var obj = null;
    for (var i = 0; i < array.length; i++){
        if (array[i].name === str){
            obj = array[i];
        }
    }
    return obj;
}
//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// an Array of animals, a String representing  the name of an animal on which to perform a search,
//  and an Object that represents the replacement animal.
//If an animal with that name exists within the `animals` Array, 
// replace it's entire Object with the replacement Object.
function replace(animals, name, replacement){
    // loop through animals array
    // check if animals[i].name === name, animals.animal[i] = replacement
    for (var i = 0; i < animals.length; i++){
        if (animals[i].name === name){
            animals[i] = replacement;
        }
    }
}
//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(animals, name){
    for (var i = 0; i < animals.length; i++){
        if (animals[i].name === name){
            animals.splice(i, 1);
        }
    }
        return animals;
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// check if animal name has a length greater than 0
// check if animal has a species string length greater than 0
 // loop through animals array
 // check if the animal has a unique name
 // push input object to animals array

function add(animals, animal){
if (animal.name.length > 0 && animal.species.length > 0){
    for (var i = 0; i < animals.length; i++){
        if (animals[i].name === animal.name){
            return;
        }
    }animals.push(animal);
}
}


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
