// the first step  is writing a logic that can serve as a computer player
const choice  = ["rock","paper", "scissor"]

function getComputerChoice()
{
    const index = Math.floor(Math.random()* 3);
    return choice[index]

}
console.log(getComputerChoice())
// console.log(getComputerChoice(3));
