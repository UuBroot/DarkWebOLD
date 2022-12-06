let count = 0;
let cake = false;

function turnToCake(img){
    if(cake == false){
        cake = true;
        count++;
        img.src = "cake.png"
        img.style.pointer = "default"
        if(count == 1){
            document.getElementById('line').innerHTML = "Sofa is cake"
            setTimeout(function(){
                img.src = "snickers.avif"
                document.getElementById('line').innerHTML = ""
                cake = false;
            }, 2000)
        }
        else if(count == 2){
            document.getElementById('line').innerHTML = "Snickers is cake"
            setTimeout(function(){
                img.src = "lasang.png"
                document.getElementById('line').innerHTML = ""
                cake = false;
            }, 2000)
        }
        else if(count == 3){
            document.getElementById('line').innerHTML = "Lasang is cake"
            setTimeout(function(){
                img.src = "pc.png"
                document.getElementById('line').innerHTML = ""
                cake = false;
            }, 2000)
        }
        else if(count == 4){
            document.getElementById('line').innerHTML = "PC is cake"
            setTimeout(function(){
                img.src = "cat.png"
                document.getElementById('line').innerHTML = ""
                cake = false;
            }, 2000)
        }
        else if(count == 5){
            document.getElementById('line').innerHTML = "Cat is cake"
            setTimeout(function(){
                img.src = "erde.png"
                document.getElementById('line').innerHTML = ""
                cake = false;
            }, 2000)
        }
        else if(count == 6){
            document.getElementById('line').innerHTML = "Earth is cake"
            setTimeout(function(){
                img.src = "YOU.png"
                document.getElementById('line').innerHTML = ""
                cake = false;
            }, 2000)
        }
        else if(count == 7){
            document.getElementById('jumpscare').style.display = "block";
            document.getElementById('jumpscare').style.animationName = "jumpscare"
            document.getElementById('body').style.backgroundColor = "red";
            setTimeout(function(){
                document.getElementById('jumpscare').style.display = "none";
                document.getElementById('body').style.backgroundColor = "black";
                document.getElementById('body').innerHTML = ""
                quotes()
            }, 950)
        }
    }
}


function quotes(){
    document.getElementById('body').innerHTML += "<h1>Everything is cake.</h1>"
    setTimeout(function(){
        document.getElementById('body').innerHTML += "<h1>But the cake is a lie.</h1>"
    }, 2500)
    setTimeout(function(){
        document.getElementById('body').innerHTML += "<h1>Everything is a lie.</h1>"
    }, 5000)
    setTimeout(function(){
        document.getElementById('body').innerHTML += "<h1>You are a lie.</h1>"
    }, 7500)
    setTimeout(function(){
        document.getElementById('body').innerHTML += "<h1>You are a lie.</h1>"
    }, 11000)
    setTimeout(function(){
        document.getElementById('body').innerHTML += '<div onclick="painKiller()" class="killButton">Click here to kill yourself</div>'
    }, 15000)
}   

function painKiller(){
    document.getElementById('body').innerHTML = '<img src="microwave.gif">'
    setTimeout(function(){
        document.getElementById('body').innerHTML = '<div id="the_holy"></div>'
        document.getElementById('body').style.animationName = "backgroundKiller"
    }, 1890)
    setTimeout(function(){
        document.getElementById('body').style.animationName = "Placeholder"
        document.getElementById('body').style.backgroundColor = "black"
        document.getElementById('the_holy').innerHTML = '<h1 style="color: black; font-size: 8em; margin: 0;">THE HEAVEN</h1>'
    }, 6390)
}
