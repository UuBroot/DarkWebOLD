function getRandomWebsites() {
    let random = Math.floor(Math.random()*6+0);
    console.log(random);
    switch (random) {
        case 0:
        window.open('pages/FavouriteColor/index.html', '_blank');
            break;
        case 1:
            window.open('pages/SoggyCat/index.html', '_blank');
            break;
        case 2:
            window.open('pages/BlackMarket/index.html', '_blank');
            break;
        case 3:
            window.open('pages/chinese_button/index.html', '_blank');
            break;
        case 4:
            window.open('pages/LoginFun/index.html', '_blank');
            break;   
        case 5:
            window.open('pages/TheBestMovies/index.html', '_blank');
            break;     
    }
}