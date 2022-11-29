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

  