document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('access-form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        checkAccess();
    });
});

function checkAccess() {
    var allowedNames = {
        "as2022084": "QI4430",
"as2022533": "GG7010",
"as2022356": "HH1476",
"as2022165": "HG3016",
"as2022225": "JG0470",
"as2022218": "BG9014",
"as2022028": "BB6016",
"as2022050": "LA2043",
"as2022472": "KX2789",
"as2022083": "XD3377",
"as2022179": "JS7134",
"as2022045": "FG4512",
"as2022243": "HD3673",
"as2022166": "VC9911",
"as2022588": "QZ6449",
"as2022079": "QM6025",
"as2022089": "ZF1346",
"as2022219": "HK4523",
"as2022055": "HA8119",
"as2022195": "CD1346",
"as2022001": "VB2657",
"as2022491": "QT3025"
    };
    
    var inputName = document.getElementById("name").value.toLowerCase();
    var CODEDiv = document.getElementById("CODE");
    var messageDiv = document.getElementById("access-message");

    if (allowedNames[inputName]) {
        messageDiv.innerHTML = " <span class='green-text'>Congratulations!</span><br>You successfully entered into the world's biggest gaming competition.<br>This is your invitation code.<br>Send this to the GAMBLER.<br> Don't share this with anyone else.";
        CODEDiv.textContent = "CODE: " + allowedNames[inputName];
    } else {
        messageDiv.innerHTML = " <span class='red-text'>Access denied !</span><br> You're not using the correct invitation link. Please find your correct link and try again. <br>Cheating is not allowed.";
        CODEDiv.textContent = "";
    }
    return false;
}