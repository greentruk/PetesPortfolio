$(document).ready(function () {

    $("#mybutton").click(function (event) {
        event.preventDefault();
        /* Get input value */
        var myvalue1 = parseInt($("#myvalue1").val());
        var myvalue2 = parseInt($("#myvalue2").val());
        var myvalue3 = parseInt($("#myvalue3").val());
        var myvalue4 = parseInt($("#myvalue4").val());
        var myvalue5 = parseInt($("#myvalue5").val());
        /* Pass value into array */
        var myArr = [];
        myArr.push(myvalue1);
        myArr.push(myvalue2);
        myArr.push(myvalue3);
        myArr.push(myvalue4);
        myArr.push(myvalue5);

        console.log(myArr);

        var minOutput = Math.min.apply(Math, myArr);
        $("#minOutput").append(minOutput);

        console.log(minOutput);

        var maxOutput = Math.max.apply(Math, myArr);
        $("#maxOutput").append(maxOutput);

        var mean = 0;
        for (var i = 0; i < myArr.length; i++) {
            mean = mean + myArr[i];
        }
        mean = mean / myArr.length;
        $("#avgOutput").append(mean);

        var sum = 0;
        for (var i = 0; i < myArr.length; i++) {
            sum = sum + myArr[i];
        }
        $("#sumOutput").append(sum);

        var product = 1;
        for (var i = 0; i < myArr.length; i++) {
            product = product * myArr[i];
        }
        $("#productOutput").append(product);
    })
})

// ***  EXCERCISE 2  ***
$("#userButton").click(function (event) {
    event.preventDefault();
    var userInput = parseInt($("#userInput").val());
    for (var i = userInput - 1; i > 0; i--) {
        userInput = userInput * i;
    }
    console.log(userInput)
    $("#factorialOutput").append(userInput);
});

// ***  EXCERCISE 3 FIZZ BUZZ ***

$("#fbbutton").click(function (event) {
    event.preventDefault();
    var fbInputOne = document.getElementById("fbInput1").value;
    var fbInputTwo = document.getElementById("fbInput2").value;
    var fbOutput = "";
    fbOutput = $("#fbResult").append("The result is ");

    for (var i = 1; i <= 100; i++) {
        if ((i % fbInputOne === 0) && (i % fbInputTwo == 0)) {
            fbOutput = $("#fbResult").append('<span style="color: red; font-weight: bold">FizzBuzz</span>');
        }
        else if (i % fbInputOne == 0) {
            fbOutput = $("#fbResult").append('<span style="color: blue; font-weight: bold">Fizz</span>');
        }
        else if (i % fbInputTwo == 0) {
            fbOutput = $("#fbResult").append('<span style="color: green; font-weight: bold">Buzz</span>');
        }
        else {
            fbOutput = $("#fbResult").append('<span style="font-weight: bold">', i);
        }
    }
});


// ***  EXCERCISE 4 PALINDROME ***
var palInput = $("#palInput").val().toLowerCase();
palInput = palInput.replace(/[^[abc],[0-9]+/g, '');

function runPalindrome(word) {
    $("#outputOne").val(word.split("").reverse().join(""));
    if ($("#outputOne").val() == word) {
        $("#outputTwo").val("Yes");
    }
    else {
        $("#outputTwo").val("No");
    }
};

