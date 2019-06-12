let score = 0;
const questions = [
    {
        question: "What character on the TV show 'South Park' wears a blue hat with a red point on it?",
        choices: ["Cartman", "Stan", "Kenny"],
        correctChoice: "Stan"
    },
    {
        question: "In Dumb and Dumber what city did they have to go back to in order to find the briefcase they lost?",
        choices: ["Aurora", "Aspen", "Augusta"],
        correctChoice: "Aspen"
    },
    {
    question: "What season did the Simpsons enter in 2018?",
    choices: ["30", "33", "29"],
    correctChoice: "30"
    }
]
// answer button funciton  What season did the Simpsons enter in 2018?
function Answer() {
    let radios = document.getElementsByName("choice");
    let checked = false;
    let questionNumber;
    let userResponse;
    let mssg = document.getElementById("mssg");
    //loops through answer dot things aka radios
    for(i = 0; i < radios.length; i++) {
        if(radios[i].checked) {
            checked = true;
            questionNumber = radios[i].getAttribute('data-question')
            questionNumber = parseInt(questionNumber)
            console.log(questionNumber)
            userResponse = radios[i].value; //.value returns options 
        }
    }

    if(userResponse === questions[questionNumber].correctChoice) {
        score++; 
        if(score === 3) {
            document.getElementById("mainContent").innerHTML = "Game Over";
            alert("Winner!! You got " + score + "/" + "3");
            clearTimeout(timerMain);
        }

    }

    // if answer is stan display correct in mssg div
    //if(userResponse === "30") {
      //  document.getElementById("mssg3").innerHTML = "correct"
        //score++;
   // }
    
   // else if (userResponse === "Aspen") {
     //   document.getElementById("mssg2").innerHTML = "correct"
       // score++;
    //}

   //else if (userResponse === "Stan") {
     //   document.getElementById("mssg").innerHTML = "correct!"
       // score++;

    //}

   //else if (userResponse === "10") {
     //   document.getElementById("mssg4").innerHTML = "correct!"
       // score++;

    //}
    // otherwise display wrong 
    // else {
    //    document.getElementById("mssg").innerHTML = "wrong"
   // }

//}
//function winfunction() {
//if (score === 3) {
  //  alert("You got all three correct, you won!");
    //document.getElementById("mainContent") = "You Won!";
//}
}
//countdown timer
let timeLeft = 30;

//use set interval to count down in seconds
let timerMain = setInterval(countfunction, 1000);
//funciton that executes countdown how i want it to
function countfunction() {
    if (timeLeft === 0) {
        document.getElementById("mainContent").innerHTML = "Game Over";
        alert("Time is Up!! You got " + score + "/" + "3");
        clearTimeout(timerMain);
    }
    else {
        document.getElementById("timer").innerHTML = timeLeft + " seconds left to finish";
        timeLeft--;
    }
     {
    if (score === 3) {
            alert("You got all three correct, you won!");
            document.getElementById("mainContent") = "You Won!";
            clearTimeout(timerMain);
        }
        }
}
// list of questions
//alerts and prompts to test code ideas
//let questions = [
  //  {
    //prompt: "What character on the TV show 'South Park' wears a blue hat with a red point on it?\n(a) Cartman\n(b) Stan\n(c) Kenny",
    //answer: "b" 
    //},

    //{
    //prompt: "In Dumb and DUmber, to give back a misplaced briefcase, Harry and Lloyd travel to what US city?\n(a) Aspen\n(b) Austin\n(c) Aurora",
    //answer: "a" 
    //},

    //{
    //prompt: "What season did the Simpsons enter in 2018?\n(a) 31\n(b) 30\n(c) 34",
    //answer: "b" 
   // },
//]

// other variables
//let score = 0; 
 

//loop through array, ask question, get answer



//for (i=0; i = questions.length; i++) {
  //  let response = window.prompt(questions[i].prompt);
    //if (response === questions[i].answer){
      //  score++;
        //alert("correct");
        
    //} 
   // else {
     //   alert("wrong");
    //}
//}

//alert("you got " + score + "/" + questions.length);

