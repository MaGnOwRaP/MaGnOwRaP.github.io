document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('access-form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        checkAccess();
    });
});

function checkAccess() {
    var allowedNames = {
        "as2022014": "GT5566",
"as2022480": "VH9462",
"as2022024": "ML1537",
"as2022393": "QC7539",
"as2022092": "FT1562",
"as2022175": "OS2078",
"as2022103": "LS8020",
"as2022456": "QC4521",
"as2022004": "CE8020",
"as2022013": "MG6075",
"as2022041": "DP1280",
"as2022102": "KK9944",
"as2022504": "PO5246",
"as2022390": "KI9050",
"as2022249": "WS7543",
"as2022130": "DS5983",
"as2022104": "BB7156",
"as2022131": "DD6291",
"as2022376": "SX8090",
"as2022413": "LV8153"
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