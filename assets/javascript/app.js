var questionsArrary = ["<p>What is the first element on the periodic table?<br><input type='radio' name='test' value='1' checked>One &nbsp; <input type='radio' name='test' value='2'>Hydrogen &nbsp; <input type='radio' name='test' value='3'>Oxygen &nbsp; <input type='radio' name='test' value='4'>Helium</p>", "<p>The symbol ‘Pb’ refers to which chemical element?</p>",	"<p>What mineral is also referred to as \"Fool's gold\"?</p>", "<p>What was the first element to be made artificially</p>", "<p>How many elements on the periodic table that occur in nature.</p>"]
var outputQuestions = [];
var answersArray = ["Hydrogen", "Lead", "Pyrite", "Technetium", "90"]
var startScreen;
var counter = 30;

console.log(questionsArrary);
console.log(answersArray);

$(document).ready(function() {
	// My init function creates the start button and initial screen
function init() {
	startScreen = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Start</a></p>";
	$(".content").html(startScreen);
	console.log(startScreen);
}

init();

$("body").on("click", ".start-button", function(event){
	// clickSound.play();
	startTimer();
	writeQuestions();

}); // Closes start-button click


})

function startTimer() {
	timerHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p>";
	// <p class='text-center'>" + questionArray[questionCounter] + "</p><p class='first-answer answer'>A. " + answerArray[questionCounter][0] + "</p><p class='answer'>B. "+answerArray[questionCounter][1]+"</p><p class='answer'>C. "+answerArray[questionCounter][2]+"</p><p class='answer'>D. "+answerArray[questionCounter][3]+"</p>";
	$(".content").html(timerHTML);
	timerCountdown();
}

function timerCountdown() {
	stopWatch = setInterval(thirtySeconds, 1000);
	function thirtySeconds() {
		if (counter === 0) {
			clearInterval(stopWatch);
			// generateLossDueToTimeOut();
		}
		if (counter > 0) {
			counter--;
		}
		$(".timer").html(counter);
	}
}

function writeQuestions() {
	$.each(questionsArrary, function(index, value) {
	    outputQuestions.push('<span>' + value + '</span>');
	});
	$(".questions").html(outputQuestions.join(""));
}