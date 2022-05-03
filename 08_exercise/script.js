const questions = [{
    question: "What does HTML stands for?",
    choices: ["Hyperlink and Text Markup Language",
        "Hypertext Markup Language",
        "Hyperbolic Message Language",
        "Highly Magnificant Language"],
    correctAnswer: "Hypertext Markup Language"
}, {
    question: "Who is making the web standards?",
    choices: ["Melinda and Bill Gates Foundation",
        "The United Nations",
        "The World Wide Web Consortium",
        "CERN Laboratuaries"],
    correctAnswer: "The World Wide Web Consortium"
}, {
    question: "Inside which HTML element do we put the JavaScript?",
    choices: ["<script>", "<javascript>", "<js>", "<scripting>"],
    correctAnswer: "<script>"
}, {
    question: "What is the correct syntax for referring to an external script called ‘xxx.js’ ",
    choices: ["<script 'src= xxx.js'>",
        "<script 'href= xxx.js' >",
        "<script 'name= xxx.js' >",
        "<script 'log= xxx.js' >"],
    correctAnswer: "<script src= xxx.js >"
}, {
    question: "How do you write `Hello World` in an alert box?",
    choices: ["msgBox ('Hello World')",
        "alertBox ('Hello World')",
        "alert ('Hello World')",
        "msg ('Hello World')"],
    correctAnswer: "alert ('Hello World')"
}];

function writeChoices(choiceList) {
    let choiceElementA = document.getElementById("choiceA");
    choiceElementA.innerText = choiceList[0];
    let choiceElementB = document.getElementById("choiceB");
    choiceElementB.innerText = choiceList[1];
    let choiceElementC = document.getElementById("choiceC");
    choiceElementC.innerText = choiceList[2];
    let choiceElemenD = document.getElementById("choiceD");
    choiceElemenD.innerText = choiceList[3];
}

let questionsList = [1, 2, 3, 4, 5];
questionsList = questionsList.sort(() => Math.random() - 0.5);
let randomNumber = questionsList[0];

writeChoices(questions[randomNumber].choices);

function writeQuestion(question) {
    let questionElement = document.getElementById("questionText");
    questionElement.innerText = question;
}

writeQuestion(questions[randomNumber].question);

const choiceA = document.getElementById("choiceA");
const choiceB = document.getElementById("choiceB");
const choiceC = document.getElementById("choiceC");
const choiceD = document.getElementById("choiceD");

choiceA.addEventListener("click", () => checkAnswer(choiceA.innerText));
choiceB.addEventListener("click", () => checkAnswer(choiceB.innerText));
choiceC.addEventListener("click", () => checkAnswer(choiceC.innerText));
choiceC.addEventListener("click", () => checkAnswer(choiceD.innerText));

const checkAnswer = (userAnswer) => {
    if (userAnswer === questions[randomNumber].correctAnswer) {
        alert("correct");
    } console.log(userAnswer);
}