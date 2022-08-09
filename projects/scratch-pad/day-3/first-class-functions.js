// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */

/**
 * I: a string or a number 
 * O: a function that tests whether the given value is greater than the base
 * C: n/a
 * E: n/a
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    return function (y){
        return y > base
    }
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    return function (y){
        return y < base
    }
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    var string = '';
    return function (string){
        return string[0].toUpperCase() === startsWith[0].toUpperCase()
    }
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    const string12 = '';

    return function (string12){
        return string12.charAt(string12.length - 1).toUpperCase() === endsWith.charAt(endsWith.length - 1).toUpperCase()
    }
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    // FIRST ATTEMPT //
    // var newString = [];
    // var upperCased = newString.map(newString => newString.toUpperCase())
    // var lowerCased = newString.map(newString => newString.toLowerCase())
    
    // for (var i = 0; i <= strings.length; i++){
    //     newString.push(i)
    //     console.log(newString)
    // }
    // function modify(strings){
    //     for (var i = newString[0]; i <= newString.length; i++){
    //         if (upperCased){
    //             return lowerCased
    //         } else {
    //             return upperCased
    //         }
    //     }
    //     return newString
    // }
    //
    // SECOND ATTEMPT //
        // YOUR CODE BELOW HERE //
    // var newString = [];
    for (var i = 0; i < 1; i++){
        // newString.push(strings)
    }
    var upperCased = strings.toUpperCase()
    var lowerCased = strings.toLowerCase()
  
    function modify(strings){
        for (var i = 0; i <= strings.length; i++){
            if (upperCased === strings){
                return lowerCased
            } else {
                return upperCased
            }
        }
    }
  console.log(modify(strings))
    // YOUR CODE ABOVE HERE //
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    
    var string = '';
    return function (string){
        return string[0].toUpperCase() === startsWith[0].toUpperCase()
    }
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}
