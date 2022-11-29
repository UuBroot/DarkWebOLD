let itemNames = ['Nerf', 'Snickels', 'Switch'];
let itemImages = ['cursed_Nerf.webp', 'snickles2.png', 'cursed_Switch2.jpg'];

function openItem(itemID) {
    console.log("lmao");
    document.getElementById("body").innerHTML = `
    <h1 id="itemName">` + itemNames[itemID] + `</h1>
    <center><img width="20%" src="img/` + itemImages[itemID] + `"></center>
    <br>
    <center><button onclick="buy(` + itemID + `)">Buy now!</button></center>
    `;

    document.getElementById("itemName").innerHTML = itemNames[itemID];
}

function buy(itemID) {
    window.open('donate.html', '_blank')
}