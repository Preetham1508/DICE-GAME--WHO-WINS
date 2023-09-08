var randomNumber1=Math.floor(Math.random() * (6-1)+1);
var randomSrcImg1="images/dice"+randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomSrcImg1);
var randomnumber2=Math.floor(Math.random()*(6-1)+1);
var randomsrcimg2="images/dice"+randomnumber2+".png";
document.getElementById("imgg2").setAttribute("src",randomsrcimg2);

if(randomNumber1 > randomnumber2){
    document.querySelector("h1").textContent="PLAYER-1 WON🤷‍♂️"
}
else if(randomNumber1 < randomnumber2){
    document.querySelector("h1").textContent="PLAYER-2 WON🤷‍♂️"
}
else{
    document.querySelector("h1").innerHTML="DRAW😂-REFRESH🤦‍♂️"
}