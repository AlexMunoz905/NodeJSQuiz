/*
Name: Alex Munoz
Age: 12
Site: http://napend.com
Work Email: alex@napend.com
Personal Email: alex.munoz905@gmail.com
Description: This is a quiz on Alex Munoz
*/


// Calls the prompt NPM
var prompt = require('prompt');

//Starts Prompt
prompt.start();

//Asks the age and name
prompt.get(['FirstName', 'Age', 'AlexsFavLang', 'AlexsLeastLang', 'DidYouLikeTheQuiz'], function (err, result) {

//Varible for the result
var MFL = result.AlexsFavLang;
if(MFL === "Html"){
  console.log("Correct");
}else{
   console.log("False");
}

//Varible for the result
var LL = result.AlexsLeastLang;
if(LL === "Ruby"){
  console.log("Correct");
}else{
   console.log("False");
}

//Varible for the result
var DYLI = result.DidYouLikeTheQuiz;
if(DYLI === "Yes"){
  console.log("Thanks!");
}else{
   console.log("Well im improving");
}

//Varible for the users name
var fname = result.FirstName
console.log("Thanks for playing " + fname + "!");
});
