// #!/usr/bin/env node

'use strict';

/**
 * 1: reverseString()
 *
 *  a. Create a function called reverseString that takes a 
 *  String as its only input and returns a new String 
 *  representing the input String reversed.  For example:
 *  
 *      reverseString('hello');  // => 'olleh'
 * 
 * TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best? How do you know 
 *     when to stop looping?
 *  c. how do you access individual characters of a String?
 *  d. how do you concatenate Strings? What operator do we use?
 */

/**
 * I: any string
 * O: returns a new string representing the inputted string but reversed
 * C: yes there are
 * E: N/A
 */
function reverseString(string) {
    // YOUR CODE GOES BELOW HERE //
    // initializing a varible called new string to collect the output that'll be returned
    var newString = "";
    // using a for loop to read each and every character of the string and print those characters to the newString
    for (var i = string.length - 1; i >= 0; i--) {
        newString += string[i];
    }
    // returning the outputted looped variables into the newString variable 
    return newString;
    // YOUR CODE GOES ABOVE HERE //
}




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports.reverseString = reverseString;
}