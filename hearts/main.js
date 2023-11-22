document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('access-form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        checkAccess();
    });
});

function checkAccess() {
    var allowedNames = {
        "as2022022": "PP2046",
"as2022025": "AD2046",
"as2022023": "PC5001",
"as2022208": "BV4009",
"as2022064": "PN4788",
"as2022212": "GG5510",
"as2022205": "UT3089",
"as2022154": "DH9090",
"as2022174": "AV7913",
"as2022153": "GL5678",
"as2022155": "XA8423",
"as2022226": "QX3075",
"as2022258": "PB9173",
"as2022020": "MW7193",
"as2022198": "ME4268",
"as2022122": "TY3518",
"as2022385": "HK5843",
"as2022141": "OC1957",
"as2022229": "MS5888",
"as2022157": "WW6622",
"as2022170": "JJ6189",
"as2022271": "XR0356"
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