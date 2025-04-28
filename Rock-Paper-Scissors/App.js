let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const copScorePara=document.querySelector("#comp-score");


const genCompGame=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame=()=>{
    msg.innerText="It's a Draw!";
    msg.style.backgroundColor="blue";


}

const showWinner=(userWin)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText="You Win!";
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        copScorePara.innerText=compScore;
        msg.innerText="You Lose.";
        msg.style.backgroundColor="red";

    }
}

const playGame=(userChoice)=>{
    const compChoice=genCompGame();

    if(userChoice==compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin = compChoice==="paper" ? false : true;
        }else if(userChoice==="paper"){
            userWin = compChoice==="scissors" ? false : true;
        }
        else{
            userWin = compChoice==="rock" ? false : true;
        }
        showWinner(userWin);
    }
    

};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice)
    });
});