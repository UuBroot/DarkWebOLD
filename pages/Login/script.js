let userName;
let mail;
let password;

function signUp() {
    console.log(document.getElementById("userName").value);
    if (document.getElementById("userName").value != "" && document.getElementById("mail").value != "" && document.getElementById("password").value != "") {

        userName = document.getElementById("userName").value;
        mail = document.getElementById("mail").value;
        password = document.getElementById("password").value;

        document.getElementById("body").innerHTML = `
        <h1>Log into your Darkest Web account</h1>
        <h3>username</3h>
        <center><input type="text" name="userName" id="userName" placeholder="example123"></center>
        <h3>password</3h>
        <center><input type="password" name="password" id="password" placeholder="hunter2"></center>

        <br>
        <h3 id="failText" style="color: red;"></h3>

        <br>
        <center><Button onclick="login()">Login</Button></center>
        `;

    } else {
        document.getElementById("failText").innerHTML = "Please fill out every input field!";
    }
}

function login() {
    if (document.getElementById("userName").value == userName && document.getElementById("password").value == password) {

        window.open("../FavouriteColor/index.html", "_self");

    } else {
        document.getElementById("failText").innerHTML = "Please enter the right login information!";
    }
}