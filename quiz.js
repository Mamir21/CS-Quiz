const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;

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
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtonsElement.appendChild(button);
    });
}

function clearAnswerButtons() {
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(answer) {
    if (answer.correct) {
        // Handle correct answer
    } else {
        // Handle wrong answer
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
        // Add your logic for quiz completion
    }
}

const questions = [
    {
        question: 'What is 2 + 2?',
        answers: [
            { text: '4', correct: true },
            { text: '3', correct: false },
            { text: '5', correct: false }
        ]
    },
    {
        question: 'What is the capital of France?',
        answers: [
            { text: 'London', correct: false },
            { text: 'Paris', correct: true },
            { text: 'Berlin', correct: false }
        ]
    },
    // Add more questions as needed
];

startQuiz();
