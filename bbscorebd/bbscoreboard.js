let heading = "Match Score Board"
let team1 = "HOME"
let team2 = "GUEST"
let team1score = 0
let team2score = 0

let headingEl = document.getElementById("hd1") 

let team1El = document.getElementById("h1") 
let team2El = document.getElementById("h2") 

let team1ScoreEl = document.getElementById("score1")
let team2ScoreEl = document.getElementById("score2")



function boardDisplays(){
headingEl.textContent = heading
team1El.textContent = team1
team2El.textContent = team2
}



document.addEventListener("click", function (event) {
    if (event.target.id === "team1Btn1") {
        function1();
    } 
    else if (event.target.id === "team1Btn2") {
        function2();
    } 
    else if (event.target.id === "team1Btn3") {
        function3();
    }
});

document.addEventListener("click", function (event) {
    if (event.target.id === "team2Btn1") {
        function4();
    } 
    else if (event.target.id === "team2Btn2") {
        function5();
    } 
    else if (event.target.id === "team2Btn3") {
        function6();
    }
});


function function1() {
    team1score += 1
    team1ScoreEl.innerText = team1score;
}

function function2() {
    team1score += 2
    team1ScoreEl.innerText = team1score;
}

function function3() {
    team1score += 3
    team1ScoreEl.innerText = team1score;
}

function function4(){
    team2score += 1
    team2ScoreEl.innerText = team2score;
}

function function5(){
    team2score += 2
    team2ScoreEl.innerText = team2score;
}

function function6(){
    team2score += 3
    team2ScoreEl.innerText = team2score;
}





