
var question1 = {
  question: "What is America's favorite ice cream flavor?",
  choices: ["Choco Mint Chip", "Chocolate Peanut Butter Cup", "Butter Pecan", "Chocolate Marshmallow"],
  correctAnswer: 0
};

var question2 = {
  question: "What is America's favorite drink?",
  choices: ["Soda", "Water", "Coffee", "Juice"],
  correctAnswer: 1
};

var question3 = {
  question: "What is America's favorite meal?",
  choices: ["Pizza", "Waffles", "Steak", "Chicken"],
  correctAnswer: 2
};

 var question4 = {
  question: "What is America's favorite fruit?",
  choices: ["Apple", "Banana", "Oranges", "Limes"],
  correctAnswer: 0
}; 

var question5 = {
  question: "What is America's favorite candy?",
  choices: ["Snickers", "Twix", "Reese’s Peanut Butter Cups", "Kit Kat"],
  correctAnswer: 2
};

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;



$(document).ready(function () {
 
 //Question 1
  var $choiceList = $("#choiceList1");
  var $choice1 = $("<button><value= correct>").text("Choco Mint Chip");
  var $choice2 = $("<button><value= wrong>").text("Chocolate Peanut Butter Cup");
  var $choice3 = $("<button><value= wrong>").text("Butter Pecan");
  var $choice4 = $("<button><value= wrong>").text("Chocolate Marshmallow");
  
  //choice1.attr("<input type='radio' value=' + i + ' />");

  $choiceList.append($choice1, $choice2, $choice3, $choice4);
  $("#question1").text("What is America's favorite ice cream flavor?");


//Question 2  Soda", "Water", "Coffee", "Juice
var $choiceList2 = $("#choiceList2");
  var $secondchoice1 = $("<button><value= wrong>").text("Soda");
  var $secondchoice2 = $("<button><value= correct>").text("Water");
  var $secondchoice3 = $("<button><value= wrong>").text("Coffee");
  var $secondchoice4 = $("<button><value= wrong>").text("Juice");
  
  //choice2.attr("<input type='radio' value=' + i + ' />");

  $choiceList2.append($secondchoice1, $secondchoice2, $secondchoice3, $secondchoice4);
  $("#question2").text("What is America's favorite drink?");

//Question 3  
var $choiceList3 = $("#choiceList3");
  var $thirdchoice1 = $("<button><value= wrong>").text("Pizza");
  var $thirdchoice2 = $("<button><value= wrong>").text("Waffles");
  var $thirdchoice3 = $("<button><value= correct>").text("Steak");
  var $thirdchoice4 = $("<button><value= wrong>").text("Chicken");
  
  //choice2.attr("<input type='radio' value=' + i + ' />");

  $choiceList3.append($thirdchoice1, $thirdchoice2, $thirdchoice3, $thirdchoice4);
  $("#question3").text("What is America's favorite meal?");

  
//Question 4  
var $choiceList4 = $("#choiceList4");
var $fourthchoice1 = $("<button><value= correct>").text("Apple");
var $fourthchoice2 = $("<button><value= wrong>").text("Banana");
var $fourthchoice3 = $("<button><value= wrong>").text("Orange");
var $fourthchoice4 = $("<button><value= wrong>").text("Lime");

//choice2.attr("<input type='radio' value=' + i + ' />");

$choiceList4.append($fourthchoice1, $fourthchoice2, $fourthchoice3, $fourthchoice4);
$("#question4").text("What is America's favorite fruit?");

//Question 5  
var $choiceList5 = $("#choiceList5");
var $fifthchoice1 = $("<button><value= wrong>").text("Snickers");
var $fifthchoice2 = $("<button><value= wrong>").text("Twix");
var $fifthchoice3 = $("<button><value= correct>").text("Reese’s Peanut Butter Cups");
var $fifthchoice4 = $("<button><value= wrong>").text("Kit Kat");

//$fifthchoice1.attr("<input type='radio' value= wrong>");

$choiceList5.append($fifthchoice1, $fifthchoice2, $fifthchoice3, $fifthchoice4);
$("#question5").text("What is America's favorite candy?");



//$("#start").on("click", function () {
 
 //var firstQuestion = question1.question;
//$("#question1").text(firstQuestion);
 // console.log(question1.question);


 // var firstAnswer = question1.choices;
 // $(".choiceList1").text(firstAnswer);
  console.log(firstAnswer);
  //for (var i = 0; i < question1.length; i++) {
  //  var buttons = $("<li>");

 //   buttons.text(firstAnswer);
 //  $(".choiceList1").append(buttons);
 // }


  var secondQuestion = question2.question;
  $("#question2").text(question2.question);
  console.log(question2.question);

  //var secondAnswer = question2.choices;
  //$(".choiceList2").text(secondAnswer);
  console.log(secondAnswer);

  var thirdQuestion = question3.question;
  $("#question3").text(thirdQuestion);
  console.log(question3.question);

  //var thirdAnswer = question3.choices;
  //$(".choiceList3").text(thirdAnswer);
 // console.log(thirdAnswer);

  var fourthQuestion = question4.question;
  $("#question4").text(fourthQuestion);
  console.log(question4.question);

 // var fourthAnswer = question4.choices;
 // $(".choiceList4").text(fourthAnswer);
  console.log(fourthAnswer);

  var fifthQuestion = question5.question;
  $("#question5").text(fifthQuestion);
  console.log(question5.question);

 // var fifthAnswer = question5.choices;
  //$(".choiceList5").text(fifthAnswer);
  console.log(fifthAnswer);

 // for (var i = 0; i < question1.length; i++) {
  //  var buttons = $('<li><input type="radio" value=' + i + ' name="dynradio" />' + firstAnswer + '</li>');
  // $(".choiceList1").append(buttons);
 // }




  
  
  
   
    console.log(answerList);
    console.log("first question working");
    console.log(questions[currentQuestion].question);
    console.log(questions[currentQuestion].choices);
    $(".quizContainer").text(questions[currentQuestion].question);
    var answerList = $(".choiceList").text(questions[currentQuestion].choices);
    
  



//start function

  $('#start').click(function () {
    $(this).hide();
  });


});

var number = 30;

//  Variable that will hold our interval ID when we execute
//  the "run" function
var intervalId;

//  When the stop button gets clicked, run the stop function.
$("#stop").on("click", stop);

//  When the resume button gets clicked, execute the run function.
$("#start").on("click", run);
function run() {
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);
}

//  The decrement function.
function decrement() {
  number--;

  //  Show the number in the #show-number tag.
  $("#show-number").html("<h2>" + number + "</h2>");


  //  Once number hits zero...
  if (number === 0) {

    //  ...run the stop function.
    stop();

    //  Alert the user that time is up.
    alert("Time Up!");
  }
}

//  The stop function
function stop() {

  //  Clears our intervalId
  //  We just pass the name of the interval
  //  to the clearInterval function.
  clearInterval(intervalId);
}



