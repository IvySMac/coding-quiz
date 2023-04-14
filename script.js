var startButton = document.getElementById("start-btn")
var questionContainerElement = document.getElementById("question-container")
var quizRules = document.getElementById("rules")
var timerEl = document.getElementById("countdown");
var index = 0;
var score = 0;
var timeLeft = 100;
var answer= ["String","Cascading Style Sheets","To create the structure of a site","A hashtag","At the bottom","Square brackets"];
startButton.addEventListener('click',startQuiz)

var questions = [
  {
    text:"In Javascript, what always goes in quotes?",
    choices: ["Boolean", "String", "Number", "Document"],
    answer: "String"
  },
  {
    text:"What does CSS stand for?",
    choices: ["Creating Style Spaces", "Current Starter Sheet", "Cascading Style Sheets", "None of the Above"],
    answer: "Cascading Style Sheets"
  },
  {
    text:"What is the purpose of HTML?",
    choices: ["To create the style of a site", "To add functionality to a site", "To create the structure of a site", "None of the Above"],
    answer: "To create the structure of a site"
  },
  {
    text:"What symbol do you use in CSS to target an id?",
    choices: ["A hashtag", "A period", "A dollar sign", "Nothing"],
    answer: "A hashtag"
  },
  {
    text:"Where does the link to your Javascript need to be in an HTML file?",
    choices: ["At the top", "You don't need to link your Javascript", "Somewhere in the middle", "At the bottom"],
    answer: "At the bottom"
  },
  {
    text:"When creating an array for a variable, it needs to be contained in what?",
    choices: ["Square brackets", "Parentheses", "Quotes", "Curly brackets"],
    answer: "Square brackets"
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
    if (index===questions.length) {
      return(startQuiz);
    }
  setQuestion()
  })
  answerButtons.appendChild(button)
})

}



