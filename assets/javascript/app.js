	// {
	// 	question:"What is the first element on the periodic table?",
	// 	answer:2,
	// 	options: ["Barium","Oxygen","Hydrogen","Helium"]
	// },


// var contentArray = [
// 	["<p>What is the first element on the periodic table?", ["<br><input type='radio' name='question1' value='1' class='answers' checked>Lithium &nbsp;<input type='radio' name='question1' value='Hydrogen' class='answers' class='answers'>Hydrogen &nbsp; <input type='radio' name='question1' value='3' class='answers'>Oxygen &nbsp; <input type='radio' name='question1' value='4' class='answers'>Helium</p>", "Hydrogen"] ]
// 	["<p>The symbol ‘Pb’ refers to which chemical element?", ["<br><input type='radio' name='question2' value='1' class='answers2' checked>Phosphorus &nbsp; <input type='radio' name='question2' value='2' class='answers2'>Iron &nbsp; <input type='radio' name='question2' value='Lead' class='answers2'>Lead &nbsp; <input type='radio' name='question2' value='4' class='answers2'>Polonium</p>", "Lead"] ]
// 	["<p>What mineral is also referred to as Fool's gold?", ["<br><input type='radio' name='question3' value='1' class='answers3' checked>Krypton &nbsp; <input type='radio' name='question3' value='Pyrite' class='answers3'>Pyrite &nbsp; <input type='radio' name='question3' value='3' class='answers3'>Tellurium &nbsp; <input type='radio' name='question3' value='4' class='answers3'>Cadmium</p>", "Pyrite"] ]
// 	["<p>What was the first element to be made artificially?", ["<br><input type='radio' name='question4' value='1' class='answers4' checked>Neon &nbsp; <input type='radio' name='question4' value='2' class='answers4'>Iron &nbsp; <input type='radio' name='question4' value='3' class='answers4'>Silver &nbsp; <input type='radio' name='question4' value='Technetium' class='answers4'>Technetium</p>", "Technetium"] ]
// 	["<p>How many elements on the periodic table that occur in nature?", ["<br><input type='radio' name='question5' value='90' class='answers5' checked>90 &nbsp; <input type='radio' name='question5' value='2' class='answers5'>57 &nbsp; <input type='radio' name='question5' value='3' class='answers5'>120 &nbsp; <input type='radio' name='question5' value='4' class='answers5'>5</p>", "90"] ]
// ];





var questionsArrary = [
	"<p>What is the first element on the periodic table?<br><input type='radio' name='question1' value='1' class='answers1'>Lithium &nbsp; <input type='radio' name='question1' value='Hydrogen' class='answers1'>Hydrogen &nbsp; <input type='radio' name='question1' value='3' class='answers1'>Oxygen &nbsp; <input type='radio' name='question1' value='4' class='answers1'>Helium</p>", 
	"<p>The symbol ‘Pb’ refers to which chemical element?<br><input type='radio' name='question2' value='1' class='answers2'>Phosphorus &nbsp; <input type='radio' name='question2' value='2' class='answers2'>Iron &nbsp; <input type='radio' name='question2' value='Lead' class='answers2'>Lead &nbsp; <input type='radio' name='question2' value='4' class='answers2'>Polonium</p>",	
	"<p>What mineral is also referred to as \"Fool's gold\"?<br><input type='radio' name='question3' value='1' class='answers3'>Krypton &nbsp; <input type='radio' name='question3' value='Pyrite' class='answers3'>Pyrite &nbsp; <input type='radio' name='question3' value='3' class='answers3'>Tellurium &nbsp; <input type='radio' name='question3' value='4' class='answers3'>Cadmium</p>", 
	"<p>What was the first element to be made artificially<br><input type='radio' name='question4' value='1' class='answers4'>Neon &nbsp; <input type='radio' name='question4' value='2' class='answers4'>Iron &nbsp; <input type='radio' name='question4' value='3' class='answers4'>Silver &nbsp; <input type='radio' name='question4' value='Technetium' class='answers4'>Technetium</p>", 
	"<p>How many elements on the periodic table that occur in nature?<br><input type='radio' name='question5' value='90' class='answers5'>90 &nbsp; <input type='radio' name='question5' value='2' class='answers5'>57 &nbsp; <input type='radio' name='question5' value='3' class='answers5'>120 &nbsp; <input type='radio' name='question5' value='4' class='answers5'>17</p>"
	]
var outputQuestions = [];
var answersArray = ["Hydrogen", "Lead", "Pyrite", "Technetium", "90"]
var startScreen;
var counter = 30;
var correctAnswers = 0;
var incorrectAnswers = 0;
var unansweredQuestions = 0;
var selectedAnswer = 100;
var selectedAnswer2 = 100;
var selectedAnswer3 = 100;
var selectedAnswer4 = 100;
var selectedAnswer5 = 100;

// console.log(questionsArrary);
// console.log(answersArray);

$(document).ready(function() {
	// My init function creates the start button and initial screen
	function init() {
	startScreen = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Start</a></p>";
	$(".content").html(startScreen);
	$(".questions").html("");

	// console.log("correct answers: " + correctAnswers);
	// console.log("incorrect answers: " + incorrectAnswers);
	// console.log("unanswered questions: " + unansweredQuestions);
	// console.log("selected answer: " + selectedAnswer);

	// console.log(startScreen);
	}

	init();

 $(document).on("click", ".start-button", function(event){
	// clickSound.play();

	startTimer();
	writeQuestions();

}); // Closes start-button click

$(document).on("click", ".answers1", function(event){
	//answeredQuestion = true;
	// clickSound.play();
	selectedAnswer = $(this).val();
	// console.log("what was clicked: ", selectedAnswer);
	
}); // Close .answers click

$(document).on("click", ".answers2", function(event){
	selectedAnswer2 = $(this).val();
	// console.log("what was clicked 2nd: ", selectedAnswer2);
	
}); // Close .answers click

$(document).on("click", ".answers3", function(event){
	selectedAnswer3 = $(this).val();
	// console.log("what was clicked 3rd: ", selectedAnswer3);
	
}); // Close .answers click

$(document).on("click", ".answers4", function(event){
	selectedAnswer4 = $(this).val();
	// console.log("what was clicked 4th: ", selectedAnswer4);
	
}); // Close .answers click

$(document).on("click", ".answers5", function(event){
	selectedAnswer5 = $(this).val();
	// console.log("what was clicked 5th: ", selectedAnswer5);
	
}); // Close .answers click

$(document).on("click", ".reset-button", function(event){
	// clickSound.play();
	gameReset();

}); // Closes reset-button click




function startTimer() {
	timerHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p>";
	$(".content").html(timerHTML);
	timerCountdown();
}

function timerCountdown() {
	stopWatch = setInterval(thirtySeconds, 1000);
	function thirtySeconds() {
		if (counter === 0) {
			checkAnswers();
			clearInterval(stopWatch);
			// generateLossDueToTimeOut();
		}
		if (counter > 0) {
			counter--;
		}
		$(".timer").html(counter);
	}
}

// function writeQuestions() {
// 	$.each(contentArray, function(index, value) {
// 	    outputQuestions.push('<span>' + value + '</span>');
// 	});
// 	$(".questions").html(outputQuestions.join(""));
// }

function writeQuestions() {
	$.each(questionsArrary, function(index, value) {
	    outputQuestions.push('<span>' + value + '</span>');
	});
	$(".questions").html(outputQuestions.join(""));
}

function checkAnswers() {
	if (selectedAnswer === answersArray[0]) {
		correctAnswers++;
	} else if (selectedAnswer === 100) {
		unansweredQuestions++;
	} else {
		incorrectAnswers++;
	}
	// console.log("selected answer: " + selectedAnswer);
	// console.log("answer to 1st question: " + answersArray[0]);

	if (selectedAnswer2 === answersArray[1]) {
		correctAnswers++
	} else if (selectedAnswer2 === 100) {
		unansweredQuestions++;
	} else {
		incorrectAnswers++
	}
	// console.log("selected2 answer: " + selectedAnswer2);
	// console.log("answer to 2nd quesion: " + answersArray[1]);

	if (selectedAnswer3 === answersArray[2]) {
		correctAnswers++
	} else if (selectedAnswer3 === 100) {
		unansweredQuestions++;
	} else {
		incorrectAnswers++
	}
	// console.log("selected answer3: " + selectedAnswer3);

	if (selectedAnswer4 === answersArray[3]) {
		correctAnswers++
	} else if (selectedAnswer4 === 100) {
		unansweredQuestions++;
	} else {
		incorrectAnswers++
	}
	// console.log("selected answer4: " + selectedAnswer4);

	if (selectedAnswer5 === answersArray[4]) {
		correctAnswers++
	} else if (selectedAnswer5 === 100) {
		unansweredQuestions++;
	} else {
		incorrectAnswers++
	}
	// console.log("selected answer5: " + selectedAnswer5);
 	
 	clearInterval(stopWatch);
 	displayResults();
}

function displayResults() {
	$(".questions").html("Correct Answers: " + correctAnswers + "<br> incorrectAnswers: " + incorrectAnswers + "<br> Unanswered Questions: " + unansweredQuestions + "<p>&nbsp;</p>" + "<a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a>");
	console.log("correct answers in display: " + correctAnswers);
	console.log("incorrect answers in display: " + incorrectAnswers);
	console.log("unanswered questions in display: " + unansweredQuestions);
	// console.log("selected answer: " + selectedAnswer);
}

function gameReset() {
	counter = 30;
	outputQuestions = [];
	correctAnswers = 0;
	incorrectAnswers = 0;
	unansweredQuestions = 0;
	selectedAnswer = 100;
    selectedAnswer2 = 100;
    selectedAnswer3 = 100;
    selectedAnswer4 = 100;
    selectedAnswer5 = 100;
	init();
	// console.log("correct answers: " + correctAnswers);
	// console.log("incorrect answers: " + incorrectAnswers);
	// console.log("unanswered questions: " + unansweredQuestions);
}

});

