$(document).ready(function () {

var triviaQuestions = [{
    question: "Where was Liam born?",
    choices: ["Hawaii", "Ireland", "Tokyo", "Germany"],
    correctAnswer: 1
}, {
    question: "Why did Liam start acting?",
    choices: ["He always had a passion for it", "He was bullied and he thought being an actor would make him 'cooler'", "He wanted to impress his parents", "He wanted to imopress a girl at school"],
    correctAnswer: 3
}, {
    question: "When did Liam become a US citizen?",
    choices: ["2009", "2005", "1999", "He's always been a US citizen"],
    correctAnswer: 0
}, {
    question: "True or false, Liam only agreed to be in the movie 'Taken' so he could learn karate?",
    choices: ["True", "False"],
    correctAnswer: 0
}, {
    question: "Liam was named after whom?",
    choices: ["Liam Dunn, an American character actor", "His mother and fathers therapist", "The local Catholic priest", "His father"],
    correctAnswer: 2
}, {
    question: "True or false, Liam should have been chosen to play James Bond in Golden Eye instead of Pierce Brosnan?",
    choices: ["True", "False"],
    correctAnswer: 0
}];


var userAnswers = [];
var timer = "";
var submit = "";
var gameFinish = false;


var currentQuestion = triviaQuestions[Math.floor(Math.random()*triviaQuestions.length)];

console.log(currentQuestion);

function displayQuestion() {
    $("#question").text(currentQuestion.question);
    currentQuestion.choices.forEach(function(element) {
        $("#choices").append("<li>" + "<input type = radio>" + element + "</li>");
      });

}
displayQuestion();


});
