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

var animal = {

}
animal.species = 'Pale-Eyed Flamingo'
animal['name'] = 'Linnea'
animal.noises = []
console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];
noises[0] = 'honking';
noises.push('ka ha');
noises.unshift('kuk-kuk');
noises.push('ke-kuk');
console.log(noises.length)




//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

animal['noises'] = noises
animal['noises'].push('grizzly cry')

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 * 
 *  The different ways you can access properties on objects are Dot Notation & Bracket Notation
 * 
 * 2. What are the different ways of accessing elements on arrays?
 * 
 *  The different ways you can access elements on arrays are Dot Notation & Bracket Notation
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
animals.push(animal)
console.log(animals)
var duck = {
  species: 'duck', 
  name: 'Jerome', 
  noises: ['quack', 'honk', 'sneeze', 'woosh'] 
}
animals.push(duck)
console.log(animals)
var lion = {
  species: 'lion',
  name: 'Alamrakay',
  noises: ['grunt', 'puff']
}
animals.push(lion)
var whale = {
  species: 'whale',
  name: 'Big Fella',
  noises: ['clicks', 'whistles']
}
animals.push(whale)

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// i chose an array for my data structure because an array is really good for making lists
var friends = []
function getRandom(array){
  return Math.floor(Math.random()*array.length)
}

animal['friends'] = friends

friends.push(animals[getRandom(animals)].name)
console.log(friends)

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