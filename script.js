var startButton = document.getElementById("start-btn")
var questionContainerElement = document.getElementById("question-container")
var quizRules = document.getElementById("rules")
var timerEl = document.getElementById('countdown');

startButton.addEventListener('click',startQuiz)

function countdown() {
    var timeLeft = 100;
    var timeInterval = setInterval(function () {
      timeLeft--;
      timerEl.textContent ="Timer: " + timeLeft; 
  
      if(timeLeft === 0) {
        clearInterval(timeInterval);
      }
    }, 1000);
  }

 countdown();

function startQuiz() {
    startButton.classList.add('hide')
    questionContainerElement.classList.remove('hide')
    quizRules.classList.add('hide')
}

//function setNextQuestion() {}

//function selectAnswer() {}

