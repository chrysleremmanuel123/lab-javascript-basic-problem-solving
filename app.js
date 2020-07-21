// Important Note - No Built-in functions to be used
// Progression 1: Names and Input

// 1.1 Create a variable `ProGrad-1` with the driver's name.
var driverName = "mayank";
// 1.2 Print `"The driver's name is XXXX"`.
console.log(driverName);
// 1.3 Create a variable `ProGrad-2` with the navigator's name.
var navigatorName = "Chrysler"
// 1.4 Print `"The navigator's name is YYYY"`.
console.log(navigatorName);

// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.
if (driverName.length > navigatorName.length) {
    console.log("The driver has the longest name,it has " + driverName.length + " characters");
}
else if (navigatorName.length > driverName.length) {
    console.log("It seems that the navigator has the longest name,it has " + navigatorName.length + " characters");
}
else if (navigatorName.length == driverName.length) {
    console.log("Wow you both have equally long names, " + navigatorName.length + " characters");
}

// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the name, and also print the vowel letters along with the vowel index. or
// - print no vowels
// - for example. In String ProGrad - o and a are vowels. Print ProGrad o a 2 5. 
function getVowels(str) {
    var vowelsCount = 0;

    //turn the input into a string
    var string = str.toString();

    //loop through the string
    for (var i = 0; i <= string.length - 1; i++) {

        //if a vowel, add to vowel count
        if (string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u") {
            vowelsCount += 1;
            console.log(string.charAt(i));
        }
    }
    return vowelsCount;
}
console.log(getVowels(navigatorName));
console.log(getVowels(driverName));
// 2.3. Check if the string contains uppercase and lowercase characters Xx
function upper_case(str) {
    regexp = /[A-Z]/;
    if (regexp.test(str)) {
        console.log("String contains uppercase characters");
    }
    else {
        console.log("String does not contain uppercase characters");
    }
}
upper_case(navigatorName);
upper_case(driverName);

// - Print the number of upper case characters
function count(str) {

    var numUpper = (str.match(/[A-Z]/g) || []).length;
    console.log(numUpper);
}
count(navigatorName);
count(driverName);
// - Print the number of lower case characters
function count(str) {

    var numUpper = (str.match(/[a-z]/g) || []).length;
    console.log(numUpper);
}
count(navigatorName);
count(driverName);

// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "ProGrad"
var res = driverName.split("");
console.log(res);
console.log(res.join(" "));
// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "darGorP"
function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString(navigatorName));
// 3.3 Merge both the characters such that driver is followed by Navigator like "ProGrad FACEPrep"
var result = driverName.concat(navigatorName);
console.log(result);
// - Now bring the FACEPrep to the start and send ProGrad to the back like "FACEPrep ProGrad"
var result1 = navigatorName.concat(driverName);
console.log(result1);
// 3.3 Depending on the lexicographic order of the strings, print:
function strcmp(navigatorName, driverName) {
    if (navigatorName === driverName) {
        console.log("What?! You both have the same name?");
    }
    else if (navigatorName > driverName) {
        console.log("Yo,the navigator goes first definitely");
    }
    else if (driverName > navigatorName) {
        console.log("The driver goes first");
    }
}
console.log(strcmp(driverName, navigatorName));
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?

// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.
// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".

// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin' 
