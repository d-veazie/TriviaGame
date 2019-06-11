let score = 0;
// answer button funciton
function Answer() {
    let radios = document.getElementsByName("choice");
    let checked = false;
    let userResponse;
    let mssg = document.getElementById("mssg");
    //loop 
    for(i = 0; i < radios.length; i++) {
        if(radios[i].checked) {
            checked = true;
            userResponse = radios[i].value; //.value returns options 
        }
    }
    // if answer is stan display correct in mssg div
    if(userResponse === "30") {
        document.getElementById("mssg3").innerHTML = "correct"
        score++;
    }
    
    if (userResponse === "Aspen") {
        document.getElementById("mssg2").innerHTML = "correct"
        score++;
    }

    if (userResponse === "Stan") {
        document.getElementById("mssg").innerHTML = "correct!"
        score++;

    }
    // otherwise display wrong 
    else {
        document.getElementById("mssg").innerHTML = "wrong"
    }

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

