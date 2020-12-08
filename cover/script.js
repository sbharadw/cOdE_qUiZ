//***************Get HTML Elements****************//
var quizImage = document.getElementById('image-one');
var finalScoreImage = document.getElementById('image-two');
var time = document.getElementById('timer');
var instructions = document.getElementById('begin-text');
var inputBox = document.getElementById('input-box');
var userInput = document.getElementById('input');
var card = document.getElementById('quiz-card');
var questionContainerElement = document.getElementById('questions-container');
var answerBtnsElement = document.getElementById('button-answers');
var questionsElement = document.getElementById('questions');
var startButton = document.getElementById('begin-quiz');
var nextButton = document.getElementById('next-question');
var box = document.getElementById('box');
var submitBtn = document.getElementById('submit-button')
var highScore = document.getElementById('show-highscore');

// Setting Defaults 

var setTimeTo = 45;
var userFinalScore = 0;
var currentQuestionIndex = 0;
var points = 0;
var randomQuestion;



// All Functions and Click Events

// Click event to start quiz
startButton.addEventListener('click', startQuiz);


//Click event to next question 

nextButton.addEventListener('click', () => {
currentQuestionIndex++
getNextQuestion()
} )




//Funtion to run at the startButton click event

function startQuiz () {
console.log("Started Quiz");
questionContainerElement.classList.remove('hide');
startButton.classList.add('hide');
time.classList.remove('hide');
setTimer();
randomQuestion = allQuestionsAndAnswers.sort(() => Math.random() - .5);
getNextQuestion();


}

//Setting timer 

function setTimer(){

var interval = setInterval(function() {
    setTimeTo--;
    time.innerText = setTimeTo;

        if(setTimeTo <= 0) {
            clearInterval(interval);
            finalPage();
        }
    }, 1000);
}



// Getting a question

function getNextQuestion(){

resetState();

var newQ = allQuestionsAndAnswers[currentQuestionIndex].question;
questionsElement.innerText = newQ;

var newA = allQuestionsAndAnswers[currentQuestionIndex].answers;

newA.forEach((answer) => {
    var buttonChoice = document.createElement('button');
    buttonChoice.innerText = answer; 
    buttonChoice.classList.add('btn', 'btn-outline-primary', 'text-white');
    answerBtnsElement.appendChild(buttonChoice)
    buttonChoice.addEventListener('click', selectAnswer)
})
}

// Function to occur after an answer is selected 

function selectAnswer(e) {

var userPick = e.target.textContent;


 console.log(userPick);

if (userPick === allQuestionsAndAnswers[currentQuestionIndex].rightAnswer) {

    ++userFinalScore;
    console.log(userFinalScore);
} else {

timePenalty();

}

if (randomQuestion.length > currentQuestionIndex + 1){

nextButton.classList.remove('hide');

} else {

finalPage();

}
}

//Time Penalty Funcation

function timePenalty () {
setTimeTo -= 3;
}


//Final Score Function and Score Storage 

function finalPage () {
    finalScoreImage.classList.remove('hide');
    quizImage.classList.add('hide');
    time.classList.add('hide');
    setTimeTo = 0;
    instructions.classList.add('hide');
    card.classList.add('hide');
    inputBox.classList.remove('hide');
    box.textContent = "Quiz over! You scored: " + userFinalScore + " points! Please enter initials in the input box below."
    

}

//Input Submit Click event listner

submitBtn.addEventListener('click', (e) => {
e.preventDefault();
var userInitials = {
initials: userInput.value,
finalScore: userFinalScore
}
console.log(userInitials);

if (userInitials.initials === "") {

    alert("Please add initials!!");

} else {

    localStorage.setItem("userName", JSON.stringify(userInitials));
    displayHighScore();
}

})

//Display Highscore 

function displayHighScore () {

inputBox.classList.add('hide'); 
box.classList.add('hide');
card.classList.remove('hide');
questionContainerElement.classList.add('hide');
nextButton.classList.add('hide');
var getUser = JSON.parse(localStorage.getItem("userName"));
highScore.textContent = "User Initials: " + getUser.initials + " Points: " + getUser.finalScore;
startButton.textContent = "Restart Quiz";
startButton.classList.remove('hide');

}


// reset to default state every time we get a new question 

function resetState () {

nextButton.classList.remove('hide');
while(answerBtnsElement.firstChild){

answerBtnsElement.removeChild(answerBtnsElement.firstChild)

}
} 


// An array of objects each containing respective questions and their answer choices along with correct = true or false. 

var allQuestionsAndAnswers = [
     // index length = 5
    // index 0 
    {
    question: "What does HTML stand for?",
    answers: ["Hypertext Markup Language","Hyper Text", "Hyper Markup Language",
    "Hyper Language"],
    rightAnswer: "Hypertext Markup Language"
    },
    
    // index 1
    {
    question: "What does CSS stand for?",
    answers:["Stylesheets", "Style", "Cascading Style Sheets", "Javascript"],
    rightAnswer: "Cascading Style Sheets"
    },
    
    // index 2
    {
    question: "Which language makes use of '.class'?",
    answers:["CSS", "HTML", "Java", "NODE.js"],
    rightAnswer: "CSS"
    },
    
    
    // index 3
    {
    question: "When do we use the # sign in CSS?",
    answers:["Calling a function", "Creating an element", "Hashtag on Instagram", "Styling an ID"],
    rightAnswer: "Styling an ID"
    },
    
    
    // index 4
    {
    question: "When do we use {} in Javascript?",
    answers:["Creating an array", "Creating an object", "Getting an element", "JSON"],
    rightAnswer: "Creating an object"
    }
];


