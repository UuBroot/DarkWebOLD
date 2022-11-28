let userName;
let mail;
let password;

function signUp() {
    console.log(document.getElementById("userName").value);
    if (document.getElementById("userName").value != "" && document.getElementById("mail").value != "" && document.getElementById("password").value != "") {

        userName = document.getElementById("userName").value;
        mail = document.getElementById("mail").value;
        password = document.getElementById("password").value;

        document,getElementById("body").innerHTML = `
        
        `;

    } else {
        document.getElementById("failText").innerHTML = "Please fill out every input field!"
    }
}

function login() {
    
}