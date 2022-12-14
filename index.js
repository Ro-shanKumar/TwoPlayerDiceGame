var randomNumber1 = Math.floor(Math.random()*6)+1;
var img1_sel = document.querySelector(".img1");
if(randomNumber1 === 1){
  img1_sel.setAttribute("src","images/dice1.png");
}
if(randomNumber1 === 2){
  img1_sel.setAttribute("src","images/dice2.png");
}
if(randomNumber1 === 3){
  img1_sel.setAttribute("src","images/dice3.png");
}
if(randomNumber1 === 4){
  img1_sel.setAttribute("src","images/dice4.png");
}
if(randomNumber1 === 5){
  img1_sel.setAttribute("src","images/dice5.png");
}
if(randomNumber1 === 6){
  img1_sel.setAttribute("src","images/dice6.png");
}
var randomNumber2 = Math.floor(Math.random()*6)+1;
var img2_sel = document.querySelector(".img2");
if(randomNumber2 === 1){
  img2_sel.setAttribute("src","images/dice1.png");
}
if(randomNumber2 === 2){
  img2_sel.setAttribute("src","images/dice2.png");
}
if(randomNumber2 === 3){
  img2_sel.setAttribute("src","images/dice3.png");
}
if(randomNumber2 === 4){
  img2_sel.setAttribute("src","images/dice4.png");
}
if(randomNumber2 === 5){
  img2_sel.setAttribute("src","images/dice5.png");
}
if(randomNumber2 === 6){
  img2_sel.setAttribute("src","images/dice6.png");
}

// winning and draw condition
if(randomNumber1 > randomNumber2){
  document.querySelector("h1").textContent = "🚩 Player 1 wins";
}else if(randomNumber1 < randomNumber2){
  document.querySelector("h1").textContent = "Player 2 wins 🚩";
}else{
  document.querySelector("h1").textContent = "Draw";
}
