$(document).ready(function () {

    var triviaQuestions = [
        {
        question: "Where was Liam born?",
        choices: ["Hawaii", "Ireland", "Tokyo", "Germany"],
        correctAnswer: 1
    }, {
        question: "Why did Liam start acting?",
        choices: ["He always had a passion for it", "He was bullied and he thought being an actor would make him 'cooler'", "He wanted to impress his parents", "He wanted to impress a girl at school"],
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
    
    
    var userGuess = [];
    var timer = "";
    var submit = "";
    var questionsRight = 0;
    var questionsWrong = 0;
    var gameFinish = false;
    var submit;
    
function resetGame() {
    userGuess = [];
    questionsRight = 0;
    questionsWrong = 0;
    gameFinish = false;

}

orderQuestions();

function orderQuestions(){

    triviaQuestions.forEach(function(currentQuestion) {
        
        // Start to create the HTML with a string...
        var str ='';
      
        // We will put the question inside <p> tags to help with formating 
        str += "<p>";
      
        // Current question
        str += currentQuestion.question;
      
        str += "</p>";
      
        str += "<ul>";
      
        // currentQuestion.choices is an array of (string) choices
        //
    
        currentQuestion.choices.forEach(function(currentChoice, currentIndex) {
          
          
          str += "<li>"
          // currentQuestion.radioName is a property we can use to GROUP a bunch of radio buttons. All radio buttons in this group SHARE this. You will use this if you get to putting this into a form and submiting it.
          // currentIndex will assign the index in the choices array (it looks like correctAnswer will use this, as it has the index of the correct choice)
          str += '<input type="radio" name="'+currentQuestion.radioName+'" value="'+currentIndex+'">';
          str += currentChoice;
          str += "</li>"
          
          
        });
        str += "</ul>";
        
      
        console.log(str);
        
        
        // Select the div with the id of "questions"
        $("#questions").append(str);

    });
    $("#results-img").hide();

    
};


function showGameResult() {
    $("#questions").hide();
    $("#button").hide();
    $("#results").append(questionsRight + "<br>" + questionsWrong + "<br>");
    $("#results-img").show();
    

}





    

    

    });