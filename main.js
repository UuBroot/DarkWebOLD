function getRandomWebsites() {
    let random = Math.floor(Math.random()*6+0);
    console.log(random);
    switch (random) {
        case 0:
        window.open('https://uubroot.github.io/DarkWeb/pages/FavouriteColor/index.html', '_blank');
            break;
        case 1:
            window.open('https://uubroot.github.io/DarkWeb/pages/SoggyCat/index.html', '_blank');
            break;
        case 2:
            window.open('https://uubroot.github.io/DarkWeb/pages/BlackMarket/index.html', '_blank');
            break;
        case 3:
            window.open('https://uubroot.github.io/DarkWeb/pages/chinese_button/index.html', '_blank');
            break;
        case 4:
            window.open('https://uubroot.github.io/DarkWeb/pages/LoginFun/index.html', '_blank');
            break;   
        case 5:
            window.open('https://uubroot.github.io/DarkWeb/pages/TheBestMovies/index.html', '_blank');
            break;     
    }
}