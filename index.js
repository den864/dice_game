var randomNumber1=Math.floor(Math.random()*6)+1;
var randomDice="dice"+randomNumber1+".png";
var randomImgSource="images/"+randomDice;
document.querySelector(".img1").setAttribute("src",randomImgSource); 

 var randomNumber2=Math.floor(Math.random()*6)+1;
 var randomDice2="dice"+randomNumber2+".png";
 var randomImgSource2="images/"+randomDice2;
 document.querySelector(".img2").setAttribute("src",randomImgSource2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Won";
}else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 Won";
}else{
    document.querySelector("h1").innerHTML="Drawn";
}