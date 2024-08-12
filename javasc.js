let us=0;
let co=0;
let score = document.querySelector(".score p");
let score2 = document.querySelector(".score2 p");
let msg=document.querySelector("#msg");
let box= document.querySelectorAll(".imgcontainer > div");
const ComputerChoice =()=>{
    const options=['rock','paper','scissor'];
      const randid = Math.floor(Math.random() * 3);
 return options[randid]; 
    
}

const drawGame= ()=>{
console.log('your gamw was draw');
msg.innerText="your Game Was a Draw"
}
const playGame = (userChoice) => {
    console.log("user choice =",userChoice);
    //computer choice
    const compChoice= ComputerChoice();
    console.log("comp choice =",compChoice);

    if(userChoice===compChoice){
        drawGame();
        
    }
    else{
        let userWin= true;
        if(userChoice==='rock'){
            userWin =compChoice ==='paper'? false:true;
        }
    
    else if(userChoice==='paper'){
            userWin =compChoice ==='scissor'? false:true;
        }
        else {
            userWin =compChoice ==='rock'? false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}
const showWinner = (userWin, userChoice, compChoice)=>{
    if(userWin){
        us++;
        score.innerText= us;
        console.log('you win');
        msg.innerText=`You Win! your ${userChoice} beats ${compChoice} `;
    }
    else{
        co++;
        score2.innerText=co;
        console.log("you lost");
        msg.innerText=`You Loose! your ${userChoice} lost to ${compChoice} `;
    }
}





box.forEach((choice)=>{

    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
 
        playGame(userChoice);
    })
})