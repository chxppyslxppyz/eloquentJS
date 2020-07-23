/* function factorial(n){
    if (n === 0) {
        return true; 
    } else {
        return factorial(n - 1) * n; 
    }
}
console.log(factorial(0)) */ 

//? : values, types, and operators 
// bits are described as 0's and 1's 

var lines = "First Line \"hehe quotes\"\nSecond Line lol";
console.log(lines); // "\" can be used inside strings with quotes needing to be there to make it available

var concat = "con" + "cat"; // concatenation
console.log(concat);

var half = `half of 1000 is ${2 * 250}`; 
console.log(half); 
/* backtrick qyoted strings (template literals).. 
can do a few more tricks, they can span lines and embed other values */ 
// Writing something inside a ${} will already have its result computed, and converted to a string (2 * 250 = 500, as included in the code I put). 


//? Unary operators 
// typeof operator produces a string value naming the type of value you give it
console.log(typeof 4.55);
// -> Gives number
console.log(typeof "x"); 
// -> Gives string 

//? Booleans 

// Booleans have only two values: "true", "false"/"yes" or "no"
console.log(1.1 > 1); 

console.log(1 > 1.1); 
// < and > signs are symbols for "greater/less than". They are binary operators.
console.log("AAA" < "ZZZ"); 
// When you compare strings, JS goes over from left to right, comparing unicode codes one by one
// >= greater than or equal to / <= less than or equal to, == equal to, != not equal to
console.log(2 != 1); 
// return true
console.log("ABC" == "XYZ"); 
// return false 

// NaN is NOT equal to itself, it's Not a Number

//? Logical operators 

// || = or && = and are binary operators
// a && result is true if both of the values given to it are true 
// a || result is true if only one of the values given to it are true

console.log(true && false); 
// return false (THEY'RE NOT THE SAME VALUE)
console.log(true && true); 
// return true (THEY'RE THE SAME VALUE)
console.log(true || false); 
// return true (One of the values is true)
console.log(false || false);
// return false (Both of the values are false)

// "Not" is written as a "!". It is an unary operator, !true = false, and !false = true
//* Presedence = "the condition of being considered more important than someone or something else; priority in importance, order, or rank."

// you may do things like.. 
var isItTrue = 1 + 1 == 2 && 10 * 10 > 50 
console.log(isItTrue); 

// ternary..  it is written with a colon and question mark 
console.log(true ? 1 : 2) // True: Left value chosen
// return 1 
console.log(false ? 1 : 2) // False: Right value chosen
// return 2 
// this is called ternary/conditional operator. The value on the left of the "?" mark picks which of the other two values will come out
// When it is true, it chooses the middle value, and when it is false, it chooses the value on the right.

//? Empty values 
// two special values: Null/Undefined they are used to say that a value is absent / there is no value
// Empty values don't carry any information 
// if it doesn't carry a meaningful value, it's NULL, or undefined. Null and undefined are interchangable, meaning that they can have the same meaning
//? Automatic type conversion 
console.log(8 * null); 
// returns 0, why? because null basically means "0"; no value!; nada!
console.log("10" - 1); 
// returns 9, 10 - 1 = 9. 
// but, try adding. 
console.log("20" + 0); 
// returns 200, because you're using 20 as a STRING, not a value! You're adding 0 at the end of 20. 
console.log("sixteen" * 2); 
// returns NaN, because in string terms, sixteen is a word, not a number! It would've worked if it was in numerical form, but it's not, hence NaN. 
console.log(false == 0); 
// returns true, false is 0

// When an operator is applied to the wrong type of value, JS will convert the value to the type it needs, it's called "TYPE COERCION"
// When something that does not map to a number in an obvious way (like "five" or undefined) it's converted to an actual number.
// When comparing values of the same type when using "==", the outcome is easy: TRUE if they're the same, FALSE if they're non. Unless it's NaN, then it's false.
// when null or undefined occurs on either side of the operator, it produces true only if both sides are null or undefined. 
console.log(null == undefined); 
// returns true 
console.log(null == 0); 
// returns false

// The double equals operator (==) tries to perform type conversion if the types differ and then compare for equality. If the types differ, either or both operands are first converted to a common type. 
// The triple equals operator (===) returns true if both operands are of the same type and contain the same value. If comparing different types for equality, the result is false.

//? Short-circuiting of logical operators
console.log("lol" || "user");
// will return "lol", the || operator will always return the value on the left ONLY if it has a value.. 
console.log(null || "user"); 
// returned user, "null" = nothing.
// basically, this will always choose the left side value, unless the left side has no value
console.log("" || "this returned, cause the value on the left was not even a value");

// && operator works other way around 
console.log(null && "user")
// returns null because the left value is false, in the && operator, it will always return the one with 0 value/false 
// but if the left and right both have a value, it will always return the value on the left
 