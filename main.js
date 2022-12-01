
function getRandomWebsites() {
    let urls = [
        'pages/SoggyCat/index.html', 'pages/BlackMarket/index.html', 'pages/chinese_button/index.html', 'pages/LoginFun/index.html',
        'pages/TheBestMovies/index.html', 'pages/boned/index.html', 'pages/BlueRooms/index.html', 'pages/WeWantYourData/index.html'
    ];


    let random = Math.floor(Math.random() * urls.length);
    console.log(random);
    window.open(urls[random], '_blank');
}
