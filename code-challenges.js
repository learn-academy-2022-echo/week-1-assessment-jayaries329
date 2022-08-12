// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.

// Pseudo code:

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"


// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

// Pseudo code:
// Take an input number
// Use a conditional statement to compare input numbers to temperature 212 degrees
//  Return string statements to describe results

const temp1 = 42
const temp2 = 350
const temp3 = 212

const boilChecker = (temp) => {
 if (temp < 212) {
    return `"${temp} is below boiling point"`}
 else if (temp > 212) {
    return `"${temp} is above boiling point"`}
 else  (temp === 212) ;{
    return `"${temp} is at boiling point"`}
}
console.log(boilChecker())

// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

// Pseudo code:
// Take an input of two arrays
// Use built-in array methods to combine arrays and count length of the combination
// Return the result


const myNumbers1 = [3, 7, 0, 36, -9]
const myNumbers2 = [8, -7, 42, 9, 13]
const myNumbers3 = (myNumbers1.concat(myNumbers2))
console.log(myNumbers3.length)



// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "2202 ohcE"

// Pseudo code:
// Input string
// Use built-in methods to reverse order of values in the string
// Return the result

const currentCohort = "Echo 2022"

 console.log(currentCohort.split('').reverse().join(''))

// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

// Pseudo code:
// Input array
// Use a loop to determine even or odd status for each value in the array
// Return the result of each determination

const myArray = [13, 34, 5, 10, 27, 42]

 for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] % 2 === 1) {
        console.log("odd")
    } else if (myArray[i] % 2 === 0) {
        console.log("even");
    }
 }


// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3

// Pseudo code:
// Input two numbers
// Use a subtraction function that subtracts the smaller number from the larger number of those two numbers
// Return the result of the calculation

// Set one:
const number1 = 58
const number2 = 100

// Set two:
const number3 = 27
const number4 = 24

 const numSub = (numOne, numTwo) => {return numOne - numTwo}

 console.log(numSub(number2, number1))
 console.log(numSub(number3, number4))

