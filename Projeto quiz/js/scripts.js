//Declaração de variaveis
const question = document.querySelector('#question');
const answersBox = document.querySelector('#answers-box');
const quizzContainer = document.querySelector('#quizz-container');
const scoreContainer = document.querySelector('#score-container');
const letters = ["a", "b", "c", "d"];
let points = 0;
let actualQuestion = 0;

// Perguntas
const questions = [
    {
      "question": "Qual a cor da placa de 1 milhao de inscritos do youtube?",
      "answers": [
        {
          "answer": "dourada",
          "correct": true
        },
        {
          "answer": "prata",
          "correct": false
        },
        {
          "answer": "vermelho",
          "correct": false
        },
        {
          "answer": "azul",
          "correct": false
        },
      ]
    },
    {
      "question": "Uma forma de declarar variável em JavaScript:",
      "answers": [
        {
          "answer": "$var",
          "correct": false
        },
        {
          "answer": "var",
          "correct": true
        },
        {
          "answer": "@var",
          "correct": false
        },
        {
          "answer": "#let",
          "correct": false
        },
      ]
    },
    {
      "question": "Qual o seletor de id no CSS?",
      "answers": [
        {
          "answer": "#",
          "correct": true
        },
        {
          "answer": ".",
          "correct": false
        },
        {
          "answer": "@",
          "correct": false
        },
        {
          "answer": "/",
          "correct": false
        },
      ]
    },
  ]
  
// Substituição do quiz para a primeira pergunta
function init(){
    //cria a primeira pergunta
    createQuestion(0);
}

//cria uma pergunta
function createQuestion(i){
    
    // limpar a questão anterior
    const oldButtons = answersBox.querySelectorAll("button")

    oldButtons.forEach(function(btn){
        btn.remove();
    });

    //alterar texto da pergunta
    const questionText = question.querySelector("#question-text");
    const questionNumber = question.querySelector("#question-number");

    questionText.textContent = questions[i].question;
    questionNumber.textContent = i+1;

    //insere as alternativas

    questions[i].answers.forEach(function(answer, i){

        // cria o tamplete

        const answerTemplate = document.querySelector(".answer-template").cloneNode(true);

        const letterBtn = answerTemplate.querySelector(".btn-letter");
        const answerText = answerTemplate.querySelector(".question-answer");

        letterBtn.textContent = letters[i];
        answerText.textContent = answer['answer'];

        answerTemplate.setAttribute("correct-answer", answer["correct"])

        //remover hide e template class
        answerTemplate.classList.remove("hide")
        answerTemplate.classList.remove("answer-template")

        //inserir a alternativa na tela
        answersBox.appendChild(answerTemplate);

        // Inserir um evento click no botão
        answerTemplate.addEventListener("click", function(){
            checkAnswer(this)
        });
    });

        //incremento de numero da questão
        actualQuestion++;
}

//Verificando resposta do usuario
function checkAnswer(btn){

    //Seleciona todos os butoes
    const buttons = answersBox.querySelectorAll("button");

    //verifica se a resposta esta correta e adiciona a classes nos botoes
    buttons.forEach(function(button){

        if(button.getAttribute("correct-answer") === "true"){
            button.classList.add("correct-answer");

            // checa se o usuario acertou
            if(btn === button) {
                points++;
            }
        }else {
            button.classList.add("wrong-answer")
        }
    })

    //Exibir proxima pergunta
    nextQuestion();

}

//Exibe a proxima pergunta

function nextQuestion(){

    // timer para o usuario ver as respostas

    setTimeout(function(){

        //verifica se ainda há perguntas
        if(actualQuestion >= questions.length){
            // apresenta a msg de sucesso
            showSuccessMessage();
            return;
        }
    
    createQuestion(actualQuestion);
    }, 700)
}

//exige tela final
function showSuccessMessage(){

    hideQuizz();

    //trocar dados da tela de sucesso

    //calcular score

    const score = ((points / questions.length) * 100).toFixed(2);

    const displayScore = document.querySelector("#display-score span");

    displayScore.textContent = score.toString();

    //alterar o numero de perguntas corretas

    const correctAnswers = scoreContainer.querySelector("#correct-answers")
    correctAnswers.textContent = points;

    //alterar total de perguntas
    const totalQuestions = scoreContainer.querySelector("#questions-qty")
    totalQuestions.textContent = questions.length;

}

//mostra ou esconde o score

function hideQuizz() {
    quizzContainer.classList.toggle("hide");
    scoreContainer.classList.toggle("hide");
};

//reiniciar quizz

const restartBtn = document.querySelector("#restart")
restartBtn.addEventListener("click", function(){

    //zerar jogo

    actualQuestion = 0;
    points = 0;
    hideQuizz();
    init();
})


//Iniciação do quiz
init();
  