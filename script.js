$(document).ready(function(){
    var score = 0;

    $("#js1").one("click", function() {
        var input = window.prompt("JavaScript for $100:\nInside which HTML element do we put the JavaScript?");
        if(input == "script" || input == "Script") {
            score += 100;
            alert("That's Correct!");
            scoreOut = "Score: $" + score.toString();
            document.getElementById("score").innerHTML = scoreOut;
        }
        else {
            alert("Wrong.");
        }
        $(this).css( {"background-color" : "lightsalmon"});
    });

    $("#js2").one("click", function() {
        var input = window.prompt("JavaScript for $200:\nTrue or False: The external JavaScript file must contain the script tag.");
        if(input == "False" || input == "false" || input == "F" ||input ==  "f") {
            score += 200;
            alert("That's Correct!");
            scoreOut = "Score: $" + score.toString();
            document.getElementById("score").innerHTML = scoreOut;
        }
        else {
            alert("Wrong.");
        }
        $(this).css( {"background-color" : "lightsalmon"});
    });

    $("#js3").one("click", function() {
        var input = window.prompt("JavaScript for $300:\nWhich event occurs when the user clicks on an HTML element?");
        if(input == "onclick") {
            score += 300;
            alert("That's Correct!");
            scoreOut = "Score: $" + score.toString();
            document.getElementById("score").innerHTML = scoreOut;
        }
        else {
            alert("Wrong.");
        }
        $(this).css( {"background-color" : "lightsalmon"});
    });

    $("#jq1").one("click", function() {
        var input = window.prompt("jQuery for $100:\nWhat scripting language is jQuery written in?");
        if(input == "JavaScript" || input == "javascript" || input == "Java Script" ||input ==  "Java script" ||input ==  "Javascript") {
            score += 100;
            alert("That's Correct!");
            scoreOut = "Score: $" + score.toString();
            document.getElementById("score").innerHTML = scoreOut;
        }
        else {
            alert("Wrong.");
        }
        $(this).css( {"background-color" : "lightsalmon"});
    });

    $("#jq2").one("click", function() {
        var input = window.prompt("jQuery for $200:\nWhich sign does jQuery use as a shortcut for jQuery?");
        if(input == "$") {
            score += 200;
            alert("That's Correct!");
            scoreOut = "Score: $" + score.toString();
            document.getElementById("score").innerHTML = scoreOut;
        }
        else {
            alert("Wrong.");
        }
        $(this).css( {"background-color" : "lightsalmon"});
    });

    $("#jq3").one("click", function() {
        var input = window.prompt("jQuery for $300:\nTrue or False: jQuery works together with AJAX.");
        if(input == "True" || input == "true" || input == "T" ||input ==  "t") {
            score += 300;
            alert("That's Correct!");
            scoreOut = "Score: $" + score.toString();
            document.getElementById("score").innerHTML = scoreOut;
        }
        else {
            alert("Wrong.");
        }
        $(this).css( {"background-color" : "lightsalmon"});
    });

    $("#bs1").one("click", function() {
        var input = window.prompt("Bootstrap for $100:\nTrue or False: Bootstrap 3 is mobile-first.");
        if(input == "True" || input == "true" || input == "T" ||input ==  "t") {
            score += 100;
            alert("That's Correct!");
            scoreOut = "Score: $" + score.toString();
            document.getElementById("score").innerHTML = scoreOut;
        }
        else {
            alert("Wrong.");
        }
        $(this).css( {"background-color" : "lightsalmon"});
    });

    $("#bs2").one("click", function() {
        var input = window.prompt("Bootstrap for $200:\nThe Bootstrap grid system is based on how many columns?");
        if(input == "12" || input == "twelve" || input == "Twelve") {
            score += 200;
            alert("That's Correct!");
            scoreOut = "Score: $" + score.toString();
            document.getElementById("score").innerHTML = scoreOut;
        }
        else {
            alert("Wrong.");
        }
        $(this).css( {"background-color" : "lightsalmon"});
    });

    $("#bs3").one("click", function() {
        var input = window.prompt("Bootstrap for $300:\nWhich class is used to create a big box for calling extra attention?");
        if(input == ".jumbotron" || input == "Jumbotron" || input == "jumbotron") {
            score += 300;
            alert("That's Correct!");
            scoreOut = "Score: $" + score.toString();
            document.getElementById("score").innerHTML = scoreOut;
        }
        else {
            alert("Wrong.");
        }
        $(this).css( {"background-color" : "lightsalmon"});
    });
});
