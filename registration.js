function registerUser() {
    let un = document.getElementById("email");
    let pass = document.getElementById("pass");
    let add = document.getElementById("address");
    let gd = document.getElementById("graduation");
    let brnch = document.getElementById("branch");
    let yop = document.getElementById("yop");

    if (!validateForm(un, pass, add, gd, brnch, yop)) {
        return; // Stop execution if form validation fails
    }

    let userData = {
        username: un.value,
        password: pass.value,
        address: add.value,
        graduation: gd.value,
        branch: brnch.value,
        yop: yop.value
    };

    saveData(userData);
    clearField(un, pass, add, gd, brnch, yop);
    alert("User registered successfully!");
}

function validateForm(un, pass, add, gd, brnch, yop) {
    // Perform basic validation here
    if (!un.value || !pass.value || !add.value || !gd.value || !brnch.value || !yop.value) {
        alert("Please fill in all fields.");
        return false;
    }
    return true;
}

function clearField(un, pass, add, gd, brnch, yop) {
    un.value = "";
    pass.value = "";
    add.value = "";
    gd.value = "";
    brnch.value = "";
    yop.value = "";
}

function saveData(userData) {
    localStorage.setItem("userData", JSON.stringify(userData));
}
