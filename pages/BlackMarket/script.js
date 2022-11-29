let itemNames = ['Nerf', 'Snickels', 'Switch', 'Sebastian Kurz', 'Africa', 'CO(K)C'];
let itemImages = ['cursed_Nerf.webp', 'snickles2.png', 'cursed_Switch2.jpg', 'SebastianKurz.jpeg', 'Africa.png', 'Hog.jpg'];
let itemDescriptions = ['When your kids keep winning', 'When you hungry (only recommended for pregnant women (and men))', 
                        'The real :o', 'Gott und Kanzler', '(Water not included)', 'Slavery...'];

function openItem(itemID) {
    console.log("lmao");
    document.getElementById("body").innerHTML = `
    <h1 id="itemName"></h1>
    <h2 id="itemDescription"></h2>
    <center><img width="20%" src="img/` + itemImages[itemID] + `"></center>
    <br>
    <center><button onclick="buy(` + itemID + `)">Buy now!</button></center>
    <br><br>
    <center><button onclick="location.reload()">Back</button></center>
    `;

    document.getElementById("itemName").innerHTML = itemNames[itemID];
    document.getElementById("itemDescription").innerHTML = itemDescriptions[itemID];
}

function buy(itemID) {
    window.open('donate.html', '_blank')
}
// When the user clicks on <div>, open the popup
let userLocation;
loadAlerts();
function loadAlerts(){
    alert("Do you like it here");
    userLocation = prompt("Please enter your location:", "");
    const successCallback = (position) => {
        console.log(position);
      };
      const errorCallback = (error) => {
        console.log(error);
      };  
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
}

  