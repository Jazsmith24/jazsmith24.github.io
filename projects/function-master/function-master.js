//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take an object and return its values in an array
// create an array
// for in loop through the object
// push key values in the array
// return obj value array

function objectValues(object) {
var myArr = [];

for (var key in object){
    myArr.push(object[key]);
}
return myArr;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take an object and return all its keys in a string each separated with a space 
// loop through the given object
// push key values === string into the array
//  return array.join it with a space
function keysToString(object) {
    var anArr = [];
    
for (var key in object){
        anArr.push(key);
}
return anArr.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// create an empty array
// for in loop through input object
// check if the data type of key string value is a string, push value in newArr
//return joined array seperated by space

function valuesToString(object) {
    var newArr = [];
    
for (var key in object){
    if (typeof object[key ]=== 'string'){
        newArr.push(object[key]);
    }
}
return newArr.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take one argument and return 'array' if its an array and 'object' if its an object 
// check if the collection is an array, return array
// check if the collection is an object, return object
function arrayOrObject(collection) {
    if (Array.isArray(collection)){
        return "array";
    }
    return "object";
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take a string of one word, and return the word with its first letter capitalized 
function capitalizeWord(string) {
   return string[0].toUpperCase() + string.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take a string of words and return a string with all the words capitalized
// assign a variable with the value of the input string lowercased and split into an array
// for loop through the split string
// at each index, capitalize charAt(0) and concat splitString[i].slice(1)
// return the arrray joined into a string seperated by space

function capitalizeAllWords(string) {
 var splitStr = string.toLowerCase().split(' ');
 
for (var i = 0; i < splitStr.length; i++){
    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].slice(1);
}
return splitStr.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take an object with a name property and return 'Welcome <Name>!' 
// create a variable named greeting assign with a string of "Welcome ";
// reassign greeting concat with greeting and the object.name property value
// return greeting


function welcomeMessage(object) {
var greeting = "Welcome ";

    greeting += capitalizeWord(object.name) + '!';

return greeting;
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take an object with a name an a species and return '<Name> is a <Species>'
// return object.name concat with ' is a ' + Species

function profileInfo(object) {
return capitalizeWord(object.name) + ' is a ' + capitalizeWord(object.species);
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// check if this object has a noises array return them as a string separated by a space
//if there are no noises return 'there are no noises'

function maybeNoises(object) {
if (Array.isArray(object.noises) && object.noises.length > 0){
    return object.noises.join(' ');
}
return 'there are no noises';
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take a string of words and a word and return true if <word> is in <string of words>, otherwise return falseShould take a string of words and a word and return true if <word> is in <string of words>,
//otherwise return falseShould take a string of words and a word and return true if <word> is in <string of words>,
//otherwise return false

// use string.includes() to check if the word is in the string
// if word matches,return true, otherwise, return false.
function hasWord(string, word) {

 if (string.includes(word)){
     return true;
 }
 return false;
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take a name and an object and add the name using .push to the object's friends array
//then return the object

function addFriend (name, object) {
object.friends.push(name);
return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// chheck if the friends array in the object includes the input name
// return true if <name> is a friend of <object> and false otherwise
function isFriend(name, object) {
if (Array.isArray(object.friends) && object.friends.includes(name)){
    return true;
}
return false;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take a name and a list of people
// return a list of all the names that <name> is not friends with 
// create an array
// for loop through the input array
// check if the object in the array includes the input name and the name is not equal to the name inside the array
// push the name into the notFriends array
// return notFriends array

function nonFriends(name, array) {
    //create an array called nonFriends
    var nonFriends = [];
    for(var i = 0; i < array.length; i++){
        if(!array[i].friends.includes(name) && array[i].name != name){
            nonFriends.push(array[i].name);
        }
    }
return nonFriends;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should update the property <key> on <object> with new <value>.
//If <key> does not exist on <object> create it.
// update or add key/value using bracket notation
// return object

function updateObject(object, key, value) {
object[key] = value;
return object;

}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take an object and an array of strings.
//Should remove any properties on <object> that are listed in <array> 
// for in loop through thhe object
// check if the object key is included in the array
// if so delete object key property

function removeProperties(object, array) {
for (var key in object){
    if (array.includes(key)){
        delete object[key];
    }
}
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take an array and return an array with all the duplicates removed 
// loop through the array
// create a new array
// check if index values match using index of, if so push values into the new array
// return the array

function dedup(array) {
var unique = [];

    for(var i = 0; i < array.length; i++){
            if(unique.indexOf(array[i]) === -1) {
                unique.push(array[i]);
            }
        }
return unique;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}