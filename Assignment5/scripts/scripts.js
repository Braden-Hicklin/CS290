let showPassFlip = false;

function showPass() {
    switch(showPassFlip) {
        case false:
            document.getElementById("password").type="text";
            showPassFlip = true;
            break;
        case true:
            document.getElementById("password").type="password";
            showPassFlip = false;
            break;
    }
    
}