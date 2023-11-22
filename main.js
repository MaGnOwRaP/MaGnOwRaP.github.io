document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('access-form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        checkAccess();
    });
});

function checkAccess() {
    var allowedNames = {
        "as2022200": "SD5265",
"as2020015": "HG5741",
"as2022389": "KL7412",
"as2022076": "YT3698",
"as2022598": "RE3694",
"as2022078": "PL5943",
"as2022113": "QA7325",
"as2022585": "CX3165",
"as2022582": "GV4327",
"as2022008": "AM4175",
"as2022176": "PC3010",
"as2022470": "LG4598",
"as2022160": "CS3149",
"as2022231": "IG0135",
"as2022106": "PL3131",
"as2022408": "BG7412",
"as2022112": "XR5115",
"as2022018": "MT6159",
"as2022353": "MV5138",
"as2022056": "WQ0540",
"as2022172": "VT9090",
"as2022048": "XP9912"
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