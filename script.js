// // Functions
// function chickenMonkey() {
//     for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
//         // Divide the current number by 2, and check if the remainder is 0
//         if (currentNumber % 5 === 0 && currentNumber % 7 ===0) {
//             console.log("Chickenmonkey")
//         }
//         else if (currentNumber % 5 === 0) {
//             console.log("Chicken") // Only 2, 4, 6 will appear
//         }
//         else if (currentNumber % 7 === 0) {
//             console.log("Monkey")
//         }
//         else {
//             console.log(currentNumber)
//         }
//     }
// }

// chickenMonkey();

// // Return Band Name with Number 
// let bandNumber = 1

// const takeNumber = function (bandName) {
//         return bandName + bandNumber++
// }

// const scum = takeNumber("Galactic Scum")
// console.log(scum)  // This should print "1. Galactic Scum" in the console

// const under = takeNumber("Underdogs")
// console.log(under)  // This should print "2. Underdogs" in the console



// // Practice Cookout:Your task is to iterate over the array of foods and invoke the function for each item so that the cookedFood array contains all of the items after they are cooked.
// const hamburger = {
// 	name: 'Hamburger',
// 	type: 'beef',
// 	cooked: false,
// }
// const zucchini = {
// 	name: 'Zucchini',
// 	type: 'vegetable',
// 	cooked: false,
// }
// const chickenBreast = {
// 	name: 'Chicken Breast',
// 	type: 'chicken',
// 	cooked: false,
// }
// const corn = {
// 	name: 'Corn',
// 	type: 'vegetable',
// 	cooked: false,
// }
// const steak = {
// 	name: 'Steak',
// 	type: 'beef',
// 	cooked: false,
// }

// // An array that is grouping the objects together.
// const foods = [hamburger, zucchini, chickenBreast, corn, steak];

// // An empty array that will store the objects after the `grill()` function cooks the food.
// const cookedFood = [];

// function grill (currentObject) {
//     // Modify the food so that it is cooked
//     currentObject.cooked = true;

//     // Put the cooked food into the appropriate array
//     cookedFood.push(currentObject);
// };


// for (let i = 0; i < foods.length; i++) {
//     grill(foods[i]);
//     console.log(cookedFood)
// }

// // Overly Excited: make function that console sentence

// function addExcitement (){
//     console.log("Hello!")
// }

// addExcitement();



// Stacking words
// Create an array that contains the words in the sentence
let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
function addExcitement (theWordArray) {

    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {
        // Concatenate the new word onto buildMeUp
        buildMeUp += theWordArray[i] + " ";
        // Print buildMeUp to the console
        console.log(buildMeUp)
    }

}

// Invoke the function and pass in the array
addExcitement(sentence)


// // Add logic to addExcitement that places an exclamation point (!) after every third word. 
// // Read the following English statement and write the equivalent in JavaSript code to make it work.
// let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

// function addExcitement (theWordArray, punctuation, num) {
//     let buildMeUp = ""
//     let properPlace = 0
//     let punctuationAll = ""
//     for (let i = 0; i < num; i++){
//         punctuationAll += punctuation
//     }
//     for (let i = 0; i < theWordArray.length; i++) {
//         properPlace++;
//         if (properPlace % 3 === 0) {
//             buildMeUp += theWordArray[i] + punctuationAll
//         }
//         else {
//             buildMeUp += theWordArray[i] + " "
//         }
//         console.log(buildMeUp);
//         /*
//             If the current value of `i` divided by 3 has no
//             remainder, add an exclamation point to the end of
//             the word and then concatenate it to `buildMeUp`.

//             Otherwise, just concatenate the word itself.
//          */


//         // Print buildMeUp to the console
//     }

// }

// addExcitement(sentence, "?", 4)

