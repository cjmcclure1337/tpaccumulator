/*
----------------------------------------
SAMPLE
----------------------------------------

Challenge: Write function named test that returns the string "This Works!".
Solution: This one has already been completed for you.

*/

function test() {
 var string ="This Works!";
 return string;
}



/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named sum that will take an array of numbers and return the sum of them.

Example: if you pass it [1,2,3] then it should return 6 (which is 1 + 2 + 3)

NOTE: always look at the test results to see further details about what the test is expecting.
For example, the tests require that to complete this challenge, your function must return
0 if the input is empty. Please see the README file for an explanation of how to expand the test
results on the index page in the browser.
*/


function sum(nums) {
    return nums.reduce((x,y) => {return x+y},0);
}






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named doubleLetters that will take a string and double every letter in the string

Example: if you pass it "abc" then it should return "aabbcc"
*/


function doubleLetters(word) {
    output = [];
    word.split("").map((letter) => {
        output.push(letter);
        output.push(letter);
    });
    return output.join("");
}







/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named doubleNumbers that will take an array of numbers and return an array with those numbers doubled

Example: if you pass it [1,2,3] then it should return [2,4,6]
*/

function doubleNumbers(nums) {
    return nums.map((number) => number *2);
}







/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named multiplyNumbers that will take an array of numbers and
return an array with those numbers multiplied by another value

Examples:

- if you call multiplyNumbers([1,2,3], 0) you'd get [0,0,0]
- if you call multiplyNumbers([1,2,3], 5) you'd get [5,10,15]
*/

function multiplyNumbers (nums, factor) {
    return nums.map((number) => number * factor);
}








/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named interleave that will take two arrays and interleaves them

Example: if you pass it ["a", "b", "c"] and ["d", "e", "f"] then it should return ["a", "d", "b", "e", "c", "f"]

NOTE: you can assume each input will be the same length
*/

function interleave (list1, list2) {
    output = [];
    for (let i=0; i<list1.length; i++) {
        output.push(list1[i]);
        output.push(list2[i]);
    }
    return output;
}









/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named createRange that will take a number and a default value and return an array of that many values

Example: if you pass it 4 and "Hello" then it should return ["Hello", "Hello", "Hello", "Hello"]
*/

function createRange (num, word) {
    let output = [];
    for(let i=0; i<num; i++) {
        output.push(word);
    }
    return output;
}






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named flipArray that will take an array and return an object where the keys are the items and the values are the indices

Example:

If you pass it ["quick", "brown", "fox"] then it should return { "quick": 0, "brown": 1, "fox": 2 }
*/

function flipArray(arr) {
    output = {}
    arr.map((val,i) => {
        output[val] = i;
    })
    return output;
}






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named arraysToObject that will take an array of 2-element arrays, and return an object of key/value pairs

Example:

If you pass it [[2014, "Horse"], [2015, "Sheep"]] then it should return { 2014: "Horse", 2015: "Sheep" }

*/

function arraysToObject (arr) {
    output = {};
    arr.map((val) => {
        output[val[0]] = val[1];
    })
    return output;
}







/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named reverseString that will reverse a string without calling the built-in .split or .reverse methods

Example:

If you pass it "hello" then it should return "olleh"
*/

function reverseString (str) {
    output = "";
    for(let i=str.length-1; i>=0; i--) {
        output += str[i]
    }
    return output;
}










/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named repeats that returns true if the first half of the string equals the last half, and false if not

Example:

If you pass it "haha" then it should return true because "ha" (the first half) equals "ha" (the second half)
If you pass it "yay" then it should return false because it's odd
If you pass it "heehaw" then it should return false because "hee" doesn't equal "haw"
*/

function repeats(str) {
    if(str.length % 2 === 1) {
        return false;
    }

    let pt1 = str.substr(0,str.length/2);
    let pt2 = str.substr(0-(str.length/2));
    return (pt1 === pt2);
}






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named everyOther that returns every other character in the string

Example:

If you pass it "abcdef" then it should return "ace" because those represent every other letter
*/

function everyOther (str) {
    let output = [];
    output = str.split("").filter((val, i) => i % 2 === 0);
    return output.join("");
}






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named allEqual that returns true if every character in the string is the same

Example:

If you pass "aaa" it should return true
If you pass "aba" it should return false
*/

function allEqual(str) {
    if(str.length === 0) return true;
    let char = str[0];
    return str.split("").reduce((prev, curr) => prev && curr === char);
}






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named sumLetters that returns the sum of every character in the string

Example:

If you pass "45" it should return 9
If you pass "246" it should return 12
*/

function sumLetters(str) {
    return str.split("").reduce((sum, val) => {return sum += parseInt(val)}, 0);
}






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named countVowels that returns the number of vowels in a string, excluding "y"

Example:

If you pass "you" it should return 2
*/

function countVowels(str) {
    let output = [];
    output = str.split("").filter((val) => {return val === "a" || val === "e" || val === "i" || val === "o" || val === "u"});
    return output.length;
}








/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named split that takes a string and returns an array of the letters

Example:

If you pass "you" it should return ["y", "o", "u"]

NOTE: do not use the builtin `split` method
*/

function split(str) {
    output = [];
    for (let i=0; i<str.length; i++) {
        output.push(str[i]);
    }
    return output;
}






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named getCodePoints that takes a string and returns an array of the codePoints of the letters

See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt

Example:

If you pass "Hello" it should return [ 72, 101, 108, 108, 111 ]
*/

function getCodePoints(str) {
    let output = [];
    str.split("").map((val) => {
        output.push(val.codePointAt(0))
    })
    return output;
}






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named letterMap that takes a string and returns an object of the letters and their positions in the string

Example:

If you pass "Yo" it should return {Y: 0, o: 1}
If you pass "Hello" it should return {H: 0, e: 1, l: 3, o: 4}
*/

function letterMap(str) {
    let output = {};
    str.split("").map((val, i) => {
        output[val] = i
    })
    return output;
}






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named letterCount that takes a string and returns an object with the letters and the number of their occurrences

Example:

If you pass "Yo" it should return {Y: 1, o: 1}
If you pass "Hello" it should return {"H": 1, "e": 1, "l": 2, "o": 1}
*/

function letterCount(str) {
    let output = {};
    str.split("").map((val, i) => {
        output[val] = 0;
    })
    str.split("").map((val, i) => {
        output[val] += 1;
    })
    return output;
}







/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named threeOdds that takes 2 numbers and returns true if there are 3 odd numbers _between_ those two numbers

Example:

If you pass 0,3 it should return false because the only number between 0 and 3 is 1
If you pass 0,6 it should return true because between 0 and six (the numbers 1,2,3,4,5) there are three odds - 1, 3 and 5
*/

function threeOdds(num1,num2) {
    let count = 0;
    for (let i = num1+1; i < num2; i++) {
        if(i%2 === 1) {
            count++;
        }
    }
    return count >= 3;
}








/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function called leftPad that takes a string, a length and a fill character and returns a string padded to length with the fill character

Example:

If you pass "a", 3, "*" it should return "**a" - that is, a string of length 3, padded on the left by the "*" character
*/

function leftPad(str,len,fill) {
    output = "";
    for (let i = str.length; i<len; i++) {
        output += fill;
    }
    return output + str;
}






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named createString that takes a number and a letter and creates a string of that many letters

Example:

If you pass "a", 3 it should return "aaa"
If you pass "b", 3 it should return "bb"
*/

function createString(num, letter) {
    output = "";
    for (let i = 0; i < num; i++) {
        output += letter;
    }
    return output;
}






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named factorial that takes a number and returns its factorial

Factorial of 4 means 4 * 3 * 2 * 1

Example:

If you pass 4 it should return 24 since that's 4 * 3 * 2 * 1
If you pass 5 it should return 120 since that's 5 * 4 * 3 * 2 * 1
*/

function factorial (num) {
    if(num > 1) {
        return num * factorial(num-1)
    }
    return 1;
}






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named arrayOfNumbers that takes a number and returns an array of all the numbers between 1 and that number, inclusive

Example:

If you pass 1 it should return [1]
If you pass 3 it should return [1,2,3]
*/

function arrayOfNumbers (num) {
    output = [];
    for(let i = 1; i <= num; i++) {
        output.push(i);
    }
    return output;
}






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named evenOdd that takes a number and returns an object with the numbers and whether they are even or odd

Example:

If you pass 1,4 it should return {"1": "odd", "2": "even", "3": "odd", "4": "even"}
*/

function evenOdd (start, fin) {
    output = {};
    if(start === 0 && fin === 0) return output;
    for(let i = start; i <= fin; i++) {
        output[i] = (i % 2 === 0) ? "even" : "odd";
    }
    return output;
}







/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named growingKeys that takes a number and a string and returns an object where the keys are that string, repeated one more each time

Example:

If you pass 2,"d" it should return {"d": true, "dd": true}
*/

function growingKeys(num, str) {
    let output = {}
    let key = str;
    for(let i=0; i<num; i++) {
        output[key] = true;
        key += str;
    }
    return output;
}








/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named every that takes an array and a value and returns true if every element of the array equals the value

Example:

If you pass [1,1], 1 it should return true
If you pass [1,2], 1 it should return false
*/

function every(arr, testVal) {
    return arr.filter((val) => testVal === val).length === arr.length;
}






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named some that takes an array and a value and returns true if at least one element of the array equals the value

Example:

If you pass [1,2], 1 it should return true
If you pass [3,2], 1 it should return false
*/

function some(arr, testVal) {
    return arr.filter((val) => val === testVal).length > 0;
}






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named some that takes an array and returns a string with the elements joined by commas, with a trailing 'and'

Example:

If you pass ["Sue", "Will"] it should return "Sue and Will"
If you pass ["Sue", "Will", "Rachel"] it should return "Sue, Will and Rachel"
*/

function toSentence(arr) {
    return arr.reduce((sentence, word, i) => {
        if (i === 0) {
            return sentence + word;
        } else if (i === arr.length - 1) {
            return sentence + " and " + word;
        } else {
            return sentence + ", " + word;
        }
    }, "")
}











/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named acronym that takes an array and returns a string that is an acronym of the items in the array

Example:

If you pass ["Sue", "Will"] it should return "SW"
If you pass ["Java", Script", "Object", "Notation"] it should return "JSON"
*/

function acronym(arr) {
    return arr.reduce((acro, word) => {
        return acro + word[0];
    }, "")
}






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named min that takes an array and returns minimum value of the array

Example:

If you pass [0,-3,2,5] it should return -3
*/

function min(arr) {
    if(arr.length === 0) return undefined;
    return arr.reduce((lowest, current) => (lowest < current) ? lowest : current);
}









/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named index that takes an array of objects, and a property name, and returns an object where the keys are the specified property

Example:

If you pass [{id: 1, name: "Joe"}, {id: 2, name: "Sue"}] it should return {1: {id: 1, name: "Joe"}, 2: {id: 2, name: "Sue"}}

*/

function index(arr, name) {
    let output = {};
    arr.map((val) => {
        output[val[name]] = val;
    })
    return output;
}






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named invert that takes an object and returns an object where the keys and values have been inverted

Example:

If you pass {id: 1, name: "Joe"} it should return {1: "id", Joe: "name"}
*/

function invert(obj) {
    output = {};
    for(let key in obj) {
        output[obj[key]] = key
    }
    return output;
}






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named addSignature that takes an object and a name, and returns an object where

- the keys are suffixed with "-signed"
- the values are suffixed with " - <name>"

Example:

If you pass {"contract": "foo"}, "Fred" it should return {"contract-signed": "foo - Fred"}
*/

function addSignature(name, obj) {
    output = {};
    let newKey = "";
    for(let key in obj) {
        newKey = key + "-signed"
        output[newKey] = obj[key] + " - " + name;
    }
    return output;
}






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named pairs that takes an object and returns an array of strings of key/value pairs

Example:

If you pass {name: "Will", age: 24} it should return ["name - will", "age - 24"]
*/

function pairs(obj) {
    output = [];
    for (let key in obj) {
        output.push(key + " - " + obj[key])
    }
    return output;
}






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named sumValues that takes an object and returns the sum of the values

Example:

If you pass {a: 1, b: 2} it should return 3
*/

function sumValues(obj) {
    output = 0;
    for (let key in obj) {
        output += obj[key];
    }
    return output;
}






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named biggestProperty that takes an object and returns the name of the property with the highest value

Example:

If you pass {1999: 4036, 2000: 7654} it should return '2000'
*/

function biggestProperty(obj) {
    let output;
    let biggest = 0;
    for (let key in obj) {
        if(obj[key] > biggest) {
            output = key;
            biggest = obj[key];
        }
    }
    return output; 
}












/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named keyForValue that takes an object and a value and returns the name of the property that matches that value

Example:

If you pass {1999: 4036, 2000: 7654} and 4036, it should return '1999'
*/

function keyForValue(obj, val) {
    let output;
    for (let key in obj) {
        if(obj[key] === val) {
            return key;
        }
    }
    return output; 
}








/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named containsValue that takes an object and a value and returns true if the object contains the value

Example:

If you pass {1999: 4036, 2000: 7654} and 4036, it should return true
*/

function containsValue(obj, val) {
    for (let key in obj) {
        if(obj[key] === val) {
            return true;
        }
    }
    return false; 
}







//
