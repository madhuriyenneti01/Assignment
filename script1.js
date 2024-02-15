let Username = document.getElementById("Username");
let Password = document.getElementById("Password");
let ConfirmPassword = document.getElementById("ConfirmPassword");
function execute() {

        if(ConfirmPassword.value === "1234") {
    alert("Correct Password!!");
        }

    else{
        alert("Incorrect Password");

    }
}