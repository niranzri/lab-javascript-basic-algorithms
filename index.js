// Iteration 1: Names and Input

let hacker1 = 'Noelia';
console.log(`The driver's name is ${hacker1}.`);
let hacker2 = 'Josip';
console.log(`The navigator's name is ${hacker2}.`);


// Iteration 2: Conditionals

const driverLength = hacker1.length;
const navigatorLength = hacker2.length;

if (driverLength > navigatorLength) {
  console.log(`The driver has the longest name, it has ${driverLength} characters.`);
} else if (driverLength < navigatorLength) {
  console.log(`It seems that the navigator has the longest name, it has ${navigatorLength} characters.`);
} else if (driverLength == navigatorLength){
  console.log(`Wow, you both have equally long names, ${driverLength} characters!`);
}


// Iteration 3: Loops

// Iteration 3.1. 

const driverNameCapital = hacker1.toUpperCase();
let driverNameSpace = "";
for (let i=0; i< driverNameCapital.length; i++) {
  driverNameSpace += driverNameCapital[i] + " ";
}

console.log(driverNameSpace);

// Iteration 3.2. 
let nagivatorNameReversed = "";
for (let i = navigatorLength - 1; i >= 0; i--) {
  nagivatorNameReversed += hacker2[i];
}

console.log(nagivatorNameReversed);

// Iteration 3.3. with in-built function .localeCompare()

if (hacker1.localeCompare(hacker2) < 0) {
  console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) > 0) {
  console.log("Yo, the navigator goes first, definitely.");
} else if (hacker1.localeCompare(hacker2) = 0) {
  console.log("What?! You both have the same name?");
}

// Iteration 3.3. with objects (bonus for myself to practice)
let alphabet = "abcdefghijklmnopqrstuvwxyz";
let letterToNumber = {};

for(let i = 0; i < alphabet.length; i++) {
    letterToNumber[alphabet[i]] = i + 1;
}

let shortestName = findShortestName(hacker1, hacker2, driverLength, navigatorLength);

let arrayHacker1 = [];
let arrayHacker2 = [];
let arrayLetters = Object.keys(letterToNumber);
let arrayNumbers = Object.values(letterToNumber);
hacker1 = hacker1.toLowerCase();
hacker2 = hacker2.toLowerCase();
let i = 0;
while (i < shortestName.length) { 
  for (let j=0; j< arrayLetters.length; j++){ // 
    if (hacker1[i] === arrayLetters[j]) {
      arrayHacker1[i] = arrayNumbers[j];
    }
    if (hacker2[i] === arrayLetters[j]) {
      arrayHacker2[i] = arrayNumbers[j];
    }
  }
  i += 1;
}

let k = 0;
let comparisonOngoing = true;
while (comparisonOngoing) {
  if (arrayHacker1[k] < arrayHacker2[k]){
    console.log("The driver's name goes first.");
    comparisonOngoing = false;
  } else if ((arrayHacker1[k] > arrayHacker2[k])) {
    console.log("Yo, the navigator goes first, definitely.");
    comparisonOngoing = false;
  } else {
    console.log("What?! You both have the same name?");
    comparisonOngoing = false;
  }
  k += 1;
}

function findShortestName (driver, navigator, driverNameLength, navigatorNameLength) {
  if (driverNameLength < navigatorNameLength) {
  return driver;
  } else if (driverNameLength > navigatorNameLength) {
  return navigator;
  } else if (driverNameLength == navigatorNameLength){
  return driver;
  }
}


// Bonus 1 - Lorem Ipsum

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu neque a lectus laoreet tempor. Cras ut aliquet est, at pulvinar nisi. Donec a ornare dui. Vestibulum tellus libero, eleifend in ex ac, fringilla pulvinar metus. Integer ipsum lorem, dapibus non ipsum quis, vehicula congue quam. Quisque lobortis ac augue at ultrices. Mauris placerat nunc et mauris facilisis, sit amet condimentum eros elementum. Vivamus egestas nibh luctus ante viverra hendrerit. Mauris sapien nulla, commodo non mi ac, aliquet euismod lorem.

Proin nec eros maximus, porttitor mauris sit amet, mattis ligula. Pellentesque sed convallis elit. Mauris nec aliquam dui. Etiam tempor cursus massa, venenatis blandit nibh ullamcorper at. Sed ullamcorper tincidunt mauris, sit amet laoreet est rhoncus sed. Donec ultricies augue sit amet purus maximus sollicitudin. Donec pretium libero in consectetur mattis. Morbi ullamcorper sit amet urna non volutpat. Proin purus lectus, sagittis nec ligula sed, tristique sodales magna. Cras tempor lorem sed orci accumsan, eget dapibus justo euismod. Nulla vehicula aliquam odio quis sagittis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque mattis risus lorem, ut mollis sem dapibus nec. Curabitur sodales libero non efficitur hendrerit. Nam pretium massa ante, vitae ornare metus ullamcorper ac.

Nullam eu quam turpis. Nam ornare facilisis nisi. Curabitur eget lobortis dui. Curabitur fringilla eu lacus vel interdum. Quisque mollis iaculis sagittis. Vivamus hendrerit ex felis, eu ornare diam viverra sed. Mauris tristique leo eget arcu vehicula dignissim id ac sem. Pellentesque consectetur at justo non facilisis. Sed fringilla risus dapibus congue convallis. Proin pretium dui non vehicula rhoncus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam rhoncus sodales interdum. In hac habitasse platea dictumst. Nunc at augue sem.`

let words = longText.split(/\W+/); // \W* ignores any non-word character. To exclude particular characters one might use: [ ,.]
console.log(words);
let wordCount = words.length;
console.log(`The text has ${wordCount} words.`);

let etCount = 0;
for (let i=0; i < wordCount; i++){
  if (words[i] == "et") {
    etCount += 1;
  }
}

console.log(`The word 'et' appears ${etCount} times in the text.`);



// Bonus 2 - Palindromes

const phraseToCheck = "A man, a plan, a canal, Panama!";
const phraseSplit = phraseToCheck.split(/\W+/).filter(Boolean); // filter(Boolean) filters any empty strings from the array after splitting. 
let phraseNoSpaces = "";
for (let i=0; i < phraseSplit.length; i++) {
  phraseNoSpaces += phraseSplit[i];
}

const palindrome = phraseNoSpaces.toLowerCase();
const palindromeLength = palindrome.length;
const palindromeHalfLength = Math.floor(palindromeLength/2);

let isPalindrome = true;
let j = palindromeLength - 1;
for (let i=0; i < palindromeHalfLength; i++) {
    if (palindrome[i] !== palindrome[j]) {
      isPalindrome = false;
    }
    // console.log(`This is iteration no. (i,j) = ${i} ${j}, with values ${palindrome[i]}, ${palindrome[j]}.`); // print to check whether it is indeed a palindrome.
    j -= 1;
}

if (isPalindrome == true) {
  console.log(`${phraseToCheck} is a palindrome.`);
} else {
  console.log(`${phraseToCheck} is NOT a palindrome.`);
}
