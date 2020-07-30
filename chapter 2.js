//? bindings 
// to hold values, JavaScript has a thing called "bindings" or widely known as "variables"
let storedValue = 5 * 5; // binding "caught" holds 5*5 
// here i will get 625.. 
let value = (storedValue * storedValue); 
console.log(value); 
// when a binding points at a value, it's not tied to it forever, the = operator can be used at any time on existing bindings to disconnect them from their current value and have them point at a new one.
let mode = "light"; 
console.log(mode); 
// returns light because you're logging mode, a variable that is storing "light". 
let math = 294
math = math - 48 
console.log(math); 
let one = 1, two = 2
console.log(one * two); 

// words VAR and CONST can also be created to use bindings, in a way that is similar to let. 
var hobby = "coding"; 
var string = " I love to do " + hobby; 
console.log(string); 
// const means constant, it is a binding that points at the same value for as long as it's there.

//? Binding names
// binding names can be any word, but the name cannot start with a digit. It can also include dollar signs, underscores. 
// words with special meaning, LET for example, are something called keywords. There are soo many keywords out there. Here are most of them in JS: 
//todo  break , case , catch , continue , debugger , default , delete , do , else , finally , for , function , if , in , instanceof , new , return , switch , this , throw , try , typeof , var , void , while , and with. 
var name = "Ryan"; 
var greeting = `Hello, my name is ${name}`; 
console.log(greeting); 

//? The environment
// the collection of bindings and their values that exist at a given time is called the environment
//? Functions 
// A lot of the values provied in the default environment have the type function
// The "prompt" binding holds a function that shows a little dialog box asking for a users input.. like this: 
// prompt("Enter password."); 

// executing a function can be called "invoking", "calling", or "applying". You call a function by putting parentheses after an expression that produces a function value. 
//? console.log function 
// Most JS systems including node use the consle.log function to log their consoles and get an answer.

//? Return Values 
// Showing a dialog box or writing text to the screen is only a side effect. 
console.log(Math.max(2, 3)); // math.max = gives greatest
console.log(Math.min(2, 3)); // math.min = gives least

//? Control flow/Write your own function
/* let theNumber = Number(prompt("Pick a number")); 
console.log("Your number is the square root of " + 
theNumber * theNumber); */ 
//? Conditional Execution 

/* let NUM = Number(prompt("Pick a number")); 
if (!Number.isNaN(NUM)) {
    console.log("Your number is the square root of " + 
    NUM * NUM);  
} */ 
// CONDITIONAL EXECUTION ^ if statement.

// with that if statement, if you type in something with no numbers, there is no output. 
if  (1 + 4 == 5) console.log("True"); 
// with else keyword.. 


/* let numnum = Number(prompt("Pick a numba!")); 
if (!Number.isNaN(numnum)) {
    console.log("Your number is the square root of " + numnum * numnum); 
} else {
    console.log("That ain't a numba foo"); 
} */ 

/* let nummy = Number(prompt("Please pick a number")); 
if (nummy < 10) {
    console.log("SMALL");
} else if (nummy < 100) {
    console.log("MEDIUM");
} else {
    console.log("LARGE"); 
} */ 

//? while and do loops 
// consider a program that will output all even numbers from 0 to 10, you can write one like this - 
/* 
console.log(0)
console.log(2)
console.log(4)
console.log(6)
console.log(8)
console.log(10)
*/ 

// It will get you 0-10 in the console. 
// What if we can make it so that it requires less work? 
let x = 0;
while (x <= 10) {
    console.log(x)
    x = x + 2; 
} 
// this while loop is basically executing numbers from 1 to 10, in a while loop. 
// Holding 0 in the value x and saying x <= 10 means in this case "less than or equal to 10"
// then it's saying while 0 is less than or equal to 10, keep logging X, and increment X by two. 
// you get 0-10 in the console! 

// we can write a program that does something useful, write a program that calvulated the shows the value of 2^10. 
let result = 1 
let count = 0 
while (count < 10) {
result = result * 2 
count = count + 1 
} 
console.log(result)

// a do-loop is a control structure that's similar to a while loop
// a do loop always executes its body at least once, and it starts testing whether it should stop only after that first execution 

/* let yourName 
do {
    yourName = prompt("who r u lol"); 
} while (!yourName)
console.log(yourName); */ //! basically, this type of code will force you to enter a name, no matter how many times you cancel, it won't let you skip it until you enter something 

//? Indenting code 
// the point of indentation in code is to make the code stand out, that's why we try to indent, to make it easier to read the blocks of code (or just use a bracket colorizer extension, that's what i use)
if (false != true) {
    console.log("false aint true"); 
    if (1 < 2) { 
    console.log("obviously 1 does not equal 2")
    }
} 

//? for loops 
for (let number = 0; number <= 12; number = number + 2) {
    console.log(number); 
}
// parentheses after for loop needs two semicolons
let result1 = 1; 
for (let counter = 0; counter < 20; counter = counter + 1) {
    result1 = result1 * 2; 
}
console.log(result1);

//? breaking out of a loop 
for (let current = 20; ; current = current + 1) {
    if (current % 7 == 0) {
        console.log(current); 
        break; 
    }
} 

//? shortcuts in bindings

/* test = test + 1; 
 
 JS provides a shortcut.. 

 test += 1; */  

// this can help us fix our for loops a little more and make it simpler 
for (let xyz = 0; xyz <= 10; xyz += 2) {
    console.log(xyz) //! instead of xyz = xyz + 2, i put xyz += 2. easy
}

//? switch statement 
/* there's a construct called switch, the switch statement executes a block of code depending on different cases, it is supposed to perform different actions based on different conditions 
The switch statement is often used together with a break or a default keyword (or both) */  

 /* switch (prompt("how is the weather?")) {
    case "rainy": 
    console.log("bring umbrella")
    break; 
    case "sunny": 
    console.log("wear sun screen")
    break; 
    case "cloudy": 
    console.log("Perfect weather!")
    break; 
    default: 
    console.log("unknown weather type.")
    break;
} */  

//? find length of a string 
let abc = "w49-h8tugwrgi9uhe9wughger9quhegr98j-rgeho80ergohupner54yoipuhrehg9i8jreg9iujwerfbui";
console.log(abc.length); 
