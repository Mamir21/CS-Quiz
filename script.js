document.addEventListener('DOMContentLoaded', () => {
    startQuiz();
})

const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const scoreDisplay = document.getElementById('score');
 
let currentQuestionIndex = 0;
let score = 0;
 
function startQuiz() { 
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    clearAnswerButtons();
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer, button));
        answerButtonsElement.appendChild(button);
    });
    nextButton.disabled = true; // Disable next button by default
}

function clearAnswerButtons() {
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(answer, button) {
    // Remove 'selected' class from all buttons
    const buttons = document.querySelectorAll('#answer-buttons .btn');
    buttons.forEach(button => {
        button.classList.remove('selected');
    });

    // Add 'selected' class to the clicked button
    button.classList.add('selected');

    if (answer.correct) {
        // Handle correct answer
        score++;
        console.log('Correct!');
    } else {
        // Handle wrong answer
        console.log('Wrong answer');
    }

    nextButton.disabled = false;
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
        nextButton.disabled = true;
    } else {
        // Quiz ends
        showScore();
        console.log('Quiz completed!');
    }
}

function showScore() {
    scoreDisplay.innerText = `Your score: ${score}/${questions.length}`;
}

const questions = [
    {
        question: 'What does HTML stand for?',
        answers: [
            { text: 'Hyperlinks and Text Markup Language', correct: false },
            { text: 'Hypertext Markup Language', correct: true },
            { text: 'Home Tool Markup Language', correct: false },
        ]
    },
    {
        question: 'What is the output of the following code snippet in JavaScript?\nconsole.log(2 + "2");',
        answers: [
            { text: '4', correct: false },
            { text: '"22"', correct: true },
            { text: 'Error', correct: false }
        ]
    },
    {
        question: 'Which sorting algorithm has the worst-case time complexity of O(n^2)?',
        answers: [
            { text: 'Merge Sort', correct: false },
            { text: 'Bubble Sort', correct: true },
            { text: 'Insertion Sort', correct: false }
        ]
    },
    {
        question: 'What is the name of the data structure that follows the Last In, First Out (LIFO) principle?',
        answers: [
            { text: 'Heap', correct: false },
            { text: 'Stack', correct: true },
            { text: 'Tree', correct: false }
        ]
    },
    {
        question: 'Which of the following is NOT a valid programming language?',
        answers: [
            { text: 'Python', correct: false },
            { text: 'C++', correct: false },
            { text: 'HTML', correct: true },
        ]
    },
    {
        question: 'What is the main purpose of CSS?',
        answers: [
            { text: 'To define the behavior of a webpage', correct: false },
            { text: 'To define the presentation of a webpage', correct: true },
            { text: 'To define the functionality of a webpage', correct: false }
        ]
    },
    {
        question: 'In object-oriented programming, what is the term used to describe the ability of an object to take many forms?',
        answers: [
            { text: 'Encapsulation', correct: false },
            { text: 'Polymorphism', correct: true },
            { text: 'Inheritance', correct: false },
        ]
    },
    {
        question: 'Which of the following is NOT a valid HTTP request method?',
        answers: [
            { text: 'GET', correct: false },
            { text: 'POST', correct: false },
            { text: 'INSERT', correct: true }
        ]
    },
    {
        question: 'What does SQL stand for?',
        answers: [
            { text: 'Structured Query Language', correct: true },
            { text: 'Sequential Query Language', correct: false },
            { text: 'Structured Question Language', correct: false }
        ]
    },
    {
        question: 'Which of the following is an example of a non-volatile memory?',
        answers: [
            { text: 'RAM', correct: false },
            { text: 'ROM', correct: true },
            { text: 'Cache', correct: false },
        ]
    }
]
