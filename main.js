let Phrase = require("bartosz_palindrome");

function palindromeTester() {
  console.log('xd')
  let string = prompt("Please enter a string for palindrome testing:");
  let phrase = new Phrase(string);
  let palindromeResult = document.querySelector("#palindromeResult");

  if (phrase.palindrome()) {
    palindromeResult.innerHTML = `"${phrase.content}" is a palindrome!`;
  } else {
    palindromeResult.innerHTML = `"${phrase.content}" is not a palindrome.`; 
  }
}

document.addEventListener("DOMContentLoaded", function() {
  let button = document.querySelector("#palindromeTester");

  button.addEventListener("click", function() {
    palindromeTester();
  });
});