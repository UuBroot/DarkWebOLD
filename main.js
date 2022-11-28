function getRandomWebsites() {
    let random = Math.floor(Math.random()*2+0);
    console.log(random);
    switch (random) {
        case 0:
        window.open('https://uubroot.github.io/DarkWeb/pages/FavouriteColor/index.html');
            break;
        case 1:
            window.open('https://uubroot.github.io/DarkWeb/pages/soggyCat/index.html');
            break;
    }
}
