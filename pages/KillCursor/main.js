let body = document.getElementById("body");
function randomNumber(){
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
  return  getRandomInt(49)+1;
}
function changeCursor() {
    console.log("function call");
    let i = 0;
  while(i < 10000){
    body.style = 'cursor: default;'
    setTimeout(function(){
        body.style = 'cursor: pointer;'
        console.log("Switch");
    },randomNumber())
    setTimeout(function(){
        body.style = 'cursor: text;'
        console.log("Switch");
    },randomNumber())
    setTimeout(function(){
        body.style = 'cursor: wait;'
        console.log("Switch");
    },randomNumber())
    setTimeout(function(){
        body.style = 'cursor: help;'
        console.log("Switch");
    },randomNumber())
    setTimeout(function(){
        body.style = 'cursor: process;'
        console.log("Switch");
    },randomNumber())
    setTimeout(function(){
        body.style = 'cursor: crosshair;'
        console.log("Switch");
    },randomNumber())
    setTimeout(function(){
        body.style = 'cursor: move;'
        console.log("Switch");
    },randomNumber())
    setTimeout(function(){
        body.style = 'cursor: zoom-in;'
        console.log("Switch");
    },randomNumber())
    setTimeout(function(){
        body.style = 'cursor: grab;'
        console.log("Switch");
    },randomNumber())
    setTimeout(function(){
        body.style = 'cursor: not-allowed;'
        console.log("Switch");
    },randomNumber())
    i++;
  }
}
