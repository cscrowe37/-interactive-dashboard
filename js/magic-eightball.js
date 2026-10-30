// Put your JavaScript code in this file
//debug1
const answers = new Array("yes","no","maybe","in another life","only after daeth","if you will it");


function displayAnswers(){
    let index = Math.floor(Math.random()*answers.length);
    selected = answers[index];
    document.getElementById("circle").innerHTML = selected;
    document.getElementById("circle").style.display = "inline";//this needs to be checked


}
const ball = document.getElementById("ball");
ball.addEventListener("mousedown",mousedownfunction);

function mousedownfunction(){
    console.log("mousedownfunc");
    if (document.getElementById("question") == null){
        window.alert("Please enter a question");
    }
    else{
        displayAnswers();
    }
}
const reset = document.getElementById("reset");
reset.addEventListener("click",clickresetfunction);

function clickresetfunction(){
    document.getElementById("circle").style.display = "none";//this also needs to be checked
}


    
