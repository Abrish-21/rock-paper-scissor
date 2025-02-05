// the first step  is writing a logic that can serve as a computer player
const choice  = ["rock","paper","scissor"]

function computerPlayer()
{
    const index = Math.floor(Math.random()* 3);
    return choice[index]

}
// console.log(computerPlayer());
// console.log(getComputerChoice(3));
// step 2 is adding logic for a human player
function humanPlayer()
{
    let human  = prompt("show your hand: ");
    return human;

}
// console.log(humanPlayer());
// the 3rd step is making a 1 round play
score_pl1 = 0;
score_pl2 = 0;

function beginPlay(player1, player2)
{
     if (player1 == "rock")
        {
        if(player2 == "scissor")
        {
            score_pl1 +=1;
            return "rock beats scissor!";
        }
        else if(player2 == "paper"){
            score_pl2 +=1;
            return "paper beats rock!";
        }
        else{
            return "Draw";
        }

    }
    else if (player1 == "scissor")
    {
        if(player2 =="rock")
        {
            score_pl2 +=1;
            return "rock beats scissor!";
        }
        else if(player2 == "paper")
        {
            score_pl1 +=1;
            return "scissor beats paper!";
        }


    }
    else if (player1 == "paper"){
        if (player2 == "scissor")
        {
            score_pl2 +=1;
            return "scissor beats paper!";
        }
        else if(player2 == "rock")
        {
            score_pl1 +=1;
            return "paper beats rock";
        }

    }


}
console.log(beginPlay(humanPlayer(), computerPlayer()))
// add winner function
function winner(){
    for(let i=0; i< 5;i++)
    {
    beginPlay(humanPlayer(),computerPlayer());
}
if (score_pl1 > score_pl2){
    return "score: " + score_pl1 + "/"+ score_pl2+   "  :You have won!";
}
else if (score_pl2 > score_pl1){
    return "score:" + score_pl1 + "/"+ score_pl2 + "  :You have lost to the computer!";
}
else{
    return "Draw!";
}
}
console.log(winner(score_pl1,score_pl2));
