const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

let simplePointStructure = {
  1: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
};

let vowelPointStructure = {
  1: ['B','C','D','F','G','H','J','K','L','M','N','P','Q','R','S','T','V','W','X','Z'],
  3: ['A', 'E', 'I', 'O', 'U', 'Y'],
};


function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   console.log("Let's play some scrabble!");
   word=input.question("Enter a word to score: ");
};

let simpleScore=function simpleScore(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in simplePointStructure) {
 
		 if (simplePointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 };

let vowelBonusScore=function vowelBonusScore(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in vowelPointStructure) {
 
		 if (vowelPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 };



let scrabbleScore=function scrabbleScore(word) {
	word = word.toLowerCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
		 if (word.charAt(i)) {
			letterPoints += `Points for '${word[i]}': ${newPointStructure[word.charAt(i)]}  \n`
		 }
	}
	return letterPoints;
 };

const scoringAlgorithms = [
  {
    name: "Simple Score",
    description: "Each letter is worth 1 point.",
    scorerFunction: simpleScore
  },

    {
    name: "Bonus Vowels",
    description: "Vowels are 3 pts. and consonants are 1 pt.",
    scorerFunction: vowelBonusScore
  },

    {
    name: "Scrabble",
    description: "The traditional scoring algorithm.",
    scorerFunction: scrabbleScore
  }
];

function scorerPrompt() {
    console.log("Which scoring algorithm would you like to use?")
      for (i=0;i<scoringAlgorithms.length;i++)
      {
console.log(i+" - "+scoringAlgorithms[i].name+ ": " +scoringAlgorithms[i].description);
      }
      userInput=input.question("Enter 0, 1, or 2: ");
      console.log(scoringAlgorithms[userInput].scorerFunction(word))
}

newPointStructure={}

function transform(oldPointStructure) {
for (items in oldPointStructure[1]){
  newPointStructure[oldPointStructure[1][items].toLowerCase()] = "1"
}
for (items in oldPointStructure[2]){
  newPointStructure[oldPointStructure[2][items].toLowerCase()] = "2"
}
for (items in oldPointStructure[3]){
  newPointStructure[oldPointStructure[3][items].toLowerCase()] = "3"
}
for (items in oldPointStructure[4]){
  newPointStructure[oldPointStructure[4][items].toLowerCase()]= "4"
}
for (items in oldPointStructure[5]){
  newPointStructure[oldPointStructure[5][items].toLowerCase()] = "5"
}
for (items in oldPointStructure[8]){
  newPointStructure[oldPointStructure[8][items].toLowerCase()] = "8"
}
for (items in oldPointStructure[10]){
  newPointStructure[oldPointStructure[10][items].toLowerCase()] = "10"
}
   return newPointStructure
};

newPointStructure=transform(oldPointStructure)

function runProgram() {
   initialPrompt();
   scorerPrompt();

}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};