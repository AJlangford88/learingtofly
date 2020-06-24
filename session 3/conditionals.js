// Conditional logic

// accompanying resource: https://javascript.info/ifelse

// if / else else/if

/* 3 cond. for Turing completeness of a programming lang:
* R/W Variables
* Conditional Logic
* Control Loops
*/

// cond. logic powered by boolean

var b = true;
var c = false;

// operator

// Inclusive OR operator ||

// a is boolean
// b is boolean
// returns a boolean
function Or(a, b) {
	/*
	if (a == true)
		return true;

	if (b == true)
		return true;

	return false;
	*/
}

var d = b || c;

console.log(d);


// AND operator &&

function And(a, b) {
	/*
		if (a == true) {
			if (b == true) {
				return true;
			}
		}
		return false;
	*/
}

// what will this print?
console.log(b && d);


// Negation operator !
function Negate(a) {
	/*
	if (a == true)
	{
		return false;
	}

	return true;
	*/
}


var e = true;

console.log(!e);

var shouldShowButtonToUser = false;

// practical usage of negation operator
/*
function controlPanel(shouldShowButtonToUser) {
	if (!shouldShowButtonToUser)
		return null;

	return (
		<button>{'Fire the missile!'}</button>
	)
}
*/

// Exclusive OR operator XOR: ^

function XOR(a, b) {
	if (a == true) {
		if (b == false) {
			return true;
		}
	}

	if (b == true) {
		if (a == false) {
			return true;
		}
	}

	return false;
}

var a = true;
var b = false;

// what will this output?
console.log(a ^ b);

// non-short-circuiting operators | &

// if (checkIfItsRainingOutside(98225) & checkIfItsColdOutside(98225) & checkIfTheSunIsDown(98225)) {
// 	// do something
// }

var string = 'asdf';
var string2 = 'fasd';

// equality operator produces a boolean value

// if ()
// {
// 	// 
// }


function shouldWearACoat(isRaining, isCold) {
	if (isRaining == true) {
		return true;
	}

	if (isRaining) {
		return true;
	}

	if (isCold) {
		return true;
	}

	return false;
}

function shouldWearACoat(isRaining, isCold) { isRaining || isCold };

var shouldIWearACoat = shouldWearACoat(true, false);

console.log(shouldIWearACoat);

// else keyword
var currentDate = new Date();

if (currentDate.getHours() > 22) {
	console.log("it's after 10 and getting LATE");
} else {
	console.log("it's before 10");
}


// else if

if (false) {
	console.log("false");
} else if (b) {
	var q = "asdf";
	console.log("b is true");
} else if (a) {
	console.log("a is true");
} else {
	console.log("neither is true")
}

console.log(q);

function doSomething() {

}

function doSomething2(a, b) {
	var asdf = "asdf";

	return a || b;

	console.log("asfd");
}

var lkjh = doSomething2(true, false);

function GetAreaOfASquare(length, width) {
	return length * width;
}

// <expression1> ? <expression2> : <expression3>;



function shouldWearACoat2(isRaining, isCold) { 
	return isRaining
		? true
		: isCold
			? true
			: false;
};

