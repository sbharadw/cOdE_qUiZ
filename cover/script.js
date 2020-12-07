var startButton = document.getElementById('begin-Quiz');
var questionContainerElement = document.getElementById("questions-container");
var questionElement = document.getElementById("questions");
var answerButtonElement = document.getElementById('btnAnswers');
var nextButton = document.getElementById('next-Question');

startButton.addEventListener('click', startQuiz);


function startQuiz () {
console.log("Started Quiz")
questionContainerElement.classList.remove('hide');
startButton.classList.add('hide');
nextGetQuestion()

}

function nextGetQuestion () {

var quizQ = allQuestionsAndAnswers.keys;
console.log(quizQ);


for (i = 0; i < quizQ.length; i++) {




}



}

function selectAnswer () {

nextButton.classList.remove('hide');

}

function quizResult () {



}




// an array of objects each containing respective questions and their answer choices along with which answer is the correct answer. 

var allQuestionsAndAnswers = [
{
question1: "What does HTML stand for?",
answers1: [
{
choice1: "Hypertext Markup Language",
correct: true},
{
choice2: "Hyper Text",
correct: false},
{
choice3: "Hyper Markup Language",
correct: false},
{
choice4: "Hyper Language",
correct: false}
]},

{
question2: "What does CSS stand for?",
answers2:[
{
choice1: "Stylesheets",
correct: false},
{
choice2: "Style",
correct: false},
{
choice3: "Cascading Style Sheets",
correct: true},
{
choice4: "Javascript",
correct: false}
]},

{
question3: "Which language would use .class?",
answers3:[
{
choice1: "CSS",
correct: true},
{
choice2: "HTML",
correct: false},
{
choice3: "Java",
correct: false},
{
choice4: "NODE.js",
correct: false}
]},

{
question4: "When do we use the # sign in CSS?",
answers4:[
{
choice1: "Calling a function",
correct: false},
{
choice2: "Creating an element",
correct: false},
{
choice3: "Hashtag on Instagram",
correct: false},
{
choice4: "Styling an ID",
correct: true}
]},

{
question5: "When do we use {} in Javascript?",
answers5:[
{
choice1: "Creating an array",
correct: false},
{
choice2: "Creating an object",
correct: true},
{
choice3: "Getting an element",
correct: false},
{
choice4: "JSON",
correct: false}
]}
]