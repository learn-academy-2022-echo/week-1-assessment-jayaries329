// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:


// --------------------1) What will this log?

const cohort = "LEARN 2022"
// console.log(cohort.length)

// a) Your answer:
// 10 
// b) Verify and explain:
// Because .lenth returns the total number of elements by index and it's the last index plus 1.

// --------------------2) What will this log?

const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer:
// o
// b) Verify and explain:
// Inputting in an argument of 4 specifies which index in the string to reference.

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
//console.log(languages[index])

// a) Your answer:
// "Ruby"
// b) Verify and explain:
// The variable index contains the number 1, so using that variable as the argument is the same as inputting a 1 into the argument to reference that particular index of the array.


// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer:
// "SATURDAY", "SUNDAY"
// b) Verify and explain:
// toUpperCase is a method that converts elements to upper case

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean"]
// console.log(typeof dataTypes.length)

// a) Your answer:
// number
// b) Verify and explain:
// Since .length will return a number value, typeof will recognize that return value as such and give it the type "number".