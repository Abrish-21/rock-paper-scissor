// the first step  is writing a logic that can serve as a computer player
const choice  = ["rock","paper", "scissor"]

function getComputerChoice()
{
    const index = Math.floor(Math.random()* 3);
    return choice[index]

}
console.log(getComputerChoice())
// console.log(getComputerChoice(3));
// step 2 is adding logic for a human player
function humanPlayer()
{
    const human  = prompt("show your arm: ");
    return "you a " + human;

}
console.log(humanPlayer());
