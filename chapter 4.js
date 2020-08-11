//? Data Structures: Objects & Arrays 

// Numbers, booleans, and strings are the atoms that data structures are built from. 
// arrays are a list of words or numbers, written inside "[]". It's written as a list of values, and are separated by commas

let numbers = [1, 2, 3, 4]
console.log(numbers[1]);
// the first object in an array is the 0th index, not 1st.

//? methods 
// both string and array objects contain, in addition to the length property, a number of properties that hold function values
let doh = "doh";
console.log(typeof doh.toUpperCase);
// returns function
console.log(doh.toUpperCase())
// returns DOH (uppercase)

let sequence = [2, 4, 6, 8]
sequence.push(10)
sequence.push(12)
console.log(sequence) 
console.log(sequence.pop());
console.log(sequence)
// .push adds a element to the end of an array  
// .pop removes the last element in an array 

//? objects 
// values of the type "object" are random collections of properties, using {}'s as expressions is a way to make an object 
let day1 = {
    squirrel: false,
    events: ["school", "touched tree", "ate acorns", "workout"]
};
console.log(day1.squirrel);
// returns false, from the "let day1" object holder, because doing day1.squirrel grabs the object "squirrel" from the day1 block. 
// properties whose names are not valid binding names or valid numbers have to be quoted 
let descriptions = {
    work: "went to work",
    "touched tree": "touched a tree",
};

// Reading a property that doesn't exist will give you: undefined
// you can assign a value to a property using the "=" operator, this will replace the property's value if it already existedd or create a new property on the object if it didn't 
// the delete operator is a unary operator that when it's applied to an object property, it will remove hte named property right from the object. It's not common but it happens

let anObject = { zero: 0, one: 1 };
console.log(anObject.zero);
// returns the 0, because the zero object is holding zero and we are grabbing the 0 out of the word zero 
delete anObject.zero
console.log(anObject.zero)
// returns undefined, 0 is not there anymore, it's deleted
console.log("zero" in anObject)
// false, zero does not exist anymore 
console.log("one" in anObject)
// true, one is still inside of the property "one" and it's not deleted

// the binary "in" operator when applied to a string tells you whether or not that object has a property with that name
//  the difference between setting a property to undefined and literally deleting it is that in the first case, the object still has the property hooked onto it, whereas the second case, the property is no longer present and it will return false

// to find out what properties an object has, user the object.key function 
console.log(Object.keys({ a: 10, b: 100, c: 100, d: 1000 }));
// gives "a", "b", "c", "d"; 
// object.assign copies all properties from one object to another 
let objectA = { a: 5375, b: 3849 };
Object.assign(objectA, { b: 320, c: 44 });
console.log(objectA);

// we use "[]" to represent objects and arrays
let journal = [
    {
        events: ["work", "touched tree", "pizza",
            "running", "video games"],
        squirrel: false
    },
    {
        events: ["work", "ice cream", "video games",
            "lasagna", "touched tree", "brushed teeth"],
        squirrel: false
    },
    {
        events: ["weekend", "cycliing", "break", "video games",
            "beer"],
        squirrel: true
    },
];
console.log(journal[0]);

//? mutability 
let obj1 = { value: 987345 };
let obj2 = obj1;
let obj3 = { value: 987345 };

console.log(obj1 == obj2);
// true, we assigned obj1 to obj2 so they are the same thing 
console.log(obj1 == obj3)
// false, they may have the same value but their property names (obj 1 and obj 3) are not the same, it doesn't matter about the value but the name after the let keyword
obj1.value = 15
console.log(obj2.value);
// returns 15, obj1 is basically obj2 meaning they have the same value hence obj1 and obj2 are bot 15.

// bindings can also be changeable or constant, a const binding to an object can itself not be changed and will continue to point at the same object, but the contents of that object might change

const score = { visitors: 0, home: 0 };
// this is allowed ^^ 
score.visitors = 1;
// this is not allowed ^^

//score = { visitors: 1, home: 1 };
// when you compare objects with JavaScript's == opersator it compares by identity, it will make true only if both objcts are precisely the same value
// comparing different objects will return false, even if they have the same EXACT properties

//? Lycanthrope's Log 

/* let journal = []; 
function addEntry(events, squirrel) {
    journal.push({events, squirrel}); 
} 
"events" just gives a property name, if a property name in brace notation isnt followed by a value, its value is taken from the binding that has the same name. */

/* addEntry(["work", "touched tree", "pizza", "running",
    "television"], false);
addEntry(["work", "touched tree", "coding", "jogging",
    "pizza"], false);
addEntry(["weekend", "breakfast", "cycling", "Television",
    "beer"], true); */

// 
function phi(table) {
    return (table[3] * table[0] - table[2] * table[1]) /
        Math.sqrt((table[2] + table[3]) *
            (table[0] + table[1]) *
            (table[1] + table[3]) *
            (table[0] + table[2]));
}

console.log(phi([1, 2, 3, 4]));
// gives -0.0890870806374748 

// Math.sqrt is the square root function 

function tableFor(event, journal) {
    let table = [0, 0, 0, 0];
    for (let i = 0; i < journal; i++) {
        let entry = journal[i], index = 0;
        if (entry.events.includes(event)) index += 1;
        if (entry.squirrel) index += 2;
        table[index] += 1;
    }
    return table;
}
console.log(tableFor("PIZZA", journal));

// Arrays have an includes method that checks whether a given value exists in the array.
// the body of the tableFor loop figures out which box in the table each entry falls in 

//? Array loops 
/* in the tableFor function, a loop looked like:
    for (let i = 0; i < journal; i++) {
        let entry = journal[i]
this type of loop is common in classic JavaScript 
        */

// there are easier ways to write such loops in javascript 
for (let entry of journal) {
    console.log(`${entry.events.length} events.`);
}
// when a for loop looks like that code above ^ with the word "of" after a variable defunition, it will loop over the elements of the value given after "of"

//? The Final Analysis
// to compute a correlation for every type of event that occurs in the data set, we need to first find every type of event
function journalEvents(journal) {
    let events = [];
    for (let entry of journal) {
        for (let event of entry.events) {
            if (!events.includes(event)) {
                events.push(event);
            }
        }
    }
    return events;
}
console.log(journalEvents(journal));
// gives: ["work", "touched tree", "pizza", "running", "video games", "ice cream", "lasagna", "brushed teeth", "weekend", "cycliing", "break", "beer"]

// by going over all of the events and adding those that are not already in there to the events array, the function collects every single type of event

/* for (let event of journalEvents(journal)) {
    console.log(event + ":", phi(tableFor(event, journal))); 
} */

//? Further Arrayology 
// shift and unshift..  
let todoList = [];
function remember(task) {
    todoList.push(task);
}
function getTask() {
    return todoList.shift();
}
function rememberUrgently(task) {
    todoList.unshift(task);
}

// the program above manages a queue of tasks, you can add tasks to the end of the queue by calling remember("groceries") 

// To search from the end instead of the start, there is something called lastIndexOf 
console.log([2, 534, 6, 23, 7, 4].indexOf(2))
// gives 0, the 0th index of that array is 2, hence index of 2 is 0! 

// Another array method is "slice", which takes start and end indices ande returns an array that has only the elements between them. the start index is inclusvie and the end is exclusive
console.log([34, 5, 3, 23, 53, 6].slice(1, 4));

function remove(array, index) {
    return array.slice(0, index)
        .concat(array.slice(index + 1));
}
console.log(remove(["a", "b", "c", "d", "e"], 2));
// returns ["a", "b", "c", "d"]. 
// if you pass "concat" an argument that is not an array, the value will be added to the new array as if it were a one-element array

// strings and their properties 

// we can read properties like length, toUpperCase, but if you try to add a new property, it will not "stick".

/* let JavaScript = "JavaScript"; 
JavaScript.pain = "high"; 
console.log(JavaScript.pain); */
//! that code above for example, when you try and get the "pain" value out of JavaScript and print it, it will say undefined. it does not store those properties
//! such values are immutable and can't be changed 
console.log("-g08jweriuhifrew".slice(10, 12));
// trim method removes whitespace 
console.log("ok bud \n".trim());
// padStart takes the desired length and padding character as arguments
console.log(String(6).padStart(4, "3"));
// gives 3336
// you can split a string on every occurence of another string with "split" and join it again with "join"
let sentece = "I specialize in computing";
let words = sentece.split(" ");
console.log(words);
// gives.. ["I", "specialize", "in", "computing"]; 
console.log(words.join(" 🐵 "));
// after each word, it's a 🐵 emoji  
// a string can be repeated with repeat method, with repeats the original string glued together 
console.log("lo".repeat(10));
// string keyword finds length of word 

let ok = "damn bruh aight then lmaoo";
console.log(ok.length);

//? Rest parameters 
// it can be useful for a function to accept any number of arguments, for example, Math.max gets the max of all arguments it's given
// to write such a function, you need to include "..." before the functions last parameter
function max(...numbers) {
    let result = -Infinity;
    for (let number of numbers) {
        if (number > result) result = number;
    }
    return result;
}
console.log(max(1, 5, 345, 54343, 4435, 3, 934, 4.45, 543));
// gives 54343, it's the max number 

// when such function is called, the rest parameter is bound to an array that contains all futher arguments, if there's any other parameter before it, their values aren't part of that array
// when, as in max, it is the only parameter, it will hold all arguments
// you can use a similar three-dot-notation (...) to call a function with an array of arguments 
let numbas = [34, 75, 23];
console.log(max(...numbas))
// gives 75, using the ...numbers will call that "let numbas" function and see which is the max number 

// square bracket array notation similarly allows the triple-dot operator to spread another array into the new array 
let wordss = ["is", "a"];
console.log(["Ski Mask the Slump God", ...wordss, "God"]);
// with triple dot operator, you can concat things together in arrays kinda 

//? The Math Object 
// As we have seen, Math is a grab bag of number-related functions that can come to use, like Math.max, Math.min, etc. In the Math object, there are other things too like.. 
// Math object also has.. sin, tan, acos, asin, atan, pi, etc  
// there is a old programming tradition of writing the names of constant values in all caps 
function randomPointOnCircle(radius) {
    let angle = Math.random() * 2 * Math.PI;
    return {
        x: radius * Math.cos(angle),
        y: radius * Math.sin(angle)
    };
}
console.log(randomPointOnCircle(2));

// Math.random by itself will return something that is more than zero, but no more than one. 
console.log(Math.random());
// Math.floor included will only give whole numbers
console.log(Math.floor(Math.random() * 100));

//? Destructuring 

/* function phi(table) {
    return (table[3] * table[0] - table[2] * table[1]) /
        Math.sqrt((table[2] + table[3]) *
            (table[0] + table[1]) *
            (table[1] + table[3]) *
            (table[0] + table[2]));
} */

// we would want to have bindings for the elements of the array 

function phi([n00, n01, n10, n11]) {
    return (n11 * n00 - n10 * n01) /
        Math.sqrt((n10 + 11) * (n00 + n01) *
            (n01 + n11) * (n00 + n10));
}
// this cam aso work for bindings made by let, var, or const. 
// a similar trick works for objects.. using braces instead of brackets. 
let {name} = {name: "Ryan", age: 16}; 
console.log(name); 

//? JSON 
// JSON = Javascript Object Notation 
// it is used as a dats storage and communication format on the web, and can be used with other programming languages as well. 
// JSON looks similar to javascripts way of writing arrays and objects, but there are a few things missing. all property names have to be sourounded by double quotes 
// only simple data expressions are allowed, no function calls, bindings, etc. There are NO comments in JSON. 
// A journal entry can look like this when represented as JSON data: 

/* {
    "squirrel": false, 
    "events": ["wake up", "breakfast", "work", "work out", "dinner", "TV", "Bed"]
} */ 

// javascript gives us functions JSON.stringify, and JSON.parse to convert data to and from this format. The first takes a javascript value and returns a JSON-encoded string 
// the Second takes such a string and converts it to the value that it encodes. 
let stringg = JSON.stringify({squirrel: false, 
events: ["weekend"]}); 
console.log(stringg);
console.log(JSON.parse(stringg).events); 
// gives.. ["weekend"]. parsing the string and grabbing out the events property will give what it's consisted of, which is ["weekend"]. 

//? Summary

/* Objects and arrays provide ways to group several values inside of a single value. Conceptually, this allows us to put a bunch of related things inside a bag and run around with the bag,
instead of wrapping our arms around all of the individual things and trying to hold on to them separately. Most values in javascript has properties, the exceptions being null and unfeined. 
Properties are accessed using value.prop or value["prop"]. Objects tend to use names for their properties and store more/less a fixed set of them. Arrays usually contain vaying amounts of 
conveptually identical values and use numbers starting from 0. There are some names properties in arrays like "length" and other methods too. 
Iterating over arrays can happen by using a special kind of for loop -- for(let element of array). 
*/ 



