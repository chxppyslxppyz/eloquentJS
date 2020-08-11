//? High-order functions

/* let total = 0, theCount = 1; 
while (theCount <= 10) {
    total += theCount 
    theCount += 1 
}
console.log(total); */
// random code.. 

//? Abstraction
// abstractions hide details and give us the abiity to talk about problems at a higher level  
//? Abstracting repetition 
// Plain functions are a great way to make abstractions. it's common for a program to do something a given amount of times, like a for loop.. 
for (let i = 0; i <= 5; i++) {
    console.log(i);
}
// this means, until 0 is smaller or equal to 5, keep incrementing by one until it reaches 5. 

function repeatLog(n) {
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
};
// we've written a function that calls console.log N times  
// we will pass the action as a function value to do something other than only logging the numbers 
function repeat(n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}
repeat(3, console.log);
// we are passing down the params into two different words.. n = 3, and action = console.log

let labels = [];
repeat(5, i => {
    labels.push(`Unit ${i + 1}`);
});
console.log(labels);
// gives ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5"]... it's like a for loop and string literals combined.. the Unit's will repeat until it reaches 5. 
// The "i" in ${i + 1} will keep incrementing until it has reached 5.  

//? High-order functions 
// functions that will operate onto other functions instead of taking them as arguments or by returning them, are called high-order functions. 

//* We have functions that make new functions.. 
function greatherThan(n) {
    return m => m > n;
}
let greatherThan10 = greatherThan(10);
console.log(greatherThan10(10.01));
// TRUE: 10.01 is greater than 10 (n = 10 in this case and m = 10.01)

//* We can have functions that change other functions
function someArg(f) {
    return (...args) => {
        console.log("calling with", args);
        let result = f(...args);
        console.log("called with", args, "returned", result);
    };
}
someArg(Math.min)(5, 3, 2);

//* We can write functions that provide new types of control flow 
function unless(test, then) {
    if (!test) then();
}
repeat(3, n => {
    unless(n % 2 == 1, () => {
        console.log(n, "is even");
    });
});

// There is a built-in array method, called forEach, it provides something similar to a for/of loop as a high ordered function 
["X", "Y"].forEach(r => console.log(r));

//? Script data set
// this chapter will use a data set about scripts - writing systems such as Arabic, Latin, Cyrillic, etc.
// most of the characters in the system that assigns a number to each character in written language are associated with specific script

// The binding contains an array of objects, each of which describes a script. 

/* {
    name: "Coptic",
        ranges: [[994, 1008], [11392, 11508], [11513, 11520]],
            direction: "left to right",
                year: -200,
                    living: false,
                        link: "https://en.wikipedia.org/wiki/Coptic_alphabet"
} */

// an object like the one above tells us the name of the script, the unicode ranges, the direction the language is written, the origin time, whether or not it's still around, and a link too.
// the ranged property contains an array of Unicode character ranges, and each of which is a two-element array that contains a lower bound and an upper bound 
// any character codes within these ranges are assigned to the script, code 994 is a coptic character, and code 1008 isnt. 

//? Filtering arrays 
// the following function filters out the elements in an array that don't pass a test  

/* function filter(array, test) {
    let passed = [];
    for (let element of array) {
        if (test(element)) {
            passed.push
        }
    }
    return passed;
}
console.log(filter(SCRIPTS, script => script.living)); */

// the commented function above uses the argument, named "test, a function value to fill a gap in the computation
// the filter function, rather than deleting elements from the existing array, builds up a new array with only the elements that pass the test 
// this function is pure, it doesn't modify the array it's given. like forEach, filter is a standard array method.

// you can use it like this too: //* console.log(SCRIPTS.filter(s => s.direction == "ttb")); 

//? Transforming with map 
// the map method transforms an array by applying a function to all of its elements and building a new array from the returned values 

/* function map(array, transform) {
    let mapped = [];
    for (let element of array) {
        mapped.push(transform(element));
    }
    return mapped;
}
let SCRIPTS = ["Arabic", "Coptic", "Latin", "Cyrillic"];

let rtlScripts = SCRIPTS.filter(s => s.direction == "rtl");
console.log(map(rtlScripts, s => s.name)); */ // what is wrong?? 

//? Summarizing with reduce

// something else to do with arrays is to compute a single value from them. the higher-order operation that represents this pattern is called reduce (sometimes fold)
// it builts a value by repeatedly taking a single element from the array and combining it with the current value. when summing numbers, you'd start with 0 and for each element, add to that sum
// the parameters to reduce are, a combining function and a start value apart from the array. 
function reduce(array, combine, start) {
    let current = start;
    for (let element of array) {
        current = combine(current, element);
    }
    return current
}
console.log(reduce([10, 20, 30, 40], (a, b) => a + b, 0));
// 10 + 20 + 30 + 40 = 100 

// the standard array method, reduce corresponds to this function. if your array contains at least one element, you are allowed to leave off the start argument 
// the method will take the first element of the array as its start value and start reducing at the second element
console.log([30, 50, 80, 110].reduce((a, b) => a + b)); //* does the same type of thing as line 143.

// using reduce TWICE can be written like something like this 

/* function characterCount(script) {
    return script.ranges.reduce((count, [from, to]) => {
        return count + (to - from);
    }, 0);
}
console.log(SCRIPTS.reduce((a, b) => {
    return characterCount(a) < characterCount(b) ? b : a;
}));

returns -> {name: "Han", ...}

the Han script has more than 89,000 characters assigned to it in the Unicode standard, and it's the biggest writing system in the data set, it's sometimes used for Chinese, Korean, Jap text
the US based Unicode decided to treat the Han script as a single writing system to save character codes.
Han unification can still make people very angry despite how old it is

*/

//? Composability 

// writing the previous script without higher-order functions would look like this: 


/* let biggest = null;
for (let script of SCRIPTS) {
    if (biggest == null ||
        characterCount(biggest) < characterCount(script)) {
            biggest = script;
        }
}
console.log(biggest); */

// higher-order functions start to shine when you need to compose operations. here's a code that finds the average year of origin for living and dead scripts in the data set.. 


/* function avg(array) {
    return array.reduce((a, b) => a + b) / array.length
}
console.log(Math.round(avg(
    SCRIPTS.filter(s=> s.living).map(s => s.year)))); 
--> 1165 
console.log(Math.round(average(
    SCRIPTS.filter(s => !s.living).map(s => s.year)))); 
-->  204 */ 

// You can alsdo write this computation as one big loop 

/* let total = 0, count = 0; 
for (let script of SCRIPTS) {
    if (script.living) {
        total += script.year; 
        count += 1; 
    }
}
console.log(Math.round(total / count));
--> 1165
 */ 

 //? Strings and character codes  
// EACH SCRIPT has an array of character code ranges associated with it, so given a character code, we could use a function like this to find the corresponding script if there are any..

function characterScript(code) {
    for (let script of SCRIPTS) {
        if (script.ranges.some(([from, to]) => {
            return code >= from && code > to; 
        })){
            return script
        }
    }
return null; 
}
