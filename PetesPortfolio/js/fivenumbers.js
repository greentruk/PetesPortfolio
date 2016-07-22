
function minFunction() {

	var firstNum = document.getElementById("first").value;
	var secondNum = document.getElementById("second").value;
	var thirdNum = document.getElementById("third").value;
    var fourthNum = document.getElementById("fourth").value;
    var fifthNum = document.getElementById("fifth").value;
   minOutput.textContent ="The SMALLEST number is " + Math.min(firstNum, secondNum, thirdNum, fourthNum, fifthNum);
}
function maxFunction() {

	var firstNum = document.getElementById("first").value;
	var secondNum = document.getElementById("second").value;
	var thirdNum = document.getElementById("third").value;
    var fourthNum = document.getElementById("fourth").value;
    var fifthNum = document.getElementById("fifth").value;
   maxOutput.textContent ="The LARGEST number is " + Math.max(firstNum, secondNum, thirdNum, fourthNum, fifthNum);
   
}
function avgFunction() {

	var firstNum = document.getElementById("first").value;
	var secondNum = document.getElementById("second").value;
	var thirdNum = document.getElementById("third").value;
    var fourthNum = document.getElementById("fourth").value;
    var fifthNum = document.getElementById("fifth").value;
    var resultMean = parseInt(firstNum) + parseInt(secondNum) + parseInt(thirdNum) + parseInt(fourthNum) + parseInt(fifthNum)/parseInt(5);
   avgOutput.textContent ="The MEAN of the five numbers is " + resultMean;
   
}
function sumFunction() {

	var firstNum = document.getElementById("first").value;
	var secondNum = document.getElementById("second").value;
	var thirdNum = document.getElementById("third").value;
    var fourthNum = document.getElementById("fourth").value;
    var fifthNum = document.getElementById("fifth").value;
    var resultSum = parseInt(firstNum) + parseInt(secondNum) + parseInt(thirdNum) + parseInt(fourthNum) + parseInt(fifthNum);
   sumOutput.textContent ="The SUM of the five numbers is " + resultSum;
   
}
function productFunction() {

	var firstNum = document.getElementById("first").value;
	var secondNum = document.getElementById("second").value;
	var thirdNum = document.getElementById("third").value;
    var fourthNum = document.getElementById("fourth").value;
    var fifthNum = document.getElementById("fifth").value;
    var resultProd = firstNum * secondNum * thirdNum * fourthNum * fifthNum;
   productOutput.textContent ="The PRODUCT of the five numbers is " + resultProd;
   
}

// ***  EXCERCISE 2  ***
$("#mybutton").click(function(event) {
  event.preventDefault();
var userInput =parseInt($("#userInput").val());
for (var i = userInput-1; i > 0; i--) {
    userInput = userInput * i;
    }
    console.log(userInput)
     $("#factorialOutput").append(userInput);
});	

// ***  EXCERCISE 3 FIZZ BUZZ ***

$("#fbbutton").click(function(event) {
  event.preventDefault();
var fbInputOne =document.getElementById("fbInput1").value;
var fbInputTwo =document.getElementById("fbInput2").value;
var fbOutput;
    for (var i = 1; i <= 100; i++) {
        if ((i % fbInputOne === 0) && (i % fbInputTwo == 0)) {
            $("#fbResult").append("FizzBuzz<br>");
        }
        else if (i % fbInputOne == 0) {
            $("#fbResult").append("Fizz<br>");
        }
        else if (i % fbInputTwo == 0) {
            $("#fbResult").append("Buzz<br>");
        }
        else {
            $("#fbResult").append(i + "<br>"); 
        }
    }
   
});


// ***  EXCERCISE 4 PALINDROME ***
var palInput =($("palInput").val());
function runPalindrome(word) {
            $("#outputOne").val(word.split("").reverse().join(""));
            if ($("#outputOne").val() == word)
            {
                $("#outputTwo").val("Yes");
            }
            else
            {
                $("#outputTwo").val("No");            
            }
        };

