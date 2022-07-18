/*
 * Author: 	Ivan Talijancic
 * file:	tpc-1.js
 * version: v1.0.0
 * content:	Program to test if a given number is a primer number
 * date:	18/07/2022
 */

// Function to check if a given number is a prime number
function isPrime(num) {

	if (num <= 1) return false

	for ( let i = 2; i <= num; i ++ ) {
		if ( num%i == 0) {
			if ( i != num ) {
				return false
			}
		}
	}

	return true
}

// Loop for the user, to enter number to test
let num = parseInt(prompt('Insert a number to test (only integers numbers or press any letter to end): '))

while ( !isNaN(num) ) {
	if (isPrime(num)) {
		console.log(`The input number ${num} is a prime number`)
	} else {
		console.log(`The input number ${num} is not a prime number`)
	}
	num = parseInt(prompt('Insert a number to test (only integers numbers or press any letter to end): '))
}