const form = document.getElementById("form");

form.addEventListener("submit", handleSubmut);

let status1 = document.getElementById("status");
let attempt = document.getElementById("attempt");
let result = document.getElementById("result");


const Guess = {
    max: 10,
    attemptsNumber: 0,
    numberDraw: function randomValue(){
        return Math.round(Math.random() * this.max)
    }
};

let numberDraw = Guess.numberDraw();


function updateAttempt(attempt, value){
    attempt.innerHTML = "Tentativa: " + value
};

function handleSubmut(e){
    e.preventDefault();
    let kick = document.getElementById("kick").value;

    if(!kick){
        alert("Digite algum valor!")
        return;
    };

    updateAttempt(attempt, ++Guess.attemptsNumber);

    if(numberDraw == kick){
        playAgain();
        status1.innerHTML = "Parabéns voce acertou!"
        result.style.transition = '0.4s';
        result.style.backgroundColor = '#37c978'
        result.style.color = '#fff'

        status1.style.color = '#fff'
        clear();
    } else if(numberDraw > kick){
        status1.innerHTML = "O número é maior!";
        status1.style.color = "#de4251"
        clear();
    } else if(numberDraw < kick){
        status1.innerHTML = "O número é menor!";
        status1.style.color = "#de4251"
        clear();
    }
};

function playAgain(){
    document.getElementById("btnRestart").style.display = 'flex';
};

function restart(){
    document.location.reload(true);
};

function clear(){
    document.getElementById("kick").value = ""
}