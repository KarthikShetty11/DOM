
/*
var diceRoll = Math.floor(Math.random()*6)+1;

if( diceRoll === 1)
{
    document.querySelector(".dice .img1").setAttribute("src", "images/dice1.png");
}
else if( diceRoll === 2)
{

    document.querySelector(".dice .img1").setAttribute("src", "images/dice2.png");
}
else if( diceRoll === 3)
{
    document.querySelector(".dice .img1").setAttribute("src", "images/dice3.png");
}
else if( diceRoll === 4)
{
    document.querySelector(".dice .img1").setAttribute("src", "images/dice4.png");
}
else if( diceRoll === 5)
{
    document.querySelector(".dice .img1").setAttribute("src", "images/dice5.png");
}
else
{
    document.querySelector(".dice .img1").setAttribute("src", "images/dice6.png");
}

var diceRoll2 = Math.floor(Math.random()*6)+1;

if(diceRoll2 === 1)
{
    document.querySelector(".dice .img2").setAttribute("src", "images/dice1.png");
}
else if(diceRoll2 === 2)
{

    document.querySelector(".dice .img2").setAttribute("src", "images/dice2.png");
}
else if(diceRoll2 === 3)
{
    document.querySelector(".dice .img2").setAttribute("src", "images/dice3.png");
}
else if(diceRoll2 === 4)
{
    document.querySelector(".dice .img2").setAttribute("src", "images/dice4.png");
}
else if(diceRoll2 === 5)
{
    document.querySelector(".dice .img2").setAttribute("src", "images/dice5.png");
}
else
{
    document.querySelector(".dice .img2").setAttribute("src", "images/dice6.png");
}
*/


//Player 1 diceRoll
var diceRoll = Math.floor(Math.random()*6)+1;
var newImg = "images/dice"+diceRoll+".png";
document.querySelector(".img1").setAttribute("src", newImg);   

//Player 2 diceRoll
var diceRoll2 = Math.floor(Math.random()*6)+1;
var newImg2 = "images/dice"+diceRoll2+".png";
document.querySelector(".img2").setAttribute("src",newImg2);  

//print result based on if condition
if ( diceRoll > diceRoll2)
{   
    document.querySelector("h3").textContent="🎉Player 1 is the Winner";
    
}
else if(diceRoll < diceRoll2){
    document.querySelector("h3").textContent ="Player 2 is the Winner🎉";
}
else
{
    document.querySelector("h3").textContent="Its a Draw✌"; 
}
