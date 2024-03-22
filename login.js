let email = document.getElementById("email");
let password = document.getElementById("password")

function fetchOriginData() {
    let userCred = JSON.parse(localStorage.getItem("userData"));
    if((email.value)==(userCred.username)&&(password.value==userCred.password))
    {
        open("homepage.html")
    }
    else
    {
        alert("WRONG CREDENTIALS");
    }
}


// function getUserData()
// {
//     console.log(localStorage.getItem("userInfo"));
// }
// getUserData();