//? functions 
// functions are the meat of modern day programming, especially in JavaScript 
//? defining a function
// a function definition is a regular binding where the value of the binding is a function. 

const square = function(x) {
    return x * x 
}
console.log(square(12))

const coding = function(ryan) {
    return ryan + ryan 
}
console.log(coding(3))

// functions have a set of parameters/arguments (the ones above were x and ryan) which are supposd to be executed when the function is called.
// the function body ALWAYS needs to be wrapped in curly brackets
// a function can have more than one argument or no arguments at all 
const makeNoise = function() {
    console.log("ping"); 
}; 
makeNoise(); // no arguments 

const power = function(base, exponent) {
    let result = 1; 
    for (let count = 0; count < exponent; count++) {
        result *= base; 
    }
    return result;  
}; 
console.log(power(4, 2)) 

//? bindings and scopes
// each binding has a scope
let q = 10; 
if (true) {
    let y = 20 
    let z = 30; 
    console.log(q + y + z); 
}
// console.log(q + z)

// the console.log above me is outside the scope of the if statement, hence z will not be defined. 
// bindings declared with let and const are local to the block that they are declared in, so if you create one of those inside a loop, the code before and after that loop cannot see it 
const halve = function(n) {
    return n / 2 
}; 

var n = 10 
console.log(halve(100)); 


//? nested scope 
// blocks and functions cna be created inside other blocks and function, this function below me has another function inside of it.. 
const hummus = function(factor) {
    const ingredients = function(amount, unit, name) {
        let ingredientAmount = amount * factor; 
        if (ingredientAmount > 1) {
            unit += "s"; 
        }
    console.log(`${ingredientAmount} ${unit} ${name}`); 
    };  
    ingredients(1, "can", "chickpeas"); 
    ingredients(0.25, "cup", "tahini");
    ingredients(0.25, "cup", "lemon juice");
    ingredients(1, "clove", "garlic");
    ingredients(2, "tablespoon", "olive oil");
    ingredients(0.5, "teaspoon", "cumin");
}; 

// the code inside the ingredients function can see the factor binding from the outer function. but its local bindings such as unit or ingredientAmount are not visible in the outer function
// each local scope can also see all of the local scopes that contain it, and all scopes can
//! A variable's scope is the range of the script where it is visible. Variables have either global or local scope. A global variable exists only once in a script, and is visible in every function. ... A local variable, however, has a limited scope: it exists only within the block that it is declared in.

//? functions as values
// a function value can do all the things that other values can do, it's possible to store a function value in a new binding and pass it in an argument to a function and so on 

/* let launchMissiles = function() {
    missileSystem.launch("now!"); 
};
if (safeMode) {
    launchMissiles = function() { do nothing! }; 
} */

//? declaration notation 
// There is a shorter way to create a function binding. when the function keyword is used at the start of a statement, it works differently 
function squared(x) {
    return x * x; 
}

// the statement defines the binding "square" and pointsi tat the given function. it's slightly easier to write and doesn't require a ; after the function. 
console.log("The future says:", future()); 

function future() {
    return "We will have flying cars!!!"
}

//? arrow functions 
// there is a third notation for functions, which looks very different from the others. Instead of the function keyword, it uses an arrow (=>) let's try it out.. 
let powerr = (base, exponent) => {
    let result = 1; 
    for (let count = 0; count < exponent; count++) {
    result *= base 
}
return result 
}; 
console.log(power(10000000000, 0))
// the arrow will come after the list of arguments and is followed by the functions body. it is expressing something like: "the arguments produce this result (the body)"

/* when there is one arguement only, you can omit the parentheses around the argument list. if the body is a single expression, rather than a block inside braces, 
that expression will be returned from the function, so these two lines of code below mean the same thing */ 
const square1 = (x) => { return x * x }; 
const square2 = x => x * x; 

/* var declarations - are globally scoped or function scoped while let and const are block scoped. 
var variables - can be updated and re-declared within its scope
let variables - can be updated but not re-declared; 
const variables can neither be updated nor re-declared. */ 

// when an arrow function has no argument, its argument list is just an empty set or parentheses 
const horn = () => {
    console.log("toot!"); 
}
// horn(); doing "horn();" will call the function to log "'toot!'" into the console. 

// the arrow function and function expression without the arrow do the same thing, arrow functions were added in 2015, mainly to make it easier to write small functions. 

//? the call stack 
function dob(dob) {
    console.log("Your data of birth: " + dob)
}
dob("January 3rd, 2005"); 
// this is how the function works: the call to dob causes control to jump to the start of that function (line 130) on line 130, the dob function is passing in my birthday in the dob argument. 
// simple..

/* function chicken() { 
    return egg();  
}
function egg() {
    return chicken(); 
}
console.log(chicken() + " came first."); 

this stack requires space in the computers memory, but this can grow too big, this causes an infinite back-and-forth between the two functions. the stack blew up
you will get something like this: */ 
//! Uncaught RangeError: Maximum call stack size exceeded
//! at egg (chapter 3.js:140)
//! at chicken (chapter 3.js:137)
//! at egg (chapter 3.js:140)
//! at chicken (chapter 3.js:137)
//! at egg (chapter 3.js:140)
//! at chicken (chapter 3.js:137)
//! at egg (chapter 3.js:140)
//! at chicken (chapter 3.js:137)
//! at egg (chapter 3.js:140)
//! at chicken (chapter 3.js:137) 

//? optional arguments 
// following code executed without any problem. 
function squaree(x) { return x * x } 
console.log(squaree(4, "ayo the pizza here", "chicken")); // note: i am saying squaree because square has already been declared. 

// defining squaree with only one argument, and when we call it, we get 16, even though we passed in two random things into the console.log
// the language does not complain, it ignores the extra arguments and it computes the square of whatever the first one is. if yu pass two many arguments, the extra ones are ignored 

// example: the minus function tries to imitate the "-" operator by acting on either one or two arguments 
function minus(x, y) {
    if (y === undefined) return -x; 
    else return x - y;  
}
console.log(minus(10)); 
// -> -10 
console.log(minus(10, 5)); 
// -> -5

// writing a "=" operator after a parameter followed by an expression , the value of that expression will replace the argument when it's not given.  
// this code makes its second argument optional, if you do not provide it or pass the value "undefined", it will default to two and the function will behave like square
function powerrr(base, exponent = 2) {
    let result = 1; 
    for (let count = 0; count < exponent; count++) {
        result *= base
    }
return result; 
}
console.log(powerrr(4)); 
// 16, exponent is already two and we chose 4 as base. 
console.log(powerrr(2, 6)); 
// 64, 2 is base and exponent turned from 2 to 6 cause we passed in a new value for it inside the scope

// this was helpful because it makes it possible for a function to accept any number of arguments. example: console.log does this .. it outputs all its given values

console.log("F","T","C"); 

//? Closure 
/* the ability to treat functions as values combined with the fact that local bindings are re-created every time a function is called.
but what happens to local bindings when the function call that created them is no longer active? */ 

function wrapValue(n) {
    let local = n; 
    return() => local
}
let wrap100 = wrapValue(100); 
let wrap200 = wrapValue(200); 
console.log(wrap100()); 
// gives 1 
console.log(wrap200()); 
// gives 2 

// this is allowed and works fine, both instances of the binding can be accessed, this situation is a good demonstration of the fact that local bindings are created in a new way for every call
// different calls cannot tamper with each other's local bindings

//* CLOSURE - means being able to reference a specific instance of a local binding to an enclosing scope.

function multiplier(factor) {
    return number => number * factor; 
}
let twice = multiplier(2)
console.log(twice(5)); 
// passing in the word "twice" to the multiplier function times two will let you multiply any number by two. on line 216, you are multiplying 5 and 2 together (10). 

// the wrapValue function isn't neeeded since the argument itself is a local binding. 

//? Recursion 
//* RECURSION - a function that calls itself 
// a function can call itself, but not too many times for the stack to get overflowed with junk.
// The basis of recursion is function arguments that make the task so simple that the function does not make further calls. 


function powah(base, exponent) { 
    if (exponent === 0) {
        return 1; 
    } else {
        return base * powah(base, exponent - 1); 
    }
}
console.log(powah(5, 5)); 
// gives 3125, 5^5 = 3125. 

// Recursive solution: 
function findSolution(target) {
    function find(current, history) {
        if (current == target) {
            return history; 
        } else if (current > target) {
            return null; 
        } else {
            return find(current + 5, `(${history} + 5)`) || 
            find(current * 3, `(${history} * 3)`); 
        }
    }
return find (1, "1"); 
}
console.log(findSolution(52)); 