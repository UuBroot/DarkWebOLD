function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
}

function bone() {
    document.getElementById("start_img").style.display = "none";
    document.getElementById("button").style.display = "none";
    for (let i = 0; i < 500; i++) {
        document.getElementById("body").innerHTML += `
        <img src="./bone${getRandomInt(9)}.gif" width="20%">
        `
    }
    for (let i = 0; i < 100; i++) {
        setTimeout(function() {
            for (let i = 0; i < 500; i++) {
                document.getElementById("body").innerHTML += `
                <img src="./bone${getRandomInt(9)}.gif" width="20%">
                `
            }
        }, 20000)

    }

    var audio = new Audio('./Berserk\ Skeleton\ Meme\ _Extended_.mp3');
    audio.play();

}