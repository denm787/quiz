const questions = [
    {
        question: "How many seasons of Friends are there?",
        answers: ['3', '12', '7', '10'],
        correctAnswerIndex: 3,
    } ,
    
    {
        question: "How many times did Ross get divorced?",
        answers: ['1', '3', '4', '2'],
        correctAnswerIndex: 1,
    },

    {
        question: "What is Chandler Bing's middle name?",
        answers: ['Chalenderer','Jack','Luka','Muriel'],
        correctAnswerIndex: 3,
    },
    {
        question: "Who pees on Monica after she is stung by a jellyfish?",
        answers: ['Rachel', 'Chandler', 'Ross', 'Joey'],
        correctAnswerIndex: 1,
    },
    {
        question: "Phoebe finds what in her soda can?",
        answers: ['A human tamb', 'Ball', 'Sun', 'phone'],
        correctAnswerIndex: 0,
    },
    {
        question: "What holiday does Chandler hate?",
        answers: ['New year','St. Patricks Day','Thanksgiving','Helloween'],
        correctAnswerIndex: 2,
    },
];

const questionText = document.getElementById('question');
const answerContainer = document.getElementById('answerContainer');
const correctAnswerIndicator = document.getElementById('correctCount');
const questionsContainer = document.getElementById('questionsContainer');

let correctAnswerCount = 0;
let currentQuestionIndex = 0;

function renderQuestion(index) {
    if(index >= questions.length){
        questionsContainer.innerHTML = '<h1> The End </h1>';
        return;
    }
    questionText.innerHTML = questions[index].question;
    let inputsText = '';
    for( let answerIndex in questions[index].answers) {
        const radioinputHTML = `<input type="radio" name="answer" class="answerInput" value="${answerIndex}"/>
                                <label>${questions[index].answers[answerIndex]}</label>`;
        inputsText = `${inputsText}${radioinputHTML}`;
    }
    answerContainer.innerHTML = inputsText;
}

function checkAnswer(){
    const answerElements = document.getElementsByClassName('answerInput');
    for(const element of answerElements){
        if(element.checked) {
            const userChoice = Number(element.value);
            const correctAnswer = questions[currentQuestionIndex].correctAnswerIndex;
            if(userChoice === correctAnswer) {
                correctAnswerCount++;
            }
        }
    }
    correctAnswerIndicator.innerHTML = `${correctAnswerCount} of ${questions.length}`
}

function nextQuestion(){
    checkAnswer();
    currentQuestionIndex = currentQuestionIndex + 1;
    renderQuestion(currentQuestionIndex);
}

renderQuestion(currentQuestionIndex);