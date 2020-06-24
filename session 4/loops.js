console.log('loops');

/*
while loops

syntax:

while (true) {
	console.log('still true')
}

*/

while (true) {
	console.log("we're in the loop");

	break;

	console.log("after break");
}

console.log("after the first while loop");

let shouldLoop = true;
while (shouldLoop) {
	console.log("we're in the loop");
	shouldLoop = false;
}

console.log("after the second while loop");


const wallet = {
	dollarBills: [1, 1, 1, 1, 5, 5, 20, 20, 20, 2, 2, 2, 2, 2, 2, 100, 100, 100]
}

let billNumber = 0;
let sum = 0;
while (billNumber < wallet.dollarBills.length) {
	const currentBill = wallet.dollarBills[billNumber];
	sum = sum + currentBill;
	billNumber = billNumber + 1;
}

console.log("total sum: " + sum);
console.log(`number of bills: ${billNumber}`);

// pick out all of the hundred-dollar bills out of the wallet

const hundos = [];

// const a375490r8 = 100;

// hundos.push(a375490r8)

// console.log(hundos);

var index = 0;
while (index < wallet.dollarBills.length) {
	const bill = wallet.dollarBills[index];

	if (bill == 100)
		hundos.push(bill);

	index = index + 1;
}

console.log(hundos);
