const quizContainer = document.getElementById("js-quiz");
const submitBtn = document.getElementById("submit");
const resultsContainer = document.getElementById("results");

const myQuestions = [
  {
    Q: "What is the Capital of West Bengal?",
    answers: {
      a: "Kolkata",
      b: "Bengaluru",
      c: "Lahore",
    },
    correctAnswer: "a",
  },
  {
    Q: "What is the Capital of India?",
    answers: {
      a: "Kolkata",
      b: "Delhi",
      c: "Seoul",
    },
    correctAnswer: "b",
  },
  {
    Q: "Which one of these places is called 'pink city' ?",
    answers: {
      a: "Hydrabad",
      b: "Bhubaneswar",
      c: "Jaipur",
    },
    correctAnswer: "c",
  },
];

function buildQuiz(){
  const output = [];

  myQuestions.forEach((currentQuestion, index) => {
    const answers = [];

    for (letter in currentQuestion.answers) {
      answers.push(
        `<label><input type="radio" name="Question${index}" value="${letter}"/>
             ${letter} : ${currentQuestion.answers[letter]} </label>`
      );
    }
  //  console.log(answers)
    output.push(
      ` <div class="Question">
         ${currentQuestion.Q}
        </div>
        <div class="Answers">
         ${answers.join("")}
        </div> `
    );
  });
  // console.log(output)
  quizContainer.innerHTML=output.join("")
};

function showResults(){
 const answerContainers= quizContainer.querySelectorAll(".Answers");


 let numCorrect=0

 myQuestions.forEach((currentQuestion,index)=>{
  const answerContainer = answerContainers[index]

  const selector=`input[name=Question${index}]:checked`
  const userAnswer=(answerContainer.querySelector(selector)||{}).value;
  // const answerinput=answerContainer.querySelectorAll("label")[index];
  // console.log(answerinput)
  // const checkedInput=(answerinput.checked==1)
  // console.log(checkedInput)

  // const userAnswer=answer.value

  if(userAnswer===currentQuestion.correctAnswer){
   numCorrect++;
  // answer.style.color="green"
  answerContainers[index].style.color="green"
}else{
  // answer.style.color="red"
  answerContainers[index].style.color="red"
  }
 })

 resultsContainer.innerHTML=`<p> ${numCorrect} out of ${myQuestions.length} is correct </p>`
};

buildQuiz();

submitBtn.addEventListener("click", showResults);
