console.log('hello world');

// single-line comment

/*
multi-
line
comment
*/

// introducing the keyword `var`
// also assignment syntax
var myAge = "29";

// console (an `object`)
// .log() (a `function` on that object)
// myAge (a `argument`/`parameter` to that function)
console.log(myAge);

// types
// number
var num = 12354;
num = 12.34;
console.log(typeof 12.34);
console.log(typeof num);

var str = "a string";
console.log("asdf");
console.log(typeof str);

var boolean = true;
boolean = false;

var obj = {};
obj = {
    myAgeProp: myAge, // <- a variable
    someStringProp: "asfdkjh" // <- a string literal
};
console.log(obj);
console.log(typeof obj)

var array = [];
array = ["a", "b", "c", true, 1234, obj];
console.log(array);
console.log(typeof array);

// boolean negation operator
var dogIsBarking = true;
console.log(dogIsBarking);
var dogIsNotBarking = !dogIsBarking;
console.log(dogIsNotBarking);
