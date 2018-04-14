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
            question: "Should have Liam been chosen to play James Bond in Golden Eye instead of Pierce Brosnan?",
            choices: ["Yes", "No"],
            correctAnswer: 0
        }];


    var userGuess = [];
    var submit = "";
    var questionsRight = 0;
    var questionsWrong = 0;
    var gameFinish = false;
    var submit;

    // Timer //
    var timer = 20;
    var intervalid;

    function run() {
        clearInterval(intervalid);
        intervalid = setInterval(decrement, 1000)
    }

    function decrement() {
        timer--;
        $("#timer").html("<h2>" + "Seconds Remaining: " + timer + "</h2>");

        if (timer === 0) {
            stopTimer();
            evaluateGuess();
            showGameResult();
        }

    }

    function stopTimer() {
        clearInterval(intervalid);
    }


    function resetGame() {
        stopTimer();
        questionsRight = 0;
        questionsWrong = 0;
        gameFinish = false;

    };

    run();
    orderQuestions();


    function orderQuestions() {

        triviaQuestions.forEach(function (currentQuestion) {


            var str = '';
            str += "<p>";

            str += currentQuestion.question;

            str += "</p>";

            str += "<ul>";


            currentQuestion.choices.forEach(function (currentChoice, currentIndex, radioName) {


                str += "<li>"
                str += '<input type="radio" name="' + radioName + '" value="' + currentIndex + '">';
                str += currentChoice;
                str += "</li>"



            });
            str += "</ul>";

            console.log(str);
            $("#questions").append(str);

        });
        $("#results-img").hide();


    };


    function showGameResult() {
        $("#questions").hide();
        $("#button").hide();
        $("#results").append("Correct: " + questionsRight + "<br>" + "Incorrect: " + questionsWrong + "<br>");
        $("#results-img").show();


    };

    function evaluateGuess() {

        // fix function so that it adds 1 to questionsRight/questionsWrong for each question answered correctly or incorrectly
        // fix the questionsRight counter
        // Even though it doesnt count each question, I know that the questionsWrong counter is correct because if the first question is answered correctly it doesn't count increment the questionsWrong number

        triviaQuestions.forEach(function (questions) {



            value = $('input[type="radio"]:checked').val();

            if (value === questions.correctAnswer) {
                questionsRight++;
            } else if (value === undefined || value != questions4.correctAnswer) {
                questionsWrong++;

            }
        });

        console.log(value);

    };


    // still not sure how to use forms and form submission correctly

    $("#quiz").submit(function (event) {

        evaluateGuess();
        showGameResult();
        event.preventDefault();
        gameFinish = true;
    });













});