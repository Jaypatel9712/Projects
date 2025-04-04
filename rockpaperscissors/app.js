let userscore=0;
let comscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const  userScore =document.querySelector("#userscore");
const  comScore =document.querySelector("#comscore");
document.getElementById("resbtn").addEventListener("click" ,reset);
const gencomchoice = () =>{
    const options =["Stone" , "scissors" , "paper"];
    const idx = Math.floor(Math.random()*3);
    return options[idx];
}
const drawgame = () =>{
    msg.innerText="Game was draw!!";
    msg.style.backgroundColor = "Blue";


}
const showwiner = (userchoice) =>{
    if(userchoice){
        userscore++;
        userScore.innerText = userscore;
        msg.innerText="You Win!!";
        msg.style.backgroundColor = "green";
    }
    else{
        comscore++;
        comScore.innerText=comscore;
        msg.innerText="You Loss!!";
        msg.style.backgroundColor = "red";


    }
}
const playgame = (userchoice) =>{
    const comchoice =   gencomchoice();

    if(userchoice === comchoice)
    {
        drawgame();
    }
    else{
        let usserwin = true;
        if(userchoice === "Stone")
        {    
            usserwin = comchoice === "paper" ? false : true;    
        }    
        else if(userchoice === "paper")
        {
            usserwin = comchoice === "scissors" ? false : true ;
        }
        else{
            usserwin = comchoice === "Stone" ? false : true;
        }
        showwiner(usserwin);    
    }
}
function reset() {
    userscore = 0;
    comscore = 0;
    userScore.innerText = userscore;
    comScore.innerText = comscore;
    msg.innerText = "Game reset! Play again!";
}
choices.forEach((choice)=>{
    choice.addEventListener("click", () =>{
        const userchoice= choice.getAttribute("id");
        playgame(userchoice);
    })
})