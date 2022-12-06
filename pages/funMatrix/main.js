let count = 0;
function print(){
    count++;
    document.getElementById('text').innerHTML += Math.round(Math.random()*9000+1);
}
setInterval(function(){
    if (count > 50){
        document.getElementById('text').innerHTML += "<br>";
        count = 0;
    }    
    print();
},10);
