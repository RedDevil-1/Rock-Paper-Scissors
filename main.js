computerPlay =()=>{
const game=["Rock", "Paper", "Scissor"];
var result=game[Math.floor(Math.random()*3)];

return result;
}
var player=0;
var computer=0;
round=(playerSelection,computerSelection)=>{
    computerSelection=computerPlay().toLowerCase();
    playerSelection=playerSelection.toLowerCase();
    if(
        (playerSelection=="paper"&& computerSelection=="rock") ||
        (playerSelection=="rock"&& computerSelection=="scissor") ||
        (playerSelection=="scissor"&& computerSelection=="paper")   
        ){
            console.log("computer selection is \"" + computerSelection +"\"");
        console.log("player selection is \"" + playerSelection +"\"");
        console.log("\""+playerSelection +"\" beats \"" + computerSelection + "\" hence player won");
        player++;
        console.log("player point is \""+ player +"\" ");
        console.log("computer points is \"" + computer +"\" ");
        
    }
    else if(
        (playerSelection=="rock"&& computerSelection=="paper") ||
        (playerSelection=="scissor"&& computerSelection=="rock") ||
        (playerSelection=="paper"&& computerSelection=="scissor")
      ){
        console.log("computer selection is \"" + computerSelection +"\" ");
        console.log("player selection is \"" + playerSelection +"\" ");
        console.log ("\""+computerSelection+"\" beats \"" + playerSelection+ "\" hence computer won");
        computer++;
        console.log("player point is \""+ player +"\" ");
        console.log("computer points is \"" + computer +"\" ");
    }
    else if(playerSelection !=="paper" | playerSelection !=="rock" | playerSelection !=="scissor"){
        console.log(playerSelection);
        console.log("  Error:  Enter valid input");
    }
    else{
        console.log(computerSelection);

        console.log("It's a DRAW")
    }
    return 0;
}
while(player !=5 || computer !=5){
    var train=""
    train=prompt("Enter your choice for the game");
    round(train,computerPlay);
    if(computer ==5){
        console.log(" ********* comupter won ***********");
        break;
    }
    else if(player==5){
        console.log(" ********* player won ***********");
        break;
    }
}
