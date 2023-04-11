var startButton = document.getElementById("start-btn")
var questionContainerElement = document.getElementById("question-container")
var quizRules = document.getElementById("rules")
var timerEl = document.getElementById("countdown");
var index = 0;
var score = 0;
var timeLeft = 100;

startButton.addEventListener('click',startQuiz)

var questions = [
  {
    text:"Question 1",
    choices: ["answer 1", "answer 2", "answer 3", "answer 4"],
    answer: "answer 1"
  },
  {
    text:"Question 2",
    choices: ["answer 1", "answer 2", "answer 3", "answer 4"],
    answer: "answer 1"
  },
  {
    text:"Question 3",
    choices: ["answer 1", "answer 2", "answer 3", "answer 4"],
    answer: "answer 1"
  },
  {
    text:"Question 4",
    choices: ["answer 1", "answer 2", "answer 3", "answer 4"],
    answer: "answer 1"
  },
  {
    text:"Question 5",
    choices: ["answer 1", "answer 2", "answer 3", "answer 4"],
    answer: "answer 1"
  },
  {
    text:"Question 6",
    choices: ["answer 1", "answer 2", "answer 3", "answer 4"],
    answer: "answer 1"
  }
]


function countdown() {
    var timeInterval = setInterval(function () {
      timeLeft--;
      timerEl.textContent ="Timer: " + timeLeft; 
  
      if(timeLeft === 0) {
        clearInterval(timeInterval);
      }
    }, 1000);
  }



function startQuiz() {
    startButton.classList.add('hide')
    questionContainerElement.classList.remove('hide')
    quizRules.classList.add('hide')
    setQuestion()
    countdown();
}

function setQuestion() {
  document.getElementById("question").textContent=questions[index].text
var answerButtons = document.getElementById("answer-buttons")
answerButtons.innerHTML = ""
questions[index].choices.forEach(function(choice){
  var button = document.createElement("button")
  button.textContent = choice;
  button.classList.add("btn-style")
  button.setAttribute("value", choice)
  button.addEventListener('click', function(){
    if (this.value===questions[index].answer){
      //add 1 to score

    } else {timeLeft-=10}
    index++
  setQuestion()
  })
  answerButtons.appendChild(button)
})

}

//function selectAnswer() {}

