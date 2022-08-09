// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */

/**
 * I: we will be inputting any string
 * O: we wil be expecting the number of values in the sting to be returned
 * C: N/A
 * E: N/A
 */
function length(string) {
    // YOUR CODE BELOW HERE //
    
    //expected output to be the number of values in the string inputted
    return string.length

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to lowercase.
 */

/**
 * I: any string with uppercase letters
 * O: the inputted string with lowercase letters
 * E: N/A
 * C: N/A
 */
function toLowerCase(string) {
    // YOUR CODE BELOW HERE //

    // Telling our function to make the string into lowercase letters using toLowerCase()
    return string.toLowerCase();
    // using the return statement to return our new string
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */

/**
 * I: any string with lowercase letters
 * O: the inputted string with uppercase letters
 * E: N/A
 * C: N/A
 */
function toUpperCase(string) {
    // YOUR CODE BELOW HERE //

    // Telling our function to make the string into uppercase letters using toUpperCase()
    return string.toUpperCase();
    // using the return statement to return our new string
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */

/**
 * I: any String 
 * O: a new string forced to dash-case
 * E: N/A
 * C: N/A
 */
function toDashCase(string) {
    // YOUR CODE BELOW HERE //

    //programming our function to force any string to dash case
    string = string.replace(/\s+/g, '-').toLowerCase();
    //Returning our new array with the toDashCase function
    return string;
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */

/**
 * I: Any string and a single character 
 * O: boolean stating whether or not the inputted string[0] matches with the inserted character
 * E: N/A
 * C: N/A
 */
function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //

    //Using if else statements I am telling my function what to do if the string[0] is equal to or not equal to the character
    if (string[0].toLowerCase() === char.toLowerCase()){return true}
    else {return false};
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */

/**
 * I: Any string and a single character 
 * O: Boolean stating whether or not the inputted string.length-1 matches with the inserted character
 * E: N/A
 * C: N/A
 */
function endsWith(string, char) {
    // YOUR CODE BELOW HERE //

    // Using if else statements I am telling my function what to do if the string.length-1 is equal to or not equal to the character
    if (string.endsWith(char.toLowerCase())){return true}
    else {return false}

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */

/** 
 * I: any two strings
 * O: the two inputted strings concatenated into one
 * E: N/A
 * C: N/A
*/
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //

    //setting a new variable so that the new string can actually be saved
    var newString = '';
    // telling my function to concatenate two strings using the '+' operator
    newString = stringOne + '' + stringTwo;
    // returning my new string
    return newString
    // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */

/** 
 * I: any number of strings
 * O: all of the strings joined together
 * E: N/A
 * C: N/A
*/
function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    //by using the array.from method I am making sure that my inputted strings are copied and returned back to me
    //telling my function to return the two strings joined together
    var args = Array.from(arguments); 
    
        // using the .join() method to combine all our strings into one string saved under an initialzed variable dubbed result
        return args.join('');

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */

/** 
 * I: any two strings
 * O: whichever of the two strings is longer than the other
 * E: N/A
 * C: N/A
*/
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //

    //using if else statements I am going to determine which string is longer than that of the other string
    if (stringOne.length > stringTwo.length){
        return stringOne
    }else {return stringTwo}

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */

/**
 * I: any two strings
 * O: return the number 1 if the first is higher in alphabetical order than the second, return -1 if the second is higher in alphabetical order than the first, and return 0 if they're equal.
 * E: N/A
 * C: N/A
 */
function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    if (stringOne < stringTwo){
        return 1
    } else if (stringOne === stringTwo){
        return 0
    }
    else {return -1}
}
    // YOUR CODE ABOVE HERE //



/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
/** 
 * I: any two strings 
 * O: returning 1 if the first is lower in alphabetical order than the second, returning -1 if the second is lower in alphabetical order than the first, and returning 0 if they're equal.
 * E:
 * C:
*/
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    if (stringOne > stringTwo){
        return 1
    } else if (stringOne === stringTwo){
        return 0
    }
    else {return -1}
    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}
