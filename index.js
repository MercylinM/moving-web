// quesstion 1
let word = "extravaganza";
let lastFour = word.slice(-4);
console.log(lastFour);

// question 2
let food = "The quick fox jumped over the lazy dog";
let modifiedFood = food.slice(0, 4) + "eat" + food.slice(4);
console.log(modifiedFood);

// question 3
const story = "The quick brown fox jumps over the lazy dog";
let theCount = story.toLowerCase().split("the").length - 1;
let brownCount = story.toLowerCase().split("brown").length - 1;
console.log(`"the" appears ${theCount} times`); 
console.log(`"brown" appears ${brownCount} times`); 

// question 4
const string1 = "The pupils are reading in the library";
const string2 = "The child was sitting on the table before it fell";
console.log(string1.includes("are")); 
console.log(string2.includes("sitting")); 

// question 5
let upperCaseWord = "wonderful".toUpperCase();
console.log(upperCaseWord); 

let lowerCaseWord1 = "amazing".toLowerCase();
let lowerCaseWord2 = "UndERneath".toLowerCase();
console.log(lowerCaseWord1); 
console.log(lowerCaseWord2); 

let titleCaseWord = "A wonderful world"
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
console.log(titleCaseWord); 